(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1069:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a(25),c=a(19),l=a(33),s=a(42),p=a(132),u=a(555),m=a(24),d=a(5),g=a(8),h=a(79);var f=class extends n.Component{constructor(e){super(e),this.state={listBooking:[],columns:[{dataField:"no_booking",text:"No Booking"},{dataField:"tgl_booking",text:"Tanggal Booking"},{dataField:"nopol_kendaraan",text:"Nomor Polisi"},{dataField:"jenis_service",text:"Jenis Service"},{dataField:"tgl_layanan",text:"Tanggal"}]}}componentDidMount(){Object(g.b)("service/booking/getDataBookingAll").then(e=>this.setState({listBooking:e&&e.data}))}render(){return r.a.createElement("div",null,r.a.createElement(h.a,{data:this.state.listBooking||[],columns:this.state.columns,keyField:"no_booking",empty:"true",emptyText:"Data Kosong"}),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("p",null,"Untuk Sementara, Silahkan Copy Nomor Booking dan Paste di Nomor Booking Pendaftaran"),r.a.createElement("p",null,"Sedang Dalam Pengembangan agar bisa langsung copy")))}},v=a(60),b=(a(133),a(34));var k=e=>{const t=new v.default;t.setFontSize(15),t.text("FAKTUR SPK",14,15),t.setFontSize(10),Object(g.b)("customer/get/by-nopol/".concat(e[0].nopol_kendaraan)).then(a=>{localStorage.setItem("detail_customer",JSON.stringify(a&&a.data));let n=JSON.parse(localStorage.getItem("detail_customer"))||[],r=[],o=[],i=30,c=[[{content:"SERVICE LIST",colSpan:2}],[{content:"RINCIAN"},{content:"KETERANGAN"}]];console.log(n.nama_customer),e.forEach((e,a)=>{let l=[[{content:"TANGGAL : ".concat(Object(b.c)()),colSpan:1},{content:"NO FAKTUR : ".concat(e.no_daftar," "),colSpan:1},{content:"MEKANIK : ".concat(e.id_mekanik),colSpan:2}],[{content:"DATA PEMILIK",colSpan:2,styles:{fontStyle:"bold",fontSize:9}},{content:"DATA KENDARAAN",colSpan:2,styles:{fontStyle:"bold",fontSize:9}}],[{content:"NAMA : "},{content:"".concat(n.nama_customer)},{content:"NOMOR POLISI: "},{content:"".concat(n.nopol_kendaraan)}],[{content:"ALAMAT : ",rowSpan:2},{content:"".concat(n.alamat),rowSpan:2},{content:"MERK : "},{content:"".concat(n.merk_kendaraan)}],[{content:"TYPE : "},{content:"".concat(n.type_kendaraan)}],[{content:"KOTA : "},{content:"".concat(n.kota)},{content:"WARNA : "},{content:"".concat(n.warna_kendaraan)}],[{content:"NO HP : "},{content:"".concat(n.handphone)},{content:"NO. MESIN : "},{content:"".concat(n.nomesin_kendaraan)}],[{content:"============================================================================================================",colSpan:4}]];t.autoTable({body:l,startY:30,theme:"plain",rowPageBreak:"avoid",margin:{top:20},styles:{fontSize:8,rowWidth:15}}),i=t.autoTableEndPosY()+3,e.detail_barang.forEach(e=>{let t=[e.nama,e.keterangan];"JASA SERVICE"===e.jenis_barang?o.push(t):r.push(t)}),t.autoTable({head:c,body:o,startY:i,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211],valign:"middle",halign:"center"},styles:{fontSize:8,rowWidth:15}}),i=t.autoTableEndPosY()+3,i=t.autoTableEndPosY()+3,t.autoTable({body:[[{content:"Supervisor Advisor",style:{halign:"center"}},{content:"Mekanik",style:{halign:"center"}}],[{content:"",styles:{minCellHeight:20}},{content:"",styles:{minCellHeight:20}}],[{content:"(...............................)"},{content:"(...............................)"}]],startY:i,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},styles:{fontSize:8},bodyStyles:{valign:"middle",halign:"center"}})});var l="<embed width='100%' height='100%' src='"+t.output("datauristring")+"'/>",s=window.open();s.document.open(),s.document.write(l),s.document.close()})};const _=Object(n.lazy)(()=>Promise.all([a.e(2),a.e(19)]).then(a.bind(null,1041)));t.default=Object(i.b)(e=>({kunci_temp:e.stocking.kunci_temp,totalbarang:e.transaksi.totalbarang,totalsparepart:e.transaksi.totalsparepart,listdaftarservice:e.transaksi.listdaftarservice,noFaktur:e.datamaster.noFaktur}),null)(class extends r.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1}}componentDidMount(){this.props.dispatch(Object(m.A)()),this.props.dispatch(Object(d.Ab)()),Object(g.b)("daftar-service/generate/no-trx").then(e=>localStorage.setItem("no_daftar_service",e.data[0].no_daftar_service))}handleSubmit(e){this.props.dispatch(Object(d.Vb)());let t={no_booking:String(e.booking),no_daftar:e.no_faktur,nopol_kendaraan:e.nopol_kendaraan||e.booking_nopol,tgl_masuk:e.tanggal_masuk,km_masuk:e.km_masuk,tgl_keluar:e.tanggal_keluar,km_keluar:e.km_keluar,jdw_service:e.service_selanjutnya,km_service:e.km_service_berikutnya,keluhan:e.keluhan_konsumen,id_mekanik:e.kode_mekanik,status_booking:void 0!==e.booking,detail_barang:JSON.parse(localStorage.getItem("list_service_daftar_temp"))};console.log(JSON.stringify(t)),k([t]),Object(g.c)("daftar-service/post-transaksi",t).then(()=>Object(c.b)("Berhasil Menambahan Data Booking").then(()=>this.props.dispatch(Object(s.a)("ModalBookingService"))).then(()=>localStorage.removeItem("list_service_daftar_temp")).then(()=>this.props.dispatch(Object(s.a)("ModalDaftarService"))).then(()=>this.props.dispatch(Object(m.A)())).then(()=>this.props.dispatch(Object(d.Ub)()))).catch(e=>Object(c.h)("Terjadi Kesalahan Saat Menyimpan, Error :".concat(e)).then(()=>this.props.dispatch(Object(d.Ub)())))}showBooking(){this.setState({booking:!0}),this.props.dispatch(Object(d.Wb)())}showBarang(){this.setState({booking:!1}),this.props.dispatch(Object(d.Wb)())}tambahSparepart(e){let t={kode_supplier:"-",kode:e.kategori_service,nama:e.nama_service,qty:1,harga_satuan:e.harga_service,harga_total:e.harga_service,keterangan:e.keterangan_service,jenis_barang:"JASA SERVICE"},a={kode_supplier:e.kode_supplier,kode:e.kode_sparepart,nama:e.nama_sparepart,qty:1,harga_satuan:e.harga_sparepart,harga_total:e.harga_sparepart,keterangan:e.kategori_service,jenis_barang:"SPAREPART"},n=JSON.parse(localStorage.getItem("list_service_daftar_temp"))||[];n.push(t),n.push(a),localStorage.setItem("list_service_daftar_temp",JSON.stringify(n)),Object(c.i)("Tambah Data Berhasil"),this.props.dispatch(Object(d.Tb)()),this.props.dispatch(Object(s.a)("TambahService")),this.props.dispatch(Object(m.A)())}render(){return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(o.b,{to:"#"},"Data Master")),r.a.createElement("li",{className:"breadcrumb-item active"},"Daftar Service")),r.a.createElement("h1",{className:"page-header"},"Daftar Service "),r.a.createElement(l.a,null,r.a.createElement(l.c,null,"Daftar Service"),r.a.createElement(l.b,null,r.a.createElement("br",null),r.a.createElement(_,{onSubmit:e=>this.handleSubmit(e),showBarang:()=>this.showBarang(),showBooking:()=>this.showBooking()}))),r.a.createElement(p.a,{content:this.state.booking?r.a.createElement(f,null):r.a.createElement(u.a,{onSubmit:e=>this.tambahSparepart(e)}),title:this.state.booking?"Lihat Booking":"Tambah Data"}))}})},484:function(e,t,a){"use strict";a.d(t,"a",function(){return n});const n=e=>e?void 0:"Tidak Boleh Kosong"},486:function(e,t,a){"undefined"!=typeof self&&self,e.exports=function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},r=function(e,t){return t[e]},o=function(e,t,a,n,o,i){var c="",l=e||"";if(0===l.length&&o&&!n)return"";for(var s=0,p=0;p<t.length;p+=1){var u=l.charAt(s),m=t.charAt(p),d=r(m,i);if(d)if(u)if(d.regExp.test(u))c=c.concat(u),s+=1;else{if(!n)return c;c=c.concat(a),l=""}else{if(!n)return c;c=c.concat(a)}else c=c.concat(m)}return c};t.applyMask=o,t.applyTransform=function(e,t,a,n){for(var o=e||"",i=t||"",c="",l=0;l<o.length;l+=1){var s=o.charAt(l);if(s!==i.charAt(l)){var p=a.charAt(l),u=r(p,n);c=u&&u.transform?c.concat(u.transform(s)):c.concat(s)}else c=c.concat(s)}return c},t.countOcurrences=function(e,t){return(e.match(t)||[]).length},t.escapeRegExp=n,t.firstUnfilledPosition=function(e,t,a,n){if(""===e)return 0;for(var o=0;o<e.length;o+=1){var i=e.charAt(o),c=t.charAt(o);if(i===a&&i!==c)return o}if(e.length===t.length)for(var l=t.length-1;l>=0;l-=1){var s=t.charAt(l);if(r(s,n))return l+1}return e.length},t.getMaskDefinition=r,t.inputReformat=function(e,t,a,i,c,l){for(var s=e||"",p=0;p<t.length;p+=1){var u=t.charAt(p);if(!r(u,l)){var m=n(u);s=s.replace(new RegExp(m),"")}}var d=n(a);return s=s.replace(d,""),o(s,t,a,i,c,l)},t.isPatternComplete=function(e,t,a){if(!e||0===e.length)return!1;if(e.length!==t.length)return!1;for(var n=0;n<e.length;n+=1){var o=e.charAt(n),i=t.charAt(n),c=r(i,a);if(c){if(!c.regExp.test(o))return!1}else if(o!==i)return!1}return!0},t.maskStrip=function(e,t,a,n){for(var o="",i=e||"",c=0;c<i.length;c+=1){var l=i.charAt(c),s=t.charAt(c),p=r(s,n);p&&(p.regExp.test(l)?o=o.concat(l):l===a&&(i=""))}return o},t.numberToLocaleString=function(e,t,a){return e.toLocaleString(t,{minimumFractionDigits:a,maximumFractionDigits:a})},t.charMatchTest=function(e,t){for(var a=Object.keys(t),n=0;n<a.length;n+=1){var r=a[n];if(t[r].regExp.test(e))return r}},t.validCaretPositions=function(e,t){var a=[];if(!e||"string"!=typeof e||0===e.length)return a;r(e.charAt(0),t)&&a.push(0);for(var n=1;n<e.length;n+=1){var o=e.charAt(n-1),i=e.charAt(n);(r(o,t)||r(i,t))&&a.push(n)}return r(e.charAt(e.length-1),t)&&a.push(e.length),a}},function(e,t,a){e.exports=a(2)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTextMask=t.createNumberMask=void 0;var r=a(3),o=n(r),i=a(4),c=n(i);t.createNumberMask=o.default,t.createTextMask=c.default},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0);t.default=function(e){var t=e||{},a=t.prefix,r=void 0===a?"":a,o=t.suffix,i=void 0===o?"":o,c=t.decimalPlaces,l=void 0===c?0:c,s=t.multiplier,p=void 0===s?1:s,u=t.stringValue,m=void 0!==u&&u,d=t.allowEmpty,g=void 0!==d&&d,h=t.allowNegative,f=void 0!==h&&h,v=t.showPlusSign,b=void 0!==v&&v,k=t.spaceAfterSign,_=void 0!==k&&k,S=t.locale,E=t.onChange;if(l>10)throw new Error("The maximum value for createNumberMask's option `decimalPlaces` is 10.");if("number"!=typeof p)throw new Error("The createNumberMask's option `multilpier` should be of type number.");if(0===p)throw new Error("The createNumberMask's option `multilpier` cannot be zero.");var y=function(e){var t=e.target;t&&(e.persist&&e.persist(),setTimeout(function(){var a=t.value.length-i.length;e.target.setSelectionRange(a,a)}))};return{format:function(e){return function(e){var t=e;if(null===t||void 0===t||""===t){if(g)return"";t=0}else"number"!=typeof t&&(t=Number(t));var a=b?"+":"";return t<0&&(t*=-1,f&&(a="-")),a&&_&&(a+=" "),t*=1/p,t=(0,n.numberToLocaleString)(t,S,l),""+a+r+t+i}(e)},normalize:function(e,t){return function(e,t){var a=(0,n.escapeRegExp)(r),o=(0,n.escapeRegExp)(i),c=new RegExp("^[-|+]? ?"+a),s=new RegExp(o+"$"),u=1;if(f){var d=/-/g,h=(0,n.countOcurrences)(e,d)-(0,n.countOcurrences)(r,d)-(0,n.countOcurrences)(i,d);u=Math.pow(-1,h)%2}var v=e;if(r&&(v=v.replace(c,"")),i&&(v=v.replace(s,"")),v=v.replace(/\D/g,""),g){var b=""===v,k=""===v.replace(/0+/g,""),_=v.length<=l,S=void 0===t;if(b||!S&&_&&k)return"0"===v?m?"0":0:null}var y=Number(v)/Math.pow(10,l)*u;y=Number((y*p).toPrecision(10)),m&&(y=y.toString());var O=y!==t;return E&&O&&E(y),y}(e,t)},onChange:function(e){return y(e)},onFocus:function(e){return y(e)},autoComplete:"off"}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a(5),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e){var t=e.pattern,a=e.placeholder,r=void 0===a?"_":a,i=e.maskDefinitions,c=void 0===i?o.default:i,l=e.guide,s=void 0===l||l,p=e.stripMask,u=void 0===p||p,m=e.allowEmpty,d=void 0!==m&&m,g=e.onChange,h=e.onCompletePattern;if(!t)throw new Error("The key `pattern` is required for createTextMask. You probably forgot to add it to your options.");if(!r||1!==r.length)throw new Error("The key `placeholder` should have a single character as a value.");var f=(0,n.validCaretPositions)(t,c);if(0===f.length)throw new Error("The pattern `"+t+"` passed for createTextMask is not valid.");var v=(0,n.charMatchTest)(r,c);if(v)throw new Error("The placeholder `"+r+"` matches the mask definition`"+v+"`. The mask created using `createTextMask`is therefore invalid.");var b=(0,n.maskStrip)(t,t,r,c),k=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?u||a?(0,n.applyMask)(e,t,r,s,d,c):e:(0,n.applyMask)("",t,r,s,d,c)},_=function(e,a){var o=(0,n.inputReformat)(e,t,r,s,d,c),i=(0,n.maskStrip)(o,t,r,c),l=(0,n.applyTransform)(i,u?a:(0,n.maskStrip)(a,t,r,c),b,c),p=k(l,!0),m=u?l:p,f=m!==a&&(""!==m||void 0!==a);return g&&f&&g(m),h&&(0,n.isPatternComplete)(p,t,c)&&f&&setTimeout(function(){return h(m)},10),m},S=function(e){var a=(0,n.firstUnfilledPosition)(e.value,t,r,c);e.setSelectionRange(a,a)},E=function(e,t,a){for(var n=void 0,r=0;r<=f.length;r+=1)if(f[r]>t){n=r;break}var o=void 0;if(void 0===(o="left"===a?f[n-1]:f[n])){var i="left"===a?0:f.length-1;o=f[i]}e.setSelectionRange(o,o)},y=function(e){if(e.target){e.persist&&e.persist();var a=e.target.selectionStart,n=e.target.value;setTimeout(function(){var r=e.target,o=e.type,i=e.key,c=e.target,l=c.value,s=c.selectionStart,p=c.selectionEnd;switch(o){case"change":if(l.length===n.length+1&&l.charAt(a)===t.charAt(a)){E(r,a,"left");break}S(r);break;case"focus":S(r);break;case"click":s===p&&(f.indexOf(s)>=0?e.preventDefault():S(r));break;case"keydown":"ArrowLeft"===i?E(r,s,"left"):"ArrowRight"===i&&E(r,a,"right")}})}};return{format:function(e){return k(e)},normalize:function(e,t){return _(e,t)},onKeyDown:function(e){return y(e)},onChange:function(e){return y(e)},onFocus:function(e){return y(e)},onClick:function(e){return y(e)},autoComplete:"off"}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={A:{regExp:/[A-Za-z]/,transform:function(e){return e.toUpperCase()}},a:{regExp:/[A-Za-z]/,transform:function(e){return e.toLowerCase()}},U:{regExp:/[A-Z]/},l:{regExp:/[a-z]/},9:{regExp:/[0-9]/}}}])},517:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n);a(90),a(556),a(557),a(43);const o=({input:e,label:t,type:a,readOnly:n,placeholder:o,meta:{touched:i,error:c,warning:l}})=>r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},t),r.a.createElement("input",Object.assign({onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},e,{autoComplete:"off",type:a,className:"form-control",readOnly:n,placeholder:o})),i&&(c&&r.a.createElement("ul",{className:"parsley-errors-list filled"},r.a.createElement("li",{className:"parsley-required"}," ",c,"."))||l&&r.a.createElement("p",null,l)))},555:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(25),i=a(197),c=a(198),l=a(486),s=a(5),p=a(8),u=a(517),m=a(19),d=a(484);const g=Object(l.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class h extends n.Component{constructor(e){super(e),this.state={listSupplier:[]}}componentDidMount(){this.props.dispatch(Object(s.Gb)()),this.props.dispatch(Object(s.wb)())}setSparepart(e){let t=e.split("||");this.props.change("kode_supplier1",null),Object(p.b)("daftar-service/getDataBarangDaftarService/"+t[3]).then(e=>this.setState({listSupplier:e&&e.data[0].data_supplier})).catch(e=>Object(m.h)("Error Get Supplier, ".concat(e))),this.props.change("harga_sparepart",t[1]),this.props.change("kode_sparepart",t[3]),this.props.change("nama_sparepart",t[2])}setService(e){let t=e.split("||");this.props.change("kategori_service",t[0]),this.props.change("harga_service",t[1]),this.props.change("nama_service",t[2])}setBarang(e){this.props.change("stock",e.split("||")[1]),this.props.change("kode_supplier",e.split("||")[0])}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(i.a,{name:"kategori_service1",component:m.e,options:this.props.listkategoriservice.map(e=>{return{value:"".concat(e.kategori_service,"||").concat(e.harga_jasa_service,"||").concat(e.jenis_service),name:e.kategori_service}}),onChange:e=>this.setService(e),type:"text",label:"Jenis Service",placeholder:"Masukan Jenis Service"})),r.a.createElement("div",{className:"col-lg-12 d-none"},r.a.createElement(i.a,{name:"kategori_service",component:m.d,type:"text",label:"Harga Service",placeholder:"Masukan Harga Service"})),r.a.createElement("div",{className:"col-lg-12 "},r.a.createElement(i.a,Object.assign({name:"harga_service",component:m.d,type:"telp",label:"Harga Service",placeholder:"Masukan Harga Service"},g,{readOnly:!0}))),r.a.createElement("div",{className:"col-lg-12 "},r.a.createElement(i.a,{name:"keterangan_service",component:m.d,type:"text",label:"Keterangan Service",placeholder:"Masukan Keterangan Service",validate:d.a})),r.a.createElement("div",{className:"col-lg-12 d-none "},r.a.createElement(i.a,Object.assign({name:"nama_service",component:m.d,type:"telp",label:"Harga Service",placeholder:"Masukan Harga Service"},g)))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(i.a,{name:"sparepart",component:m.e,options:this.props.listBarang.map(e=>{return{value:"".concat(e.kode_barang,"||").concat(e.harga_jual,"||").concat(e.nama_barang,"||").concat(e.kode_barcode),name:e.nama_barang}}),onChange:e=>this.setSparepart(e),type:"text",label:"Barang Sparepart",placeholder:"Masukan Barang Sparepart"})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"kode_supplier1",component:m.e,options:this.state.listSupplier.map(e=>{return{value:"".concat(e.kode_supplier,"||").concat(e.stock),name:e.nama_supplier}}),onChange:e=>this.setBarang(e),type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"stock",component:u.a,type:"text",label:"Stock",placeholder:"Masukan Kode Supplier",readOnly:!0})))),r.a.createElement("div",{className:"col-lg-12 d-none"},r.a.createElement(i.a,{name:"kode_sparepart",component:m.d,type:"text",label:"Harga Service",placeholder:"Masukan Harga Service",readOnly:!0})),r.a.createElement("div",{className:"col-lg-12 d-none"},r.a.createElement(i.a,{name:"kode_supplier",component:m.d,type:"text",label:"Harga Service",placeholder:"Masukan Harga Service"})),r.a.createElement("div",{className:"col-lg-12 d-none"},r.a.createElement(i.a,{name:"nama_sparepart",component:m.d,type:"text",label:"Harga Service",placeholder:"Masukan Harga Service"})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(i.a,Object.assign({name:"harga_sparepart",component:m.d,type:"telp",label:"Harga Service",placeholder:"Masukan Harga Service"},g,{readOnly:!0})))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"btn btn-primary"},"Submit ",r.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))))}}h=Object(c.a)({form:"TambahService",enableReinitialize:!0})(h),t.a=Object(o.b)(e=>({listBarang:e.datamaster.listbarang,listkategoriservice:e.datamaster.listkategoriservice}))(h)}}]);
//# sourceMappingURL=9.02613ea1.chunk.js.map