(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{733:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(166),c=r(95),u=r(165),i=r(643),l=r.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r,n,o,a,c){try{var u=e[a](c),i=u.value}catch(e){return void r(e)}u.done?t(i):Promise.resolve(i).then(n,o)}function h(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){m(a,n,o,c,u,"next",e)}function u(e){m(a,n,o,c,u,"throw",e)}c(void 0)}))}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var o=O(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g(this,r)}}function g(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=new(r(36).a),j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(r,e);var t=b(r);function r(){var e;d(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return w(v(e=t.call.apply(t,[this].concat(a))),"state",{name:"",description:"",start_date:"",company:e.props.company,contractor:"-1",error:!1}),w(v(e),"handleChange",(function(t){console.log(e.props),e.setState(w({},t.target.name,t.target.value))})),w(v(e),"handleSubmit",function(){var t=h(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),!(parseInt(e.state.contractor)<0)){t.next=5;break}e.setState({error:"Contractor was not selected! Please, choose contractor form the list"}),t.next=9;break;case 5:return e.formData=e.state,delete e.formData.error,t.next=9,E.updateEntityOf("projects",e.props.match.params.id,e.formData).then((function(){e.props.history.goBack()}),(function(t){console.error(t),e.setState({error:"Project creation failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),w(v(e),"componentDidMount",h(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().then((function(){return E.getDetailsOf("projects",e.props.match.params.id)})).then((function(t){return e.setState(f({},t))})).then((function(){return e.props.getContractorList()}));case 2:case"end":return t.stop()}}),t)})))),w(v(e),"render",(function(){return o.a.createElement(u.J,null,o.a.createElement(u.j,null,o.a.createElement(u.t,{onSubmit:e.handleSubmit},o.a.createElement(l.a,null),o.a.createElement(u.u,null,o.a.createElement(u.G,{htmlFor:"name"},"Name"),o.a.createElement(u.B,{id:"name",name:"name",placeholder:"Enter project name",value:e.state.name,onChange:e.handleChange,required:!0})),o.a.createElement(u.u,null,o.a.createElement(u.G,{htmlFor:"description"},"Description"),o.a.createElement(u.V,{id:"descrption",name:"description",placeholder:"Please, enter short description of the projet",value:e.state.description,onChange:e.handleChange,required:!0})),o.a.createElement(u.u,null,o.a.createElement(u.G,{htmlFor:"start_date"},"Start Date"),o.a.createElement(u.B,{type:"date",id:"start_date",name:"start_date",placeholder:"date",value:e.state.start_date,onChange:e.handleChange,required:!0})),o.a.createElement(u.u,null,o.a.createElement(u.G,{htmlFor:"contractor"},"Contractor"),o.a.createElement(u.K,{id:"contractor",name:"contractor",placeholder:"Choose contractor",value:e.state.contractor,onChange:e.handleChange,required:!0},o.a.createElement("option",{key:"-1",value:"-1",disabled:!0},"Choose contractor"),e.props.options.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.username)})))),o.a.createElement(u.u,null,o.a.createElement(u.H,{className:"btn btn-outline-success",to:"".concat(e.props.match.url,"/ptw")},"See Permission To Work")),o.a.createElement(u.u,null,o.a.createElement(u.B,{type:"submit",value:"Save changes",color:"info"})),e.state.error?o.a.createElement("p",null,e.state.error):null)))})),e}return r}(n.Component);t.default=Object(c.b)((function(e){return{company:e.currentUser.company,options:e.entityListTable.tableData}}),(function(e){return{getProfileFetch:function(){return e(Object(a.e)())},getContractorList:function(){return e(Object(a.c)())}}}))(j)}}]);
//# sourceMappingURL=15.main.js.map