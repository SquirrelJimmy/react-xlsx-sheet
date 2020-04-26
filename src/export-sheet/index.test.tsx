import * as React from 'react';
import XLSX from 'xlsx';
import ExportSheet from './index';
import { render } from 'react-testing-library';
import { create, act, ReactTestRenderer } from 'react-test-renderer';

const head: Array<any> = [
  { title: '排序', dataIndex: 'sort' },
  { title: '母商品ID', dataIndex: 'parentItemId' },
  { title: '子商品ID', dataIndex: 'itemId' },
  { title: '商品名称', dataIndex: 'itemName' },
  { title: '市场售价', dataIndex: 'originPrice' },
  { title: '可售库存', dataIndex: 'stock' },
  { title: '当前售价', dataIndex: 'skuPrice' },
];
const data: Array<object> = [
  {
    sort: 1,
    parentItemId: 3242353456,
    itemId: 76856,
    itemName: 'test name',
    originPrice: 1000,
    stock: 1000,
    skuPrice: 500,
  },
];

const arrayData = [
  ['排序', '母商品ID', '子商品ID', '商品名称', '市场售价'],
  [
    30,
    228209,
    228377,
    '曲奇佰味葫芦蔓越莓曲奇200g巧克力零食抹茶手工烘焙饼干微商代发',
    40000,
  ],
  [
    29,
    228209,
    228369,
    '超管 斜挎包 售价为 0.01哦快快快快快有三个物流路线',
    40000,
  ],
  [30, 228209, 228377, '外仓库囤货 手拿包 170608', 40000],
];

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
          isDOMElement={false}
        >
          <App />
        </ExportSheet>
      </>
    );
  }
}

const App = (props: any) => (
  <button data-testid="sheet" onClick={props.exportsheet}>
    123
  </button>
);

const baseRender = render(
  <ExportSheet
    header={head}
    fileName={`分类商品`}
    dataSource={data}
    xlsx={XLSX}
  >
    <button data-testid="sheet">对象数组</button>
  </ExportSheet>,
);

const componentRender = render(
  <ExportSheet
    header={head}
    dataType="Array-of-Arrays"
    fileName={`分类商品`}
    dataSource={arrayData}
    xlsx={XLSX}
    isDOMElement={false}
  >
    <App />
  </ExportSheet>,
);

const tableSource = render(<WithTable />);

let componentBase: ReactTestRenderer;
act(() => {
  componentBase = create(
    <ExportSheet
      header={head}
      fileName={`分类商品`}
      dataSource={data}
      xlsx={XLSX}
    >
      <button data-testid="sheet">对象数组</button>
    </ExportSheet>,
  );
});

let componentReact: ReactTestRenderer;
act(() => {
  componentReact = create(
    <ExportSheet
      dataType="Array-of-Arrays"
      fileName={`分类商品`}
      dataSource={arrayData}
      xlsx={XLSX}
      isDOMElement={false}
    >
      <App />
    </ExportSheet>,
  );
});

let withTable: ReactTestRenderer;

act(() => {
  withTable = create(<WithTable />);
});

describe('mounted and unmount', () => {
  test('baseElement', () => {
    const { container, unmount } = baseRender;
    expect(container.innerHTML).toBe(
      '<button data-testid="sheet">对象数组</button>',
    );
    unmount();
    expect(container.innerHTML).toBe('');
  });
  test('React Element', () => {
    const { container, unmount } = componentRender;
    expect(container.innerHTML).toBe(
      '<button data-testid="sheet">123</button>',
    );
    unmount();
    expect(container.innerHTML).toBe('');
  });
});

describe('click event', () => {
  test('baseElement must be have a click event', () => {
    const component = componentBase;
    const tree = component.toJSON();
    const click = jest.fn(tree?.props.onClick);
    const callFn = (onclick: () => any) => {
      onclick();
    };
    callFn(click);
    expect(click).toHaveBeenCalled();
  });
  test('React Element must be have a props function as exportsheet, it can be implemented', () => {
    const component = componentReact;
    const tree = component.toJSON();
    const click = jest.fn(tree?.props.onClick);
    const callFn = (onclick: () => any) => {
      onclick();
    };
    callFn(click);
    expect(click).toHaveBeenCalled();
  });

  test('with table to xlsx', () => {
    const component = withTable;
    const tree: any = component.toJSON();
    const click = jest.fn(tree[1].props.onClick);
    const callFn = (onclick: () => any) => {
      onclick();
    };
    callFn(click);
    expect(click).toHaveBeenCalled();
  });
});
