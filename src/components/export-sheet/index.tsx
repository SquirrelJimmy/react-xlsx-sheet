import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { isEmpty, isFunction } from 'lodash'
import XLSX from 'xlsx'

const supportExt = [
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
]

class ExportSheet extends PureComponent {
  constructor(props) {
    super(props)
    if (!supportExt.includes(props.extName)) throw new Error('extName not suport')
    this.importType = {
      'Array-of-Arrays': 'aoa_to_sheet',
      'Array-of-Object': 'json_to_sheet',
    }
    if (!this.importType[props.dataType]) throw new Error('dataType must be oneOf ["Array-of-Arrays", "Array-of-Object"]')
    this.state = {
      utilsName: this.importType[props.dataType],
      dataSource: props.dataSource,
    }
  }
  // 存储新的dataSource
  static getDerivedStateFromProps(props, state) {
    if (props.dataSource !== state.dataSource) {
      return {
        dataSource: props.dataSource,
      }
    }
    return null
  }
  toRightDate() {
    const { header, headerOption } = this.props
    const { dataSource } = this.state
    const { dataType } = this.props
    const resultValues = []
    const resultHeaders = []
    // !Array.isArray(props.dataSource[0]))
    if (dataType === 'Array-of-Object') {
      dataSource.map(value => {
        if (isEmpty(value)) throw new Error('dataSource must be like Array-of-Object type, the Object not be empty')
        const dealedObj = {}
        header.map(key => {
          dealedObj[key.title] = value[key.dataIndex]
          if (resultValues.includes(dealedObj)) return true
          resultValues.push(dealedObj)
          if (resultHeaders.includes(key.title)) return true
          resultHeaders.push(key.title)
          return true
        })
        return true
      })
      return [resultValues, {
        header: resultHeaders,
        ...headerOption,
      }]
    }
    if (dataType === 'Array-of-Arrays') {
      dataSource.map(item => {
        if (!Array.isArray(item)) throw new Error('dataSource must be like Array-of-Arrays type')
        return null
      })
      return [
        header,
        { ...headerOption },
      ]
    }
  }
  exportFile = (e) => {
    if (isFunction(this.getOriginProps.onClick)) {
      this.getOriginProps.onClick(e)
    }
    const { utilsName, dataSource } = this.state
    if (!dataSource.length) return
    const value = this.toRightDate()
    const { extName, fileName, isRequiredNameDate, fileDate } = this.props
    const name = isRequiredNameDate ? `${fileName}__${fileDate}` : fileName
    const formatName = name.replace(/\\|\/|\?|\*|\[|\]|\s|\{|\}/g, '_')
    const ws = XLSX.utils[utilsName](...value)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, formatName)
    XLSX.writeFile(wb, `${formatName}.${extName}`)
  }
  get getOriginProps() {
    const { children } = this.props
    let child = null
    if (Array.isArray(children)) {
      child = children[0]
    } else {
      child = children
    }
    return child.props
  }
  render() {
    const { children } = this.props
    let ResultElement = null
    if (Array.isArray(children)) {
      ResultElement = React.cloneElement(children[0], {
        onClick: this.exportFile,
      })
    } else {
      ResultElement = React.cloneElement(children, {
        onClick: this.exportFile,
      })
    }

    return ResultElement
  }
}

ExportSheet.propTypes = {
  dataType: PropTypes.oneOf(['Array-of-Arrays', 'Array-of-Object']),
  header: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    dataIndex: PropTypes.string,
  })),
  headerOption: PropTypes.shape({
    dateNF: PropTypes.string, // 在字符串输出中使用指定的日期格式
    skipHeader: PropTypes.bool,
  }),
  dataSource: PropTypes.array,
  fileName: PropTypes.string,
  fileDate: PropTypes.string,
  extName: PropTypes.oneOf(supportExt),
  isRequiredNameDate: PropTypes.bool,
}
ExportSheet.defaultProps = {
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
  fileDate: new Date().toLocaleDateString(),
}
export default ExportSheet
