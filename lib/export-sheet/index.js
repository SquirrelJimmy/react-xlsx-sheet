"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var supportExt = ['xlsx', 'xlsm', 'xlsb', 'xls', 'ods', 'fods', 'csv', 'txt', 'sylk', 'html', 'dif', 'dbf', 'rtf', 'prn', 'eth'];

var ExportSheet = /*#__PURE__*/function (_PureComponent) {
  _inherits(ExportSheet, _PureComponent);

  var _super = _createSuper(ExportSheet);

  _createClass(ExportSheet, null, [{
    key: "getDerivedStateFromProps",
    // 存储新的dataSource
    value: function getDerivedStateFromProps(props, state) {
      if (props.dataSource !== state.dataSource) {
        return {
          dataSource: props.dataSource
        };
      }

      return null;
    }
  }]);

  function ExportSheet(props) {
    var _this;

    _classCallCheck(this, ExportSheet);

    _this = _super.call(this, props);
    _this.XLSX = _this.props.xlsx;

    _this.toSheet = function () {
      var _this$props, _this$XLSX$utils;

      var _this$state = _this.state,
          utilsName = _this$state.utilsName,
          dataSource = _this$state.dataSource;

      switch (utilsName) {
        case 'table_to_sheet':
          var tableEle = (_this$props = _this.props) === null || _this$props === void 0 ? void 0 : _this$props.tableElement;
          if (tableEle && tableEle instanceof HTMLTableElement) return _this.XLSX.utils[utilsName](tableEle);
          throw 'props.tableElement must be instance of HTMLTableElement';

        case 'aoa_to_sheet':
        case 'json_to_sheet':
          if (!dataSource.length) return;

          var value = _this.toRightDate();

          return (_this$XLSX$utils = _this.XLSX.utils)[utilsName].apply(_this$XLSX$utils, _toConsumableArray(value));

        default:
          break;
      }
    };

    _this.exportFile = function () {
      var ws = _this.toSheet();

      var _this$props2 = _this.props,
          extName = _this$props2.extName,
          fileName = _this$props2.fileName,
          isRequiredNameDate = _this$props2.isRequiredNameDate,
          fileDate = _this$props2.fileDate;
      var name = isRequiredNameDate ? "".concat(fileName, "__").concat(fileDate) : fileName;
      var formatName = name.replace(/\\|\/|\?|\*|\[|\]|\s|\{|\}/g, '_');

      var wb = _this.XLSX.utils.book_new();

      _this.XLSX.utils.book_append_sheet(wb, ws, formatName);

      _this.XLSX.writeFile(wb, "".concat(formatName, ".").concat(extName));
    };

    if (!supportExt.includes(props.extName)) throw new Error('extName not suport');
    _this.importType = {
      'Array-of-Arrays': 'aoa_to_sheet',
      'Array-of-Object': 'json_to_sheet',
      'Table-Node-Element': 'table_to_sheet'
    };
    if (!_this.importType[props.dataType]) throw new Error('dataType must be oneOf [ ' + 'Array-of-Arrays,' + 'Array-of-Object,' + 'Table-Node-Element' + ']');
    _this.state = {
      utilsName: _this.importType[props.dataType],
      dataSource: props.dataSource
    };
    return _this;
  }

  _createClass(ExportSheet, [{
    key: "toRightDate",
    value: function toRightDate() {
      var _this$props3 = this.props,
          header = _this$props3.header,
          headerOption = _this$props3.headerOption;
      var dataSource = this.state.dataSource;
      var dataType = this.props.dataType;
      var resultValues = [];
      var resultHeaders = []; // !Array.isArray(props.dataSource[0]))

      if (dataType === 'Array-of-Object') {
        dataSource.map(function (value) {
          if ((0, _isEmpty.default)(value)) throw new Error('dataSource must be like Array-of-Object type, the Object not be empty');
          var dealedObj = {};
          header.map(function (key) {
            dealedObj[key.title] = value[key.dataIndex];
            if (resultValues.includes(dealedObj)) return true;
            resultValues.push(dealedObj);
            if (resultHeaders.includes(key.title)) return true;
            resultHeaders.push(key.title);
            return true;
          });
          return true;
        });
        return [resultValues, _objectSpread({
          header: resultHeaders
        }, headerOption)];
      }

      if (dataType === 'Array-of-Arrays') {
        dataSource.map(function (item) {
          if (!Array.isArray(item)) throw new Error('dataSource must be like Array-of-Arrays type');
          return null;
        });
        return [dataSource, _objectSpread({}, headerOption)];
      }

      return [];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          children = _this$props4.children,
          isDOMElement = _this$props4.isDOMElement;
      var ResultElement;

      if (_react.default.isValidElement(children)) {
        var originHandler = children.props.onClick;

        if (isDOMElement) {
          var exportHandler = function exportHandler(event) {
            _this2.exportFile();

            if ((0, _isFunction.default)(originHandler)) {
              originHandler(event);
            }
          };

          ResultElement = _react.default.cloneElement(_react.default.Children.only(children), {
            onClick: exportHandler
          });
        } else {
          ResultElement = _react.default.cloneElement(_react.default.Children.only(children), {
            exportsheet: this.exportFile
          });
        }
      } else {
        throw new Error('The Children must be a valid React Element !');
      }

      return ResultElement;
    }
  }]);

  return ExportSheet;
}(_react.PureComponent);

ExportSheet.propTypes = {
  dataType: _propTypes.default.oneOf(['Array-of-Arrays', 'Array-of-Object', 'Table-Node-Element']),
  header: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string,
    dataIndex: _propTypes.default.string
  })),
  headerOption: _propTypes.default.shape({
    dateNF: _propTypes.default.string,
    // 在字符串输出中使用指定的日期格式
    skipHeader: _propTypes.default.bool
  }),
  dataSource: _propTypes.default.array,
  fileName: _propTypes.default.string,
  fileDate: _propTypes.default.string,
  extName: _propTypes.default.oneOf(supportExt),
  isRequiredNameDate: _propTypes.default.bool,
  isDOMElement: _propTypes.default.bool.isRequired,
  xlsx: _propTypes.default.object.isRequired,
  tableElement: _propTypes.default.object
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
var _default = ExportSheet;
exports.default = _default;