(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{670:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=[{value:-1,label:"Choose worker position"},{value:"Weld",label:"Welder"},{value:"Fit",label:"Fitter"},{value:"Help",label:"Helper"},{value:"Rig",label:"Rigger"},{value:"SafeOff",label:"Safety Officer"},{value:"Plumb",label:"Plumber"},{value:"Tech",label:"Technician"},{value:"Electr",label:"Electrician"},{value:"FlrInst",label:"Flooring Installer"},{value:"HVACInst",label:"HVAC Installer"},{value:"InsInst",label:"Insulation Installer"},{value:"Surv",label:"Surveyor"},{value:"BrcMans",label:"Brick Manson"},{value:"Roof",label:"Roofer"},{value:"SiteSuper",label:"Site Supervisor"},{value:"Other",label:"Other"}],a=[{id:-1,position:"Choose trade competency"},{id:"Civ",position:"Civil"},{id:"Electr",position:"Electrical"},{id:"Mech",position:"Mechanical"},{id:"Infra",position:"Infra"},{id:"Gen",position:"General"},{id:"Safe",position:"Safety"},{id:"Secur",position:"Security"}]},754:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(636),i=n.n(o),l=n(37),u=n(10),c=n(35),s=n(22),p=n(643),d=n(670),f=n(27);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t,n,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){y(o,r,a,i,l,"next",e)}function l(e){y(o,r,a,i,l,"throw",e)}i(void 0)}))}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var a=C(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=new s.a,I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(n,e);var t=S(n);function n(){var e;_(this,n);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return O(w(e=t.call.apply(t,[this].concat(o))),"state",{name:"",contractor:e.props.contractor,birthday:"",phone_number:"",card_number_id:"",card_number_id_scan:"",license_number:"",license_scan:"",passport:"",passport_scan:"",safety_green_card:"",safety_green_card_scan:"",position_in_company:-1,safety_quiz_answer:"",personal_declaration:"",submitCallback:"",trade_competency:-1,error:!1}),O(w(e),"handleChange",(function(t){e.setState(O({},t.target.name,t.target.value))})),O(w(e),"handleReactSelect",(function(t,n){e.setState(O({},n.name,t.value))})),O(w(e),"handleFileUpload",(function(t){e.setState(O({},t.target.name,t.target.files[0]))})),O(w(e),"handleSubmit",function(){var t=g(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),-1!==e.state.position_in_company){t.next=5;break}e.setState({error:"Worker position in company was not selected! Please, choose position form the list"}),t.next=16;break;case 5:if(-1!==e.state.trade_competency){t.next=9;break}e.setState({error:"Trade competency was not selected! Please, choose competency form the list"}),t.next=16;break;case 9:return e.props.changeSubmitState(),e.requestData=e.state,delete e.requestData.error,e.formData=new FormData,Object.entries(e.requestData).forEach((function(t){var n=b(t,2),r=n[0],a=n[1];e.formData.append(r,a)})),t.next=16,k.createEntityWithFile("workers",e.formData).then((function(t){e.state.submitCallback(t.id)})).catch((function(t){console.error(t),e.setState({error:"Worker creation failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})})).finally(e.props.changeSubmitState);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),O(w(e),"handleSimpleSubmit",(function(){e.setState({submitCallback:function(){return e.props.history.goBack()}})})),O(w(e),"handleSubmitWithCompetencies",(function(){e.setState({submitCallback:function(t){return e.props.history.push("/workers/".concat(t,"/competencies/new"))}})})),O(w(e),"componentDidMount",g(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().catch((function(e){return console.log(e)})).finally((function(){return e.props.changeLoadingState()}));case 2:case"end":return t.stop()}}),t)})))),O(w(e),"render",(function(){var t=a.a.createElement(p.d,{inputValue:e.state.card_number_id,handleChange:e.handleChange,handleFileUpload:e.handleFileUpload,inputInfo:"card_number_id",uploadInfo:"card_number_id_scan",disabled:e.props.submitting,readOnly:e.props.submitting}),n=a.a.createElement(p.d,{inputValue:e.state.passport,handleChange:e.handleChange,handleFileUpload:e.handleFileUpload,inputInfo:"passport",uploadInfo:"passport_scan",disabled:e.props.submitting,readOnly:e.props.submitting});return a.a.createElement(u.cb,null,a.a.createElement(u.r,null,a.a.createElement(u.g,null,a.a.createElement(u.j,null,a.a.createElement(u.l,null,"New Worker"),a.a.createElement(u.k,null,"Fill up the form below to add a new Worker")),a.a.createElement(u.h,null,a.a.createElement(f.d,{loading:e.props.loading},a.a.createElement(u.C,{onSubmit:e.handleSubmit},a.a.createElement(i.a,null),a.a.createElement(u.D,null,a.a.createElement(u.L,{id:"name",name:"name",placeholder:"Name",value:e.state.name,onChange:e.handleChange,disabled:e.props.submitting,readOnly:e.props.submitting,required:!0})),a.a.createElement(u.D,null,a.a.createElement(u.S,{htmlFor:"birthday"},"Date of birth"),a.a.createElement(u.L,{type:"date",id:"birthday",name:"birthday",value:e.state.birthday,onChange:e.handleChange,disabled:e.props.submitting,readOnly:e.props.submitting,required:!0})),a.a.createElement(u.D,null,a.a.createElement(u.L,{id:"phone_number",name:"phone_number",placeholder:"Phone number",value:e.state.phone_number,onChange:e.handleChange,disabled:e.props.submitting,readOnly:e.props.submitting})),a.a.createElement(p.f,{options:d.a,inputInfo:"position_in_company",inputValue:e.state.position_in_company,handleChange:e.handleReactSelect,disabled:e.props.submitting,readOnly:e.props.submitting}),a.a.createElement(p.h,{options:d.b,inputInfo:"trade_competency",inputValue:e.state.trade_competency,handleChange:e.handleChange,disabled:e.props.submitting,readOnly:e.props.submitting}),a.a.createElement(p.a,{optionA:t,optionB:n,submitting:e.props.submitting}),a.a.createElement(p.d,{inputValue:e.state.license_number,handleChange:e.handleChange,handleFileUpload:e.handleFileUpload,inputInfo:"license_number",uploadInfo:"license_scan",disabled:e.props.submitting,readOnly:e.props.submitting}),a.a.createElement(p.d,{inputValue:e.state.safety_green_card,handleChange:e.handleChange,handleFileUpload:e.handleFileUpload,inputInfo:"safety_green_card",uploadInfo:"safety_green_card_scan",disabled:e.props.submitting,readOnly:e.props.submitting}),a.a.createElement(u.D,null,a.a.createElement(u.S,{htmlFor:"safety_quiz_answer"},"Safety quiz answer"),a.a.createElement(u.M,{id:"safety_quiz_answer",name:"safety_quiz_answer",onChange:e.handleFileUpload,disabled:e.props.submitting,required:!0})),a.a.createElement(u.D,null,a.a.createElement(u.S,{htmlFor:"personal_declaration"},"Personal declaration"),a.a.createElement(u.M,{id:"personal_declaration",name:"personal_declaration",onChange:e.handleFileUpload,disabled:e.props.submitting,required:!0})),a.a.createElement(u.D,null,a.a.createElement(u.e,{disabled:e.props.submitting,onClick:e.handleSimpleSubmit,shape:"pill",type:"submit",color:"dark",variant:"outline",block:!0},a.a.createElement(f.b,{submitting:e.props.submitting}),"Create Worker")),e.state.error?a.a.createElement("p",null,e.state.error):null))))))})),e}return n}(r.Component);t.default=Object(l.b)((function(e){return{contractor:e.currentUser.id}}),(function(e){return{getProfileFetch:function(){return e(Object(c.j)())}}}))(Object(f.c)(I))}}]);
//# sourceMappingURL=22.main.js.map