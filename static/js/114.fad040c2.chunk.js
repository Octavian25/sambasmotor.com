(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1038:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(195),r=t(196),o=t(9),s=t(27);class m extends n.Component{constructor(e){super(e),this.state={listSupplier:[]}}getBarcode(e){let a=localStorage.getItem("lokasi_hancur")||"";Object(o.b)("hancur-barang/get/BarangByBarcodeLokasi/"+"".concat(e.target.value,"&").concat(a)).then(e=>this.setBarang(e.data))}setBarang(e){console.log(e),this.props.change("kode_barang",e[0].kode_barang),this.props.change("nama_barang",e[0].nama_barang),this.props.change("merk",e[0].merk_barang),this.props.change("kwalitas",e[0].kwalitas),this.props.change("satuan",e[0].satuan),this.setState({listSupplier:e&&e[0].data_supplier.map(e=>{return{value:"".concat(e.kode_supplier,"||").concat(e.stock),name:e.nama_supplier}})})}setStock(e){let a=e.split("||");this.props.change("stock",a[1])}render(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(c.a,{name:"kode_barcode",component:s.c,type:"text",label:"Kode Barcode",placeholder:"Masukan Kode Barcode",onChange:e=>this.getBarcode(e),onBlur:e=>this.getBarcode(e)})),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(c.a,{name:"kode_barang",component:s.c,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang",readOnly:!0})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(c.a,{name:"nama_barang",component:s.c,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang",readOnly:!0})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(c.a,{name:"merk",component:s.c,type:"text",label:"Merk",placeholder:"Masukan Merk",readOnly:!0})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(c.a,{name:"kwalitas",component:s.c,label:"Kualitas",placeholder:"Masukan Kualitas",readOnly:!0})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(c.a,{name:"satuan",component:s.c,type:"text",label:"Satuan",placeholder:"Masukan Satuan",readOnly:!0})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(c.a,{name:"kode_supplier",component:s.e,options:this.state.listSupplier,type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier",onChange:e=>this.setStock(e)})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(c.a,{name:"stock",component:s.c,type:"number",label:"Stock",placeholder:"Masukan Stock",readOnly:!0})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(c.a,{name:"qty",component:s.c,type:"number",label:"Qty",placeholder:"Masukan Qty"})))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane"}))))))}}m=Object(r.a)({form:"ModalTambahStockBarang",enableReinitialize:!0,validate:e=>{const a={};return parseInt(e.qty)<0?a.qty="Tidak Boleh Minus":0===parseInt(e.qty)&&(a.qty="Tidak boleh 0"),a}})(m),a.default=m}}]);
//# sourceMappingURL=114.fad040c2.chunk.js.map