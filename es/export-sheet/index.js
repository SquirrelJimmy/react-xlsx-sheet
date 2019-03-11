function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import * as X from 'xlsx';
const XLSX = X;
const supportExt = ['xlsx', 'xlsm', 'xlsb', 'xls', 'ods', 'fods', 'csv', 'txt', 'sylk', 'html', 'dif', 'dbf', 'rtf', 'prn', 'eth'];

class ExportSheet extends PureComponent {
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

    this.exportFile = () => {
      const _this$state = this.state,
            utilsName = _this$state.utilsName,
            dataSource = _this$state.dataSource;
      if (!dataSource.length) return;
      const value = this.toRightDate();
      const _this$props = this.props,
            extName = _this$props.extName,
            fileName = _this$props.fileName,
            isRequiredNameDate = _this$props.isRequiredNameDate,
            fileDate = _this$props.fileDate;
      const name = isRequiredNameDate ? `${fileName}__${fileDate}` : fileName;
      const formatName = name.replace(/\\|\/|\?|\*|\[|\]|\s|\{|\}/g, '_');
      const ws = XLSX.utils[utilsName](...value);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, formatName);
      XLSX.writeFile(wb, `${formatName}.${extName}`);
    };

    if (!supportExt.includes(props.extName)) throw new Error('extName not suport');
    this.importType = {
      'Array-of-Arrays': 'aoa_to_sheet',
      'Array-of-Object': 'json_to_sheet'
    };
    if (!this.importType[props.dataType]) throw new Error('dataType must be oneOf ["Array-of-Arrays", "Array-of-Object"]');
    this.state = {
      utilsName: this.importType[props.dataType],
      dataSource: props.dataSource
    };
  }

  toRightDate() {
    const _this$props2 = this.props,
          header = _this$props2.header,
          headerOption = _this$props2.headerOption;
    const dataSource = this.state.dataSource;
    const dataType = this.props.dataType;
    const resultValues = [];
    const resultHeaders = []; // !Array.isArray(props.dataSource[0]))

    if (dataType === 'Array-of-Object') {
      dataSource.map(value => {
        if (isEmpty(value)) throw new Error('dataSource must be like Array-of-Object type, the Object not be empty');
        const dealedObj = {};
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
      return [header, _extends({}, headerOption)];
    }

    return [];
  }

  render() {
    const _this$props3 = this.props,
          children = _this$props3.children,
          className = _this$props3.className;
    let ResultElement = null;

    if (React.isValidElement(children)) {
      ResultElement = React.cloneElement(React.Children.only(children), {
        exportSheet: this.exportFile
      });
    } else {
      throw new Error('The Children must be a React Element !');
    }

    return React.createElement("div", _extends({}, className ? {
      className
    } : {}, {
      onClick: this.exportFile
    }), ResultElement);
  }

}

ExportSheet.propTypes = {
  dataType: PropTypes.oneOf(['Array-of-Arrays', 'Array-of-Object']),
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
  className: PropTypes.string
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
  fileDate: new Date().toLocaleDateString() // 存储新的dataSource

};
export default ExportSheet;