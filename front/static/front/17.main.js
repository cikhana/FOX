(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{670:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n(1),a=n.n(r),o=n(165),c=n(29);n(95);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var a=f(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=new c.a,_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(n,e);var t=s(n);function n(){var e;i(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return p(h(e=t.call.apply(t,[this].concat(c))),"state",{items:[],show:!1}),p(h(e),"handleClick",(function(){e.setState({show:!e.state.show})})),p(h(e),"componentDidMount",(function(){d.getEntityList("activities",{project_id:e.props.projectId}).then((function(t){e.setState({items:t})})).catch((function(e){return console.log(e)}))})),p(h(e),"render",(function(){var t=e.state,n=t.items,r=t.show;return console.log(e.state),a.a.createElement(o.f,null,a.a.createElement(o.i,null,a.a.createElement("strong",null,"Activity log"),a.a.createElement(o.e,{color:"link",onClick:e.handleClick},r?"Hide":"Show"),a.a.createElement(o.m,{show:r},a.a.createElement(o.g,null,a.a.createElement(o.N,{flush:!0},n?n.map((function(e){return a.a.createElement(o.O,{key:e.id},e.message)})):null)))))})),e}return n}(r.Component)},749:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(95),c=n(632),l=n.n(c),i=n(165),u=n(166),s=n(29),m=n(670);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n,r,a,o,c){try{var l=e[o](c),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,a)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){d(o,r,a,c,l,"next",e)}function l(e){d(o,r,a,c,l,"throw",e)}c(void 0)}))}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var a=w(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=new s.a,O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(n,e);var t=k(n);function n(){var e;b(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return v(E(e=t.call.apply(t,[this].concat(o))),"state",{name:"",description:"",start_date:"",start_time:"",end_date:"",end_time:"",company:e.props.company,contractor:"-1",work_at_height:!1,lifting_work:!1,confined_space:!1,hot_work:!1,chemical_handling:!1,work_alone:!1,work_at_sensitive_area:!1,cold_work:!1,error:!1}),v(E(e),"handleChange",(function(t){e.setState(v({},t.target.name,t.target.value))})),v(E(e),"handleCheck",(function(t){e.setState(v({},t.target.name,t.target.checked))})),v(E(e),"handleSubmit",function(){var t=_(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(parseInt(e.state.contractor)<0)){t.next=5;break}e.setState({error:"Contractor was not selected! Please, choose contractor form the list"}),t.next=9;break;case 5:return e.formData=e.state,delete e.formData.error,t.next=9,C.updateEntityOf("projects",e.props.match.params.id,e.formData).then((function(){e.props.history.goBack()}),(function(t){console.error(t),e.setState({error:"Project update failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),v(E(e),"componentDidMount",_(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().then((function(){return C.getDetailsOf("projects",e.props.match.params.id)})).then((function(t){return e.setState(p({},t))})).then((function(){return e.props.getContractorList()})).then((function(){return e.props.setProjectId(e.props.match.params.id)}));case 2:case"end":return t.stop()}}),t)})))),v(E(e),"render",(function(){var t;return a.a.createElement(i.V,null,a.a.createElement(i.l,null,"CliAdm"===e.props.role?a.a.createElement(i.w,{onSubmit:e.handleSubmit},a.a.createElement(l.a,null),a.a.createElement(i.x,null,a.a.createElement(i.L,{htmlFor:"name"},"Name"),a.a.createElement(i.E,{id:"name",name:"name",placeholder:"Enter project name",value:e.state.name,onChange:e.handleChange,required:!0})),a.a.createElement(i.x,null,a.a.createElement(i.L,{htmlFor:"description"},"Description"),a.a.createElement(i.ib,{id:"descrption",name:"description",placeholder:"Please, enter short description of the projet",value:e.state.description,onChange:e.handleChange,required:!0})),a.a.createElement(i.x,null,a.a.createElement(i.V,null,a.a.createElement(i.l,{lg:"6"},a.a.createElement(i.L,{htmlFor:"start_date"},"Start Date"),a.a.createElement(i.E,{type:"date",id:"start_date",name:"start_date",placeholder:"date",value:e.state.start_date,onChange:e.handleChange,required:!0})),a.a.createElement(i.l,{lg:"6"},a.a.createElement(i.L,{htmlFor:"start_time"},"Start Time"),a.a.createElement(i.E,{type:"time",id:"start_time",name:"start_time",value:e.state.start_time,onChange:e.handleChange,required:!0})))),a.a.createElement(i.x,null,a.a.createElement(i.V,null,a.a.createElement(i.l,{lg:"6"},a.a.createElement(i.L,{htmlFor:"end_date"},"End Date"),a.a.createElement(i.E,{type:"date",id:"end_date",name:"end_date",placeholder:"date",value:e.state.end_date,onChange:e.handleChange,required:!0})),a.a.createElement(i.l,{lg:"6"},a.a.createElement(i.L,{htmlFor:"end_time"},"End Time"),a.a.createElement(i.E,{type:"time",id:"end_time",name:"end_time",value:e.state.end_time,onChange:e.handleChange,required:!0})))),a.a.createElement(i.x,null,a.a.createElement(i.L,{htmlFor:"contractor"},"Contractor"),a.a.createElement(i.W,{id:"contractor",name:"contractor",placeholder:"Choose contractor",value:e.state.contractor,onChange:e.handleChange,required:!0},a.a.createElement("option",{key:"-1",value:"-1",disabled:!0},"Choose contractor"),e.props.options?e.props.options.map((function(e){return a.a.createElement("option",{key:e.id,value:e.id},e.username)})):null)),a.a.createElement(i.x,null,a.a.createElement(i.M,{className:"btn btn-outline-dark mr-3",to:"".concat(e.props.match.url,"/ptw")},"See Permission To Work"),a.a.createElement(i.M,{className:"btn btn-outline-dark",to:"".concat(e.props.match.url,"/documents")},"Attached Documents")),a.a.createElement(i.x,{variant:"checkbox",className:"checkbox"},a.a.createElement(i.x,null,a.a.createElement(i.F,{id:"work_at_height",name:"work_at_height",value:"work_at_height",checked:e.state.work_at_height,onChange:e.handleCheck}),a.a.createElement(i.L,{variant:"checkbox",className:"form-check-label",htmlFor:"work_at_height"},"Work at height")),a.a.createElement(i.x,null,a.a.createElement(i.F,{id:"lifting_work",name:"lifting_work",value:"lifting_work",checked:e.state.lifting_work,onChange:e.handleCheck}),a.a.createElement(i.L,{variant:"checkbox",className:"form-check-label",htmlFor:"lifting_work"},"Lifting work")),a.a.createElement(i.x,null,a.a.createElement(i.F,(v(t={id:"confined_space",name:"confined_space",value:"confined_space"},"value","confined_space"),v(t,"checked",e.state.confined_space),v(t,"onChange",e.handleCheck),t)),a.a.createElement(i.L,{variant:"checkbox",className:"form-check-label",htmlFor:"confined_space"},"Confined space")),a.a.createElement(i.x,null,a.a.createElement(i.F,{id:"hot_work",name:"hot_work",value:"hot_work",checked:e.state.hot_work,onChange:e.handleCheck}),a.a.createElement(i.L,{variant:"checkbox",className:"form-check-label",htmlFor:"hot_work"},"Hot work")),a.a.createElement(i.x,null,a.a.createElement(i.F,{id:"chemical_handling",name:"chemical_handling",value:"chemical_handling",checked:e.state.chemical_handling,onChange:e.handleCheck}),a.a.createElement(i.L,{variant:"checkbox",className:"form-check-label",htmlFor:"chemical_handling"},"Chemical handling")),a.a.createElement(i.x,null,a.a.createElement(i.F,{id:"work_alone",name:"work_alone",value:"work_alone",checked:e.state.work_alone,onChange:e.handleCheck}),a.a.createElement(i.L,{variant:"checkbox",className:"form-check-label",htmlFor:"work_alone"},"Work alone")),a.a.createElement(i.x,null,a.a.createElement(i.F,{id:"work_at_sensitive_area",name:"work_at_sensitive_area",value:"work_at_sensitive_area",checked:e.state.work_at_sensitive_area,onChange:e.handleCheck}),a.a.createElement(i.L,{variant:"checkbox",className:"form-check-label",htmlFor:"work_at_sensitive_area"},"Work at sensitive area")),a.a.createElement(i.x,null,a.a.createElement(i.F,{id:"cold_work",name:"cold_work",value:"cold_work",checked:e.state.cold_work,onChange:e.handleCheck}),a.a.createElement(i.L,{variant:"checkbox",className:"form-check-label",htmlFor:"cold_work"},"Cold work"))),a.a.createElement(i.x,null,a.a.createElement(i.e,{type:"submit",color:"success",variant:"outline",block:!0},"Save changes")),e.state.error?a.a.createElement("p",null,e.state.error):null):a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{projectId:e.props.match.params.id}),a.a.createElement(i.u,{ratio:"16by9"},a.a.createElement("iframe",{src:"".concat(window.location.origin,"/api/ptw/").concat(e.props.match.params.id)})))))})),e}return n}(r.Component);t.default=Object(o.b)((function(e){return{company:e.currentUser.company,options:e.entityListTable.tableData,role:e.currentUser.role}}),(function(e){return{getProfileFetch:function(){return e(Object(u.g)())},getContractorList:function(){return e(Object(u.d)())},setProjectId:function(t){return e(Object(u.m)(t))}}}))(O)}}]);
//# sourceMappingURL=17.main.js.map