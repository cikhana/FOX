(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{745:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(37),c=r(635),i=r.n(c),l=r(35),u=r(10),s=r(22),p=r(648),m=r(27);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r,n,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,a)}function g(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){y(o,n,a,c,i,"next",e)}function i(e){y(o,n,a,c,i,"throw",e)}c(void 0)}))}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var a=O(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return E(this,r)}}function E(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D=new s.a,S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(r,e);var t=k(r);function r(){var e;w(this,r);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return _(j(e=t.call.apply(t,[this].concat(o))),"state",{description:"",created:"",last_resolved:"",status:"",project:"",manager:"",error:"",filename:"",file_id:"",current_worker_id:"",current_worker_info:""}),_(j(e),"handleChange",(function(t){e.setState(_({},t.target.name,t.target.value))})),_(j(e),"handleWorkerSelect",(function(t){e.state.current_worker_id===t.target.name?e.setState({current_worker_id:""}):e.setState({current_worker_id:t.target.name})})),_(j(e),"handleSubmit",function(){var t=g(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),e.props.changeSubmitState(),"Rejected"!==e.state.status||e.state.description){t.next=6;break}e.setState({error:"Rejections reason was not provided! Please, specify the rejection reason!"}),t.next=14;break;case 6:return e.formData=e.state,delete e.formData.error,delete e.formData.created,delete e.formData.last_resolved,delete e.formData.current_worker_id,delete e.formData.current_worker_info,t.next=14,D.patchEntityOf("approvals",e.props.match.params.id,e.formData).then((function(){e.props.history.goBack()})).catch((function(t){console.error(t),e.setState({error:"Project update failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})})).finally((function(){return e.props.changeSubmitState()}));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),_(j(e),"downloadFile",function(){var t=g(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({filename:r.target.value,file_id:r.target.name},(function(){D.downloadDocument(e.state.file_id).then((function(t){var r=window.URL.createObjectURL(new Blob([t])),n=document.createElement("a");n.href=r;var a=e.state.filename.split("/").pop();n.setAttribute("download",a),document.body.appendChild(n),n.click(),n.parentNode.removeChild(n)})).catch((function(e){console.error("File download failed!"),console.error(e)}))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),_(j(e),"componentDidMount",g(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().then((function(){return D.getDetailsOf("approvals",e.props.match.params.id)})).then((function(t){return e.setState(h({},t),g(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.props.getDocumentList({params:{project_id:e.state.project},additional:!0,signal:e.abortController.signal}),e.props.getWorkerList({params:{project_id:e.state.project},additional:!1,signal:e.abortController.signal})]);case 2:case"end":return t.stop()}}),t)}))))})).catch((function(e){console.log(e)})).finally((function(){return e.props.changeLoadingState()}));case 2:case"end":return t.stop()}}),t)})))),_(j(e),"componentWillUnmount",g(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.abortController.abort(),t.next=3,e.props.clearList();case 3:case"end":return t.stop()}}),t)})))),_(j(e),"abortController",new window.AbortController),_(j(e),"render",(function(){return a.a.createElement(u.cb,null,a.a.createElement(u.r,null,a.a.createElement(u.g,null,a.a.createElement(u.j,null,a.a.createElement(u.l,null,"Attached Documents")),a.a.createElement(u.h,null,a.a.createElement(m.d,{loading:e.props.loading},e.props.documents?e.props.documents.map((function(t,r){return a.a.createElement(a.a.Fragment,{key:r},a.a.createElement("h6",null,t.name),t.url_to_doc?a.a.createElement(u.T,{key:"dl-".concat(t.id),href:t.url_to_doc,target:"_blank",className:"btn btn-ghost-primary"},"Open this document in Google Docs"):a.a.createElement(u.e,{variant:"outline",color:"primary",key:"cb-".concat(t.id),id:t.id,name:t.id,value:t.filename,onClick:e.downloadFile},"Download document"))})):a.a.createElement("p",null,"There was no documents attached to this project.")))),a.a.createElement(u.g,null,a.a.createElement(u.j,null,a.a.createElement(u.l,null,"Workers")),a.a.createElement(u.h,null,a.a.createElement(m.d,{loading:e.props.loading},e.props.workers?e.props.workers.map((function(t,r){return a.a.createElement(u.g,{key:"card-".concat(r),className:"mb-0"},a.a.createElement(u.h,{key:"cbody-".concat(r)},a.a.createElement("h5",{key:"h5-".concat(r),className:"m-0 p-0"},t.name),a.a.createElement("h6",{key:"h6-".concat(r),className:"m-0 p-0"},t.position_in_company),a.a.createElement(u.e,{key:"btn-".concat(r),block:!0,color:"link",className:"text-left m-0 p-0",id:t.id,value:t.id,name:t.id,onClick:e.handleWorkerSelect},"Display Details"),a.a.createElement(u.s,{key:"clps-".concat(r),show:e.state.current_worker_id===t.id.toString()},a.a.createElement(p.d,{workerId:t.id}))))})):a.a.createElement("p",null,"There was no workers assigned to this project.")))),a.a.createElement(u.g,null,a.a.createElement(u.h,null,a.a.createElement(u.C,{onSubmit:e.handleSubmit},a.a.createElement(i.a,null),a.a.createElement(u.D,null,a.a.createElement(u.S,{htmlFor:"description"},"Comments:"),a.a.createElement(u.pb,{id:"description",name:"description",value:e.state.description?e.state.description:"",onChange:e.handleChange,readOnly:e.props.submitting})),a.a.createElement(u.D,null,a.a.createElement(u.e,{className:"mr-3",shape:"pill",type:"submit",name:"status",value:"Approved",color:"success",variant:"outline",onClick:e.handleChange,disabled:e.props.submitting},a.a.createElement(m.b,{submitting:e.props.submitting}),"Approve"),a.a.createElement(u.e,{shape:"pill",type:"submit",name:"status",value:"Rejected",color:"danger",variant:"outline",onClick:e.handleChange,disabled:e.props.submitting},a.a.createElement(m.b,{submitting:e.props.submitting}),"Reject")),e.state.error?a.a.createElement("p",null,e.state.error):null)))))})),e}return r}(n.Component);t.default=Object(o.b)((function(e){return{documents:e.additionalEntityListTable.tableData,workers:e.entityListTable.tableData}}),(function(e){return{getProfileFetch:function(){return e(Object(l.j)())},getDocumentList:function(t){var r=f({},t);return e(Object(l.h)(h({},r)))},getWorkerList:function(t){var r=f({},t);return e(Object(l.m)(h({},r)))},clearList:function(){return e(Object(l.c)())}}}))(Object(m.c)(S))}}]);
//# sourceMappingURL=25.main.js.map