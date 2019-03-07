!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("prop-types"),require("xlsx")):"function"==typeof define&&define.amd?define(["react","prop-types","xlsx"],e):"object"==typeof exports?exports["react-xlsx-sheet"]=e(require("react"),require("prop-types"),require("xlsx")):t["react-xlsx-sheet"]=e(t.React,t.PropTypes,t.XLSX)}(window,function(r,o,n){return function(r){var o={}
function n(t){if(o[t])return o[t].exports
var e=o[t]={i:t,l:!1,exports:{}}
return r[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}return n.m=r,n.c=o,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o))
return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t}
return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,r){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=r(7),u="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,c=n||u||Function("return this")()
t.exports=c},function(t,e,r){var o=r(22),n=r(28)
t.exports=function(t,e){var r=n(t,e)
return o(r)?r:void 0}},function(t,e,r){var o=r(6),n=r(24),u=r(25),c=o?o.toStringTag:void 0
t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?n(t):u(t)}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){return null!=t&&"object"==r(t)}},function(t,e){var r=Object.prototype
t.exports=function(t){var e=t&&t.constructor
return t===("function"==typeof e&&e.prototype||r)}},function(t,e,r){var o=r(2),n=r(8)
t.exports=function(t){if(!n(t))return!1
var e=o(t)
return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,r){var o=r(0).Symbol
t.exports=o},function(o,t,e){(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r="object"==(void 0===t?"undefined":e(t))&&t&&t.Object===Object&&t
o.exports=r}).call(this,e(23))},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){var e=r(t)
return null!=t&&("object"==e||"function"==e)}},function(t,e){var r=Function.prototype.toString
t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=9007199254740991}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ExportSheet",{enumerable:!0,get:function(){return n.default}})
var o,n=(o=r(13))&&o.__esModule?o:{default:o}},function(t,e,r){"use strict"
function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=a(r(14)),n=c(r(15)),i=c(r(16))
function c(t){return t&&t.__esModule?t:{default:t}}function a(t){if(t&&t.__esModule)return t
var e={}
if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{}
o.get||o.set?Object.defineProperty(e,r,o):e[r]=t[r]}return e.default=t,e}function f(t){return(f="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r)
"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),o.forEach(function(t){p(e,t,r[t])})}return e}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e]
return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(t,e){for(var r=0;r<e.length;r++){var o=e[r]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t
throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=a(r(43)),v=["xlsx","xlsm","xlsb","xls","ods","fods","csv","txt","sylk","html","dif","dbf","rtf","prn","eth"],x=function(t){function e(t){var y
if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(y=b(this,d(e).call(this,t))).exportFile=function(){var t,e=y.state,r=e.utilsName
if(e.dataSource.length){var o=y.toRightDate(),n=y.props,u=n.extName,c=n.fileName,i=n.isRequiredNameDate,a=n.fileDate,f=(i?"".concat(c,"__").concat(a):c).replace(/\\|\/|\?|\*|\[|\]|\s|\{|\}/g,"_"),l=(t=j.utils)[r].apply(t,s(o)),p=j.utils.book_new()
j.utils.book_append_sheet(p,l,f),j.writeFile(p,"".concat(f,".").concat(u))}},!v.includes(t.extName))throw new Error("extName not suport")
if(y.importType={"Array-of-Arrays":"aoa_to_sheet","Array-of-Object":"json_to_sheet"},!y.importType[t.dataType])throw new Error('dataType must be oneOf ["Array-of-Arrays", "Array-of-Object"]')
return y.state={utilsName:y.importType[t.dataType],dataSource:t.dataSource},y}var r,o,n
return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,u.PureComponent),r=e,n=[{key:"getDerivedStateFromProps",value:function(t,e){return t.dataSource!==e.dataSource?{dataSource:t.dataSource}:null}}],(o=[{key:"toRightDate",value:function(){var t=this.props,o=t.header,e=t.headerOption,r=this.state.dataSource,n=this.props.dataType,u=[],c=[]
return"Array-of-Object"===n?(r.map(function(e){if((0,i.default)(e))throw new Error("dataSource must be like Array-of-Object type, the Object not be empty")
var r={}
return o.map(function(t){return r[t.title]=e[t.dataIndex],!!u.includes(r)||(u.push(r),c.includes(t.title)||c.push(t.title),!0)}),!0}),[u,l({header:c},e)]):"Array-of-Arrays"===n?(r.map(function(t){if(!Array.isArray(t))throw new Error("dataSource must be like Array-of-Arrays type")
return null}),[o,l({},e)]):[]}},{key:"render",value:function(){var t=this.props.children,e=null
if(!u.default.isValidElement(t))throw new Error("The Children must be a React Element !")
return e=u.default.cloneElement(u.default.Children.only(t),{exportSheet:this.exportFile}),u.default.createElement("div",{onClick:this.exportFile},e)}}])&&y(r.prototype,o),n&&y(r,n),e}()
x.propTypes={dataType:n.default.oneOf(["Array-of-Arrays","Array-of-Object"]),header:n.default.arrayOf(n.default.shape({title:n.default.string,dataIndex:n.default.string})),headerOption:n.default.shape({dateNF:n.default.string,skipHeader:n.default.bool}),dataSource:n.default.array,fileName:n.default.string,fileDate:n.default.string,extName:n.default.oneOf(v),isRequiredNameDate:n.default.bool},x.defaultProps={dataType:"Array-of-Object",header:[],headerOption:{skipHeader:!1,dateNF:"FMT 14"},dataSource:[],extName:"xlsx",isRequiredNameDate:!0,fileName:"",fileDate:(new Date).toLocaleDateString()}
var S=x
e.default=S},function(t,e){t.exports=r},function(t,e){t.exports=o},function(t,e,r){var o=r(17),n=r(20),u=r(33),c=r(35),i=r(36),a=r(37),f=r(4),l=r(39),p=Object.prototype.hasOwnProperty
t.exports=function(t){if(null==t)return!0
if(i(t)&&(c(t)||"string"==typeof t||"function"==typeof t.splice||a(t)||l(t)||u(t)))return!t.length
var e=n(t)
if("[object Map]"==e||"[object Set]"==e)return!t.size
if(f(t))return!o(t).length
for(var r in t)if(p.call(t,r))return!1
return!0}},function(t,e,r){var o=r(4),n=r(18),u=Object.prototype.hasOwnProperty
t.exports=function(t){if(!o(t))return n(t)
var e=[]
for(var r in Object(t))u.call(t,r)&&"constructor"!=r&&e.push(r)
return e}},function(t,e,r){var o=r(19)(Object.keys,Object)
t.exports=o},function(t,e){t.exports=function(e,r){return function(t){return e(r(t))}}},function(t,e,r){var o=r(21),n=r(29),u=r(30),c=r(31),i=r(32),a=r(2),f=r(9),l="[object Map]",p="[object Promise]",y="[object Set]",s="[object WeakMap]",b="[object DataView]",d=f(o),m=f(n),j=f(u),v=f(c),x=f(i),S=a;(o&&S(new o(new ArrayBuffer(1)))!=b||n&&S(new n)!=l||u&&S(u.resolve())!=p||c&&S(new c)!=y||i&&S(new i)!=s)&&(S=function(t){var e=a(t),r="[object Object]"==e?t.constructor:void 0,o=r?f(r):""
if(o)switch(o){case d:return b
case m:return l
case j:return p
case v:return y
case x:return s}return e}),t.exports=S},function(t,e,r){var o=r(1)(r(0),"DataView")
t.exports=o},function(t,e,r){var o=r(5),n=r(26),u=r(8),c=r(9),i=/^\[object .+?Constructor\]$/,a=Function.prototype,f=Object.prototype,l=a.toString,p=f.hasOwnProperty,y=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$")
t.exports=function(t){return!(!u(t)||n(t))&&(o(t)?y:i).test(c(t))}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o
o=function(){return this}()
try{o=o||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(o=window)}t.exports=o},function(t,e,r){var o=r(6),n=Object.prototype,u=n.hasOwnProperty,c=n.toString,i=o?o.toStringTag:void 0
t.exports=function(t){var e=u.call(t,i),r=t[i]
try{var o=!(t[i]=void 0)}catch(t){}var n=c.call(t)
return o&&(e?t[i]=r:delete t[i]),n}},function(t,e){var r=Object.prototype.toString
t.exports=function(t){return r.call(t)}},function(t,e,r){var o,n=r(27),u=(o=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||""))?"Symbol(src)_1."+o:""
t.exports=function(t){return!!u&&u in t}},function(t,e,r){var o=r(0)["__core-js_shared__"]
t.exports=o},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,r){var o=r(1)(r(0),"Map")
t.exports=o},function(t,e,r){var o=r(1)(r(0),"Promise")
t.exports=o},function(t,e,r){var o=r(1)(r(0),"Set")
t.exports=o},function(t,e,r){var o=r(1)(r(0),"WeakMap")
t.exports=o},function(t,e,r){var o=r(34),n=r(3),u=Object.prototype,c=u.hasOwnProperty,i=u.propertyIsEnumerable,a=o(function(){return arguments}())?o:function(t){return n(t)&&c.call(t,"callee")&&!i.call(t,"callee")}
t.exports=a},function(t,e,r){var o=r(2),n=r(3)
t.exports=function(t){return n(t)&&"[object Arguments]"==o(t)}},function(t,e){var r=Array.isArray
t.exports=r},function(t,e,r){var o=r(5),n=r(10)
t.exports=function(t){return null!=t&&n(t.length)&&!o(t)}},function(t,a,f){(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=f(0),o=f(38),n="object"==e(a)&&a&&!a.nodeType&&a,u=n&&"object"==e(t)&&t&&!t.nodeType&&t,c=u&&u.exports===n?r.Buffer:void 0,i=(c?c.isBuffer:void 0)||o
t.exports=i}).call(this,f(11)(t))},function(t,e){t.exports=function(){return!1}},function(t,e,r){var o=r(40),n=r(41),u=r(42),c=u&&u.isTypedArray,i=c?n(c):o
t.exports=i},function(t,e,r){var o=r(2),n=r(10),u=r(3),c={}
c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,t.exports=function(t){return u(t)&&n(t.length)&&!!c[o(t)]}},function(t,e){t.exports=function(e){return function(t){return e(t)}}},function(t,i,a){(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=a(7),o="object"==e(i)&&i&&!i.nodeType&&i,n=o&&"object"==e(t)&&t&&!t.nodeType&&t,u=n&&n.exports===o&&r.process,c=function(){try{var t=n&&n.require&&n.require("util").types
return t||u&&u.binding&&u.binding("util")}catch(t){}}()
t.exports=c}).call(this,a(11)(t))},function(t,e){t.exports=n}])})
