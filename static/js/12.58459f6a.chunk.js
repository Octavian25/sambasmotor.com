(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1082:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(7),c=t(29),o=t(27),i=t(41),s=t(49),u=t(196),m=t(197),p=t(5),f=t(33);class d extends r.Component{constructor(e){super(e),this.state={}}componentDidMount(){this.props.change("tanggal_start",Object(f.c)()),this.props.change("tanggal_end",Object(f.c)()),this.props.dispatch(Object(p.xb)())}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},n.a.createElement("div",null,n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(u.a,{name:"tanggal_awal",component:o.c,type:"date",label:"Tanggal Mulai",placeholder:"Masukan Tanggal Mulai"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(u.a,{name:"tanggal_akhir",component:o.c,type:"date",label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),n.a.createElement("div",{className:"col-lg-12 mt-4"},n.a.createElement("button",{className:"btn btn-block btn-primary"},"CARI"))))}}d=Object(m.a)({form:"ModalPencarianService",enableReinitialize:!0})(d);var h=Object(c.b)(e=>({listcustomer:e.datamaster.listcustomer}))(d),g=t(532),v=t(9);const b=Object(r.lazy)(()=>t.e(117).then(t.bind(null,1045)));a.default=Object(c.b)(e=>({kunci_temp:e.stocking.kunci_temp}),null)(class extends n.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,bayar:!1,columnsListBayar:[{dataField:"jenis_bayar",text:"Jenis Bayar"},{dataField:"nama_bank",text:"Bank"},{dataField:"jumlah",text:"Jumlah"}],dataListBayar:[{jenis_bayar:"CREDIT CARD",bank:"BCA",jumlah:1e8}]}}handleSubmit(e){console.log(e);let a=JSON.parse(localStorage.getItem("DaftarService"))||[];localStorage.setItem("DaftarService",JSON.stringify(a)),Object(o.b)("Berhasil Menambahan Data Booking").then(()=>this.props.dispatch(Object(s.a)("ModalLihatService")))}showCC(){this.props.dispatch(Object(p.Wb)()),this.setState({jenisModal:"CC"})}handleSimpanCC(e){console.log(e)}setBayar(){this.setState({bayar:!0})}setPencarian(e){Object(v.b)("bayar-service/getLihatDataService/"+"".concat(e.tanggal_awal,"&").concat(e.tanggal_akhir)).then(e=>this.setState({listService:e&&e.data}))}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(l.b,{to:"#"},"Transaksi")),n.a.createElement("li",{className:"breadcrumb-item active"},"Lihat Service")),n.a.createElement("h1",{className:"page-header"},"Lihat Service "),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-2"},n.a.createElement(i.a,null,n.a.createElement(i.c,null,"Pencarian"),n.a.createElement(i.b,null,n.a.createElement("br",null),n.a.createElement(h,{onSubmit:e=>this.setPencarian(e)})))),n.a.createElement("div",{className:"col-lg-10"},n.a.createElement(i.a,null,n.a.createElement(i.c,null,"Data Service"),n.a.createElement(i.b,null,n.a.createElement("br",null),this.state.bayar?n.a.createElement(g.a,{showCC:()=>this.showCC(),columns:this.state.columnsListBayar,data:this.state.dataListBayar,backMenu:()=>this.setState({bayar:!1})}):n.a.createElement(b,{setBayar:()=>this.setBayar(),data:this.state.listService}))))))}})},209:function(e,a,t){"use strict";var r=t(61),n=t.n(r),l=t(15);a.a=function(e){var a=e.getIn;return function(e,t){n()(e,"Form value must be specified");var r=t||function(e){return a(e,"form")};return function(t){for(var c=arguments.length,o=new Array(c>1?c-1:0),i=1;i<c;i++)o[i-1]=arguments[i];return n()(o.length,"No fields specified"),1===o.length?a(r(t),e+".values."+o[0]):o.reduce(function(n,c){var o=a(r(t),e+".values."+c);return void 0===o?n:l.a.setIn(n,c,o)},{})}}}(l.a)},487:function(e,a,t){"use strict";t.d(a,"a",function(){return r});const r=e=>e?void 0:"Tidak Boleh Kosong"},490:function(e,a,t){"undefined"!=typeof self&&self,e.exports=function(e){function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}var t={};return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="/dist/",a(a.s=1)}([function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},n=function(e,a){return a[e]},l=function(e,a,t,r,l,c){var o="",i=e||"";if(0===i.length&&l&&!r)return"";for(var s=0,u=0;u<a.length;u+=1){var m=i.charAt(s),p=a.charAt(u),f=n(p,c);if(f)if(m)if(f.regExp.test(m))o=o.concat(m),s+=1;else{if(!r)return o;o=o.concat(t),i=""}else{if(!r)return o;o=o.concat(t)}else o=o.concat(p)}return o};a.applyMask=l,a.applyTransform=function(e,a,t,r){for(var l=e||"",c=a||"",o="",i=0;i<l.length;i+=1){var s=l.charAt(i);if(s!==c.charAt(i)){var u=t.charAt(i),m=n(u,r);o=m&&m.transform?o.concat(m.transform(s)):o.concat(s)}else o=o.concat(s)}return o},a.countOcurrences=function(e,a){return(e.match(a)||[]).length},a.escapeRegExp=r,a.firstUnfilledPosition=function(e,a,t,r){if(""===e)return 0;for(var l=0;l<e.length;l+=1){var c=e.charAt(l),o=a.charAt(l);if(c===t&&c!==o)return l}if(e.length===a.length)for(var i=a.length-1;i>=0;i-=1){var s=a.charAt(i);if(n(s,r))return i+1}return e.length},a.getMaskDefinition=n,a.inputReformat=function(e,a,t,c,o,i){for(var s=e||"",u=0;u<a.length;u+=1){var m=a.charAt(u);if(!n(m,i)){var p=r(m);s=s.replace(new RegExp(p),"")}}var f=r(t);return s=s.replace(f,""),l(s,a,t,c,o,i)},a.isPatternComplete=function(e,a,t){if(!e||0===e.length)return!1;if(e.length!==a.length)return!1;for(var r=0;r<e.length;r+=1){var l=e.charAt(r),c=a.charAt(r),o=n(c,t);if(o){if(!o.regExp.test(l))return!1}else if(l!==c)return!1}return!0},a.maskStrip=function(e,a,t,r){for(var l="",c=e||"",o=0;o<c.length;o+=1){var i=c.charAt(o),s=a.charAt(o),u=n(s,r);u&&(u.regExp.test(i)?l=l.concat(i):i===t&&(c=""))}return l},a.numberToLocaleString=function(e,a,t){return e.toLocaleString(a,{minimumFractionDigits:t,maximumFractionDigits:t})},a.charMatchTest=function(e,a){for(var t=Object.keys(a),r=0;r<t.length;r+=1){var n=t[r];if(a[n].regExp.test(e))return n}},a.validCaretPositions=function(e,a){var t=[];if(!e||"string"!=typeof e||0===e.length)return t;n(e.charAt(0),a)&&t.push(0);for(var r=1;r<e.length;r+=1){var l=e.charAt(r-1),c=e.charAt(r);(n(l,a)||n(c,a))&&t.push(r)}return n(e.charAt(e.length-1),a)&&t.push(e.length),t}},function(e,a,t){e.exports=t(2)},function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0}),a.createTextMask=a.createNumberMask=void 0;var n=t(3),l=r(n),c=t(4),o=r(c);a.createNumberMask=l.default,a.createTextMask=o.default},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t(0);a.default=function(e){var a=e||{},t=a.prefix,n=void 0===t?"":t,l=a.suffix,c=void 0===l?"":l,o=a.decimalPlaces,i=void 0===o?0:o,s=a.multiplier,u=void 0===s?1:s,m=a.stringValue,p=void 0!==m&&m,f=a.allowEmpty,d=void 0!==f&&f,h=a.allowNegative,g=void 0!==h&&h,v=a.showPlusSign,b=void 0!==v&&v,E=a.spaceAfterSign,y=void 0!==E&&E,k=a.locale,N=a.onChange;if(i>10)throw new Error("The maximum value for createNumberMask's option `decimalPlaces` is 10.");if("number"!=typeof u)throw new Error("The createNumberMask's option `multilpier` should be of type number.");if(0===u)throw new Error("The createNumberMask's option `multilpier` cannot be zero.");var S=function(e){var a=e.target;a&&(e.persist&&e.persist(),setTimeout(function(){var t=a.value.length-c.length;e.target.setSelectionRange(t,t)}))};return{format:function(e){return function(e){var a=e;if(null===a||void 0===a||""===a){if(d)return"";a=0}else"number"!=typeof a&&(a=Number(a));var t=b?"+":"";return a<0&&(a*=-1,g&&(t="-")),t&&y&&(t+=" "),a*=1/u,a=(0,r.numberToLocaleString)(a,k,i),""+t+n+a+c}(e)},normalize:function(e,a){return function(e,a){var t=(0,r.escapeRegExp)(n),l=(0,r.escapeRegExp)(c),o=new RegExp("^[-|+]? ?"+t),s=new RegExp(l+"$"),m=1;if(g){var f=/-/g,h=(0,r.countOcurrences)(e,f)-(0,r.countOcurrences)(n,f)-(0,r.countOcurrences)(c,f);m=Math.pow(-1,h)%2}var v=e;if(n&&(v=v.replace(o,"")),c&&(v=v.replace(s,"")),v=v.replace(/\D/g,""),d){var b=""===v,E=""===v.replace(/0+/g,""),y=v.length<=i,k=void 0===a;if(b||!k&&y&&E)return"0"===v?p?"0":0:null}var S=Number(v)/Math.pow(10,i)*m;S=Number((S*u).toPrecision(10)),p&&(S=S.toString());var w=S!==a;return N&&w&&N(S),S}(e,a)},onChange:function(e){return S(e)},onFocus:function(e){return S(e)},autoComplete:"off"}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t(0),n=t(5),l=function(e){return e&&e.__esModule?e:{default:e}}(n);a.default=function(e){var a=e.pattern,t=e.placeholder,n=void 0===t?"_":t,c=e.maskDefinitions,o=void 0===c?l.default:c,i=e.guide,s=void 0===i||i,u=e.stripMask,m=void 0===u||u,p=e.allowEmpty,f=void 0!==p&&p,d=e.onChange,h=e.onCompletePattern;if(!a)throw new Error("The key `pattern` is required for createTextMask. You probably forgot to add it to your options.");if(!n||1!==n.length)throw new Error("The key `placeholder` should have a single character as a value.");var g=(0,r.validCaretPositions)(a,o);if(0===g.length)throw new Error("The pattern `"+a+"` passed for createTextMask is not valid.");var v=(0,r.charMatchTest)(n,o);if(v)throw new Error("The placeholder `"+n+"` matches the mask definition`"+v+"`. The mask created using `createTextMask`is therefore invalid.");var b=(0,r.maskStrip)(a,a,n,o),E=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?m||t?(0,r.applyMask)(e,a,n,s,f,o):e:(0,r.applyMask)("",a,n,s,f,o)},y=function(e,t){var l=(0,r.inputReformat)(e,a,n,s,f,o),c=(0,r.maskStrip)(l,a,n,o),i=(0,r.applyTransform)(c,m?t:(0,r.maskStrip)(t,a,n,o),b,o),u=E(i,!0),p=m?i:u,g=p!==t&&(""!==p||void 0!==t);return d&&g&&d(p),h&&(0,r.isPatternComplete)(u,a,o)&&g&&setTimeout(function(){return h(p)},10),p},k=function(e){var t=(0,r.firstUnfilledPosition)(e.value,a,n,o);e.setSelectionRange(t,t)},N=function(e,a,t){for(var r=void 0,n=0;n<=g.length;n+=1)if(g[n]>a){r=n;break}var l=void 0;if(void 0===(l="left"===t?g[r-1]:g[r])){var c="left"===t?0:g.length-1;l=g[c]}e.setSelectionRange(l,l)},S=function(e){if(e.target){e.persist&&e.persist();var t=e.target.selectionStart,r=e.target.value;setTimeout(function(){var n=e.target,l=e.type,c=e.key,o=e.target,i=o.value,s=o.selectionStart,u=o.selectionEnd;switch(l){case"change":if(i.length===r.length+1&&i.charAt(t)===a.charAt(t)){N(n,t,"left");break}k(n);break;case"focus":k(n);break;case"click":s===u&&(g.indexOf(s)>=0?e.preventDefault():k(n));break;case"keydown":"ArrowLeft"===c?N(n,s,"left"):"ArrowRight"===c&&N(n,t,"right")}})}};return{format:function(e){return E(e)},normalize:function(e,a){return y(e,a)},onKeyDown:function(e){return S(e)},onChange:function(e){return S(e)},onFocus:function(e){return S(e)},onClick:function(e){return S(e)},autoComplete:"off"}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={A:{regExp:/[A-Za-z]/,transform:function(e){return e.toUpperCase()}},a:{regExp:/[A-Za-z]/,transform:function(e){return e.toLowerCase()}},U:{regExp:/[A-Z]/},l:{regExp:/[a-z]/},9:{regExp:/[0-9]/}}}])},532:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(29),c=t(196),o=t(197),i=t(209),s=t(490),u=t(26),m=t(27),p=t(132),f=t(487);const d=Object(s.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class h extends r.Component{constructor(e){super(e),this.state={}}componentDidMount(){this.props.change("grand_total_all",this.props.total),this.props.dispatch(Object(u.w)())}setBayar(e){this.setState({bayar:e.target.value}),localStorage.setItem("bayar_rp_rongsok",e.target.value)}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 mb-3"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-left"},n.a.createElement("button",{className:"btn btn-black text-white",onClick:this.props.backMenu},n.a.createElement("i",{className:"fa fa-chevron-left mr-3"})," Back")))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement("h3",null,"Grand Total"),n.a.createElement("p",{style:{fontSize:32,fontWeight:700}},parseFloat(this.props.grand_total_all).toLocaleString("id-ID")),n.a.createElement("h3",null,"Bayar"),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"}),n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement(c.a,Object.assign({name:"bayar",component:m.d,type:"telp",placeholder:"Masukan Bayar",className:" form-control-lg",onChange:e=>this.setBayar(e)},d,{validate:f.a}))))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"}),n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement(c.a,Object.assign({name:"jasa",label:"Diskon Jasa",component:m.d,type:"telp",placeholder:"Masukan Bayar",className:" form-control-lg",onChange:e=>this.setBayar(e)},d))))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"}),n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement(c.a,Object.assign({name:"barang",label:"Diskon Barang",component:m.d,type:"telp",placeholder:"Masukan Bayar",className:" form-control-lg",onChange:e=>this.setBayar(e)},d))))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"}),n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement("label",{htmlFor:""},"Masuk Piutang ?"),n.a.createElement(c.a,{name:"piutang",component:"input",type:"checkbox",placeholder:"Masukan Bayar",className:"ml-3"})))),n.a.createElement("h3",null,"Kembali"),n.a.createElement("p",{style:{fontSize:35,fontWeight:700}},parseFloat(this.props.kembali).toLocaleString("id-ID"))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(p.a,{keyField:"no_ac",data:this.props.listPembayaran_temp,columns:this.props.columns,tambahData:!0,handleClick:this.props.showCC})))))),n.a.createElement("div",{className:"text-center col-lg-6"},n.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):n.a.createElement(n.a.Fragment,null,"Simpan ",n.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))))}}h=Object(o.a)({form:"ModalBayarService",enableReinitialize:!0})(h);const g=Object(i.a)("ModalBayarService");a.a=Object(l.b)(e=>(localStorage.setItem("bayar_rp_rongsok",g(e,"bayar")||0),{grand_total_all:e.transaksi.total_bayar,listPembayaran_temp:e.transaksi.listpembayaran_temp,sum_pembayaran:e.transaksi.sum_pembayaran,total_bayar:e.transaksi.total_bayar,kembali:(g(e,"bayar")||0)-(e.transaksi.total_bayar-(g(e,"jasa")||0)-(g(e,"barang")||0)-e.transaksi.sum_pembayaran),bayar:g(e,"bayar")||0,onSend:e.datamaster.onSend}))(h)}}]);
//# sourceMappingURL=12.58459f6a.chunk.js.map