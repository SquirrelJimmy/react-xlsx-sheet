import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import XLSX from 'xlsx';
import { ExportSheet } from '../es';
import { data, array } from './data.json';

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
];
const App = (props) => (
  <button onClick={props.exportsheet}>React Component</button>
);

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

class ExportDemo extends PureComponent {
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
        <pre style={{ width: 400, whiteSpace: 'pre-wrap' }}>
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

        <pre style={{ width: 400, whiteSpace: 'pre-wrap' }}>
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
        <h3>输入一个table元素</h3>
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
      </div>
    );
  }
}

ReactDOM.render(<ExportDemo />, document.getElementById('root'));
