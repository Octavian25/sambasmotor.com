(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1000:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(28),i=t(197),s=t(198),l=t(489),c=t(9),u=t(18),g=t(487),d=t(490);const m=Object(l.createNumberMask)({prefix:"Rp. ",suffix:" ,-",locale:"id-ID"});class p extends n.Component{constructor(e){super(e),this.state={listJenis:[],listKategori:[],listMerk:[],listUkuran:[],listKwalitas:[],listRak:[],listSelving:[],listSatuan:[]}}componentDidMount(){this.props.isEdit||this.props.change("kode_barang",this.props.idbarang),Object(c.b)("kategori/get/all").then(e=>this.setState({listKategori:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")),Object(c.b)("jenis/get/all").then(e=>this.setState({listJenis:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")),Object(c.b)("merk-barang/get/all").then(e=>this.setState({listMerk:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")),Object(c.b)("ukuran/get/all").then(e=>this.setState({listUkuran:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")),Object(c.b)("kwalitas/get/all").then(e=>this.setState({listKwalitas:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")),Object(c.b)("lokasi-rak/get/all").then(e=>this.setState({listRak:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")),Object(c.b)("satuan/get/all").then(e=>this.setState({listSatuan:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")),Object(c.b)("lokasi-selving/get/all").then(e=>this.setState({listSelving:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda"))}getJenis(e=""){this.props.change("jenis_barang",""),""===e?Object(c.b)("jenis/get/all").then(e=>this.setState({listJenis:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")):Object(c.b)("jenis/get/by-kode-kategori/"+e).then(e=>this.setState({listJenis:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda"))}getShelving(e=""){this.props.change("selving",""),""===e?Object(c.b)("lokasi-selving/get/all").then(e=>this.setState({listSelving:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")):Object(c.b)("lokasi-selving/get/by-kode-lokasi-rak/"+e).then(e=>this.setState({listSelving:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda"))}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"kode_kategori",component:u.e,options:this.state.listKategori.map(e=>{return{value:e.kode_kategori,name:e.nama_kategori}}),type:"text",label:"Kode Kategori",placeholder:"Masukan kode Kategori",readOnly:this.props.isEdit,onChange:e=>this.getJenis(e)})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"jenis_barang",component:u.e,options:this.state.listJenis.map(e=>{return{value:e.kode_jenis,name:e.nama_jenis}}),label:"Jenis Barang",placeholder:"Masukan Jenis Barang"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"kode_barcode",component:u.c,type:"text",label:"Kode Barcode",placeholder:"Masukan Kode Barcode",validate:g.a})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"kode_barang",component:u.c,type:"text",label:"Kode Barang",placeholder:"Masukan Kode Barang",readOnly:!0,validate:g.a})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(i.a,{name:"nama_barang",component:u.c,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang",validate:g.a})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"merk",component:u.e,options:this.state.listMerk.map(e=>{return{value:e.kode_merk_barang,name:e.nama_merk_barang}}),label:"Merk Barang",placeholder:"Masukan Merk"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"ukuran",component:u.e,options:this.state.listUkuran.map(e=>{return{value:e.kode_ukuran,name:e.nama_ukuran}}),label:"Ukuran",placeholder:"Masukan Ukuran"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"kwalitas",component:u.e,options:this.state.listKwalitas.map(e=>{return{value:e.kode_kwalitas,name:e.nama_kwalitas}}),label:"Kualitas",placeholder:"Masukan Kualitas"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"type",component:u.c,options:[],label:"Type",placeholder:"Masukan Type"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"rak",component:u.e,options:this.state.listRak.map(e=>{return{value:e.kode_lokasi_rak,name:e.nama_lokasi_rak}}),label:"Rak",placeholder:"Masukan Rak",onChange:e=>this.getShelving(e)})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"selving",component:u.e,options:this.state.listSelving.map(e=>{return{value:e.kode_lokasi_selving,name:e.nama_lokasi_selving}}),label:"Selfing",placeholder:"Masukan Selfing",emptyMessage:()=>r.a.createElement("div",{style:{textAlign:"center"}},"Data Shelving Kosong")})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"satuan",component:u.e,options:this.state.listSatuan.map(e=>{return{value:e.kode_satuan,name:e.nama_satuan}}),type:"text",label:"Satuan",placeholder:"Masukan Satuan"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,Object.assign({name:"harga",component:u.c,type:"telp",label:"Harga",placeholder:"Masukan Harga",validate:g.a},m)))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):r.a.createElement(r.a.Fragment,null,"Simpan ",r.a.createElement("i",{className:"fa fa-paper-plane ml-3 "})))))}}p=Object(s.a)({form:"dataBarang",enableReinitialize:!0,validate:d.a})(p),a.default=Object(o.b)(e=>void 0!==e.datamaster.databarang?{initialValues:{kode_kategori:e.datamaster.databarang.kode_kategori,jenis_barang:e.datamaster.databarang.kode_jenis,kode_barang:e.datamaster.databarang.kode_barang,kode_barcode:e.datamaster.databarang.kode_barcode,nama_barang:e.datamaster.databarang.nama_barang,merk:e.datamaster.databarang.kode_merk_barang,ukuran:e.datamaster.databarang.kode_ukuran,kwalitas:e.datamaster.databarang.kode_kwalitas,type:e.datamaster.databarang.type,rak:e.datamaster.databarang.kode_lokasi_rak,selving:e.datamaster.databarang.kode_lokasi_selving,harga:e.datamaster.databarang.harga_jual,satuan:e.datamaster.databarang.kode_satuan},onSend:e.datamaster.onSend}:{onSend:e.datamaster.onSend},null)(p)},487:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n=e=>e?void 0:"Tidak Boleh Kosong"},489:function(e,a,t){"undefined"!=typeof self&&self,e.exports=function(e){function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}var t={};return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="/dist/",a(a.s=1)}([function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},r=function(e,a){return a[e]},o=function(e,a,t,n,o,i){var s="",l=e||"";if(0===l.length&&o&&!n)return"";for(var c=0,u=0;u<a.length;u+=1){var g=l.charAt(c),d=a.charAt(u),m=r(d,i);if(m)if(g)if(m.regExp.test(g))s=s.concat(g),c+=1;else{if(!n)return s;s=s.concat(t),l=""}else{if(!n)return s;s=s.concat(t)}else s=s.concat(d)}return s};a.applyMask=o,a.applyTransform=function(e,a,t,n){for(var o=e||"",i=a||"",s="",l=0;l<o.length;l+=1){var c=o.charAt(l);if(c!==i.charAt(l)){var u=t.charAt(l),g=r(u,n);s=g&&g.transform?s.concat(g.transform(c)):s.concat(c)}else s=s.concat(c)}return s},a.countOcurrences=function(e,a){return(e.match(a)||[]).length},a.escapeRegExp=n,a.firstUnfilledPosition=function(e,a,t,n){if(""===e)return 0;for(var o=0;o<e.length;o+=1){var i=e.charAt(o),s=a.charAt(o);if(i===t&&i!==s)return o}if(e.length===a.length)for(var l=a.length-1;l>=0;l-=1){var c=a.charAt(l);if(r(c,n))return l+1}return e.length},a.getMaskDefinition=r,a.inputReformat=function(e,a,t,i,s,l){for(var c=e||"",u=0;u<a.length;u+=1){var g=a.charAt(u);if(!r(g,l)){var d=n(g);c=c.replace(new RegExp(d),"")}}var m=n(t);return c=c.replace(m,""),o(c,a,t,i,s,l)},a.isPatternComplete=function(e,a,t){if(!e||0===e.length)return!1;if(e.length!==a.length)return!1;for(var n=0;n<e.length;n+=1){var o=e.charAt(n),i=a.charAt(n),s=r(i,t);if(s){if(!s.regExp.test(o))return!1}else if(o!==i)return!1}return!0},a.maskStrip=function(e,a,t,n){for(var o="",i=e||"",s=0;s<i.length;s+=1){var l=i.charAt(s),c=a.charAt(s),u=r(c,n);u&&(u.regExp.test(l)?o=o.concat(l):l===t&&(i=""))}return o},a.numberToLocaleString=function(e,a,t){return e.toLocaleString(a,{minimumFractionDigits:t,maximumFractionDigits:t})},a.charMatchTest=function(e,a){for(var t=Object.keys(a),n=0;n<t.length;n+=1){var r=t[n];if(a[r].regExp.test(e))return r}},a.validCaretPositions=function(e,a){var t=[];if(!e||"string"!=typeof e||0===e.length)return t;r(e.charAt(0),a)&&t.push(0);for(var n=1;n<e.length;n+=1){var o=e.charAt(n-1),i=e.charAt(n);(r(o,a)||r(i,a))&&t.push(n)}return r(e.charAt(e.length-1),a)&&t.push(e.length),t}},function(e,a,t){e.exports=t(2)},function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0}),a.createTextMask=a.createNumberMask=void 0;var r=t(3),o=n(r),i=t(4),s=n(i);a.createNumberMask=o.default,a.createTextMask=s.default},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0);a.default=function(e){var a=e||{},t=a.prefix,r=void 0===t?"":t,o=a.suffix,i=void 0===o?"":o,s=a.decimalPlaces,l=void 0===s?0:s,c=a.multiplier,u=void 0===c?1:c,g=a.stringValue,d=void 0!==g&&g,m=a.allowEmpty,p=void 0!==m&&m,h=a.allowNegative,k=void 0!==h&&h,f=a.showPlusSign,v=void 0!==f&&f,b=a.spaceAfterSign,_=void 0!==b&&b,S=a.locale,E=a.onChange;if(l>10)throw new Error("The maximum value for createNumberMask's option `decimalPlaces` is 10.");if("number"!=typeof u)throw new Error("The createNumberMask's option `multilpier` should be of type number.");if(0===u)throw new Error("The createNumberMask's option `multilpier` cannot be zero.");var y=function(e){var a=e.target;a&&(e.persist&&e.persist(),setTimeout(function(){var t=a.value.length-i.length;e.target.setSelectionRange(t,t)}))};return{format:function(e){return function(e){var a=e;if(null===a||void 0===a||""===a){if(p)return"";a=0}else"number"!=typeof a&&(a=Number(a));var t=v?"+":"";return a<0&&(a*=-1,k&&(t="-")),t&&_&&(t+=" "),a*=1/u,a=(0,n.numberToLocaleString)(a,S,l),""+t+r+a+i}(e)},normalize:function(e,a){return function(e,a){var t=(0,n.escapeRegExp)(r),o=(0,n.escapeRegExp)(i),s=new RegExp("^[-|+]? ?"+t),c=new RegExp(o+"$"),g=1;if(k){var m=/-/g,h=(0,n.countOcurrences)(e,m)-(0,n.countOcurrences)(r,m)-(0,n.countOcurrences)(i,m);g=Math.pow(-1,h)%2}var f=e;if(r&&(f=f.replace(s,"")),i&&(f=f.replace(c,"")),f=f.replace(/\D/g,""),p){var v=""===f,b=""===f.replace(/0+/g,""),_=f.length<=l,S=void 0===a;if(v||!S&&_&&b)return"0"===f?d?"0":0:null}var y=Number(f)/Math.pow(10,l)*g;y=Number((y*u).toPrecision(10)),d&&(y=y.toString());var M=y!==a;return E&&M&&E(y),y}(e,a)},onChange:function(e){return y(e)},onFocus:function(e){return y(e)},autoComplete:"off"}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t(5),o=function(e){return e&&e.__esModule?e:{default:e}}(r);a.default=function(e){var a=e.pattern,t=e.placeholder,r=void 0===t?"_":t,i=e.maskDefinitions,s=void 0===i?o.default:i,l=e.guide,c=void 0===l||l,u=e.stripMask,g=void 0===u||u,d=e.allowEmpty,m=void 0!==d&&d,p=e.onChange,h=e.onCompletePattern;if(!a)throw new Error("The key `pattern` is required for createTextMask. You probably forgot to add it to your options.");if(!r||1!==r.length)throw new Error("The key `placeholder` should have a single character as a value.");var k=(0,n.validCaretPositions)(a,s);if(0===k.length)throw new Error("The pattern `"+a+"` passed for createTextMask is not valid.");var f=(0,n.charMatchTest)(r,s);if(f)throw new Error("The placeholder `"+r+"` matches the mask definition`"+f+"`. The mask created using `createTextMask`is therefore invalid.");var v=(0,n.maskStrip)(a,a,r,s),b=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?g||t?(0,n.applyMask)(e,a,r,c,m,s):e:(0,n.applyMask)("",a,r,c,m,s)},_=function(e,t){var o=(0,n.inputReformat)(e,a,r,c,m,s),i=(0,n.maskStrip)(o,a,r,s),l=(0,n.applyTransform)(i,g?t:(0,n.maskStrip)(t,a,r,s),v,s),u=b(l,!0),d=g?l:u,k=d!==t&&(""!==d||void 0!==t);return p&&k&&p(d),h&&(0,n.isPatternComplete)(u,a,s)&&k&&setTimeout(function(){return h(d)},10),d},S=function(e){var t=(0,n.firstUnfilledPosition)(e.value,a,r,s);e.setSelectionRange(t,t)},E=function(e,a,t){for(var n=void 0,r=0;r<=k.length;r+=1)if(k[r]>a){n=r;break}var o=void 0;if(void 0===(o="left"===t?k[n-1]:k[n])){var i="left"===t?0:k.length-1;o=k[i]}e.setSelectionRange(o,o)},y=function(e){if(e.target){e.persist&&e.persist();var t=e.target.selectionStart,n=e.target.value;setTimeout(function(){var r=e.target,o=e.type,i=e.key,s=e.target,l=s.value,c=s.selectionStart,u=s.selectionEnd;switch(o){case"change":if(l.length===n.length+1&&l.charAt(t)===a.charAt(t)){E(r,t,"left");break}S(r);break;case"focus":S(r);break;case"click":c===u&&(k.indexOf(c)>=0?e.preventDefault():S(r));break;case"keydown":"ArrowLeft"===i?E(r,c,"left"):"ArrowRight"===i&&E(r,t,"right")}})}};return{format:function(e){return b(e)},normalize:function(e,a){return _(e,a)},onKeyDown:function(e){return y(e)},onChange:function(e){return y(e)},onFocus:function(e){return y(e)},onClick:function(e){return y(e)},autoComplete:"off"}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={A:{regExp:/[A-Za-z]/,transform:function(e){return e.toUpperCase()}},a:{regExp:/[A-Za-z]/,transform:function(e){return e.toLowerCase()}},U:{regExp:/[A-Z]/},l:{regExp:/[a-z]/},9:{regExp:/[0-9]/}}}])},490:function(e,a,t){"use strict";a.a=((e,a)=>{const t={};return e.kode_kategori||(t.kode_kategori="Kode Tidak Boleh Kosong"),e.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),e.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),e.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),e.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t})}}]);
//# sourceMappingURL=14.d8cb513b.chunk.js.map