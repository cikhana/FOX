(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{673:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(1),o=n.n(r),c=n(12),u=n(22);n(47);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=new u.a,h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,t);var e=l(n);function n(){var t;a(this,n);for(var r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return m(p(t=e.call.apply(e,[this].concat(u))),"state",{items:[],show:!1}),m(p(t),"handleClick",(function(){t.setState({show:!t.state.show})})),m(p(t),"componentDidMount",(function(){b.getEntityList("activities",{project_id:t.props.projectId}).then((function(e){t.setState({items:e})})).catch((function(t){return console.log(t)}))})),m(p(t),"render",(function(){var e=t.state,n=e.items,r=e.show;return o.a.createElement(c.f,null,o.a.createElement(c.i,null,o.a.createElement("strong",null,"Activity log"),o.a.createElement(c.e,{color:"link",onClick:t.handleClick},r?"Hide":"Show"),o.a.createElement(c.r,{show:r},o.a.createElement(c.g,null,o.a.createElement(c.S,{flush:!0},n?n.map((function(t){return o.a.createElement(c.T,{key:t.id},t.message)})):null)))))})),t}return n}(r.Component)},756:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),c=n(47),u=n(26),i=n(56),a=n(12),f=n(673);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(n,t);var e=y(n);function n(){var t;s(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return w(b(t=e.call.apply(e,[this].concat(c))),"componentDidMount",(function(){t.props.getProfileFetch()})),w(b(t),"render",(function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.ab,null,o.a.createElement(a.q,null,o.a.createElement(f.a,{projectId:t.props.match.params.id}))),o.a.createElement(a.ab,null,o.a.createElement(a.q,null,t.props.username?o.a.createElement(a.z,{ratio:"16by9"},o.a.createElement("iframe",{src:"".concat(window.location.origin,"/api/ptw/").concat(t.props.match.params.id)})):o.a.createElement(u.a,{to:""}))))})),t}return n}(r.Component);e.default=Object(c.b)((function(t){return{username:t.currentUser.username}}),(function(t){return{getProfileFetch:function(){return t(Object(i.h)())}}}))(d)}}]);
//# sourceMappingURL=15.main.js.map