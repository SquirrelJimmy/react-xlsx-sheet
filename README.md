# react-xlsx-sheet
## react component for work sheet
基于xlsx封装, 文档参考 <a href="https://github.com/SheetJS/js-xlsx/">XLSX</a>

```bash
yarn demo #查看demo
yarn test #执行测试用例
```

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
> 当children为react组件时希望得到一个props: ```isDOMElement={false}``` 来区别原生dom元素和react组件
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
> API

| 参数   |      默认值      |  类型 | 描述 |
|----------|:-------------:|------:|------:|
| dataType |  Array-of-Object | string |``['Array-of-Arrays', 'Array-of-Object']``|
| header |    []   |  参考上面代码, 当dataType="Array-of-Arrays"时可以不传 |-|
| headerOption | ``{skipHeader: false,dateNF: 'FMT 14'}`` |    object |``xlsx, xlsm, txt, html, ods``更多请参考<a href="https://github.com/SheetJS/js-xlsx/">XLSX</a>|
| dataSource | [] |    array | 具体值根据dataType描述 |
| extName | xlsx |    string |其他扩展名请参考xlsx|
| isRequiredNameDate | true |  boolean | 文件名是否带有当前日期 |
| fileName | - |  string | 文件名 |
| isDOMElement | true |  boolean | children是否是基本dom元素(react component 为 ``false``) |
| fileDate | 当前日期 |  string | 为文件名指定一个日期(也可以是其他值), 建议默认 |




### ps:其他功能组件还在开发中
