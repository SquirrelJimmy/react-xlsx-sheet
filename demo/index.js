import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import XLSX from 'xlsx'
import {ExportSheet} from '../es'
import { data, array } from './data.json'

const head = [
  { title: '排序', dataIndex: 'sort' },
  { title: '母商品ID', dataIndex: 'parentItemId' },
  { title: '子商品ID', dataIndex: 'itemId' },
  { title: '商品名称', dataIndex: 'itemName' },
  { title: '市场售价', dataIndex: 'originPrice' },
  { title: '可售库存', dataIndex: 'stock' },
  { title: '当前售价', dataIndex: 'skuPrice' },
  { title: '商品状态', dataIndex: 'itemStatus' },
  { title: '活动状态', dataIndex: 'itemTopicStatus' },
]
const App = (props) => (
  <button
    onClick={props.exportsheet}
  >React Component</button>
)

class ExportDemo extends PureComponent {
  render() {
    return (
      <div>
        <h3>非React组件</h3>
        <ExportSheet
          header={head}
          fileName={`分类商品`}
          dataSource={data}
          xlsx={XLSX}
        >
          <button>对象数组</button>
        </ExportSheet>
        <pre style={{width: 400, whiteSpace: 'pre-wrap'}}>
          {JSON.stringify(data)}
        </pre>

        <ExportSheet
          dataType="Array-of-Arrays"
          fileName={`分类商品`}
          dataSource={array}
          xlsx={XLSX}
        >
          <button>嵌套数组</button>
        </ExportSheet>

        <pre style={{width: 400, whiteSpace: 'pre-wrap'}}>
          {JSON.stringify(array)}
        </pre>
        <h3>React组件</h3>
        <ExportSheet
          dataType="Array-of-Arrays"
          fileName={`分类商品`}
          dataSource={array}
          isDOMElement={false}
          xlsx={XLSX}
        >
          <App />
        </ExportSheet>
      </div>
    )
  }
}


ReactDOM.render(<ExportDemo/>, document.getElementById('root'))
