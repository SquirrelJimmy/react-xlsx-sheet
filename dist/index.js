!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],e):"object"==typeof exports?exports["react-xlsx-sheet"]=e(require("prop-types"),require("react")):t["react-xlsx-sheet"]=e(t.PropTypes,t.React)}(window,function(r,o){return function(r){var o={}
function n(t){if(o[t])return o[t].exports
var e=o[t]={i:t,l:!1,exports:{}}
return r[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}return n.m=r,n.c=o,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o))
return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t}
return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=41)}([function(t,e){t.exports=r},function(t,e,r){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=r(9),c="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,u=n||c||Function("return this")()
t.exports=u},function(t,e){t.exports=o},function(t,e,r){var o=r(20),n=r(26)
t.exports=function(t,e){var r=n(t,e)
return o(r)?r:void 0}},function(t,e,r){var o=r(8),n=r(22),c=r(23),u=o?o.toStringTag:void 0
t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?n(t):c(t)}},function(t,e,r){var o=r(4),n=r(10)
t.exports=function(t){if(!n(t))return!1
var e=o(t)
return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){return null!=t&&"object"==r(t)}},function(t,e){var r=Object.prototype
t.exports=function(t){var e=t&&t.constructor
return t===("function"==typeof e&&e.prototype||r)}},function(t,e,r){var o=r(1).Symbol
t.exports=o},function(o,t,e){(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r="object"==(void 0===t?"undefined":e(t))&&t&&t.Object===Object&&t
o.exports=r}).call(this,e(21))},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){var e=r(t)
return null!=t&&("object"==e||"function"==e)}},function(t,e){var r=Function.prototype.toString
t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=9007199254740991}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){var o=r(15),n=r(18),c=r(31),u=r(33),i=r(34),a=r(35),f=r(7),p=r(37),l=Object.prototype.hasOwnProperty
t.exports=function(t){if(null==t)return!0
if(i(t)&&(u(t)||"string"==typeof t||"function"==typeof t.splice||a(t)||p(t)||c(t)))return!t.length
var e=n(t)
if("[object Map]"==e||"[object Set]"==e)return!t.size
if(f(t))return!o(t).length
for(var r in t)if(l.call(t,r))return!1
return!0}},function(t,e,r){var o=r(7),n=r(16),c=Object.prototype.hasOwnProperty
t.exports=function(t){if(!o(t))return n(t)
var e=[]
for(var r in Object(t))c.call(t,r)&&"constructor"!=r&&e.push(r)
return e}},function(t,e,r){var o=r(17)(Object.keys,Object)
t.exports=o},function(t,e){t.exports=function(e,r){return function(t){return e(r(t))}}},function(t,e,r){var o=r(19),n=r(27),c=r(28),u=r(29),i=r(30),a=r(4),f=r(11),p="[object Map]",l="[object Promise]",y="[object Set]",s="[object WeakMap]",b="[object DataView]",d=f(o),m=f(n),j=f(c),v=f(u),x=f(i),h=a;(o&&h(new o(new ArrayBuffer(1)))!=b||n&&h(new n)!=p||c&&h(c.resolve())!=l||u&&h(new u)!=y||i&&h(new i)!=s)&&(h=function(t){var e=a(t),r="[object Object]"==e?t.constructor:void 0,o=r?f(r):""
if(o)switch(o){case d:return b
case m:return p
case j:return l
case v:return y
case x:return s}return e}),t.exports=h},function(t,e,r){var o=r(3)(r(1),"DataView")
t.exports=o},function(t,e,r){var o=r(5),n=r(24),c=r(10),u=r(11),i=/^\[object .+?Constructor\]$/,a=Function.prototype,f=Object.prototype,p=a.toString,l=f.hasOwnProperty,y=RegExp("^"+p.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$")
t.exports=function(t){return!(!c(t)||n(t))&&(o(t)?y:i).test(u(t))}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o
o=function(){return this}()
try{o=o||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(o=window)}t.exports=o},function(t,e,r){var o=r(8),n=Object.prototype,c=n.hasOwnProperty,u=n.toString,i=o?o.toStringTag:void 0
t.exports=function(t){var e=c.call(t,i),r=t[i]
try{var o=!(t[i]=void 0)}catch(t){}var n=u.call(t)
return o&&(e?t[i]=r:delete t[i]),n}},function(t,e){var r=Object.prototype.toString
t.exports=function(t){return r.call(t)}},function(t,e,r){var o,n=r(25),c=(o=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||""))?"Symbol(src)_1."+o:""
t.exports=function(t){return!!c&&c in t}},function(t,e,r){var o=r(1)["__core-js_shared__"]
t.exports=o},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,r){var o=r(3)(r(1),"Map")
t.exports=o},function(t,e,r){var o=r(3)(r(1),"Promise")
t.exports=o},function(t,e,r){var o=r(3)(r(1),"Set")
t.exports=o},function(t,e,r){var o=r(3)(r(1),"WeakMap")
t.exports=o},function(t,e,r){var o=r(32),n=r(6),c=Object.prototype,u=c.hasOwnProperty,i=c.propertyIsEnumerable,a=o(function(){return arguments}())?o:function(t){return n(t)&&u.call(t,"callee")&&!i.call(t,"callee")}
t.exports=a},function(t,e,r){var o=r(4),n=r(6)
t.exports=function(t){return n(t)&&"[object Arguments]"==o(t)}},function(t,e){var r=Array.isArray
t.exports=r},function(t,e,r){var o=r(5),n=r(12)
t.exports=function(t){return null!=t&&n(t.length)&&!o(t)}},function(t,a,f){(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=f(1),o=f(36),n="object"==e(a)&&a&&!a.nodeType&&a,c=n&&"object"==e(t)&&t&&!t.nodeType&&t,u=c&&c.exports===n?r.Buffer:void 0,i=(u?u.isBuffer:void 0)||o
t.exports=i}).call(this,f(13)(t))},function(t,e){t.exports=function(){return!1}},function(t,e,r){var o=r(38),n=r(39),c=r(40),u=c&&c.isTypedArray,i=u?n(u):o
t.exports=i},function(t,e,r){var o=r(4),n=r(12),c=r(6),u={}
u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,t.exports=function(t){return c(t)&&n(t.length)&&!!u[o(t)]}},function(t,e){t.exports=function(e){return function(t){return e(t)}}},function(t,i,a){(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=a(9),o="object"==e(i)&&i&&!i.nodeType&&i,n=o&&"object"==e(t)&&t&&!t.nodeType&&t,c=n&&n.exports===o&&r.process,u=function(){try{var t=n&&n.require&&n.require("util").types
return t||c&&c.binding&&c.binding("util")}catch(t){}}()
t.exports=u}).call(this,a(13)(t))},function(t,e,r){"use strict"
r.r(e)
var o=r(2),u=r.n(o),n=r(0),c=r.n(n),i=r(14),a=r.n(i),f=r(5),p=r.n(f)
function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r)
"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),o.forEach(function(t){s(e,t,r[t])})}return e}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e]
return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t
throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e){for(var r=0;r<e.length;r++){var o=e[r]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t,e,r){return e&&j(t.prototype,e),r&&j(t,r),t}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=["xlsx","xlsm","xlsb","xls","ods","fods","csv","txt","sylk","html","dif","dbf","rtf","prn","eth"],S=function(t){function e(t){var y
if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(y=d(this,m(e).call(this,t))).XLSX=y.props.xlsx,y.exportFile=function(){var t,e=y.state,r=e.utilsName
if(e.dataSource.length){var o=y.toRightDate(),n=y.props,c=n.extName,u=n.fileName,i=n.isRequiredNameDate,a=n.fileDate,f=(i?"".concat(u,"__").concat(a):u).replace(/\\|\/|\?|\*|\[|\]|\s|\{|\}/g,"_"),p=(t=y.XLSX.utils)[r].apply(t,b(o)),l=y.XLSX.utils.book_new()
y.XLSX.utils.book_append_sheet(l,p,f),y.XLSX.writeFile(l,"".concat(f,".").concat(c))}},!h.includes(t.extName))throw new Error("extName not suport")
if(y.importType={"Array-of-Arrays":"aoa_to_sheet","Array-of-Object":"json_to_sheet"},!y.importType[t.dataType])throw new Error('dataType must be oneOf ["Array-of-Arrays", "Array-of-Object"]')
return y.state={utilsName:y.importType[t.dataType],dataSource:t.dataSource},y}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(e,o["PureComponent"]),v(e,null,[{key:"getDerivedStateFromProps",value:function(t,e){return t.dataSource!==e.dataSource?{dataSource:t.dataSource}:null}}]),v(e,[{key:"toRightDate",value:function(){var t=this.props,o=t.header,e=t.headerOption,r=this.state.dataSource,n=this.props.dataType,c=[],u=[]
return"Array-of-Object"===n?(r.map(function(e){if(a()(e))throw new Error("dataSource must be like Array-of-Object type, the Object not be empty")
var r={}
return o.map(function(t){return r[t.title]=e[t.dataIndex],!!c.includes(r)||(c.push(r),u.includes(t.title)||u.push(t.title),!0)}),!0}),[c,y({header:u},e)]):"Array-of-Arrays"===n?(r.map(function(t){if(!Array.isArray(t))throw new Error("dataSource must be like Array-of-Arrays type")
return null}),[r,y({},e)]):[]}},{key:"render",value:function(){var t,e=this,r=this.props,o=r.children,n=r.isDOMElement
if(!u.a.isValidElement(o))throw new Error("The Children must be a valid React Element !")
var c=o.props.onClick
if(n){t=u.a.cloneElement(u.a.Children.only(o),{onClick:function(t){e.exportFile(),p()(c)&&c(t)}})}else t=u.a.cloneElement(u.a.Children.only(o),{exportsheet:this.exportFile})
return t}}]),e}()
S.propTypes={dataType:c.a.oneOf(["Array-of-Arrays","Array-of-Object"]),header:c.a.arrayOf(c.a.shape({title:c.a.string,dataIndex:c.a.string})),headerOption:c.a.shape({dateNF:c.a.string,skipHeader:c.a.bool}),dataSource:c.a.array,fileName:c.a.string,fileDate:c.a.string,extName:c.a.oneOf(h),isRequiredNameDate:c.a.bool,isDOMElement:c.a.bool.isRequired,xlsx:c.a.object.isRequired},S.defaultProps={dataType:"Array-of-Object",header:[],headerOption:{skipHeader:!1,dateNF:"FMT 14"},dataSource:[],extName:"xlsx",isRequiredNameDate:!0,fileName:"",isDOMElement:!0,fileDate:(new Date).toLocaleDateString()}
var O=S
r.d(e,"ExportSheet",function(){return O})}])})
