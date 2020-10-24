(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{751:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(635),i=n.n(o),c=n(37),u=n(10),l=n(22),s=n(35),p=n(27);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){b(o,r,a,i,c,"next",e)}function c(e){b(o,r,a,i,c,"throw",e)}i(void 0)}))}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var a=w(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=new l.a,C=[{id:-1,position:"Choose manager position"},{id:"SafeMan",position:"Safety Manager"},{id:"SecMan",position:"Security Manager"},{id:"SecOff",position:"Security Officer"},{id:"SiteOwn",position:"Site Owner"},{id:"WorkOwn",position:"Owner of Work"},{id:"SecGrd",position:"Security Guards"}],P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(n,e);var t=O(n);function n(){var e;g(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return S(E(e=t.call.apply(t,[this].concat(o))),"state",{username:"",name:"",email:"",position:-1,company:e.props.company,role:"CliMan",department:"",error:!1}),S(E(e),"handleChange",(function(t){e.setState(S({},t.target.name,t.target.value))})),S(E(e),"handleSubmit",function(){var t=h(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),e.props.changeSubmitState(),!(parseInt(e.state.position)<0)){t.next=6;break}e.setState({error:"Manager Position was not selected! Please, choose position form the list"}),t.next=10;break;case 6:return e.formData=e.state,delete e.formData.error,t.next=10,j.updateEntityOf("managers",e.props.match.params.id,e.formData).then((function(){e.props.history.goBack()})).catch((function(t){console.error(t),e.setState({error:"Manager update failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})})).finally((function(){return e.props.changeSubmitState()}));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),S(E(e),"componentDidMount",h(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().then((function(){return j.getDetailsOf("managers",e.props.match.params.id)})).then((function(t){return e.setState(d({},t))})).catch((function(e){return console.log(e)})).finally((function(){return e.props.changeLoadingState()}));case 2:case"end":return t.stop()}}),t)})))),S(E(e),"render",(function(){return a.a.createElement(u.bb,null,a.a.createElement(u.q,null,a.a.createElement(u.f,null,a.a.createElement(u.i,null,a.a.createElement(u.k,null,"Manager details")),a.a.createElement(u.g,null,a.a.createElement(p.d,{loading:e.props.loading},a.a.createElement(u.B,{onSubmit:e.handleSubmit},a.a.createElement(i.a,null),a.a.createElement(u.C,null,a.a.createElement(u.R,{htmlFor:"username"},"Manager username"),a.a.createElement(u.K,{id:"username",name:"username",placeholder:"Username",value:e.state.username,onChange:e.handleChange,readOnly:e.props.submitting,disabled:e.props.submitting,required:!0})),a.a.createElement(u.C,null,a.a.createElement(u.R,{htmlFor:"name"},"Manager verbose name"),a.a.createElement(u.K,{id:"name",name:"name",placeholder:"Verbose name",value:e.state.name,onChange:e.handleChange,readOnly:e.props.submitting,disabled:e.props.submitting,required:!0})),a.a.createElement(u.C,null,a.a.createElement(u.R,{htmlFor:"email"},"Manager email"),a.a.createElement(u.K,{id:"email",type:"email",name:"email",placeholder:"Email",value:e.state.email,onChange:e.handleChange,readOnly:e.props.submitting,disabled:e.props.submitting,required:!0})),a.a.createElement(u.C,null,a.a.createElement(u.R,{htmlFor:"target_type"},"Manager Position"),a.a.createElement(u.cb,{id:"position",name:"position",placeholder:"Choose position",value:e.state.position,onChange:e.handleChange,readOnly:e.props.submitting,disabled:e.props.submitting,required:!0},C.map((function(e){return a.a.createElement("option",{key:e.id,value:e.id},e.position)})))),a.a.createElement(u.C,null,a.a.createElement(u.R,{htmlFor:"department"},"Manager department"),a.a.createElement(u.K,{id:"department",name:"department",placeholder:"Department",value:e.state.department,onChange:e.handleChange,readOnly:e.props.submitting,disabled:e.props.submitting,required:!0})),a.a.createElement(u.C,null,a.a.createElement(u.e,{disabled:e.props.submitting,shape:"pill",type:"submit",color:"dark",variant:"outline",block:!0},a.a.createElement(p.b,{submitting:e.props.submitting}),"Save changes")),e.state.error?a.a.createElement("p",null,e.state.error):null))))))})),e}return n}(r.Component);t.default=Object(c.b)((function(e){return{company:e.currentUser.company}}),(function(e){return{getProfileFetch:function(){return e(Object(s.j)())}}}))(Object(p.c)(P))}}]);
//# sourceMappingURL=32.main.js.map