(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{669:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=[{value:-1,label:"Choose worker position"},{value:"Weld",label:"Welder"},{value:"Fit",label:"Fitter"},{value:"Help",label:"Helper"},{value:"Rig",label:"Rigger"},{value:"SafeOff",label:"Safety Officer"},{value:"Plumb",label:"Plumber"},{value:"Tech",label:"Technician"},{value:"Electr",label:"Electrician"},{value:"FlrInst",label:"Flooring Installer"},{value:"HVACInst",label:"HVAC Installer"},{value:"InsInst",label:"Insulation Installer"},{value:"Surv",label:"Surveyor"},{value:"BrcMans",label:"Brick Manson"},{value:"Roof",label:"Roofer"},{value:"SiteSuper",label:"Site Supervisor"},{value:"Other",label:"Other"}],a=[{id:-1,position:"Choose trade competency"},{id:"Civ",position:"Civil"},{id:"Electr",position:"Electrical"},{id:"Mech",position:"Mechanical"},{id:"Infra",position:"Infra"},{id:"Gen",position:"General"},{id:"Safe",position:"Safety"},{id:"Secur",position:"Security"}]},752:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(632),l=n.n(o),i=n(95),c=n(165),u=n(166),s=n(26),p=n(640),f=n(669);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t,n,r,a,o,l){try{var i=e[o](l),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){b(o,r,a,l,i,"next",e)}function i(e){b(o,r,a,l,i,"throw",e)}l(void 0)}))}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var a=S(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return C(this,n)}}function C(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=new s.a,I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(n,e);var t=g(n);function n(){var e;_(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return w(E(e=t.call.apply(t,[this].concat(o))),"state",{name:"",contractor:e.props.contractor,birthday:"",phone_number:"",card_number_id:"",license_number:"",license_scan:"",passport:"",passport_scan:"",safety_green_card:"",safety_green_card_scan:"",position_in_company:-1,safety_quiz_answer:"",personal_declaration:"",submitCallback:"",registration_number:"",trade_competency:-1,error:!1}),w(E(e),"handleChange",(function(t){e.setState(w({},t.target.name,t.target.value))})),w(E(e),"handleReactSelect",(function(t,n){e.setState(w({},n.name,t.value))})),w(E(e),"handleFileUpload",(function(t){e.setState(w({},t.target.name,t.target.files[0]))})),w(E(e),"handleSubmit",function(){var t=y(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),-1!==e.state.position_in_company){t.next=5;break}e.setState({error:"Worker position in company was not selected! Please, choose position form the list"}),t.next=15;break;case 5:if(-1!==e.state.trade_competency){t.next=9;break}e.setState({error:"Trade competency was not selected! Please, choose competency form the list"}),t.next=15;break;case 9:return e.requestData=e.state,delete e.requestData.error,e.formData=new FormData,Object.entries(e.requestData).forEach((function(t){var n=d(t,2),r=n[0],a=n[1];e.formData.append(r,a)})),t.next=15,k.createEntityWithFile("workers",e.formData).then((function(t){e.state.submitCallback(t.id)}),(function(t){console.error(t),e.setState({error:"Worker creation failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),w(E(e),"handleSimpleSubmit",(function(t){e.setState({submitCallback:function(t){return e.props.history.goBack()}})})),w(E(e),"handleSubmitWithCompetencies",(function(t){e.setState({submitCallback:function(t){e.props.history.push("/workers/".concat(t,"/competencies/new"))}})})),w(E(e),"componentDidMount",y(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch();case 2:case"end":return t.stop()}}),t)})))),w(E(e),"render",(function(){return a.a.createElement(c.ab,null,a.a.createElement(c.q,null,a.a.createElement(c.f,null,a.a.createElement(c.i,null,a.a.createElement(c.k,null,"New Worker"),a.a.createElement(c.j,null,"Fill up the form below to add a new Worker")),a.a.createElement(c.g,null,a.a.createElement(c.B,{onSubmit:e.handleSubmit},a.a.createElement(l.a,null),a.a.createElement(c.C,null,a.a.createElement(c.J,{id:"name",name:"name",placeholder:"Name",value:e.state.name,onChange:e.handleChange,required:!0})),a.a.createElement(c.C,null,a.a.createElement(c.Q,{htmlFor:"birthday"},"Birthday"),a.a.createElement(c.J,{type:"date",id:"birthday",name:"birthday",value:e.state.birthday,onChange:e.handleChange,required:!0})),a.a.createElement(c.C,null,a.a.createElement(c.J,{id:"phone_number",name:"phone_number",placeholder:"Phone number",value:e.state.phone_number,onChange:e.handleChange})),a.a.createElement(p.e,{options:f.a,inputInfo:"position_in_company",inputValue:e.state.position_in_company,handleChange:e.handleReactSelect}),a.a.createElement(p.g,{options:f.b,inputInfo:"trade_competency",inputValue:e.state.trade_competency,handleChange:e.handleChange}),a.a.createElement(c.C,null,a.a.createElement(c.J,{id:"card_number_id",name:"card_number_id",placeholder:"Card number ID",value:e.state.card_number_id,onChange:e.handleChange,required:!0})),a.a.createElement(p.c,{inputValue:e.state.license_number,handleChange:e.handleChange,handleFileUpload:e.handleFileUpload,inputInfo:"license_number",uploadInfo:"license_scan"}),a.a.createElement(p.c,{inputValue:e.state.passport,handleChange:e.handleChange,handleFileUpload:e.handleFileUpload,inputInfo:"passport",uploadInfo:"passport_scan"}),a.a.createElement(p.c,{inputValue:e.state.safety_green_card,handleChange:e.handleChange,handleFileUpload:e.handleFileUpload,inputInfo:"safety_green_card",uploadInfo:"safety_green_card_scan"}),a.a.createElement(c.C,null,a.a.createElement(c.J,{id:"registration_number",name:"registration_number",placeholder:"Registration number",value:e.state.registration_number,onChange:e.handleChange,required:!0})),a.a.createElement(c.C,null,a.a.createElement(c.Q,{htmlFor:"safety_quiz_answer"},"Safety quiz answer"),a.a.createElement(c.L,{id:"safety_quiz_answer",name:"safety_quiz_answer",onChange:e.handleFileUpload,required:!0})),a.a.createElement(c.C,null,a.a.createElement(c.Q,{htmlFor:"personal_declaration"},"Personal declaration"),a.a.createElement(c.L,{id:"personal_declaration",name:"personal_declaration",onChange:e.handleFileUpload,required:!0})),a.a.createElement(c.C,null,a.a.createElement(c.ab,null,a.a.createElement(c.q,{md:"6"},a.a.createElement(c.e,{onClick:e.handleSimpleSubmit,shape:"pill",type:"submit",color:"dark",variant:"outline",block:!0},"Create Worker")),a.a.createElement(c.q,{md:"6"},a.a.createElement(c.e,{onClick:e.handleSubmitWithCompetencies,shape:"pill",type:"submit",color:"primary",variant:"outline",block:!0},"Create Worker and add special competencies")))),e.state.error?a.a.createElement("p",null,e.state.error):null)))))})),e}return n}(r.Component);t.default=Object(i.b)((function(e){return{contractor:e.currentUser.id}}),(function(e){return{getProfileFetch:function(){return e(Object(u.h)())}}}))(I)}}]);
//# sourceMappingURL=19.main.js.map