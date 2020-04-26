import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';

type map = {
  [propName: string]: any;
};

const supportExt: Array<string> = [
  'xlsx',
  'xlsm',
  'xlsb',
  'xls',
  'ods',
  'fods',
  'csv',
  'txt',
  'sylk',
  'html',
  'dif',
  'dbf',
  'rtf',
  'prn',
  'eth',
];

interface HeaderItem {
  title: string;
  dataIndex: string;
}
interface HeaderOption {
  dateNF: string;
  skipHeader: boolean;
}
interface Props {
  dataType: string;
  header: Array<HeaderItem>;
  headerOption: HeaderOption;
  dataSource: Array<object>;
  fileName: string;
  fileDate: string;
  extName: string;
  isDOMElement: boolean;
  isRequiredNameDate: boolean;
  xlsx: any;
  tableElement?: HTMLTableElement | null;
}

interface State {
  utilsName: string;
  dataSource: Array<object>;
}

class ExportSheet extends PureComponent<Props, State> {
  static propTypes = {
    dataType: PropTypes.oneOf([
      'Array-of-Arrays',
      'Array-of-Object',
      'Table-Node-Element',
    ]),
    header: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        dataIndex: PropTypes.string,
      }),
    ),
    headerOption: PropTypes.shape({
      dateNF: PropTypes.string, // 在字符串输出中使用指定的日期格式
      skipHeader: PropTypes.bool,
    }),
    dataSource: PropTypes.array,
    fileName: PropTypes.string,
    fileDate: PropTypes.string,
    extName: PropTypes.oneOf(supportExt),
    isRequiredNameDate: PropTypes.bool,
    isDOMElement: PropTypes.bool.isRequired,
    xlsx: PropTypes.object.isRequired,
    tableElement: PropTypes.object,
  };
  static defaultProps = {
    dataType: 'Array-of-Object',
    header: [],
    headerOption: {
      skipHeader: false,
      dateNF: 'FMT 14',
    },
    dataSource: [],
    extName: 'xlsx',
    isRequiredNameDate: true,
    fileName: '',
    isDOMElement: true,
    fileDate: new Date().toLocaleDateString(),
  };
  // 存储新的dataSource
  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.dataSource !== state.dataSource) {
      return {
        dataSource: props.dataSource,
      };
    }
    return null;
  }
  importType: map;
  XLSX: any = this.props.xlsx;
  constructor(props: Props) {
    super(props);
    if (!supportExt.includes(props.extName))
      throw new Error('extName not suport');
    this.importType = {
      'Array-of-Arrays': 'aoa_to_sheet',
      'Array-of-Object': 'json_to_sheet',
      'Table-Node-Element': 'table_to_sheet',
    };
    if (!this.importType[props.dataType])
      throw new Error(
        'dataType must be oneOf [ ' +
          'Array-of-Arrays,' +
          'Array-of-Object,' +
          'Table-Node-Element' +
          ']',
      );
    this.state = {
      utilsName: this.importType[props.dataType],
      dataSource: props.dataSource,
    };
  }
  toRightDate() {
    const { header, headerOption } = this.props;
    const { dataSource } = this.state;
    const { dataType } = this.props;
    const resultValues: Array<object> = [];
    const resultHeaders: Array<string> = [];
    // !Array.isArray(props.dataSource[0]))
    if (dataType === 'Array-of-Object') {
      dataSource.map((value: map) => {
        if (isEmpty(value))
          throw new Error(
            'dataSource must be like Array-of-Object type, the Object not be empty',
          );
        const dealedObj: map = {};
        header.map((key) => {
          dealedObj[key.title] = value[key.dataIndex];
          if (resultValues.includes(dealedObj)) return true;
          resultValues.push(dealedObj);
          if (resultHeaders.includes(key.title)) return true;
          resultHeaders.push(key.title);
          return true;
        });
        return true;
      });
      return [
        resultValues,
        {
          header: resultHeaders,
          ...headerOption,
        },
      ];
    }
    if (dataType === 'Array-of-Arrays') {
      dataSource.map((item) => {
        if (!Array.isArray(item))
          throw new Error('dataSource must be like Array-of-Arrays type');
        return null;
      });
      return [dataSource, { ...headerOption }];
    }
    return [];
  }

  toSheet = () => {
    const { utilsName, dataSource } = this.state;
    switch (utilsName) {
      case 'table_to_sheet':
        const tableEle = this.props?.tableElement;
        if (tableEle && tableEle instanceof HTMLTableElement)
          return this.XLSX.utils[utilsName](tableEle);
        throw 'props.tableElement must be instance of HTMLTableElement';
      case 'aoa_to_sheet':
      case 'json_to_sheet':
        if (!dataSource.length) return;
        const value = this.toRightDate();
        return this.XLSX.utils[utilsName](...value);
      default:
        break;
    }
  };

  exportFile = (): any => {
    const ws = this.toSheet();
    const { extName, fileName, isRequiredNameDate, fileDate } = this.props;
    const name = isRequiredNameDate ? `${fileName}__${fileDate}` : fileName;
    const formatName = name.replace(/\\|\/|\?|\*|\[|\]|\s|\{|\}/g, '_');
    const wb = this.XLSX.utils.book_new();
    this.XLSX.utils.book_append_sheet(wb, ws, formatName);
    this.XLSX.writeFile(wb, `${formatName}.${extName}`);
  };
  render() {
    const { children, isDOMElement } = this.props;
    let ResultElement: React.ReactNode;
    if (React.isValidElement(children)) {
      const originHandler = (children.props as any).onClick;
      if (isDOMElement) {
        const exportHandler = (event: React.SyntheticEvent): any => {
          this.exportFile();
          if (isFunction(originHandler)) {
            originHandler(event);
          }
        };
        ResultElement = React.cloneElement(React.Children.only(children), {
          onClick: exportHandler,
        } as any);
      } else {
        ResultElement = React.cloneElement(React.Children.only(children), {
          exportsheet: this.exportFile,
        } as any);
      }
    } else {
      throw new Error('The Children must be a valid React Element !');
    }
    return ResultElement;
  }
}

export default ExportSheet;
