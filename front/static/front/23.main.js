(window.webpackJsonp = window.webpackJsonp || []).push([[23], { 669: function (e, t, n) { "use strict"; n.d(t, "a", (function () { return a })), n.d(t, "b", (function () { return r })); var a = [{ value: -1, label: "Choose worker position" }, { value: "Weld", label: "Welder" }, { value: "Fit", label: "Fitter" }, { value: "Help", label: "Helper" }, { value: "Rig", label: "Rigger" }, { value: "SafeOff", label: "Safety Officer" }, { value: "Plumb", label: "Plumber" }, { value: "Tech", label: "Technician" }, { value: "Electr", label: "Electrician" }, { value: "FlrInst", label: "Flooring Installer" }, { value: "HVACInst", label: "HVAC Installer" }, { value: "InsInst", label: "Insulation Installer" }, { value: "Surv", label: "Surveyor" }, { value: "BrcMans", label: "Brick Manson" }, { value: "Roof", label: "Roofer" }, { value: "SiteSuper", label: "Site Supervisor" }, { value: "Other", label: "Other" }], r = [{ id: -1, position: "Choose trade competency" }, { id: "Civ", position: "Civil" }, { id: "Electr", position: "Electrical" }, { id: "Mech", position: "Mechanical" }, { id: "Infra", position: "Infra" }, { id: "Gen", position: "General" }, { id: "Safe", position: "Safety" }, { id: "Secur", position: "Security" }] }, 754: function (e, t, n) { "use strict"; n.r(t); var a = n(1), r = n.n(a), o = n(35), l = n(37), i = n(10), c = n(635), u = n.n(c), s = n(22), p = n(642), d = n(669), f = n(27); function m(e, t) { if (null == e) return {}; var n, a, r = function (e, t) { if (null == e) return {}; var n, a, r = {}, o = Object.keys(e); for (a = 0; a < o.length; a++)n = o[a], t.indexOf(n) >= 0 || (r[n] = e[n]); return r }(e, t); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); for (a = 0; a < o.length; a++)n = o[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]) } return r } function b(e) { return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } function h(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); t && (a = a.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, a) } return n } function y(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? h(Object(n), !0).forEach((function (t) { j(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function g(e, t) { return function (e) { if (Array.isArray(e)) return e }(e) || function (e, t) { if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return; var n = [], a = !0, r = !1, o = void 0; try { for (var l, i = e[Symbol.iterator](); !(a = (l = i.next()).done) && (n.push(l.value), !t || n.length !== t); a = !0); } catch (e) { r = !0, o = e } finally { try { a || null == i.return || i.return() } finally { if (r) throw o } } return n }(e, t) || function (e, t) { if (!e) return; if ("string" == typeof e) return _(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t) }(e, t) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() } function _(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, a = new Array(t); n < t; n++)a[n] = e[n]; return a } function v(e, t, n, a, r, o, l) { try { var i = e[o](l), c = i.value } catch (e) { return void n(e) } i.done ? t(c) : Promise.resolve(c).then(a, r) } function w(e) { return function () { var t = this, n = arguments; return new Promise((function (a, r) { var o = e.apply(t, n); function l(e) { v(o, a, r, l, i, "next", e) } function i(e) { v(o, a, r, l, i, "throw", e) } l(void 0) })) } } function O(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function E(e, t) { return (E = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e })(e, t) } function S(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0 } catch (e) { return !1 } }(); return function () { var n, a = C(e); if (t) { var r = C(this).constructor; n = Reflect.construct(a, arguments, r) } else n = a.apply(this, arguments); return D(this, n) } } function D(e, t) { return !t || "object" !== b(t) && "function" != typeof t ? F(e) : t } function F(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e } function C(e) { return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) } function j(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var k = new s.a, I = function (e) { !function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && E(e, t) }(n, e); var t = S(n); function n() { var e; O(this, n); for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)o[l] = arguments[l]; return j(F(e = t.call.apply(t, [this].concat(o))), "state", { name: "", phone_number: "", contractor: "", birthday: "", card_number_id: "", card_number_id_scan: "", license_number: "", license_scan: "", passport: "", passport_scan: "", safety_green_card: "", safety_green_card_scan: "", position_in_company: "", safety_quiz_answer: "", personal_declaration: "", error: !1, filename: "", doc_type: "", upload_files: {} }), j(F(e), "handleChange", (function (t) { e.setState(j({}, t.target.name, t.target.value)) })), j(F(e), "handleFileUpload", (function (t) { var n = e.state.upload_files; n[t.target.name] = t.target.files[0], e.setState(j({ upload_files: n }, t.target.name, "")) })), j(F(e), "handleSubmit", function () { var t = w(regeneratorRuntime.mark((function t(n) { var a; return regeneratorRuntime.wrap((function (t) { for (; ;)switch (t.prev = t.next) { case 0: return n.preventDefault(), e.props.changeSubmitState(), e.requestData = e.state, a = e.requestData.upload_files, delete e.requestData.upload_files, delete e.requestData.error, delete e.requestData.filename, delete e.requestData.doc_type, delete e.requestData.license_scan, delete e.requestData.passport_scan, delete e.requestData.card_number_id_scan, delete e.requestData.safety_green_card_scan, delete e.requestData.safety_quiz_answer, delete e.requestData.personal_declaration, e.formData = new FormData, Object.entries(e.requestData).forEach((function (t) { var n = g(t, 2), a = n[0], r = n[1]; e.formData.append(a, r) })), a && Object.entries(a).forEach((function (t) { var n = g(t, 2), a = n[0], r = n[1]; e.formData.append(a, r) })), t.next = 19, k.patchEntityWithFiles("workers", e.props.match.params.id, e.formData).then((function () { e.props.history.goBack() })).catch((function (t) { console.error(t), e.setState({ error: "Worker update failed! Please check your input and try again! In case this problem repeats, please contact your administrator!" }) })).finally(e.props.changeSubmitState); case 19: case "end": return t.stop() } }), t) }))); return function (e) { return t.apply(this, arguments) } }()), j(F(e), "confirmDelete", w(regeneratorRuntime.mark((function t() { return regeneratorRuntime.wrap((function (t) { for (; ;)switch (t.prev = t.next) { case 0: return t.next = 2, k.deleteEntityOf("workers", e.props.match.params.id).then((function () { e.props.history.goBack(), e.props.updateModal("", {}) }), (function (t) { console.error(t), e.setState({ error: "Could not delete worker! Please check your input and try again! In case this problem repeats, please contact your administrator!" }) })); case 2: case "end": return t.stop() } }), t) })))), j(F(e), "downloadFile", function () { var t = w(regeneratorRuntime.mark((function t(n) { return regeneratorRuntime.wrap((function (t) { for (; ;)switch (t.prev = t.next) { case 0: e.setState({ filename: n.target.value, doc_type: n.target.name }, (function () { k.downloadWorkerDocument(e.props.match.params.id, e.state.doc_type).then((function (t) { var n = window.URL.createObjectURL(new Blob([t])), a = document.createElement("a"); a.href = n; var r = e.state.filename.split("/").pop(); a.setAttribute("download", r), document.body.appendChild(a), a.click(), a.parentNode.removeChild(a) })).catch((function (e) { console.error("File download failed!"), console.error(e) })) })); case 1: case "end": return t.stop() } }), t) }))); return function (e) { return t.apply(this, arguments) } }()), j(F(e), "showDeleteModal", (function () { e.props.updateModal({ modalType: "deleteModal", entity: "worker", confirmDelete: function () { return e.confirmDelete() } }) })), j(F(e), "selectActiveOption", (function (t, n) { return e.state.passport ? n : t })), j(F(e), "componentDidMount", w(regeneratorRuntime.mark((function t() { return regeneratorRuntime.wrap((function (t) { for (; ;)switch (t.prev = t.next) { case 0: return t.next = 2, e.props.getProfileFetch().then((function () { return k.getDetailsOf("workers", e.props.match.params.id) })).then((function (t) { return e.setState(y({}, t)) })).catch((function (e) { console.log(e) })).finally(e.props.changeLoadingState); case 2: case "end": return t.stop() } }), t) })))), j(F(e), "render", (function () { var t = r.a.createElement(p.c, { inputValue: e.state.card_number_id, downloadValue: e.state.card_number_id_scan, handleChange: e.handleChange, handleFileUpload: e.handleFileUpload, inputInfo: "card_number_id", uploadInfo: "card_number_id_scan", downloadFile: e.downloadFile, disabled: e.props.submitting, readOnly: e.props.submitting }), n = r.a.createElement(p.c, { inputValue: e.state.passport, downloadValue: e.state.passport_scan, handleChange: e.handleChange, handleFileUpload: e.handleFileUpload, inputInfo: "passport", uploadInfo: "passport_scan", downloadFile: e.downloadFile, disabled: e.props.submitting, readOnly: e.props.submitting }), a = e.selectActiveOption(t, n); return r.a.createElement(i.cb, null, r.a.createElement(i.r, null, r.a.createElement(i.g, null, r.a.createElement(i.j, null, r.a.createElement(i.l, null, "Worker Detail")), r.a.createElement(i.h, null, r.a.createElement(f.d, { loading: e.props.loading }, r.a.createElement(i.C, { onSubmit: e.handleSubmit }, r.a.createElement(u.a, null), r.a.createElement(i.D, null, r.a.createElement(i.S, { htmlFor: "name" }, "Name"), r.a.createElement(i.L, { id: "name", name: "name", placeholder: "Enter worker name", value: e.state.name, onChange: e.handleChange, disabled: e.props.submitting, readOnly: e.props.submitting, required: !0 })), r.a.createElement(i.D, null, r.a.createElement(i.S, { htmlFor: "birthday" }, "Birthday"), r.a.createElement(i.L, { type: "date", id: "birthday", name: "birthday", value: e.state.birthday, onChange: e.handleChange, disabled: e.props.submitting, readOnly: e.props.submitting, required: !0 })), r.a.createElement(i.D, null, r.a.createElement(i.S, { htmlFor: "phone_number" }, "Phone number"), r.a.createElement(i.L, { id: "phone_number", name: "phone_number", placeholder: "Enter phone number", value: e.state.phone_number, onChange: e.handleChange, disabled: e.props.submitting, readOnly: e.props.submitting, required: !0 })), r.a.createElement(p.f, { options: d.a, inputInfo: "position_in_company", inputValue: e.state.position_in_company, handleChange: e.handleReactSelect, disabled: e.props.submitting, readOnly: e.props.submitting }), r.a.createElement(p.h, { options: d.b, inputInfo: "trade_competency", inputValue: e.state.trade_competency, handleChange: e.handleChange, disabled: e.props.submitting, readOnly: e.props.submitting }), a, r.a.createElement(p.c, { inputValue: e.state.license_number, downloadValue: e.state.license_scan, handleChange: e.handleChange, handleFileUpload: e.handleFileUpload, inputInfo: "license_number", uploadInfo: "license_scan", downloadFile: e.downloadFile, disabled: e.props.submitting, readOnly: e.props.submitting }), r.a.createElement(p.c, { inputValue: e.state.safety_green_card, downloadValue: e.state.safety_green_card_scan, handleChange: e.handleChange, handleFileUpload: e.handleFileUpload, inputInfo: "safety_green_card", uploadInfo: "safety_green_card_scan", downloadFile: e.downloadFile, disabled: e.props.submitting, readOnly: e.props.submitting }), r.a.createElement(p.b, { inputValue: e.state.safety_quiz_answer, downloadValue: e.state.safety_quiz_answer_scan, handleChange: e.handleChange, handleFileUpload: e.handleFileUpload, inputInfo: "safety_quiz_answer", uploadInfo: "safety_quiz_answer_scan", downloadFile: e.downloadFile, disabled: e.props.submitting, readOnly: e.props.submitting }), r.a.createElement(p.b, { inputValue: e.state.personal_declaration, downloadValue: e.state.personal_declaration_scan, handleChange: e.handleChange, handleFileUpload: e.handleFileUpload, inputInfo: "personal_declaration", uploadInfo: "personal_declaration_scan", downloadFile: e.downloadFile, disabled: e.props.submitting, readOnly: e.props.submitting }), r.a.createElement(i.D, null, r.a.createElement(i.T, { className: "btn btn-outline-primary", to: "/workers/".concat(e.props.match.params.id, "/competencies") }, "Special Competencies")), r.a.createElement(i.D, null, r.a.createElement(i.e, { disabled: e.props.loading || e.props.submitting, shape: "pill", type: "submit", color: "dark", variant: "outline", block: !0 }, r.a.createElement(f.b, { submitting: e.props.submitting }), "Save changes")), r.a.createElement(i.e, { disabled: e.props.loading || e.props.submitting, shape: "pill", color: "danger", variant: "outline", onClick: e.showDeleteModal, block: !0 }, r.a.createElement(f.b, { submitting: e.props.submitting }), "Delete Worker"), e.state.error ? r.a.createElement("p", null, e.state.error) : null)))))) })), e } return n }(a.Component); t.default = Object(l.b)((function (e) { return { contractor: e.currentUser.id } }), (function (e) { return { getProfileFetch: function () { return e(Object(o.j)()) }, updateModal: function (t) { var n = t.modalType, a = m(t, ["modalType"]); return e(Object(o.t)(y({ modalType: n }, a))) } } }))(Object(f.c)(I)) } }]);
//# sourceMappingURL=23.main.js.map