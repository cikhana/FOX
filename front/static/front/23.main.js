(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{760:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(166),c=n(95),l=n(165),u=n(632),i=n.n(u);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n,r,a,o,c){try{var l=e[o](c),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){f(o,r,a,c,l,"next",e)}function l(e){f(o,r,a,c,l,"throw",e)}c(void 0)}))}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var a=E(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=new(n(26).a),O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(n,e);var t=b(n);function n(){var e;y(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return w(v(e=t.call.apply(t,[this].concat(o))),"state",{username:"",email:"",name:"",related_company:"",company_phone:"",company:e.props.company,role:"Contr",error:!1}),w(v(e),"handleChange",(function(t){e.setState(w({},t.target.name,t.target.value))})),w(v(e),"handleSubmit",function(){var t=h(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.formData=e.state,delete e.formData.error,t.next=5,C.updateEntityOf("contractors",e.props.match.params.id,e.formData).then((function(){e.props.history.goBack()}),(function(t){console.error(t),e.setState({error:"Contractor update failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),w(v(e),"componentDidMount",h(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().then((function(){return C.getDetailsOf("contractors",e.props.match.params.id)})).then((function(t){return e.setState(s({},t))}));case 2:case"end":return t.stop()}}),t)})))),w(v(e),"render",(function(){return a.a.createElement(l.ab,null,a.a.createElement(l.q,null,a.a.createElement(l.f,null,a.a.createElement(l.i,null,a.a.createElement(l.k,null,"Contractor Details")),a.a.createElement(l.g,null,a.a.createElement(l.B,{onSubmit:e.handleSubmit},a.a.createElement(i.a,null),a.a.createElement(l.C,null,a.a.createElement(l.Q,{htmlFor:"username"},"Contractor username"),a.a.createElement(l.J,{id:"username",name:"username",placeholder:"Username",value:e.state.username,onChange:e.handleChange,required:!0})),a.a.createElement(l.C,null,a.a.createElement(l.Q,{htmlFor:"email"},"Contractor email"),a.a.createElement(l.J,{id:"email",type:"email",name:"email",placeholder:"Email",value:e.state.email,onChange:e.handleChange,required:!0})),a.a.createElement(l.C,null,a.a.createElement(l.Q,{htmlFor:"related_company"},"Contractor company"),a.a.createElement(l.J,{id:"related_company",name:"related_company",placeholder:"Company name",value:e.state.related_company,onChange:e.handleChange,required:!0})),a.a.createElement(l.C,null,a.a.createElement(l.Q,{htmlFor:"name"},"Contact person name"),a.a.createElement(l.J,{id:"name",type:"name",name:"name",placeholder:"Contact Person Name",value:e.state.name,onChange:e.handleChange,required:!0})),a.a.createElement(l.C,null,a.a.createElement(l.Q,{htmlFor:"company_phone"},"Contact phone number"),a.a.createElement(l.J,{id:"company_phone",name:"company_phone",placeholder:"Contact phone number",value:e.state.company_phone,onChange:e.handleChange,required:!0})),a.a.createElement(l.C,null,a.a.createElement(l.R,{to:"/contractors/".concat(e.props.match.params.id,"/workers_review")},"Browse workers")),a.a.createElement(l.C,null,a.a.createElement(l.e,{shape:"pill",type:"submit",color:"dark",variant:"outline",block:!0},"Save changes")),e.state.error?a.a.createElement("p",null,e.state.error):null)))))})),e}return n}(r.Component);t.default=Object(c.b)((function(e){return{company:e.currentUser.company}}),(function(e){return{getProfileFetch:function(){return e(Object(o.h)())}}}))(O)}}]);
//# sourceMappingURL=23.main.js.map