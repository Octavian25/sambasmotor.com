(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1088:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(29),i=a(7),c=a(49),l=a(5),s=a(9),u=a(33),p=a(27),f=a(41),m=a(196),h=a(197),d=a(490);const g=Object(d.createNumberMask)({prefix:"Rp. ",suffix:" ,-",locale:"id-ID"});class v extends r.Component{constructor(e){super(e),this.state={}}componentDidMount(){this.props.dispatch(Object(l.vb)()),this.props.dispatch(Object(l.Lb)()),this.props.change("tanggal",Object(u.c)())}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(m.a,{name:"tanggal",component:p.c,type:"date",label:"Tanggal",placeholder:"Masukan Tanggal"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(m.a,{name:"no_ac",component:p.e,options:this.props.listbank.map(e=>{return{value:e.no_ac,name:"".concat(e.no_ac," - ").concat(e.atas_nama)}}),type:"text",label:"Kategori",placeholder:"Masukan Kategori"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(m.a,Object.assign({name:"jumlah",component:p.c,type:"telp",label:"Jumlah",placeholder:"Masukan Jumlah"},g))),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(m.a,{name:"kategori",component:p.e,options:this.props.listparameter.map(e=>{return{value:e.kategori,name:e.kategori}}),type:"text",label:"Kategori",placeholder:"Masukan Kategori"})),n.a.createElement("div",{className:"col-lg-12 mb-2"},n.a.createElement("label",{htmlFor:""},"Keterangan"),n.a.createElement(m.a,{name:"keterangan",component:"textarea",className:"form-control",type:"text",label:"Keterangan",placeholder:"Masukan Keterangan"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-right"},n.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:()=>this.props(Object(c.b)("HeadTambahBank"))},this.props.onSend?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):n.a.createElement(n.a.Fragment,null,"Simpan ",n.a.createElement("i",{className:"fa fa-paper-plane ml-3 "})))))))}}v=Object(h.a)({form:"HeadTambahBank",enableReinitialize:!0})(v);var b=Object(o.b)(e=>({listbank:e.datamaster.listbank,listparameter:e.datamaster.listparameter,onSend:e.datamaster.onSend}))(v);t.default=Object(o.b)(e=>({noFaktur:e.datamaster.noFaktur}))(class extends r.Component{constructor(e){super(e),this.state={}}componentDidMount(){this.props.dispatch(Object(l.Ab)())}handleSubmit(e){this.props.dispatch(Object(l.Vb)());let t={no_ref:this.props.noFaktur,no_ac:"".concat(e.no_ac),tanggal:e.tanggal,jumlah_rp:e.jumlah,kategori:e.kategori,keterangan:e.keterangan};Object(s.c)(this.props.dispatch,"keuangan/tambah-uang-bank",t).then(()=>Object(p.b)("Tambah Uang Berhasil").then(()=>this.props.dispatch(Object(c.a)("HeadTambahBank"))).then(()=>Object(u.d)(["noFaktur"])).then(()=>this.props.dispatch(Object(l.Ab)())).then(()=>this.props.dispatch(Object(l.Ub)())).catch(e=>Object(p.h)("Gagal Tambah Uang, Error : ".concat(e.response.data)).then(()=>this.props.dispatch(Object(l.Ub)()))))}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(i.b,{to:"#"},"Transaksi Bank")),n.a.createElement("li",{className:"breadcrumb-item active"},"Tambah Saldo Bank")),n.a.createElement("h1",{className:"page-header"},"Tambah Saldo Bank "),n.a.createElement(f.a,null,n.a.createElement(f.c,null,"Tambah Saldo Bank"),n.a.createElement(f.b,null,n.a.createElement(b,{onSubmit:e=>this.handleSubmit(e)}))))}})},490:function(e,t,a){"undefined"!=typeof self&&self,e.exports=function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},n=function(e,t){return t[e]},o=function(e,t,a,r,o,i){var c="",l=e||"";if(0===l.length&&o&&!r)return"";for(var s=0,u=0;u<t.length;u+=1){var p=l.charAt(s),f=t.charAt(u),m=n(f,i);if(m)if(p)if(m.regExp.test(p))c=c.concat(p),s+=1;else{if(!r)return c;c=c.concat(a),l=""}else{if(!r)return c;c=c.concat(a)}else c=c.concat(f)}return c};t.applyMask=o,t.applyTransform=function(e,t,a,r){for(var o=e||"",i=t||"",c="",l=0;l<o.length;l+=1){var s=o.charAt(l);if(s!==i.charAt(l)){var u=a.charAt(l),p=n(u,r);c=p&&p.transform?c.concat(p.transform(s)):c.concat(s)}else c=c.concat(s)}return c},t.countOcurrences=function(e,t){return(e.match(t)||[]).length},t.escapeRegExp=r,t.firstUnfilledPosition=function(e,t,a,r){if(""===e)return 0;for(var o=0;o<e.length;o+=1){var i=e.charAt(o),c=t.charAt(o);if(i===a&&i!==c)return o}if(e.length===t.length)for(var l=t.length-1;l>=0;l-=1){var s=t.charAt(l);if(n(s,r))return l+1}return e.length},t.getMaskDefinition=n,t.inputReformat=function(e,t,a,i,c,l){for(var s=e||"",u=0;u<t.length;u+=1){var p=t.charAt(u);if(!n(p,l)){var f=r(p);s=s.replace(new RegExp(f),"")}}var m=r(a);return s=s.replace(m,""),o(s,t,a,i,c,l)},t.isPatternComplete=function(e,t,a){if(!e||0===e.length)return!1;if(e.length!==t.length)return!1;for(var r=0;r<e.length;r+=1){var o=e.charAt(r),i=t.charAt(r),c=n(i,a);if(c){if(!c.regExp.test(o))return!1}else if(o!==i)return!1}return!0},t.maskStrip=function(e,t,a,r){for(var o="",i=e||"",c=0;c<i.length;c+=1){var l=i.charAt(c),s=t.charAt(c),u=n(s,r);u&&(u.regExp.test(l)?o=o.concat(l):l===a&&(i=""))}return o},t.numberToLocaleString=function(e,t,a){return e.toLocaleString(t,{minimumFractionDigits:a,maximumFractionDigits:a})},t.charMatchTest=function(e,t){for(var a=Object.keys(t),r=0;r<a.length;r+=1){var n=a[r];if(t[n].regExp.test(e))return n}},t.validCaretPositions=function(e,t){var a=[];if(!e||"string"!=typeof e||0===e.length)return a;n(e.charAt(0),t)&&a.push(0);for(var r=1;r<e.length;r+=1){var o=e.charAt(r-1),i=e.charAt(r);(n(o,t)||n(i,t))&&a.push(r)}return n(e.charAt(e.length-1),t)&&a.push(e.length),a}},function(e,t,a){e.exports=a(2)},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTextMask=t.createNumberMask=void 0;var n=a(3),o=r(n),i=a(4),c=r(i);t.createNumberMask=o.default,t.createTextMask=c.default},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0);t.default=function(e){var t=e||{},a=t.prefix,n=void 0===a?"":a,o=t.suffix,i=void 0===o?"":o,c=t.decimalPlaces,l=void 0===c?0:c,s=t.multiplier,u=void 0===s?1:s,p=t.stringValue,f=void 0!==p&&p,m=t.allowEmpty,h=void 0!==m&&m,d=t.allowNegative,g=void 0!==d&&d,v=t.showPlusSign,b=void 0!==v&&v,k=t.spaceAfterSign,E=void 0!==k&&k,x=t.locale,y=t.onChange;if(l>10)throw new Error("The maximum value for createNumberMask's option `decimalPlaces` is 10.");if("number"!=typeof u)throw new Error("The createNumberMask's option `multilpier` should be of type number.");if(0===u)throw new Error("The createNumberMask's option `multilpier` cannot be zero.");var w=function(e){var t=e.target;t&&(e.persist&&e.persist(),setTimeout(function(){var a=t.value.length-i.length;e.target.setSelectionRange(a,a)}))};return{format:function(e){return function(e){var t=e;if(null===t||void 0===t||""===t){if(h)return"";t=0}else"number"!=typeof t&&(t=Number(t));var a=b?"+":"";return t<0&&(t*=-1,g&&(a="-")),a&&E&&(a+=" "),t*=1/u,t=(0,r.numberToLocaleString)(t,x,l),""+a+n+t+i}(e)},normalize:function(e,t){return function(e,t){var a=(0,r.escapeRegExp)(n),o=(0,r.escapeRegExp)(i),c=new RegExp("^[-|+]? ?"+a),s=new RegExp(o+"$"),p=1;if(g){var m=/-/g,d=(0,r.countOcurrences)(e,m)-(0,r.countOcurrences)(n,m)-(0,r.countOcurrences)(i,m);p=Math.pow(-1,d)%2}var v=e;if(n&&(v=v.replace(c,"")),i&&(v=v.replace(s,"")),v=v.replace(/\D/g,""),h){var b=""===v,k=""===v.replace(/0+/g,""),E=v.length<=l,x=void 0===t;if(b||!x&&E&&k)return"0"===v?f?"0":0:null}var w=Number(v)/Math.pow(10,l)*p;w=Number((w*u).toPrecision(10)),f&&(w=w.toString());var M=w!==t;return y&&M&&y(w),w}(e,t)},onChange:function(e){return w(e)},onFocus:function(e){return w(e)},autoComplete:"off"}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),n=a(5),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e){var t=e.pattern,a=e.placeholder,n=void 0===a?"_":a,i=e.maskDefinitions,c=void 0===i?o.default:i,l=e.guide,s=void 0===l||l,u=e.stripMask,p=void 0===u||u,f=e.allowEmpty,m=void 0!==f&&f,h=e.onChange,d=e.onCompletePattern;if(!t)throw new Error("The key `pattern` is required for createTextMask. You probably forgot to add it to your options.");if(!n||1!==n.length)throw new Error("The key `placeholder` should have a single character as a value.");var g=(0,r.validCaretPositions)(t,c);if(0===g.length)throw new Error("The pattern `"+t+"` passed for createTextMask is not valid.");var v=(0,r.charMatchTest)(n,c);if(v)throw new Error("The placeholder `"+n+"` matches the mask definition`"+v+"`. The mask created using `createTextMask`is therefore invalid.");var b=(0,r.maskStrip)(t,t,n,c),k=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?p||a?(0,r.applyMask)(e,t,n,s,m,c):e:(0,r.applyMask)("",t,n,s,m,c)},E=function(e,a){var o=(0,r.inputReformat)(e,t,n,s,m,c),i=(0,r.maskStrip)(o,t,n,c),l=(0,r.applyTransform)(i,p?a:(0,r.maskStrip)(a,t,n,c),b,c),u=k(l,!0),f=p?l:u,g=f!==a&&(""!==f||void 0!==a);return h&&g&&h(f),d&&(0,r.isPatternComplete)(u,t,c)&&g&&setTimeout(function(){return d(f)},10),f},x=function(e){var a=(0,r.firstUnfilledPosition)(e.value,t,n,c);e.setSelectionRange(a,a)},y=function(e,t,a){for(var r=void 0,n=0;n<=g.length;n+=1)if(g[n]>t){r=n;break}var o=void 0;if(void 0===(o="left"===a?g[r-1]:g[r])){var i="left"===a?0:g.length-1;o=g[i]}e.setSelectionRange(o,o)},w=function(e){if(e.target){e.persist&&e.persist();var a=e.target.selectionStart,r=e.target.value;setTimeout(function(){var n=e.target,o=e.type,i=e.key,c=e.target,l=c.value,s=c.selectionStart,u=c.selectionEnd;switch(o){case"change":if(l.length===r.length+1&&l.charAt(a)===t.charAt(a)){y(n,a,"left");break}x(n);break;case"focus":x(n);break;case"click":s===u&&(g.indexOf(s)>=0?e.preventDefault():x(n));break;case"keydown":"ArrowLeft"===i?y(n,s,"left"):"ArrowRight"===i&&y(n,a,"right")}})}};return{format:function(e){return k(e)},normalize:function(e,t){return E(e,t)},onKeyDown:function(e){return w(e)},onChange:function(e){return w(e)},onFocus:function(e){return w(e)},onClick:function(e){return w(e)},autoComplete:"off"}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={A:{regExp:/[A-Za-z]/,transform:function(e){return e.toUpperCase()}},a:{regExp:/[A-Za-z]/,transform:function(e){return e.toLowerCase()}},U:{regExp:/[A-Z]/},l:{regExp:/[a-z]/},9:{regExp:/[0-9]/}}}])}}]);
//# sourceMappingURL=51.e1732ee9.chunk.js.map