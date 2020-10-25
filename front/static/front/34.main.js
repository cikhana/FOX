(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{768:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(26),i=n(37),u=n(10),c=n(636),l=n.n(c),f=n(22),p=n(35),s=n(27);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){h(a,r,o,i,u,"next",e)}function u(e){h(a,r,o,i,u,"throw",e)}i(void 0)}))}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=new f.a,P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(n,e);var t=g(n);function n(){var e;v(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return O(w(e=t.call.apply(t,[this].concat(i))),"state",{personal_declaration_template:"",safety_quiz_template:"",safety_video_url:"",error:!1}),O(w(e),"handleChange",(function(t){e.setState(O({},t.target.name,t.target.value))})),O(w(e),"handleFileUpload",(function(t){e.setState(O({},t.target.name,t.target.files[0]))})),O(w(e),"handleSubmit",function(){var t=b(regeneratorRuntime.mark((function t(n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.props.changeSubmitState(),delete(r=e.state).error,r.safety_video_url=r.safety_video_url.replace("watch?v=","embed/"),o=new FormData,Object.entries(r).forEach((function(e){var t=y(e,2),n=t[0],r=t[1];o.append(n,r)})),t.next=9,j.patchCompanySafetyInfo(e.props.company,o).then((function(){e.props.history.push("/safety/video")})).catch((function(t){console.error(t),e.setState({error:"Safety info upload failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})})).finally((function(){return e.props.changeSubmitState()}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),O(w(e),"componentDidMount",b(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().catch((function(e){return console.log(e)})).finally((function(){return e.props.changeLoadingState()}));case 2:case"end":return t.stop()}}),t)})))),O(w(e),"render",(function(){return o.a.createElement(s.d,{loading:e.props.loading},"CliAdm"===e.props.role?o.a.createElement(u.cb,null,o.a.createElement(u.r,null,o.a.createElement(u.C,{onSubmit:e.handleSubmit},o.a.createElement(l.a,null),o.a.createElement(u.D,null,o.a.createElement(u.S,{htmlFor:"safety_video_url"},"Url to document"),o.a.createElement(u.L,{type:"url",id:"safety_video_url",name:"safety_video_url",placeholder:"https://example.com",pattern:"https://.*",value:e.state.safety_video_url,onChange:e.handleChange,required:!0})),o.a.createElement(u.D,null,o.a.createElement(u.S,{htmlFor:"safety_quiz_template"},"Safety Quiz Template"),o.a.createElement(u.M,{id:"safety_quiz_template",name:"safety_quiz_template",onChange:e.handleFileUpload,required:!0})),o.a.createElement(u.D,null,o.a.createElement(u.S,{htmlFor:"personal_declaration_template"},"Personal Declaration Template:"),o.a.createElement(u.M,{id:"personal_declaration_template",name:"personal_declaration_template",onChange:e.handleFileUpload,required:!0})),o.a.createElement(u.D,null,o.a.createElement(u.e,{shape:"pill",type:"submit",color:"dark",variant:"outline",block:!0},o.a.createElement(s.b,{submitting:e.props.submitting}),"Submit safety info")),e.state.error?o.a.createElement("p",null,e.state.error):null),o.a.createElement(u.T,{to:"/safety/video"},"Inspect preview"))):o.a.createElement(a.a,{to:"/safety/video"}))})),e}return n}(r.Component);t.default=Object(i.b)((function(e){return{role:e.currentUser.role,company:e.currentUser.company}}),(function(e){return{getProfileFetch:function(){return e(Object(p.j)())}}}))(Object(a.h)(Object(s.c)(P)))}}]);
//# sourceMappingURL=34.main.js.map