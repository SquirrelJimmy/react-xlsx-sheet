function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
var supportExt = ['xlsx', 'xlsm', 'xlsb', 'xls', 'ods', 'fods', 'csv', 'txt', 'sylk', 'html', 'dif', 'dbf', 'rtf', 'prn', 'eth'];

class ExportSheet extends PureComponent {
  // 存储新的dataSource
  static getDerivedStateFromProps(props, state) {
    if (props.dataSource !== state.dataSource) {
      return {
        dataSource: props.dataSource
      };
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.XLSX = this.props.xlsx;

    this.toSheet = () => {
      var _this$props;

      var {
        utilsName,
        dataSource
      } = this.state;

      switch (utilsName) {
        case 'table_to_sheet':
          var tableEle = (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.tableElement;
          if (tableEle && tableEle instanceof HTMLTableElement) return this.XLSX.utils[utilsName](tableEle);
          throw 'props.tableElement must be instance of HTMLTableElement';

        case 'aoa_to_sheet':
        case 'json_to_sheet':
          if (!dataSource.length) return;
          var value = this.toRightDate();
          return this.XLSX.utils[utilsName](...value);

        default:
          break;
      }
    };

    this.exportFile = () => {
      var ws = this.toSheet();
      var {
        extName,
        fileName,
        isRequiredNameDate,
        fileDate
      } = this.props;
      var name = isRequiredNameDate ? fileName + "__" + fileDate : fileName;
      var formatName = name.replace(/\\|\/|\?|\*|\[|\]|\s|\{|\}/g, '_');
      var wb = this.XLSX.utils.book_new();
      this.XLSX.utils.book_append_sheet(wb, ws, formatName);
      this.XLSX.writeFile(wb, formatName + "." + extName);
    };

    if (!supportExt.includes(props.extName)) throw new Error('extName not suport');
    this.importType = {
      'Array-of-Arrays': 'aoa_to_sheet',
      'Array-of-Object': 'json_to_sheet',
      'Table-Node-Element': 'table_to_sheet'
    };
    if (!this.importType[props.dataType]) throw new Error('dataType must be oneOf [ ' + 'Array-of-Arrays,' + 'Array-of-Object,' + 'Table-Node-Element' + ']');
    this.state = {
      utilsName: this.importType[props.dataType],
      dataSource: props.dataSource
    };
  }

  toRightDate() {
    var {
      header,
      headerOption
    } = this.props;
    var {
      dataSource
    } = this.state;
    var {
      dataType
    } = this.props;
    var resultValues = [];
    var resultHeaders = []; // !Array.isArray(props.dataSource[0]))

    if (dataType === 'Array-of-Object') {
      dataSource.map(value => {
        if (isEmpty(value)) throw new Error('dataSource must be like Array-of-Object type, the Object not be empty');
        var dealedObj = {};
        header.map(key => {
          dealedObj[key.title] = value[key.dataIndex];
          if (resultValues.includes(dealedObj)) return true;
          resultValues.push(dealedObj);
          if (resultHeaders.includes(key.title)) return true;
          resultHeaders.push(key.title);
          return true;
        });
        return true;
      });
      return [resultValues, _extends({
        header: resultHeaders
      }, headerOption)];
    }

    if (dataType === 'Array-of-Arrays') {
      dataSource.map(item => {
        if (!Array.isArray(item)) throw new Error('dataSource must be like Array-of-Arrays type');
        return null;
      });
      return [dataSource, _extends({}, headerOption)];
    }

    return [];
  }

  render() {
    var {
      children,
      isDOMElement
    } = this.props;
    var ResultElement;

    if (React.isValidElement(children)) {
      var originHandler = children.props.onClick;

      if (isDOMElement) {
        var exportHandler = event => {
          this.exportFile();

          if (isFunction(originHandler)) {
            originHandler(event);
          }
        };

        ResultElement = React.cloneElement(React.Children.only(children), {
          onClick: exportHandler
        });
      } else {
        ResultElement = React.cloneElement(React.Children.only(children), {
          exportsheet: this.exportFile
        });
      }
    } else {
      throw new Error('The Children must be a valid React Element !');
    }

    return ResultElement;
  }

}

ExportSheet.propTypes = {
  dataType: PropTypes.oneOf(['Array-of-Arrays', 'Array-of-Object', 'Table-Node-Element']),
  header: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    dataIndex: PropTypes.string
  })),
  headerOption: PropTypes.shape({
    dateNF: PropTypes.string,
    // 在字符串输出中使用指定的日期格式
    skipHeader: PropTypes.bool
  }),
  dataSource: PropTypes.array,
  fileName: PropTypes.string,
  fileDate: PropTypes.string,
  extName: PropTypes.oneOf(supportExt),
  isRequiredNameDate: PropTypes.bool,
  isDOMElement: PropTypes.bool.isRequired,
  xlsx: PropTypes.object.isRequired,
  tableElement: PropTypes.object
};
ExportSheet.defaultProps = {
  dataType: 'Array-of-Object',
  header: [],
  headerOption: {
    skipHeader: false,
    dateNF: 'FMT 14'
  },
  dataSource: [],
  extName: 'xlsx',
  isRequiredNameDate: true,
  fileName: '',
  isDOMElement: true,
  fileDate: new Date().toLocaleDateString()
};
export default ExportSheet;