(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{643:function(e,t,n){"use strict";n.d(t,"e",(function(){return W})),n.d(t,"g",(function(){return ae})),n.d(t,"d",(function(){return i})),n.d(t,"h",(function(){return u})),n.d(t,"f",(function(){return h})),n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return he}));var r=n(1),o=n.n(r),a=n(10),c=function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},l=function(e){return o.a.createElement(a.D,{show:e.show},o.a.createElement(a.cb,null,o.a.createElement(a.r,{md:"6"},o.a.createElement(a.L,{id:e.inputInfo,name:e.inputInfo,placeholder:c(e.inputInfo),value:e.inputValue,onChange:e.handleChange,disabled:e.disabled,readOnly:e.readOnly,required:e.required})),o.a.createElement(a.r,{md:"6"},o.a.createElement(a.S,{htmlFor:e.uploadInfo},c(e.uploadInfo)),o.a.createElement(a.M,{id:e.uploadInfo,name:e.uploadInfo,onChange:e.handleFileUpload,disabled:e.disabled,required:e.required}))))};l.defaultProps={required:!0};var i=l,u=function(e){return o.a.createElement(a.D,null,o.a.createElement(a.db,{id:e.inputInfo,name:e.inputInfo,placeholder:(t=e.inputInfo,"Choose ".concat(function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}(t)," info")),value:e.inputValue,onChange:e.handleChange,readOnly:e.readOnly,disabled:e.disabled,required:!0},e.options.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.position)}))));var t},s=n(739);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e,t){if(t)return t.find((function(t){return t.value===e}))},b={menuList:function(e,t){return f(f({},e),{},{position:"relative",zIndex:20})},option:function(e,t){return f(f({},e),{},{position:"relative",zIndex:"20",color:"#768192"})},container:function(e,t){return f(f({},e),{},{position:"relative",zIndex:"20"})},singleValue:function(e,t){return f(f({},e),{},{color:"#768192"})}},h=function(e){return o.a.createElement(a.D,{disabled:e.disabled},o.a.createElement(s.a,{id:e.inputInfo,name:e.inputInfo,placeholder:(t=e.inputInfo,"Choose ".concat(function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}(t))),value:d(e.inputValue,e.options),onChange:e.handleChange,options:e.options,styles:b,required:!0}));var t},y=function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},E=function(e){return o.a.createElement(a.D,null,o.a.createElement(a.cb,null,o.a.createElement(a.r,{md:"5"},o.a.createElement(a.S,{htmlFor:e.inputInfo},y(e.inputInfo)),o.a.createElement(a.L,{id:e.inputInfo,name:e.inputInfo,placeholder:(t=e.inputInfo,"Enter ".concat(y(t)," info")),value:e.inputValue,onChange:e.handleChange})),o.a.createElement(a.r,{md:"2",className:"d-flex align-items-center"},o.a.createElement(a.e,{variant:"outline",color:"info",id:e.downloadValue,name:e.uploadInfo,value:e.downloadValue,onClick:e.downloadFile},"Download scan")),o.a.createElement(a.r,{md:"5"},o.a.createElement(a.S,{htmlFor:e.uploadInfo},"New ".concat(y(e.uploadInfo))),o.a.createElement(a.M,{id:e.uploadInfo,name:e.uploadInfo,onChange:e.handleFileUpload}))));var t},g=function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},w=function(e){return o.a.createElement(a.D,null,o.a.createElement(a.cb,null,o.a.createElement(a.r,{md:"1"},o.a.createElement(a.S,{htmlFor:e.inputInfo},g(e.inputInfo))),o.a.createElement(a.r,{md:"2"},o.a.createElement(a.e,{variant:"outline",color:"info",id:e.downloadValue,name:e.uploadInfo,value:e.downloadValue,onClick:e.downloadFile},e.buttonText?e.buttonText:"Download scan")),o.a.createElement(a.r,{md:"5"},o.a.createElement(a.S,{htmlFor:e.uploadInfo},"New ".concat(g(e.uploadInfo))),o.a.createElement(a.M,{id:e.uploadInfo,name:e.uploadInfo,onChange:e.handleFileUpload}))))},v=(n(652),n(37)),O=n(64),j=n(636),P=n.n(j),_=n(35);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?I(e):t}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(l,e);var t,n,r,c=D(l);function l(){var e;S(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return F(I(e=c.call.apply(c,[this].concat(n))),"state",{showPassword:!1}),F(I(e),"toggleShowPassword",(function(){e.setState({showPassword:!e.state.showPassword})})),e}return t=l,(n=[{key:"render",value:function(){return this.state.showPassword?o.a.createElement(a.D,null,o.a.createElement(a.N,null,o.a.createElement(a.P,null,o.a.createElement(a.Q,{className:"fox-input-before".concat(this.props.submitError?"-invalid":"")},o.a.createElement(O.a,{name:"cilLockLocked"}))),o.a.createElement(a.L,{id:this.props.inputName,name:this.props.inputName,placeholder:this.props.placeholder,value:this.props.password,onChange:this.props.handleChange,invalid:this.props.submitError,required:!0}),o.a.createElement(a.O,null,o.a.createElement(a.Q,{onClick:this.toggleShowPassword,className:"fox-input-after".concat(this.props.submitError?"-invalid":"")},o.a.createElement(O.a,{name:"cilLowVision"}))))):o.a.createElement(a.D,null,o.a.createElement(a.N,null,o.a.createElement(a.P,null,o.a.createElement(a.Q,{className:"fox-input-before".concat(this.props.submitError?"-invalid":"")},o.a.createElement(O.a,{name:"cilLockLocked"}))),o.a.createElement(a.L,{type:"password",id:this.props.inputName,name:this.props.inputName,placeholder:this.props.placeholder,value:this.props.password,onChange:this.props.handleChange,invalid:this.props.submitError,required:!0}),o.a.createElement(a.O,null,o.a.createElement(a.Q,{onClick:this.toggleShowPassword,className:"fox-input-after".concat(this.props.submitError?"-invalid":"")},o.a.createElement(O.a,{name:"cilMagnifyingGlass"})))))}}])&&k(t.prototype,n),r&&k(t,r),l}(r.Component);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=G(e);if(t){var o=G(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Q(this,n)}}function Q(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?H(e):t}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(l,e);var t,n,r,c=z(l);function l(){var e;M(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return J(H(e=c.call.apply(c,[this].concat(n))),"state",{username:"",password:""}),J(H(e),"handleChange",(function(t){e.setState(J({},t.target.name,t.target.value))})),J(H(e),"showForgetPasswordModal",(function(){e.props.updateModal({modalType:"forgetPasswordModal"})})),J(H(e),"handleSubmit",(function(t){var n=e.state,r=n.username,o=n.password;t.preventDefault(),e.props.userLoginFetch({username:r,password:o})})),e}return t=l,(n=[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return o.a.createElement(a.cb,{alignHorizontal:"center"},o.a.createElement(a.r,{md:"6"},o.a.createElement(a.t,{fluid:!0},o.a.createElement(a.cb,{className:"mb-2"},o.a.createElement(a.r,{md:"8",className:"mx-auto"},o.a.createElement(a.K,{width:"100%",src:"/static/front/images/signed-logo.png",className:"mb-2"}))),o.a.createElement(a.cb,{className:"mt-2 mb-2",alignHorizontal:"center"},o.a.createElement(a.r,{className:"mx-auto"},o.a.createElement("h1",{className:"fox-login-welcome"},"Welcome to FOX!"),o.a.createElement("p",{className:"fox-login-welcome"}," Please log in to your account."))),o.a.createElement(a.cb,{className:"mt-2 mb-2"},o.a.createElement(a.r,{className:"mx-auto"},o.a.createElement(a.C,{onSubmit:this.handleSubmit},o.a.createElement(P.a,null),o.a.createElement(a.D,null,o.a.createElement(a.N,null,o.a.createElement(a.P,null,o.a.createElement(a.Q,{invalid:!0,className:"fox-input-before".concat(this.props.loginError?"-invalid":"")},o.a.createElement(O.a,{name:"cilUser"}))),o.a.createElement(a.L,{id:"username",name:"username",placeholder:"Username",value:t,onChange:this.handleChange,invalid:this.props.loginError,required:!0}),o.a.createElement(a.O,null,o.a.createElement(a.Q,{className:"fox-input-after".concat(this.props.loginError?"-invalid":"")},o.a.createElement(O.a,{name:"blank"}))))),o.a.createElement(T,{inputName:"password",password:n,placeholder:"Password",submitError:this.props.loginError,handleChange:this.handleChange}),this.props.loginError?o.a.createElement("p",{className:"fox-form-invalid-feedback"},"The username or password you have entered is invalid. Please try again."):null,o.a.createElement(a.D,null,o.a.createElement(a.e,{shape:"pill",type:"submit",value:"Submit",color:"dark",block:!0},"Login"))),o.a.createElement(a.e,{type:"link",size:"sm",className:"align-self-center",onClick:this.showForgetPasswordModal},"Forgot password?"))))))}}])&&A(t.prototype,n),r&&A(t,r),l}(r.Component),W=Object(v.b)((function(e){return{currentUser:e.currentUser,loginError:e.loginError}}),(function(e){return{userLoginFetch:function(t){return e(Object(_.u)(t))},updateModal:function(t){var n=t.modalType,r=U(t,["modalType"]);return e(Object(_.t)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({modalType:n},r)))}}}))(K);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ne(e);if(t){var o=ne(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ee(this,n)}}function ee(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?te(e):t}function te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var oe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(l,e);var t,n,r,c=$(l);function l(){var e;B(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return re(te(e=c.call.apply(c,[this].concat(n))),"state",{username:e.props.username,password:"",password2:""}),re(te(e),"handleChange",(function(t){e.setState(re({},t.target.name,t.target.value),(function(){e.state.password!==e.state.password2?e.props.registerError():e.props.allowRegistration(e.props.registrationToken)}))})),re(te(e),"handleSubmit",(function(t){t.preventDefault(),e.props.userRegisterFetch({password:e.state.password,token:e.props.registrationToken,is_active:!0})})),e}return t=l,(n=[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password,r=e.password2;return o.a.createElement(a.cb,{alignHorizontal:"center"},o.a.createElement(a.r,{md:"6"},o.a.createElement(a.t,{fluid:!0},o.a.createElement(a.cb,{className:"mb-2"},o.a.createElement(a.r,{md:"8",className:"mx-auto"},o.a.createElement(a.K,{width:"100%",src:"/static/front/images/signed-logo.png",className:"mb-2"}))),o.a.createElement(a.cb,{className:"mt-2 mb-2",alignHorizontal:"center"},o.a.createElement(a.r,{className:"mx-auto"},o.a.createElement("h1",{className:"fox-login-welcome"},"Welcome to FOX!"),o.a.createElement("p",{className:"fox-login-welcome"}," You are trying to register as ",o.a.createElement("strong",null,t),".  Please, fill this form to finish your registration."))),o.a.createElement(a.cb,{className:"mt-2 mb-2"},o.a.createElement(a.r,{className:"mx-auto"},o.a.createElement(a.C,{onSubmit:this.handleSubmit},o.a.createElement(P.a,null),o.a.createElement(a.D,null,o.a.createElement(T,{inputName:"password",password:n,placeholder:"Password",submitError:this.props.registerErrorFlag,handleChange:this.handleChange}),o.a.createElement(T,{inputName:"password2",password:r,placeholder:"Confirm password",submitError:this.props.registerErrorFlag,handleChange:this.handleChange}),this.props.registerErrorFlag?o.a.createElement("p",{className:"fox-form-invalid-feedback"},"The suggested password is inappropriate. Please, Try to choose more sophisticated password and try again."):null),o.a.createElement(a.D,null,o.a.createElement(a.e,{shape:"pill",block:!0,type:"submit",color:"dark",disabled:this.state.password!==this.state.password2},"Register"))))))))}}])&&Y(t.prototype,n),r&&Y(t,r),l}(r.Component),ae=Object(v.b)((function(e){return{registerErrorFlag:e.registerError,registrationToken:e.registrationToken,errorMessage:e.errorMessage}}),(function(e){return{userRegisterFetch:function(t){return e(Object(_.v)(t))},registerError:function(){return e(Object(_.r)())},allowRegistration:function(t){return e(Object(_.a)(t))}}}))(oe);function ce(e){return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function se(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=me(e);if(t){var o=me(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return pe(this,n)}}function pe(e,t){return!t||"object"!==ce(t)&&"function"!=typeof t?fe(e):t}function fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(l,e);var t,n,r,c=se(l);function l(){var e;le(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return de(fe(e=c.call.apply(c,[this].concat(n))),"state",{active_option:e.props.active_option}),de(fe(e),"handleCheck",(function(t){e.setState({active_option:t})})),e}return t=l,(n=[{key:"render",value:function(){var e=this,t=this.state.active_option;return o.a.createElement(a.D,null,o.a.createElement(a.D,null,o.a.createElement(a.f,null,o.a.createElement(a.e,{className:"fox-option-choice-button",onClick:function(){return e.handleCheck("card_number_id")},shape:"pill",disabled:this.props.submitting,color:"dark",variant:"outline",active:"card_number_id"===t},"Card Number ID"),o.a.createElement(a.e,{className:"fox-option-choice-button",onClick:function(){return e.handleCheck("passport")},shape:"pill",disabled:this.props.submitting,color:"dark",variant:"outline",active:"passport"===t},"Passport"))),o.a.createElement(a.s,{show:"card_number_id"===t},o.a.cloneElement(this.props.optionA,{required:"card_number_id"===t})),o.a.createElement(a.s,{show:"passport"===t},o.a.cloneElement(this.props.optionB,{required:"passport"===t})))}}])&&ie(t.prototype,n),r&&ie(t,r),l}(r.Component);be.defaultProps={active_option:"card_number_id"};var he=be},652:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(10);t.a=function(e){return o.a.createElement(a.g,null,o.a.createElement(a.h,null,o.a.createElement(a.D,{key:"fg-".concat(e.document.id)},o.a.createElement(a.S,{key:"lb-".concat(e.document.id),htmlFor:e.document.id},o.a.createElement("h5",null,e.document.name)," "),e.document.url_to_doc?o.a.createElement(a.cb,null,o.a.createElement(a.r,null,o.a.createElement(a.T,{key:"dl-".concat(e.document.id),href:e.document.url_to_doc,target:"_blank",className:"btn btn-ghost-primary",disabled:e.disabled},"Open this document in Google Docs"))):o.a.createElement(a.cb,null,o.a.createElement(a.r,{md:"3"},o.a.createElement(a.e,{variant:"outline",color:"primary",key:"cb-".concat(e.document.id),id:e.document.id,name:e.document.id,value:e.document.filename,onClick:e.downloadFile,disabled:e.disabled},"Download template for this document")),o.a.createElement(a.r,{md:"5"},o.a.createElement(a.S,{key:"lb-".concat(e.document.id),htmlFor:e.document.id},o.a.createElement("strong",null,"Upload filled up document:")," "),o.a.createElement(a.M,{key:"of-".concat(e.document.id),id:"file-".concat(e.document.id),name:"".concat(e.document.id),onChange:e.handleFileUpload,disabled:e.disabled}))))))}}}]);
//# sourceMappingURL=2.main.js.map