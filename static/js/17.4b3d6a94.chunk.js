(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1001:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(29),l=a(196),i=a(197),c=a(209),s=a(27),u=a(5),p=a(490),m=a(9),f=a(33),d=a(26),g=a(16),h=a.n(g),v=a(132),b=a(487);const k=Object(p.createNumberMask)({prefix:"Rp. ",suffix:" ,-",decimalPlaces:0,locale:"id-ID"});class E extends r.Component{constructor(e){super(e),this.state={listSupplier:[],hasilTerimaBarang:[],columns:[{dataField:"kode_barcode",text:"Barcode"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"merk",text:"Merk"},{dataField:"kwalitas",text:"Kualitas"},{dataField:"satuan",text:"Satuan"},{dataField:"qty",text:"Qty"},{dataField:"harga_satuan",text:"Harga Satuan",formatter:e=>e.toLocaleString("id-ID")},{dataField:"total",text:"Total",formatter:e=>e.toLocaleString("id-ID")},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,t)=>(this.setState({}),n.a.createElement("div",{className:"row text-center"},n.a.createElement("div",{className:"col-12"},n.a.createElement("button",{type:"button",onClick:()=>this.deleteBarang(t),className:"btn btn-danger"},"Hapus",n.a.createElement("i",{className:"fa fa-trash ml-2"})))))}]}}deleteBarang(e){h.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(t=>{t.isConfirmed&&(Object(s.k)("ReturnSupplier_temp_kirim",e.kode_barcode),Object(s.k)("ReturnSupplier_temp",e.kode_barcode),this.props.dispatch(Object(d.y)()))})}componentDidMount(){Object(m.b)("retur-barang-supplier/generate/no-trx").then(e=>localStorage.setItem("kode_return",e.data[0].no_retur_supplier)),Object(m.b)("supplier/get/all").then(e=>this.setState({listSupplier:e.data}))}setTotal(){this.props.change("total",this.props.total)}getTerimaBarang(e){Object(m.b)("terima-barang-supplier/lihat-bukti-terima/"+e.target.value).then(e=>this.setLocal(e)).then(()=>localStorage.setItem("return_kode",e.target.value)).then(()=>this.setPenjualan()).catch(e=>console.log(e))}setLocal(e){console.log("INI LOCAL"),this.setState({hasilTerimaBarang:e.data}),localStorage.setItem("return_supplier",e.data.kode_supplier),localStorage.setItem("return_tanggal_bon",Object(f.b)(e.data.tanggal_bon)),localStorage.setItem("return_keterangan",e.data.keterangan)}setPenjualan(){console.log(this.state.hasilTerimaBarang),this.props.change("kode_supplier",this.state.hasilTerimaBarang.kode_supplier),this.props.change("keterangan",this.state.hasilTerimaBarang.keterangan)}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(l.a,{name:"kode_return",component:s.c,type:"text",label:"Kode Return",placeholder:"Masukan Kode Return",readOnly:!0})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(l.a,{name:"no_bon",component:s.c,type:"text",label:"Nomor Faktur Penerimaan",placeholder:"Masukan Nomor Faktur Penerimaan",onChange:e=>this.getTerimaBarang(e),onBlur:e=>this.getTerimaBarang(e)})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(l.a,{name:"kode_supplier",component:s.e,options:this.state.listSupplier.map(e=>{return{value:e.kode_supplier,name:e.nama_supplier}}),type:"text",label:"Supplier",placeholder:"Masukan Supplier",validate:b.a})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(l.a,{name:"tanggal",component:s.c,type:"date",label:"Tanggal",placeholder:"Masukan Tanggal"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(l.a,{name:"keterangan",component:s.c,type:"text",label:"Keterangan",placeholder:"Masukan Keterangan",validate:b.a})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-right"},n.a.createElement("button",{className:"btn btn-warning",type:"button",onClick:()=>this.props.dispatch(Object(u.Wb)())},"Tambah Data ",n.a.createElement("i",{className:"fa fa-plus ml-3"})))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(v.a,{keyField:"kode_barcode",data:this.props.listreturnsupplier||[],columns:this.state.columns,CSVExport:!0,textEmpty:"Silahkan klik Tombol Kuning Untuk Tambah Barang"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(l.a,Object.assign({name:"sub_total",component:s.c,type:"text",label:"Sub Total",placeholder:"Masukan Sub Total",readOnly:!0},k))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(l.a,Object.assign({name:"discount",component:s.c,type:"text",label:"Discount",placeholder:"Masukan Discount",onChange:this.setTotal()},k))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(l.a,Object.assign({name:"total",component:s.c,type:"text",label:"Total",placeholder:"Masukan Total"},k))))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-right"},n.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):n.a.createElement(n.a.Fragment,null,"Simpan ",n.a.createElement("i",{className:"fa fa-paper-plane ml-3 "})))))))}}E=Object(i.a)({form:"HeadReturnSupplier",enableReinitialize:!0})(E);const x=Object(c.a)("HeadReturnSupplier");t.default=Object(o.b)(e=>{const t=x(e,"sub_total","discount"),a=t.sub_total,r=t.discount;return{onSend:e.datamaster.onSend,total:parseFloat(a||0)-parseFloat(r||0),initialValues:{sub_total:e.transaksi.sub_total,no_bon:localStorage.getItem("return_kode")||"",kode_return:localStorage.getItem("kode_return")||"",kode_supplier:localStorage.getItem("return_supplier")||"",keterangan:localStorage.getItem("return_keterangan")||"",tanggal:localStorage.getItem("return_tanggal_bon")||""}}})(E)},209:function(e,t,a){"use strict";var r=a(61),n=a.n(r),o=a(15);t.a=function(e){var t=e.getIn;return function(e,a){n()(e,"Form value must be specified");var r=a||function(e){return t(e,"form")};return function(a){for(var l=arguments.length,i=new Array(l>1?l-1:0),c=1;c<l;c++)i[c-1]=arguments[c];return n()(i.length,"No fields specified"),1===i.length?t(r(a),e+".values."+i[0]):i.reduce(function(n,l){var i=t(r(a),e+".values."+l);return void 0===i?n:o.a.setIn(n,l,i)},{})}}}(o.a)},487:function(e,t,a){"use strict";a.d(t,"a",function(){return r});const r=e=>e?void 0:"Tidak Boleh Kosong"},490:function(e,t,a){"undefined"!=typeof self&&self,e.exports=function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},n=function(e,t){return t[e]},o=function(e,t,a,r,o,l){var i="",c=e||"";if(0===c.length&&o&&!r)return"";for(var s=0,u=0;u<t.length;u+=1){var p=c.charAt(s),m=t.charAt(u),f=n(m,l);if(f)if(p)if(f.regExp.test(p))i=i.concat(p),s+=1;else{if(!r)return i;i=i.concat(a),c=""}else{if(!r)return i;i=i.concat(a)}else i=i.concat(m)}return i};t.applyMask=o,t.applyTransform=function(e,t,a,r){for(var o=e||"",l=t||"",i="",c=0;c<o.length;c+=1){var s=o.charAt(c);if(s!==l.charAt(c)){var u=a.charAt(c),p=n(u,r);i=p&&p.transform?i.concat(p.transform(s)):i.concat(s)}else i=i.concat(s)}return i},t.countOcurrences=function(e,t){return(e.match(t)||[]).length},t.escapeRegExp=r,t.firstUnfilledPosition=function(e,t,a,r){if(""===e)return 0;for(var o=0;o<e.length;o+=1){var l=e.charAt(o),i=t.charAt(o);if(l===a&&l!==i)return o}if(e.length===t.length)for(var c=t.length-1;c>=0;c-=1){var s=t.charAt(c);if(n(s,r))return c+1}return e.length},t.getMaskDefinition=n,t.inputReformat=function(e,t,a,l,i,c){for(var s=e||"",u=0;u<t.length;u+=1){var p=t.charAt(u);if(!n(p,c)){var m=r(p);s=s.replace(new RegExp(m),"")}}var f=r(a);return s=s.replace(f,""),o(s,t,a,l,i,c)},t.isPatternComplete=function(e,t,a){if(!e||0===e.length)return!1;if(e.length!==t.length)return!1;for(var r=0;r<e.length;r+=1){var o=e.charAt(r),l=t.charAt(r),i=n(l,a);if(i){if(!i.regExp.test(o))return!1}else if(o!==l)return!1}return!0},t.maskStrip=function(e,t,a,r){for(var o="",l=e||"",i=0;i<l.length;i+=1){var c=l.charAt(i),s=t.charAt(i),u=n(s,r);u&&(u.regExp.test(c)?o=o.concat(c):c===a&&(l=""))}return o},t.numberToLocaleString=function(e,t,a){return e.toLocaleString(t,{minimumFractionDigits:a,maximumFractionDigits:a})},t.charMatchTest=function(e,t){for(var a=Object.keys(t),r=0;r<a.length;r+=1){var n=a[r];if(t[n].regExp.test(e))return n}},t.validCaretPositions=function(e,t){var a=[];if(!e||"string"!=typeof e||0===e.length)return a;n(e.charAt(0),t)&&a.push(0);for(var r=1;r<e.length;r+=1){var o=e.charAt(r-1),l=e.charAt(r);(n(o,t)||n(l,t))&&a.push(r)}return n(e.charAt(e.length-1),t)&&a.push(e.length),a}},function(e,t,a){e.exports=a(2)},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTextMask=t.createNumberMask=void 0;var n=a(3),o=r(n),l=a(4),i=r(l);t.createNumberMask=o.default,t.createTextMask=i.default},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0);t.default=function(e){var t=e||{},a=t.prefix,n=void 0===a?"":a,o=t.suffix,l=void 0===o?"":o,i=t.decimalPlaces,c=void 0===i?0:i,s=t.multiplier,u=void 0===s?1:s,p=t.stringValue,m=void 0!==p&&p,f=t.allowEmpty,d=void 0!==f&&f,g=t.allowNegative,h=void 0!==g&&g,v=t.showPlusSign,b=void 0!==v&&v,k=t.spaceAfterSign,E=void 0!==k&&k,x=t.locale,_=t.onChange;if(c>10)throw new Error("The maximum value for createNumberMask's option `decimalPlaces` is 10.");if("number"!=typeof u)throw new Error("The createNumberMask's option `multilpier` should be of type number.");if(0===u)throw new Error("The createNumberMask's option `multilpier` cannot be zero.");var S=function(e){var t=e.target;t&&(e.persist&&e.persist(),setTimeout(function(){var a=t.value.length-l.length;e.target.setSelectionRange(a,a)}))};return{format:function(e){return function(e){var t=e;if(null===t||void 0===t||""===t){if(d)return"";t=0}else"number"!=typeof t&&(t=Number(t));var a=b?"+":"";return t<0&&(t*=-1,h&&(a="-")),a&&E&&(a+=" "),t*=1/u,t=(0,r.numberToLocaleString)(t,x,c),""+a+n+t+l}(e)},normalize:function(e,t){return function(e,t){var a=(0,r.escapeRegExp)(n),o=(0,r.escapeRegExp)(l),i=new RegExp("^[-|+]? ?"+a),s=new RegExp(o+"$"),p=1;if(h){var f=/-/g,g=(0,r.countOcurrences)(e,f)-(0,r.countOcurrences)(n,f)-(0,r.countOcurrences)(l,f);p=Math.pow(-1,g)%2}var v=e;if(n&&(v=v.replace(i,"")),l&&(v=v.replace(s,"")),v=v.replace(/\D/g,""),d){var b=""===v,k=""===v.replace(/0+/g,""),E=v.length<=c,x=void 0===t;if(b||!x&&E&&k)return"0"===v?m?"0":0:null}var S=Number(v)/Math.pow(10,c)*p;S=Number((S*u).toPrecision(10)),m&&(S=S.toString());var y=S!==t;return _&&y&&_(S),S}(e,t)},onChange:function(e){return S(e)},onFocus:function(e){return S(e)},autoComplete:"off"}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),n=a(5),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e){var t=e.pattern,a=e.placeholder,n=void 0===a?"_":a,l=e.maskDefinitions,i=void 0===l?o.default:l,c=e.guide,s=void 0===c||c,u=e.stripMask,p=void 0===u||u,m=e.allowEmpty,f=void 0!==m&&m,d=e.onChange,g=e.onCompletePattern;if(!t)throw new Error("The key `pattern` is required for createTextMask. You probably forgot to add it to your options.");if(!n||1!==n.length)throw new Error("The key `placeholder` should have a single character as a value.");var h=(0,r.validCaretPositions)(t,i);if(0===h.length)throw new Error("The pattern `"+t+"` passed for createTextMask is not valid.");var v=(0,r.charMatchTest)(n,i);if(v)throw new Error("The placeholder `"+n+"` matches the mask definition`"+v+"`. The mask created using `createTextMask`is therefore invalid.");var b=(0,r.maskStrip)(t,t,n,i),k=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?p||a?(0,r.applyMask)(e,t,n,s,f,i):e:(0,r.applyMask)("",t,n,s,f,i)},E=function(e,a){var o=(0,r.inputReformat)(e,t,n,s,f,i),l=(0,r.maskStrip)(o,t,n,i),c=(0,r.applyTransform)(l,p?a:(0,r.maskStrip)(a,t,n,i),b,i),u=k(c,!0),m=p?c:u,h=m!==a&&(""!==m||void 0!==a);return d&&h&&d(m),g&&(0,r.isPatternComplete)(u,t,i)&&h&&setTimeout(function(){return g(m)},10),m},x=function(e){var a=(0,r.firstUnfilledPosition)(e.value,t,n,i);e.setSelectionRange(a,a)},_=function(e,t,a){for(var r=void 0,n=0;n<=h.length;n+=1)if(h[n]>t){r=n;break}var o=void 0;if(void 0===(o="left"===a?h[r-1]:h[r])){var l="left"===a?0:h.length-1;o=h[l]}e.setSelectionRange(o,o)},S=function(e){if(e.target){e.persist&&e.persist();var a=e.target.selectionStart,r=e.target.value;setTimeout(function(){var n=e.target,o=e.type,l=e.key,i=e.target,c=i.value,s=i.selectionStart,u=i.selectionEnd;switch(o){case"change":if(c.length===r.length+1&&c.charAt(a)===t.charAt(a)){_(n,a,"left");break}x(n);break;case"focus":x(n);break;case"click":s===u&&(h.indexOf(s)>=0?e.preventDefault():x(n));break;case"keydown":"ArrowLeft"===l?_(n,s,"left"):"ArrowRight"===l&&_(n,a,"right")}})}};return{format:function(e){return k(e)},normalize:function(e,t){return E(e,t)},onKeyDown:function(e){return S(e)},onChange:function(e){return S(e)},onFocus:function(e){return S(e)},onClick:function(e){return S(e)},autoComplete:"off"}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={A:{regExp:/[A-Za-z]/,transform:function(e){return e.toUpperCase()}},a:{regExp:/[A-Za-z]/,transform:function(e){return e.toLowerCase()}},U:{regExp:/[A-Z]/},l:{regExp:/[a-z]/},9:{regExp:/[0-9]/}}}])}}]);
//# sourceMappingURL=17.4b3d6a94.chunk.js.map