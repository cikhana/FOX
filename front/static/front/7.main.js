(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{633:function(t,e,r){"use strict";var n=r(1),o=r.n(n),a=r(44),c=r(22),i=r(38),u=r(10),l=r(63);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function m(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){m(a,n,o,c,i,"next",t)}function i(t){m(a,n,o,c,i,"throw",t)}c(void 0)}))}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=j(t);if(e){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}function v(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?w(t):e}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var E=new c.a,S=[{Works_started:"Works started"},{Works_finished:"Works finished"},{Extended:"Extended"},{Closed:"Closed"}],_=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(r,t);var e=O(r);function r(){var t;h(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return P(w(t=e.call.apply(e,[this].concat(a))),"handleClick",function(){var e=d(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Extended"!==r){e.next=4;break}t.props.showExtendModal({modalType:"extendModal",projectId:t.props.item.id,updateList:t.props.updateList}),e.next=6;break;case 4:return e.next=6,E.patchEntityOf("projects",t.props.item.id,{status:r}).then((function(){t.props.getProjectList()}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P(w(t),"render",(function(){return"CliAdm"===t.props.role&&"Application processing"!==t.props.item.work_status?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.v,null,o.a.createElement(u.y,{className:"project-table-toggle"},o.a.createElement(l.a,{style:{margin:"0"},className:"table-dropdown-icon",name:"cilSettings"})),o.a.createElement(u.x,{className:"p-0 foxtable-dropdown-menu",placement:"bottom-end"},S.map((function(e,r){var n=y(Object.entries(e)[0],2),a=n[0],c=n[1];return o.a.createElement(u.w,{key:r,value:a,onClick:function(e){return t.handleClick(a,e)}},c)}))))):null})),t}return r}(n.Component);e.a=Object(a.b)((function(t){return{role:t.currentUser.role}}),(function(t){return{getProjectList:function(){return t(Object(i.j)())},showExtendModal:function(e){var r=e.modalType,n=p(e,["modalType"]);return t(Object(i.s)(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){P(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({modalType:r},n)))}}}))(_)},634:function(t,e,r){"use strict";var n=r(1),o=r.n(n),a=r(44),c=r(10),i=r(633);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m(t);if(e){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(r,t);var e=f(r);function r(){var t;s(this,r);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return d(b(t=e.call.apply(e,[this].concat(a))),"alertOnClick",(function(e,r){t.props.history.push("".concat(t.props.match.url,"/").concat(e))})),d(b(t),"render",(function(){var e,r=t.props.fields?t.props.fields[0]:"username";return o.a.createElement(c.bb,null,o.a.createElement(c.q,null,o.a.createElement(c.f,null,o.a.createElement(c.i,{className:"d-flex justify-content-between"},o.a.createElement(c.k,null,t.props.tableName),"Projects"===t.props.tableName&&"Contr"===t.props.role?null:o.a.createElement(c.S,{className:"btn btn-pill btn-outline-success",to:"".concat(t.props.match.url,"/new")},"Add new")),o.a.createElement(c.g,null,o.a.createElement(c.u,{items:t.props.tableData?t.props.tableData:[],fields:t.props.fields?t.props.fields:[],loading:t.props.loading,clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:(e={},d(e,r,(function(e){return o.a.createElement("td",null,o.a.createElement(c.S,{to:"".concat(t.props.match.url,"/").concat(e.id)},e[r]))})),d(e,"application_status",(function(e){return o.a.createElement("td",null,o.a.createElement(c.a,{shape:"pill",color:t.props.getBadge(e.application_status)},e.application_status))})),d(e,"work_status",(function(e){return o.a.createElement("td",{className:"d-flex align-items-center"},o.a.createElement(c.a,{shape:"pill",color:t.props.getBadge(e.work_status)},e.work_status),o.a.createElement(i.a,l({key:e.id,item:e},t.props)))})),e)})))))})),t}return r}(n.Component);e.a=Object(a.b)((function(t){return{role:t.currentUser.role}}),null)(h)},636:function(t,e,r){"use strict";r.d(e,"a",(function(){return n.a})),r.d(e,"b",(function(){return k}));var n=r(634),o=r(1),a=r.n(o),c=r(44),i=r(10),u=r(63),l=r(633),s=r(22),p=r(38);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function d(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,o)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){d(a,n,o,c,i,"next",t)}function i(t){d(a,n,o,c,i,"throw",t)}c(void 0)}))}}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=P(t);if(e){var o=P(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return w(this,r)}}function w(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?j(t):e}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var S=new s.a,_=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(r,t);var e=v(r);function r(){var t;g(this,r);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return E(j(t=e.call.apply(e,[this].concat(o))),"state",{error:""}),E(j(t),"getEntityFromTableName",(function(){t.props.tableName.toLowercase()})),E(j(t),"callDeleteModal",(function(e){t.props.updateModal({modalType:"deleteModal",entity:"entity",confirmDelete:function(){return t.confirmDelete(e)}})})),E(j(t),"confirmDelete",function(){var e=h(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("trying to delete"),n=t.props.tableName.toLowerCase().replace(" ","_"),e.next=4,S.deleteEntityOf(n,r).then((function(){t.props.updateList(t.props.role)})).then((function(){return t.props.updateModal("",{})})).catch((function(e){console.error(e),t.setState({error:"Could not delete entity! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E(j(t),"alertOnClick",(function(e,r){t.props.history.push("".concat(t.props.match.url,"/").concat(e))})),E(j(t),"render",(function(){var e,r=t.props.fields?t.props.fields[0]:"username";return a.a.createElement(i.bb,null,a.a.createElement(i.q,null,a.a.createElement(i.f,null,a.a.createElement(i.i,{className:"d-flex justify-content-between"},a.a.createElement(i.k,null,t.props.tableName),"Projects"===t.props.tableName&&"Contr"===t.props.role?null:a.a.createElement(i.S,{className:"btn btn-pill btn-outline-success",to:"".concat(t.props.match.url,"/new")},"Add new")),a.a.createElement(i.g,null,a.a.createElement(i.u,{items:t.props.tableData?t.props.tableData:[],fields:t.props.fields,loading:t.props.loading,clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:(e={},E(e,r,(function(e){return a.a.createElement("td",null,a.a.createElement(i.S,{to:"".concat(t.props.match.url,"/").concat(e.id)},e[r]))})),E(e,"application_status",(function(e){return a.a.createElement("td",null,a.a.createElement(i.a,{shape:"pill",color:t.props.getBadge(e.application_status)},e.application_status))})),E(e,"work_status",(function(e){return a.a.createElement("td",{className:"d-flex align-items-center"},a.a.createElement(i.a,{shape:"pill",color:t.props.getBadge(e.work_status)},e.work_status),a.a.createElement(l.a,m({key:e.id,item:e},t.props)))})),E(e,"delete_item",(function(e,r){return a.a.createElement("td",null,a.a.createElement(i.e,{color:"danger",variant:"ghost",size:"sm",onClick:function(){return t.callDeleteModal(e.id)},block:!0},a.a.createElement(u.a,{name:"cilTrash"})))})),e)})))))})),t}return r}(o.Component),k=Object(c.b)((function(t){return{role:t.currentUser.role}}),(function(t){return{updateModal:function(e){var r=e.modalType,n=y(e,["modalType"]);return t(Object(p.s)(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){E(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({modalType:r},n)))}}}))(_)},748:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),a=r(44),c=r(636),i=r(38),u=r(98);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function p(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,o)}function f(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){p(a,n,o,c,i,"next",t)}function i(t){p(a,n,o,c,i,"throw",t)}c(void 0)}))}}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=g(t);if(e){var o=g(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function d(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v=function(t){switch(t){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(r,t);var e=m(r);function r(){var t;y(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return O(h(t=e.call.apply(e,[this].concat(a))),"componentDidMount",f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.getProfileFetch().then((function(){return t.props.getClientManagerList(t.props.role,t.abortController.signal)})).then((function(){return t.props.changeLoadingState()}));case 2:case"end":return e.stop()}}),e)})))),O(h(t),"abortController",new window.AbortController),O(h(t),"componentWillUnmount",(function(){t.abortController.abort(),t.props.clearList()})),O(h(t),"render",(function(){return"CliAdm"==t.props.role?o.a.createElement(c.b,s({},t.props,{tableName:"Managers",fields:t.props.clientManagerTable.fields,getBadge:v,tableData:t.props.clientManagerTable.tableData,updateList:t.props.getClientManagerList,loading:t.props.loading})):o.a.createElement(c.a,s({},t.props,{updateList:t.props.getClientManagerList,tableName:"Managers",fields:t.props.clientManagerTable.fields,getBadge:v,tableData:t.props.clientManagerTable.tableData,loading:t.props.loading}))})),t}return r}(n.Component);e.default=Object(a.b)((function(t){return{clientManagerTable:t.entityListTable,role:t.currentUser.role}}),(function(t){return{getProfileFetch:function(){return t(Object(i.i)())},getClientManagerList:function(e){return t(Object(i.d)(e))},clearList:function(){return t(Object(i.b)())}}}))(Object(u.b)(w))}}]);
//# sourceMappingURL=7.main.js.map