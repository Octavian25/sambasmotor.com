(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1084:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(7),m=t(29),r=t(41),s=t(131),o=t(196),u=t(197),i=t(27);class p extends l.Component{constructor(e){super(e),this.state={}}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(o.a,{name:"kode_barcode",component:i.c,type:"text",label:"Barcode",placeholder:"Masukan Barcode"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(o.a,{name:"nama_barang",component:i.c,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(o.a,{name:"merk",component:i.e,options:[{value:"MERK BARANG01",name:"MERK BARANG 01"},{value:"MERK BARANG02",name:"MERK BARANG 02"},{value:"MERK BARANG03",name:"MERK BARANG 03"},{value:"MERK BARANG04",name:"MERK BARANG 04"}],type:"text",label:"Merk",placeholder:"Masukan Merk"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(o.a,{name:"type",component:i.c,type:"text",label:"Type",placeholder:"Masukan Type"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(o.a,{name:"ukuran",component:i.e,options:[{value:"UKURAN01",name:"UKURAN 01"},{value:"UKURAN02",name:"UKURAN 02"},{value:"UKURAN03",name:"UKURAN 03"},{value:"UKURAN04",name:"UKURAN 04"}],type:"text",label:"Ukuran",placeholder:"Masukan Ukuran"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(o.a,{name:"qty",component:i.c,type:"text",label:"Qty",placeholder:"Masukan Qty"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(o.a,{name:"satuan",component:i.e,options:[{value:"satuan01",name:"satuan 01"},{value:"satuan02",name:"satuan 02"},{value:"satuan03",name:"satuan 03"},{value:"satuan04",name:"satuan 04"}],type:"text",label:"Satuan",placeholder:"Masukan Satuan"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(o.a,{name:"harga_satuan",component:i.c,type:"text",label:"Harga Satuan",placeholder:"Masukan Harga Satuan"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(o.a,{name:"total",component:i.c,type:"text",label:"Total",placeholder:"Masukan Total"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-right"},n.a.createElement("button",{className:"btn btn-primary"},"Simpan ",n.a.createElement("i",{className:"fa fa-paper-plane"})))))))}}p=Object(u.a)({form:"ModalKomplainService",enableReinitialize:!0})(p);var d=Object(m.b)()(p);const E=Object(l.lazy)(()=>t.e(58).then(t.bind(null,1047)));a.default=Object(m.b)(e=>({listbayar_service:e.stocking.listbayar_service}),null)(class extends n.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,bayar:!0,jumlah_discount:0,total_jasa:0,total_sparepart:0,jenisModal:""}}componentDidMount(){}handleSubmit(e){console.log(e)}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(c.b,{to:"#"},"Transaksi")),n.a.createElement("li",{className:"breadcrumb-item active"},"Komplain Service")),n.a.createElement("h1",{className:"page-header"},"Komplain Service "),n.a.createElement(r.a,null,n.a.createElement(r.c,null,"Komplain Service"),n.a.createElement(r.b,null,n.a.createElement("br",null),n.a.createElement(E,{onSubmit:e=>this.handleSubmit(e)}))),n.a.createElement(s.a,{title:"Tambah Data Barang",content:n.a.createElement(d,null)}))}})}}]);
//# sourceMappingURL=116.45e3cab4.chunk.js.map