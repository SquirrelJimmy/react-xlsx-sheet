interface HeaderItem {
  title: string
  dataIndex: string
}
interface HeaderOption {
  dateNF: string
  skipHeader: boolean
}
export interface Props {
  dataType: string
  header: Array<HeaderItem>
  headerOption: HeaderOption
  dataSource: Array<object>
  fileName: string
  fileDate: string
  extName: string
  isRequiredNameDate: boolean
  tableElement?: HTMLTableElement
}
