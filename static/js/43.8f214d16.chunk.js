(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1057:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a(28),c=a(41),s=a(197),i=a(198),u=a(5),m=a(27),p=a(9),d=a(33),h=a(18),g=a(132);class f extends n.Component{constructor(e){super(e),this.state={nama_customer:!1,no_bon:!1,columns:[{dataField:"tgl_transaksi",text:"Tanggal"},{dataField:"no_bon",text:"Nomor bon"},{dataField:"nama_customer",text:"Nama Customer"},{dataField:"alamat",text:"Alamat"},{dataField:"nopol",text:"Nomor Polisi"},{dataField:"saldo_piutang",text:"Total",formatter:e=>e.toLocaleString("id-ID")},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,t)=>{let a={no_bayar_customer:localStorage.getItem("nomor_bayar")||"",tanggal:t.tgl_transaksi,no_bon:t.no_bon,kode_customer:localStorage.getItem("kode_customer_piutang"),total_pembayaran:t.saldo_piutang};return r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"button",onClick:()=>this.showBayar(a),className:"btn btn-success mr-3"},"Bayar",r.a.createElement("i",{className:"fa fa-money-bill-alt ml-2"}))))}}]}}showBayar(e){this.props.dispatch(Object(u.Wb)()),this.props.dispatch(Object(m.D)(e))}componentDidMount(){Object(p.b)("bayar-piutang-customer/generate/no-trx").then(e=>this.props.change("nomor_bayar",e.data[0].no_bayar_customer)).catch(e=>Object(h.h)("Error Get Nomor bayar \nError : ".concat(e.response.data))),this.props.dispatch(Object(u.xb)()),this.props.change("tanggal",Object(d.c)()),this.props.dispatch(Object(m.y)())}setCustomer(e){let t=e.split("||");this.props.change("alamat",t[1]),this.props.change("no_polisi",t[2]),this.props.change("kode_customer",t[0]),localStorage.setItem("kode_customer_piutang",t[0]),this.setState({nama_customer:t[3]})}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(s.a,{name:"nomor_bayar",component:h.c,type:"text",label:"Nomor Bayar",placeholder:"Masukan Nomor Bayar",readOnly:!0})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(s.a,{name:"tanggal",component:h.c,type:"date",label:"Tanggal",placeholder:"Masukan Tanggal",onChange:e=>localStorage.setItem("tanggal_bayar_piutang",e.target.value)})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(s.a,{name:"no_bon",component:h.c,type:"text",label:"Nomor Bon",placeholder:"Masukan Nomor Bon",onChange:e=>this.setState({no_bon:e.target.value})})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(s.a,{name:"nama_customer",component:h.e,options:this.props.listCustomer.map(e=>{return{value:"".concat(e.kode_customer,"||").concat(e.alamat,"||").concat(e.nopol_kendaraan,"||").concat(e.nama_customer),name:e.nama_customer}}),onChange:e=>this.setCustomer(e),type:"text",label:"Nama Customer",placeholder:"Masukan Nama Customer"})),r.a.createElement("div",{className:"col-lg-4 d-none"},r.a.createElement(s.a,{name:"kode_customer",component:h.c,type:"text",label:"Alamat",placeholder:"Masukan Alamat",readOnly:!0})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(s.a,{name:"alamat",component:h.c,type:"text",label:"Alamat",placeholder:"Masukan Alamat",readOnly:!0})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(s.a,{name:"no_polisi",component:h.c,type:"text",label:"Nomor Polisi",placeholder:"Masukan Nomor Polisi",readOnly:!0})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"btn btn-primary"},"Cari ",r.a.createElement("i",{className:"fa fa-search ml-3"})))),r.a.createElement("div",{className:"col-lg-12 mt-3"},r.a.createElement(g.a,{keyField:"no_bon",data:this.state.nama_customer?this.props.listpiutangcustomer.filter(e=>e.nama_customer===this.state.nama_customer):this.props.listpiutangcustomer.filter(e=>e.no_bon===this.state.no_bon),columns:this.state.columns,emptyText:"Silahkan Isi Nomor Bon atau Pilih Customer Untuk Melihat Data",empty:!0})))))}}f=Object(i.a)({form:"HeadPembayaranPiutang",enableReinitialize:!0})(f);var b=Object(l.b)(e=>({initialState:{nomor_bayar:localStorage.getItem("nomor_bayar_piutang")},listCustomer:e.datamaster.listcustomer,listpiutangcustomer:e.transaksi.listpiutangcustomer}))(f),v=a(131),_=a(209),E=a(489);const y=Object(E.createNumberMask)({prefix:"Rp. ",suffix:" ,-",locale:"id-ID"});class k extends n.Component{constructor(e){super(e),this.state={type_bayar:"row",cash:"col-lg-12 d-none",transfer:"col-lg-12 d-none"}}componentDidMount(){this.props.dispatch(Object(u.vb)())}render(){return r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 text-center"},r.a.createElement("h3",null,"Total Piutang"),r.a.createElement("h2",null," ".concat(parseFloat(this.props.total_piutang).toLocaleString("id-ID")))),r.a.createElement("div",{className:"col-lg-6 text-center"},r.a.createElement("h3",null,"Total Pembayaran"),r.a.createElement("h2",null," ".concat(parseFloat(this.props.total_pembayaran).toLocaleString("id-ID")))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("h4",null,"Pembayaran Cash")),r.a.createElement("div",{className:"col-lg-12 mt-2"},r.a.createElement(s.a,Object.assign({name:"cash",component:h.d,type:"text",label:"Cash Rp",placeholder:"Masukan Cash Rp"},y))),r.a.createElement("div",{className:"col-lg-12 mt-2 d-none"},r.a.createElement(s.a,Object.assign({name:"total_piutang",component:h.d,type:"text",label:"Cash Rp",placeholder:"Masukan Cash Rp"},y)))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("h4",null,"Pembayaran Transfer")),r.a.createElement("div",{className:"col-lg-12 mt-2"},r.a.createElement(s.a,Object.assign({name:"transfer",component:h.d,type:"telp",label:"Transfer Rp",placeholder:"Masukan Transfer Rp"},y))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(s.a,{name:"ac_asal",component:h.d,type:"text",label:"A/C Asal",placeholder:"Masukan AC Asal"})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(s.a,{name:"ac_tujuan",component:h.e,options:this.props.listbank.map(e=>{return{value:e.no_ac,name:e.atas_nama}}),type:"text",label:"A/C tujuan",placeholder:"Masukan A/C tujuan"}))),r.a.createElement("div",{className:"col-lg-3 d-none"},r.a.createElement(s.a,{name:"no_bon",component:h.d,type:"text",label:"bon",placeholder:"Masukan bon"})),r.a.createElement("div",{className:"col-lg-3 d-none"},r.a.createElement(s.a,{name:"tanggal",component:h.d,type:"text",label:"Tanggal",placeholder:"Masukan Tanggal"})),r.a.createElement("div",{className:"col-lg-3 d-none"},r.a.createElement(s.a,{name:"kode_customer",component:h.d,type:"text",label:"customer",placeholder:"Masukan customer"})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"btn btn-primary"},this.props.onSend?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):r.a.createElement(r.a.Fragment,null,"Simpan ",r.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))),r.a.createElement("p",{className:"text-red mt-1"},"Mohon Bayar Sesuai Nominal Piutang, agar Bisa disimpan"))))))}}k=Object(i.a)({form:"ModalPembayaranPiutang",enableReinitialize:!0,validate:e=>{const t={};return e.cash||e.transfer?parseFloat(e.cash)+parseFloat(e.transfer)>parseFloat(e.total_piutang)?(t.cash="Tidak Boleh melebihi piutang",t.transfer="Tidak Boleh melebihi piutang"):parseFloat(e.cash)+parseFloat(e.transfer)<parseFloat(e.total_piutang)&&(t.cash="Tidak Boleh kurang dari piutang",t.transfer="Tidak Boleh kurang dari piutang"):(t.cash="Mohon isi Salah Satu / keduanya",t.transfer="Mohon isi Salah Satu / keduanya"),t}})(k);const x=Object(_.a)("ModalPembayaranPiutang");var N=Object(l.b)(e=>{const t=x(e,"cash","transfer"),a=t.cash,n=t.transfer;return{total_piutang:e.transaksi.total_piutang.total_pembayaran,total_pembayaran:parseFloat(a||0)+parseFloat(n||0),listbank:e.datamaster.listbank,onSend:e.datamaster.onSend,initialValues:{total_piutang:e.transaksi.total_piutang.total_pembayaran,kode_customer:e.transaksi.total_piutang.kode_customer,no_bon:e.transaksi.total_piutang.no_bon,tanggal:e.transaksi.total_piutang.tanggal}}})(k),S=a(60);a(133);var M=(e="",t="",a="",n="",r="",o="",l="",c="",s="",i="",u="",m=[],p="",d,h,g)=>{const f=new S.default;f.autoTable(m,d,{foot:h,startY:40,theme:"plain",bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}});let b=f.lastAutoTable.finalY+10;f.text(p,14,15),f.setFontSize(10),f.text("".concat(e,"\t: ").concat(t),14,25),f.text("".concat(a,"\t: ").concat(n),120,25),f.text("".concat(r,"\t: ").concat(o),14,30),f.text("".concat(l,"\t: ").concat(c),120,30),g?(f.text("Mengetahui",27,b+5),f.text("(.................................)",20,b+25),f.text("Penerima",140,b+5),f.text("(.................................)",130,b+25)):(f.text("User\t: ".concat(s),14,b+10),f.text("Cetak\t: ".concat(i),14,b+16),f.text("Valid\t: ".concat(u),14,b+22));var v="<embed width='100%' height='100%' src='"+f.output("datauristring")+"'/>",_=window.open();_.document.open(),_.document.write(v),_.document.close()};t.default=Object(l.b)(e=>({kunci_temp:e.stocking.kunci_temp,noFaktur:e.datamaster.noFaktur}),null)(class extends r.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1}}componentDidMount(){this.props.dispatch(Object(u.Ab)()),Object(p.b)("bayar-piutang-customer/generate/no-trx").then(e=>localStorage.setItem("nomor_bayar_piutang",e.data[0].no_bayar_customer)).catch(e=>Object(h.h)("Error Get Nomor bayar \nError : ".concat(e.response.data)))}handleSubmit(e){void 0!==e.cash?console.log("INI CAHS"):console.log("INI TRANSFER"),this.props.dispatch(Object(u.Vb)());let t={no_bayar_customer:localStorage.getItem("nomor_bayar_piutang"),tanggal:e.tanggal,no_bon:e.no_bon,kode_customer:e.kode_customer,total_pembayaran:parseFloat(e.cash||0)+parseFloat(e.transfer||0),cash_rp:e.cash||0,no_ref_cash:this.props.noFaktur,transfer_rp:e.transfer||0,no_ref:this.props.noFaktur,no_ac_asal:e.ac_asal||"-",no_ac_tujuan:"".concat(e.ac_tujuan||"-")};console.log(JSON.stringify(t)),Object(p.c)("bayar-piutang-customer/post-transaksi",t).then(()=>Object(h.b)("Pembayaran Berhasl")).then(()=>M("Tanggal",Object(d.c)(),"Nomor Bon",localStorage.getItem("nomor_bayar_piutang"),"","","","",Object(h.l)().user_name,Object(d.c)(),Object(h.l)().user_name,["NO","JENIS BAYAR","TOTAL"],"BUKTI PEMBAYARAN PIUTANG",[["1","Cash","".concat(parseFloat(e.cash||0).toLocaleString("id-ID")||0)],["2","Transfer","".concat(parseFloat(e.transfer||0).toLocaleString("id-ID")||0)]],[["","Total Bayar","".concat((parseFloat(e.transfer||0)+parseFloat(e.cash||0)).toLocaleString("id-ID"))]])).then(()=>Object(d.d)(["nomor_bayar_piutang","noFaktur","kode_customer_piutang"])).then(()=>this.props.dispatch(Object(u.Ab)())).then(()=>this.props.dispatch(Object(u.Ub)())).then(()=>this.props.dispatch(Object(u.Tb)())).then(()=>window.location.reload()).catch(e=>Object(h.h)("Gagal, Error : ".concat(e.response.data)).then(()=>this.props.dispatch(Object(u.Ub)())))}render(){return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(o.b,{to:"#"},"Transaksi")),r.a.createElement("li",{className:"breadcrumb-item active"},"Pembayaran Supplier")),r.a.createElement("h1",{className:"page-header"},"Pembayaran Supplier "),r.a.createElement(c.a,null,r.a.createElement(c.c,null,"Pembayaran Supplier"),r.a.createElement(c.b,null,r.a.createElement("br",null),r.a.createElement(b,{onSubmit:e=>this.handleSubmit(e),listMerk:this.state.listMerk,bayar:!0}))),r.a.createElement(v.a,{content:r.a.createElement(N,{onSubmit:e=>this.handleSubmit(e)}),title:"Pembayaran Supplier"}))}})},209:function(e,t,a){"use strict";var n=a(61),r=a.n(n),o=a(15);t.a=function(e){var t=e.getIn;return function(e,a){r()(e,"Form value must be specified");var n=a||function(e){return t(e,"form")};return function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),s=1;s<l;s++)c[s-1]=arguments[s];return r()(c.length,"No fields specified"),1===c.length?t(n(a),e+".values."+c[0]):c.reduce(function(r,l){var c=t(n(a),e+".values."+l);return void 0===c?r:o.a.setIn(r,l,c)},{})}}}(o.a)},489:function(e,t,a){"undefined"!=typeof self&&self,e.exports=function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},r=function(e,t){return t[e]},o=function(e,t,a,n,o,l){var c="",s=e||"";if(0===s.length&&o&&!n)return"";for(var i=0,u=0;u<t.length;u+=1){var m=s.charAt(i),p=t.charAt(u),d=r(p,l);if(d)if(m)if(d.regExp.test(m))c=c.concat(m),i+=1;else{if(!n)return c;c=c.concat(a),s=""}else{if(!n)return c;c=c.concat(a)}else c=c.concat(p)}return c};t.applyMask=o,t.applyTransform=function(e,t,a,n){for(var o=e||"",l=t||"",c="",s=0;s<o.length;s+=1){var i=o.charAt(s);if(i!==l.charAt(s)){var u=a.charAt(s),m=r(u,n);c=m&&m.transform?c.concat(m.transform(i)):c.concat(i)}else c=c.concat(i)}return c},t.countOcurrences=function(e,t){return(e.match(t)||[]).length},t.escapeRegExp=n,t.firstUnfilledPosition=function(e,t,a,n){if(""===e)return 0;for(var o=0;o<e.length;o+=1){var l=e.charAt(o),c=t.charAt(o);if(l===a&&l!==c)return o}if(e.length===t.length)for(var s=t.length-1;s>=0;s-=1){var i=t.charAt(s);if(r(i,n))return s+1}return e.length},t.getMaskDefinition=r,t.inputReformat=function(e,t,a,l,c,s){for(var i=e||"",u=0;u<t.length;u+=1){var m=t.charAt(u);if(!r(m,s)){var p=n(m);i=i.replace(new RegExp(p),"")}}var d=n(a);return i=i.replace(d,""),o(i,t,a,l,c,s)},t.isPatternComplete=function(e,t,a){if(!e||0===e.length)return!1;if(e.length!==t.length)return!1;for(var n=0;n<e.length;n+=1){var o=e.charAt(n),l=t.charAt(n),c=r(l,a);if(c){if(!c.regExp.test(o))return!1}else if(o!==l)return!1}return!0},t.maskStrip=function(e,t,a,n){for(var o="",l=e||"",c=0;c<l.length;c+=1){var s=l.charAt(c),i=t.charAt(c),u=r(i,n);u&&(u.regExp.test(s)?o=o.concat(s):s===a&&(l=""))}return o},t.numberToLocaleString=function(e,t,a){return e.toLocaleString(t,{minimumFractionDigits:a,maximumFractionDigits:a})},t.charMatchTest=function(e,t){for(var a=Object.keys(t),n=0;n<a.length;n+=1){var r=a[n];if(t[r].regExp.test(e))return r}},t.validCaretPositions=function(e,t){var a=[];if(!e||"string"!=typeof e||0===e.length)return a;r(e.charAt(0),t)&&a.push(0);for(var n=1;n<e.length;n+=1){var o=e.charAt(n-1),l=e.charAt(n);(r(o,t)||r(l,t))&&a.push(n)}return r(e.charAt(e.length-1),t)&&a.push(e.length),a}},function(e,t,a){e.exports=a(2)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTextMask=t.createNumberMask=void 0;var r=a(3),o=n(r),l=a(4),c=n(l);t.createNumberMask=o.default,t.createTextMask=c.default},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0);t.default=function(e){var t=e||{},a=t.prefix,r=void 0===a?"":a,o=t.suffix,l=void 0===o?"":o,c=t.decimalPlaces,s=void 0===c?0:c,i=t.multiplier,u=void 0===i?1:i,m=t.stringValue,p=void 0!==m&&m,d=t.allowEmpty,h=void 0!==d&&d,g=t.allowNegative,f=void 0!==g&&g,b=t.showPlusSign,v=void 0!==b&&b,_=t.spaceAfterSign,E=void 0!==_&&_,y=t.locale,k=t.onChange;if(s>10)throw new Error("The maximum value for createNumberMask's option `decimalPlaces` is 10.");if("number"!=typeof u)throw new Error("The createNumberMask's option `multilpier` should be of type number.");if(0===u)throw new Error("The createNumberMask's option `multilpier` cannot be zero.");var x=function(e){var t=e.target;t&&(e.persist&&e.persist(),setTimeout(function(){var a=t.value.length-l.length;e.target.setSelectionRange(a,a)}))};return{format:function(e){return function(e){var t=e;if(null===t||void 0===t||""===t){if(h)return"";t=0}else"number"!=typeof t&&(t=Number(t));var a=v?"+":"";return t<0&&(t*=-1,f&&(a="-")),a&&E&&(a+=" "),t*=1/u,t=(0,n.numberToLocaleString)(t,y,s),""+a+r+t+l}(e)},normalize:function(e,t){return function(e,t){var a=(0,n.escapeRegExp)(r),o=(0,n.escapeRegExp)(l),c=new RegExp("^[-|+]? ?"+a),i=new RegExp(o+"$"),m=1;if(f){var d=/-/g,g=(0,n.countOcurrences)(e,d)-(0,n.countOcurrences)(r,d)-(0,n.countOcurrences)(l,d);m=Math.pow(-1,g)%2}var b=e;if(r&&(b=b.replace(c,"")),l&&(b=b.replace(i,"")),b=b.replace(/\D/g,""),h){var v=""===b,_=""===b.replace(/0+/g,""),E=b.length<=s,y=void 0===t;if(v||!y&&E&&_)return"0"===b?p?"0":0:null}var x=Number(b)/Math.pow(10,s)*m;x=Number((x*u).toPrecision(10)),p&&(x=x.toString());var N=x!==t;return k&&N&&k(x),x}(e,t)},onChange:function(e){return x(e)},onFocus:function(e){return x(e)},autoComplete:"off"}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a(5),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e){var t=e.pattern,a=e.placeholder,r=void 0===a?"_":a,l=e.maskDefinitions,c=void 0===l?o.default:l,s=e.guide,i=void 0===s||s,u=e.stripMask,m=void 0===u||u,p=e.allowEmpty,d=void 0!==p&&p,h=e.onChange,g=e.onCompletePattern;if(!t)throw new Error("The key `pattern` is required for createTextMask. You probably forgot to add it to your options.");if(!r||1!==r.length)throw new Error("The key `placeholder` should have a single character as a value.");var f=(0,n.validCaretPositions)(t,c);if(0===f.length)throw new Error("The pattern `"+t+"` passed for createTextMask is not valid.");var b=(0,n.charMatchTest)(r,c);if(b)throw new Error("The placeholder `"+r+"` matches the mask definition`"+b+"`. The mask created using `createTextMask`is therefore invalid.");var v=(0,n.maskStrip)(t,t,r,c),_=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?m||a?(0,n.applyMask)(e,t,r,i,d,c):e:(0,n.applyMask)("",t,r,i,d,c)},E=function(e,a){var o=(0,n.inputReformat)(e,t,r,i,d,c),l=(0,n.maskStrip)(o,t,r,c),s=(0,n.applyTransform)(l,m?a:(0,n.maskStrip)(a,t,r,c),v,c),u=_(s,!0),p=m?s:u,f=p!==a&&(""!==p||void 0!==a);return h&&f&&h(p),g&&(0,n.isPatternComplete)(u,t,c)&&f&&setTimeout(function(){return g(p)},10),p},y=function(e){var a=(0,n.firstUnfilledPosition)(e.value,t,r,c);e.setSelectionRange(a,a)},k=function(e,t,a){for(var n=void 0,r=0;r<=f.length;r+=1)if(f[r]>t){n=r;break}var o=void 0;if(void 0===(o="left"===a?f[n-1]:f[n])){var l="left"===a?0:f.length-1;o=f[l]}e.setSelectionRange(o,o)},x=function(e){if(e.target){e.persist&&e.persist();var a=e.target.selectionStart,n=e.target.value;setTimeout(function(){var r=e.target,o=e.type,l=e.key,c=e.target,s=c.value,i=c.selectionStart,u=c.selectionEnd;switch(o){case"change":if(s.length===n.length+1&&s.charAt(a)===t.charAt(a)){k(r,a,"left");break}y(r);break;case"focus":y(r);break;case"click":i===u&&(f.indexOf(i)>=0?e.preventDefault():y(r));break;case"keydown":"ArrowLeft"===l?k(r,i,"left"):"ArrowRight"===l&&k(r,a,"right")}})}};return{format:function(e){return _(e)},normalize:function(e,t){return E(e,t)},onKeyDown:function(e){return x(e)},onChange:function(e){return x(e)},onFocus:function(e){return x(e)},onClick:function(e){return x(e)},autoComplete:"off"}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={A:{regExp:/[A-Za-z]/,transform:function(e){return e.toUpperCase()}},a:{regExp:/[A-Za-z]/,transform:function(e){return e.toLowerCase()}},U:{regExp:/[A-Z]/},l:{regExp:/[a-z]/},9:{regExp:/[0-9]/}}}])}}]);
//# sourceMappingURL=43.8f214d16.chunk.js.map