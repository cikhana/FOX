(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{772:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(26),i=n(44),u=n(10),c=n(635),l=n.n(c),s=n(22),f=n(38),m=n(98);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){d(o,r,a,i,u,"next",e)}function u(e){d(o,r,a,i,u,"throw",e)}i(void 0)}))}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var a=C(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=new s.a,j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(n,e);var t=w(n);function n(){var e;v(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return O(S(e=t.call.apply(t,[this].concat(o))),"state",{worker:e.props.match.params.id,name:"",file:"",issued_by:"",submitCallback:"",error:!1}),O(S(e),"handleChange",(function(t){e.setState(O({},t.target.name,t.target.value))})),O(S(e),"handleFileUpload",(function(t){e.setState(O({},t.target.name,t.target.files[0]))})),O(S(e),"handleSubmit",function(){var t=h(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.requestData=e.state,delete e.requestData.error,e.formData=new FormData,Object.entries(e.requestData).forEach((function(t){var n=b(t,2),r=n[0],a=n[1];e.formData.append(r,a)})),t.next=7,k.createEntityWithFile("worker_special_competencies",e.formData).then((function(){e.state.submitCallback()}),(function(t){console.error(t),e.setState({error:"Document creation failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),O(S(e),"handleSimpleSubmit",(function(){e.setState({submitCallback:function(){return e.props.history.push("/workers/".concat(e.props.match.params.id,"/competencies"))}})})),O(S(e),"handleSubmitOneMore",(function(){e.setState({submitCallback:function(){return e.setState({name:"",file:"",issued_by:"",submitCallback:""})}})})),O(S(e),"componentDidMount",h(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().then((function(){return e.props.changeLoadingState()}));case 2:case"end":return t.stop()}}),t)})))),O(S(e),"render",(function(){return a.a.createElement(u.bb,null,a.a.createElement(u.q,null,a.a.createElement(m.c,{loading:e.props.loading},a.a.createElement(u.B,{onSubmit:e.handleSubmit},a.a.createElement(l.a,null),a.a.createElement(u.C,null,a.a.createElement(u.R,{htmlFor:"name"},"Name"),a.a.createElement(u.K,{id:"name",name:"name",placeholder:"Enter document name",value:e.state.name,onChange:e.handleChange,required:!0})),a.a.createElement(u.C,null,a.a.createElement(u.R,{htmlFor:"file"},"File"),a.a.createElement(u.L,{id:"file",name:"file",onChange:e.handleFileUpload,key:e.state.file,required:!0})),a.a.createElement(u.C,null,a.a.createElement(u.R,{htmlFor:"issued_by"},"Issued by"),a.a.createElement(u.K,{id:"issued_by",name:"issued_by",placeholder:"Enter authority name",value:e.state.issued_by,onChange:e.handleChange,required:!0})),a.a.createElement(u.C,null,a.a.createElement(u.bb,null,a.a.createElement(u.q,{md:"6"},a.a.createElement(u.e,{onClick:e.handleSimpleSubmit,type:"submit",color:"dark",variant:"outline",block:!0},"Create Competency")),a.a.createElement(u.q,{md:"6"},a.a.createElement(u.e,{onClick:e.handleSubmitOneMore,type:"submit",color:"primary",variant:"outline",block:!0},"Create and add one more Competency")))),e.state.error?a.a.createElement("p",null,e.state.error):null))))})),e}return n}(r.Component);t.default=Object(i.b)((function(e){return{company:e.currentUser.company}}),(function(e){return{getProfileFetch:function(){return e(Object(f.i)())}}}))(Object(o.h)(Object(m.b)(j)))}}]);
//# sourceMappingURL=36.main.js.map