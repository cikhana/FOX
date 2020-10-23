(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{764:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(26),i=n(37),u=n(10),c=n(635),l=n.n(c),p=n(22),s=n(35),f=n(27);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){b(a,r,o,i,u,"next",e)}function u(e){b(a,r,o,i,u,"throw",e)}i(void 0)}))}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=new p.a,D=[{id:1,name:"URL"},{id:2,name:"File upload"}],x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(n,e);var t=E(n);function n(){var e;g(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return _(S(e=t.call.apply(t,[this].concat(a))),"state",{name:"",file:"",project:e.props.match.params.id,url_to_doc:"",upload_option:-1,error:!1}),_(S(e),"handleChange",(function(t){e.setState(_({},t.target.name,t.target.value))})),_(S(e),"handleFileUpload",(function(t){e.setState(_({},t.target.name,t.target.files[0]))})),_(S(e),"handleSubmit",function(){var t=y(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),e.props.changeSubmitState(),-1!==e.state.upload_option){t.next=6;break}e.setState({error:"Please, choose the file attachment option and attach the file itself before submitting the document"}),t.next=13;break;case 6:return e.requestData=e.state,delete e.requestData.error,delete e.requestData.upload_option,e.formData=new FormData,Object.entries(e.requestData).forEach((function(t){var n=d(t,2),r=n[0],o=n[1];e.formData.append(r,o)})),t.next=13,j.createEntityWithFile("documents",e.formData).then((function(){e.props.history.push("/projects/".concat(e.props.match.params.id,"/documents"))})).catch((function(t){console.error(t),e.setState({error:"Document creation failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})})).finally((function(){return e.props.changeSubmitState()}));case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),_(S(e),"componentDidMount",y(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().catch((function(e){return console.log(e)})).finally((function(){return e.props.changeLoadingState()}));case 2:case"end":return t.stop()}}),t)})))),_(S(e),"render",(function(){var t=e.state,n=t.upload_option,r=t.error,a=t.name,i=t.url_to_doc;return o.a.createElement(u.cb,null,o.a.createElement(u.r,null,o.a.createElement(u.g,null,o.a.createElement(u.j,null,o.a.createElement(u.l,null,"New Document"),o.a.createElement(u.k,null,"Fill this form to create a custom document for the project")),o.a.createElement(u.h,null,o.a.createElement(f.d,{loading:e.props.loading},o.a.createElement(u.C,{onSubmit:e.handleSubmit},o.a.createElement(l.a,null),o.a.createElement(u.D,null,o.a.createElement(u.L,{id:"name",name:"name",placeholder:"Document name",value:a,onChange:e.handleChange,disabled:e.props.submitting,readOnly:e.props.submitting,required:!0})),o.a.createElement(u.D,null,o.a.createElement(u.db,{id:"upload_option",name:"upload_option",value:n,onChange:e.handleChange,disabled:e.props.submitting,readOnly:e.props.submitting,required:!0},o.a.createElement("option",{value:-1},"Choose File upload option"),D.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)})))),1==n?o.a.createElement(u.D,null,o.a.createElement(u.L,{type:"url",id:"url_to_doc",name:"url_to_doc",placeholder:"URL to document",pattern:"https://.*",value:i,onChange:e.handleChange,disabled:e.props.submitting,readOnly:e.props.submitting,required:!0})):null,2==n?o.a.createElement(u.D,null,o.a.createElement(u.S,{htmlFor:"file"},"File"),o.a.createElement(u.M,{id:"file",name:"file",onChange:e.handleFileUpload,disabled:e.props.submitting,readOnly:e.props.submitting,required:!0}),o.a.createElement(u.E,null,"Recommended formats: .doc, .docx, .xls, .xlsx, .pdf")):null,r?o.a.createElement("p",{className:"fox-form-invalid-feedback"},r):null))),o.a.createElement(u.i,null,o.a.createElement(u.e,{disabled:e.props.submitting||e.props.loading,shape:"pill",color:"dark",variant:"outline",onClick:e.handleSubmit,block:!0},o.a.createElement(f.b,{submitting:e.props.submitting}),"Create Document")))))})),e}return n}(r.Component);t.default=Object(i.b)((function(e){return{company:e.currentUser.company}}),(function(e){return{getProfileFetch:function(){return e(Object(s.j)())}}}))(Object(a.h)(Object(f.c)(x)))}}]);
//# sourceMappingURL=29.main.js.map