(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1043:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(28),s=t(197),c=t(198),o=t(5),p=t(9),i=t(18);class m extends n.Component{constructor(e){super(e),this.state={listSupplier:[]}}getBarcode(e){this.props.dispatch(Object(o.Vb)()),Object(p.b)("permintaan-barang/get/BarangByBarcode/"+e.target.value).then(e=>this.setBarang(e.data)).then(()=>this.props.dispatch(Object(o.Ub)()))}setBarang(e){console.log(e),this.props.change("kode_barang",e[0].kode_barang),this.props.change("nama_barang",e[0].nama_barang),this.props.change("merk",e[0].merk_barang),this.props.change("kwalitas",e[0].kwalitas),this.props.change("satuan",e[0].satuan),this.setState({listSupplier:e&&e[0].data_supplier.map(e=>{return{value:"".concat(e.kode_supplier,"||").concat(e.stock),name:e.nama_supplier}})})}setStock(e){let a=e.split("||");this.props.change("stock",a[1])}render(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(s.a,{name:"kode_barcode",component:i.c,type:"text",label:"Kode Barcode",placeholder:"Masukan Kode Barcode",onChange:e=>this.getBarcode(e),onBlur:e=>this.getBarcode(e)})),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(s.a,{name:"kode_barang",component:i.c,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang",readOnly:!0})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(s.a,{name:"nama_barang",component:i.c,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang",readOnly:!0,loading:this.props.onSend})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(s.a,{name:"merk",component:i.c,type:"text",label:"Merk",placeholder:"Masukan Merk",readOnly:!0,loading:this.props.onSend})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(s.a,{name:"kwalitas",component:i.c,label:"Kualitas",placeholder:"Masukan Kualitas",readOnly:!0,loading:this.props.onSend})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(s.a,{name:"kode_supplier",component:i.e,options:this.state.listSupplier,type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier",onChange:e=>this.setStock(e)})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(s.a,{name:"stock",component:i.c,type:"text",label:"Stock",placeholder:"Masukan Stock",readOnly:!0,loading:this.props.onSend})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(s.a,{name:"qty",component:i.c,type:"text",label:"Qty",placeholder:"Masukan Qty"})))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane"}))))))}}m=Object(c.a)({form:"ModalKunciBarang",enableReinitialize:!0,validate:e=>{const a={};return parseInt(e.qty)>parseInt(e.stock)&&(a.qty="Tidak Boleh Melebihi Stock"),a}})(m),a.default=Object(r.b)(e=>({onSend:e.datamaster.onSend}))(m)}}]);
//# sourceMappingURL=114.bbb1974a.chunk.js.map