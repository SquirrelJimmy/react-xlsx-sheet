# react-xlsx-sheet

## react component for work sheet

基于 xlsx 封装, 文档参考 <a href="https://github.com/SheetJS/js-xlsx/">XLSX</a>

```bash
yarn demo #查看demo
yarn test #执行测试用例
```

## 查看 demo

<a href="https://sex-squirrel.github.io/react-xlsx-sheet/demo/dist/">demo 传送</a>

## 基本用法

> ExportSheet

#### DOM element

```js
import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import XLSX from 'xlsx'
import { ExportSheet } from 'react-xlsx-sheet'

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
const data = [{
    "activitySales": null,
    "categoryId": null,
    "id": "30",
    "itemId": "228377",
    "itemImgUrl": "http://image.seecsee.com/python/ec_crawler/1688/c93345294ffea88c27cb9e2add3c26d9.jpeg",
    "itemName": "曲奇佰味葫芦蔓越莓曲奇200g巧克力零食抹茶手工烘焙饼干微商代发",
    "itemStatus": 1,
    "itemTopicStatus": 1,
    "originPrice": 40000,
    "parentItemId": "228209",
    "skuPrice": "3039",
    "sort": 111,
    "stock": 40717,
    "topicId": null,
    "__typename": "CategoryCommodity"
}]

<ExportSheet
  header={head}
  fileName={`分类商品`}
  dataSource={data}
  xlsx={XLSX}
>
  <button>对象数组</button>
</ExportSheet>

```

#### React Component

> 当 children 为 react 组件时希望得到一个 props: `isDOMElement={false}` 来区别原生 dom 元素和 react 组件

```js
import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import XLSX from 'xlsx'
import { ExportSheet } from 'react-xlsx-sheet'

const array = [
    ["排序", "母商品ID", "子商品ID", "商品名称", "市场售价"],
    [30, 228209, 228377, "曲奇佰味葫芦蔓越莓曲奇200g巧克力零食抹茶手工烘焙饼干微商代发", 40000],
    [29, 228209, 228369, "超管 斜挎包 售价为 0.01哦快快快快快有三个物流路线", 40000],
    [30, 228209, 228377, "外仓库囤货 手拿包 170608", 40000]
]

const App = (props) => (
  <button
    onClick={props.exportsheet}
  >React Component</button>
)

<ExportSheet
  dataType="Array-of-Arrays"
  fileName={`分类商品`}
  dataSource={array}
  isDOMElement={false}
  xlsx={XLSX}
>
  <App />
</ExportSheet>

```

#### 数据源是一个 table 元素

```tsx
const Table = () => (
  <table id="sheetjs">
    <tbody>
      <tr>
        <td>S</td>
        <td>h</td>
        <td>e</td>
        <td>e</td>
        <td>t</td>
        <td>J</td>
        <td>S</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
      <tr>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
);
class WithTable extends React.Component {
  state = {
    table: null,
  };
  componentDidMount() {
    this.setState({
      table: document.querySelector('#sheetjs'),
    });
  }
  render() {
    return (
      <>
        <Table />
        <ExportSheet
          dataType="Table-Node-Element"
          fileName={`table`}
          tableElement={this.state.table}
          xlsx={XLSX}
        >
          <button>Table Input</button>
        </ExportSheet>
      </>
    );
  }
}
```

> API

| 参数               |                 默认值                 |                                                  类型 |                                                                                         描述 |
| ------------------ | :------------------------------------: | ----------------------------------------------------: | -------------------------------------------------------------------------------------------: |
| dataType           |            Array-of-Object             |                                                string |                               `['Array-of-Arrays', 'Array-of-Object', 'Table-Node-Element']` |
| header             |                   []                   | 参考上面代码, 当 dataType="Array-of-Arrays"时可以不传 |                                                                                            - |
| headerOption       | `{skipHeader: false,dateNF: 'FMT 14'}` |                                                object | `xlsx, xlsm, txt, html, ods`更多请参考<a href="https://github.com/SheetJS/js-xlsx/">XLSX</a> |
| dataSource         |                   []                   |                                                 array |                                                                     具体值根据 dataType 描述 |
| extName            |                  xlsx                  |                                                string |                                                                        其他扩展名请参考 xlsx |
| isRequiredNameDate |                  true                  |                                               boolean |                                                                       文件名是否带有当前日期 |
| fileName           |                   -                    |                                                string |                                                                                       文件名 |
| isDOMElement       |                  true                  |                                               boolean |                                     children 是否是基本 dom 元素(react component 为 `false`) |
| fileDate           |                当前日期                |                                                string |                                               为文件名指定一个日期(也可以是其他值), 建议默认 |
| tableElement       |         输入数据的 table 元素          |                                      HTMLTableElement |                                    `dataType="Table-Node-Element"` 时必须提供一个 table 元素 |

### ps:其他功能组件还在开发中
