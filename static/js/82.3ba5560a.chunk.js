(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1007:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(33),l=t(160),o=t(161),m=t(448);var c=e=>{const a={};return e.username||(a.username="Username Harus Diisi"),e.password||(a.password="Password Harus Diisi"),a};class i extends r.Component{constructor(...e){super(...e),this.state={}}render(){return n.a.createElement("form",{className:"margin-bottom-0",onSubmit:this.props.handleSubmit,autoComplete:"off"},n.a.createElement("div",{className:"form-group m-b-15"},n.a.createElement(l.a,{name:"user_id",component:m.a,type:"text",label:"Username",placeholder:"Masukan Username"})),n.a.createElement("div",{className:"form-group m-b-15"},n.a.createElement(l.a,{name:"password",component:m.a,type:"password",label:"Password",placeholder:"Masukan Username"})),n.a.createElement("div",{className:"login-buttons"},n.a.createElement("button",{type:"submit",className:"btn btn-success btn-block btn-lg"},this.props.isLoading?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Login"):"Login")),n.a.createElement("hr",null),n.a.createElement("p",{className:"text-center text-grey-darker"},"\xa9 Sambas Motor All Right Reserved ",(new Date).getFullYear()))}}i=Object(o.a)({form:"FormLogin",enableReinitialize:!0,validate:c})(i);a.default=Object(s.b)()(i)},448:function(e,a,t){"use strict";t.d(a,"a",function(){return s});var r=t(0),n=t.n(r);t(86),t(485),t(486),t(112);const s=({input:e,label:a,type:t,readOnly:r,placeholder:s,meta:{touched:l,error:o,warning:m}})=>n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"",className:"text-black"},a),n.a.createElement("input",Object.assign({onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},e,{autoComplete:"off",type:t,className:"form-control",readOnly:r,placeholder:s})),l&&(o&&n.a.createElement("ul",{className:"parsley-errors-list filled"},n.a.createElement("li",{className:"parsley-required"}," ",o,"."))||m&&n.a.createElement("p",null,m)))}}]);
//# sourceMappingURL=82.3ba5560a.chunk.js.map