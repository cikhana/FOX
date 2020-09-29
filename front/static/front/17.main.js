(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{633:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return v}));var r=n(1),o=n.n(r),a=n(165),c=function(e){return o.a.createElement(a.U,{show:e.danger,onClose:e.setModalVisibility,color:"danger"},o.a.createElement(a.X,{closeButton:!0},o.a.createElement(a.Y,null,"Confirm Deletion")),o.a.createElement(a.V,null,"Are you sure you want to delete this ".concat(e.entity,"?")),o.a.createElement(a.W,null,o.a.createElement(a.e,{color:"danger",onClick:e.confirmDelete},"Confirm")," ",o.a.createElement(a.e,{color:"secondary",onClick:e.setModalVisibility},"Cancel")))};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,r,o,a,c){try{var i=e[a](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){l(a,r,o,c,i,"next",e)}function i(e){l(a,r,o,c,i,"throw",e)}c(void 0)}))}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=new(n(26).a),v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,e);var t=p(n);function n(){var e;s(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return h(m(e=t.call.apply(t,[this].concat(c))),"state",{extend_date:"",status:"Extended",error:!1}),h(m(e),"handleChange",(function(t){e.setState(h({},t.target.name,t.target.value))})),h(m(e),"handleSubmit",u(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return delete(n=e.state).error,t.next=4,b.patchEntityOf("projects",e.props.projectId,n).then((function(){e.props.updateList("CliAdm").then((function(){e.props.setModalVisibility()}))})).catch((function(t){console.error(t),e.setState({error:"Could not extend project! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 4:case"end":return t.stop()}}),t)})))),h(m(e),"render",(function(){var t=e.state,n=t.extend_date,r=t.error;return o.a.createElement(a.U,{show:e.props.show,onClose:e.props.setModalVisibility,color:"dark"},o.a.createElement(a.X,{closeButton:!0},o.a.createElement(a.Y,null,"Confirm Project Extension")),o.a.createElement(a.V,null,o.a.createElement(a.B,null,o.a.createElement(a.C,null,o.a.createElement(a.Q,{htmlFor:"extend_date"},"Extend this project till:"),o.a.createElement(a.J,{type:"datetime-local",name:"extend_date",value:n,onChange:e.handleChange,required:!0}))),r?o.a.createElement("p",{className:"fox-form-invalid-feedback"},r):null),o.a.createElement(a.W,null,o.a.createElement(a.e,{shape:"pill",color:"primary",onClick:e.handleSubmit},"Confirm")," ",o.a.createElement(a.e,{shape:"pill",color:"dark",onClick:e.props.setModalVisibility},"Cancel")))})),e}return n}(r.Component)},772:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(166),c=n(95),i=n(165),l=n(632),u=n.n(l),s=n(26),f=n(640),p=n(633);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n,r,o,a,c){try{var i=e[a](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,o)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){v(a,r,o,c,i,"next",e)}function i(e){v(a,r,o,c,i,"throw",e)}c(void 0)}))}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=new s.a,D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(n,e);var t=O(n);function n(){var e;g(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return S(j(e=t.call.apply(t,[this].concat(a))),"state",{worker:e.props.match.params.id,name:"",file:"",issued_by:"",modal:!1,error:!1,filename:"",doc_type:"",upload_files:{}}),S(j(e),"handleChange",(function(t){e.setState(S({},t.target.name,t.target.value))})),S(j(e),"handleFileUpload",(function(t){var n=e.state.upload_files;n[t.target.name]=t.target.files[0],e.setState(S({upload_files:n},t.target.name,""))})),S(j(e),"handleSubmit",function(){var t=w(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.requestData=e.state,r=e.requestData.upload_files,delete e.requestData.modal,delete e.requestData.upload_files,delete e.requestData.error,delete e.requestData.filename,delete e.requestData.doc_type,e.formData=new FormData,Object.entries(e.requestData).forEach((function(t){var n=h(t,2),r=n[0],o=n[1];e.formData.append(r,o)})),r&&Object.entries(r).forEach((function(t){var n=h(t,2),r=n[0],o=n[1];e.formData.append(r,o)})),t.next=13,k.patchEntityWithFiles("worker_special_competencies",e.props.match.params.competency_id,e.formData).then((function(){e.props.history.goBack()}),(function(t){console.error(t),e.setState({error:"Competency update failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),S(j(e),"confirmDelete",w(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.deleteEntityOf("worker_special_competencies",e.props.match.params.competency_id).then((function(){e.props.history.goBack()}),(function(t){console.error(t),e.setState({error:"Could not delete competency! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 2:case"end":return t.stop()}}),t)})))),S(j(e),"downloadFile",function(){var t=w(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({filename:n.target.value,doc_type:n.target.name},(function(){k.downloadWorkerCompetency(e.props.match.params.id,e.state.doc_type).then((function(t){var n=window.URL.createObjectURL(new Blob([t])),r=document.createElement("a");r.href=n;var o=e.state.filename.split("/").pop();r.setAttribute("download",o),document.body.appendChild(r),r.click(),r.parentNode.removeChild(r)})).catch((function(e){console.error("File download failed!"),console.error(e)}))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),S(j(e),"setModalVisibility",(function(){e.setState({modal:!e.state.modal})})),S(j(e),"componentDidMount",w(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().then((function(){return k.getDetailsOf("worker_special_competencies",e.props.match.params.competency_id)})).then((function(t){return e.setState(y({},t))}));case 2:case"end":return t.stop()}}),t)})))),S(j(e),"render",(function(){return o.a.createElement(i.ab,null,o.a.createElement(i.q,null,o.a.createElement(i.B,{onSubmit:e.handleSubmit},o.a.createElement(u.a,null),o.a.createElement(f.b,{inputValue:e.state.name,downloadValue:e.state.file,handleChange:e.handleChange,handleFileUpload:e.handleFileUpload,inputInfo:"name",uploadInfo:"file",downloadFile:e.downloadFile}),o.a.createElement(i.C,null,o.a.createElement(i.Q,{htmlFor:"issued_by"},"Competency issued by"),o.a.createElement(i.J,{id:"issued_by",name:"issued_by",placeholder:"Enter legal entity",value:e.state.issued_by,onChange:e.handleChange})),o.a.createElement(i.C,null,o.a.createElement(i.e,{type:"submit",color:"dark",variant:"outline",block:!0},"Save changes")),o.a.createElement(i.e,{className:"mb-3",color:"danger",variant:"outline",onClick:e.setModalVisibility,block:!0},"Delete Competency"),e.state.error?o.a.createElement("p",null,e.state.error):null),o.a.createElement(p.a,{setModalVisibility:e.setModalVisibility,danger:e.state.modal,entity:"special competency",confirmDelete:e.confirmDelete})))})),e}return n}(r.Component);t.default=Object(c.b)((function(e){return{contractor:e.currentUser.id}}),(function(e){return{getProfileFetch:function(){return e(Object(a.h)())}}}))(D)}}]);
//# sourceMappingURL=17.main.js.map