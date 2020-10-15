(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{768:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(38),c=r(44),i=r(10),s=r(635),l=r.n(s),u=r(22),p=r(98);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r,n,o,a,c){try{var i=e[a](c),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,o)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){y(a,n,o,c,i,"next",e)}function i(e){y(a,n,o,c,i,"throw",e)}c(void 0)}))}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=j(e);if(t){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return k(this,r)}}function k(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=new u.a,S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(r,e);var t=v(r);function r(){var e;g(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return E(O(e=t.call.apply(t,[this].concat(a))),"state",{workers:[],responsible_person:-1,error:!1}),E(O(e),"handleChange",(function(t){e.setState(E({},t.target.name,t.target.value))})),E(O(e),"handleCheck",(function(t){var r=e.state.workers;t.target.checked?r.push(parseInt(t.target.value)):r.splice(r.indexOf(parseInt(t.target.value)),1),e.setState({workers:r})})),E(O(e),"handleSubmit",function(){var t=d(regeneratorRuntime.mark((function t(r){var n,o,a,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),n=e.state,o=n.workers,a=n.responsible_person,c=h({responsible_person:a},c={workers:o}),t.next=6,P.patchEntityOf("projects",e.props.match.params.id,c).then((function(){e.props.history.goBack()}),(function(t){console.error(t),e.setState({error:"Workers assignment failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),E(O(e),"componentDidMount",d(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().then((function(){return e.props.getWorkerList({signal:e.abortController.signal})})).then((function(){return P.getDetailsOf("projects",e.props.match.params.id)})).then((function(t){return e.setState({workers:t.workers,responsible_person:t.responsible_person})})).then((function(){return e.props.changeLoadingState()}));case 2:case"end":return t.stop()}}),t)})))),E(O(e),"componentWillUnmount",d(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.abortController.abort(),t.next=3,e.props.clearList();case 3:case"end":return t.stop()}}),t)})))),E(O(e),"abortController",new window.AbortController),E(O(e),"render",(function(){return o.a.createElement(i.bb,null,o.a.createElement(i.q,null,o.a.createElement(i.f,null,o.a.createElement(i.i,null,o.a.createElement(i.k,null,"Personnel Management")),o.a.createElement(i.g,null,o.a.createElement(p.c,{loading:e.props.loading},o.a.createElement(i.B,{onSubmit:e.handleSubmit},o.a.createElement(l.a,null),o.a.createElement(i.C,null,o.a.createElement(i.k,null,"Please, choose the responsible person among your workers:"),o.a.createElement(i.cb,{id:"responsible_person",name:"responsible_person",placeholder:"Choose responsible person",value:e.state.responsible_person,onChange:e.handleChange,required:!0},o.a.createElement("option",{key:"-1",value:"-1",disabled:!0},"Choose responsible person"),e.props.workers?e.props.workers.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)})):null)),o.a.createElement(i.C,null,o.a.createElement(i.k,null,"Please, choose workers you want to assign for this project:"),e.props.workers?e.props.workers.map((function(t){var r=e.state.workers;return o.a.createElement(i.C,{key:"fg-".concat(t.id),className:"d-flex"},o.a.createElement(i.nb,{key:"cb-".concat(t.id),className:"mr-2",id:t.id,name:t.id,value:t.id,shape:"pill",variant:"3d",color:"success",size:"sm",onChange:e.handleCheck,checked:r.includes(t.id)}),o.a.createElement(i.R,{key:"lb-".concat(t.id),variant:"checkbox",className:"form-check-label mr-4",htmlFor:t.id},t.name))})):null),e.state.error?o.a.createElement("p",null,e.state.error):null))),o.a.createElement(i.h,null,o.a.createElement(i.e,{active:!e.props.loading,shape:"pill",type:"submit",color:"dark",variant:"outline",onClick:e.handleSubmit,block:!0},"Save changes")))))})),e}return r}(n.Component);t.default=Object(c.b)((function(e){return{workers:e.entityListTable.tableData,company:e.currentUser.company,contractor:e.currentUser.id}}),(function(e){return{getProfileFetch:function(){return e(Object(a.i)())},getWorkerList:function(t){var r=f({},t);return e(Object(a.l)(h({},r)))},clearList:function(){return e(Object(a.b)())}}}))(Object(p.b)(S))}}]);
//# sourceMappingURL=38.main.js.map