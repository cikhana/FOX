(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{742:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),c=r(95),u=r(648),a=r(166);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function p(t,e,r,n,o,c,u){try{var a=t[c](u),i=a.value}catch(t){return void r(t)}a.done?e(i):Promise.resolve(i).then(n,o)}function f(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function u(t){p(c,n,o,u,a,"next",t)}function a(t){p(c,n,o,u,a,"throw",t)}u(void 0)}))}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m(t);if(e){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function d(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=function(t){switch(t){case"Created":return"secondary";case"Submitted":return"warning";case"Approved":return"success";case"Rejected":return"danger";case"Application processing":return"secondary";case"Ready to start":return"success";case"Works started":return"info";case"Works finished":return"warning";case"Extended":return"primary";case"Closed":return"dark";default:return"primary"}},v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(r,t);var e=y(r);function r(){var t;l(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return j(h(t=e.call.apply(e,[this].concat(c))),"componentDidMount",f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.props.setProjectId(t.props.match.params.id),e.next=3,t.props.getProfileFetch().then((function(){return t.props.getProjectList(t.props.role)}));case 3:case"end":return e.stop()}}),e)})))),j(h(t),"render",(function(){return"CliAdm"==t.props.role?o.a.createElement(u.b,s({},t.props,{tableName:"Projects",fields:t.props.projectTable.fields,getBadge:g,tableData:t.props.projectTable.tableData,updateList:t.props.getProjectList})):o.a.createElement(u.a,s({},t.props,{tableName:"Projects",fields:t.props.projectTable.fields,getBadge:g,tableData:t.props.projectTable.tableData}))})),t}return r}(n.Component);e.default=Object(c.b)((function(t){return{projectTable:t.entityListTable,role:t.currentUser.role}}),(function(t){return{getProfileFetch:function(){return t(Object(a.h)())},getProjectList:function(e){return t(Object(a.i)(e))},setProjectId:function(){return t(Object(a.o)())}}}))(v)}}]);
//# sourceMappingURL=31.main.js.map