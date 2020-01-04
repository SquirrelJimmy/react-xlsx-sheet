import * as React from 'react'
import XLSX from 'xlsx'
import ExportSheet from './index'
import { render } from 'react-testing-library'
import renderer from 'react-test-renderer'

const head: Array<any> = [
  { title: '排序', dataIndex: 'sort' },
  { title: '母商品ID', dataIndex: 'parentItemId' },
  { title: '子商品ID', dataIndex: 'itemId' },
  { title: '商品名称', dataIndex: 'itemName' },
  { title: '市场售价', dataIndex: 'originPrice' },
  { title: '可售库存', dataIndex: 'stock' },
  { title: '当前售价', dataIndex: 'skuPrice' },
]
const data: Array<object> = [{
  sort: 1,
  parentItemId: 3242353456,
  itemId: 76856,
  itemName: 'test name',
  originPrice: 1000,
  stock: 1000,
  skuPrice: 500,
}]

const Table = () => {


}

const App = (props: any) => <button data-testid="sheet" onClick={props.exportsheet}>123</button>

const baseRender = render(
  <ExportSheet
    header={head}
    fileName={`分类商品`}
    dataSource={data}
    xlsx={XLSX}
  >
    <button data-testid="sheet">对象数组</button>
  </ExportSheet>,
)

const componentRender = render(
  <ExportSheet
    header={head}
    fileName={`分类商品`}
    dataSource={data}
    xlsx={XLSX}
    isDOMElement={false}
  >
    <App />
  </ExportSheet>,
)

const componentBase = renderer.create(
  <ExportSheet
    header={head}
    fileName={`分类商品`}
    dataSource={data}
    xlsx={XLSX}
  >
    <button data-testid="sheet">对象数组</button>
  </ExportSheet>,
)

const componentReact = renderer.create(
  <ExportSheet
    header={head}
    fileName={`分类商品`}
    dataSource={data}
    xlsx={XLSX}
    isDOMElement={false}
  >
    <App />
  </ExportSheet>,
)

describe('mounted and unmount', () => {
  test('baseElement', () => {
    const { container, unmount } = baseRender
    expect(container.innerHTML).toBe('<button data-testid="sheet">对象数组</button>')
    unmount()
    expect(container.innerHTML).toBe('')
  })
  test('React Element', () => {
    const { container, unmount } = componentRender
    expect(container.innerHTML).toBe('<button data-testid="sheet">123</button>')
    unmount()
    expect(container.innerHTML).toBe('')
  })
})

describe('click event', () => {
  test('baseElement must be have a click event', () => {
    const component = componentBase
    const tree = component.toJSON()
    const click = jest.fn(tree.props.onClick)
    const callFn = (onclick: () => any) => {
      onclick()
    }
    callFn(click)
    expect(click).toHaveBeenCalled()
  })
  test('React Element must be have a props function as exportsheet, it can be implemented', () => {
    const component = componentReact
    const tree = component.toJSON()
    const click = jest.fn(tree.props.onClick)
    const callFn = (onclick: () => any) => {
      onclick()
    }
    callFn(click)
    expect(click).toHaveBeenCalled()
  })
})
