(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{632:function(t,e,n){"use strict";var r=n(1),o=n.n(r),c=n(165),u=n(24);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,t);var e=l(n);function n(){var t;i(this,n);for(var r=arguments.length,u=new Array(r),a=0;a<r;a++)u[a]=arguments[a];return b(p(t=e.call.apply(e,[this].concat(u))),"alertOnClick",(function(e){t.props.history.push("".concat(t.props.match.path,"/").concat(e.id))})),b(p(t),"render",(function(){return o.a.createElement(c.J,null,o.a.createElement(c.j,null,o.a.createElement(c.f,null,o.a.createElement(c.h,{className:"d-flex justify-content-between"},o.a.createElement(c.i,null,t.props.tableName),o.a.createElement(c.H,{className:"btn btn-outline-success",to:"".concat(t.props.match.path,"/new")},"Add new")),o.a.createElement(c.g,null,o.a.createElement(c.m,{items:t.props.tableData,fields:t.props.fields,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,onRowClick:t.alertOnClick,scopedSlots:{status:function(e){return o.a.createElement("td",null,o.a.createElement(c.a,{color:t.props.getBadge(e.status)},e.status))}}})))))})),t}return n}(r.Component);e.a=Object(u.h)(h)},730:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),c=n(632),u=n(166),a=n(95);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e,n,r,o,c,u){try{var a=t[c](u),i=a.value}catch(t){return void n(t)}a.done?e(i):Promise.resolve(i).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function u(t){l(c,r,o,u,a,"next",t)}function a(t){l(c,r,o,u,a,"throw",t)}u(void 0)}))}}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?m(t):e}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(t){switch(t){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},w=function(){alert("Clicked!")},O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(n,t);var e=b(n);function n(){var t;p(this,n);for(var r=arguments.length,u=new Array(r),a=0;a<r;a++)u[a]=arguments[a];return g(m(t=e.call.apply(e,[this].concat(u))),"componentDidMount",s(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.getProfileFetch().then((function(){return t.props.getClientManagerList()}));case 2:case"end":return e.stop()}}),e)})))),g(m(t),"render",(function(){return o.a.createElement(c.a,f({},t.props,{tableName:"Managers",fields:t.props.clientManagerTable.fields,getBadge:v,tableData:t.props.clientManagerTable.tableData,onRowClick:w}))})),t}return n}(r.Component);e.default=Object(a.b)((function(t){return{clientManagerTable:t.entityListTable}}),(function(t){return{getProfileFetch:function(){return t(Object(u.e)())},getClientManagerList:function(){return t(Object(u.b)())}}}))(O)}}]);
//# sourceMappingURL=8.main.js.map