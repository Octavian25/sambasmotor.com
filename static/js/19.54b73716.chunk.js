(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1074:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(29),o=t(7),s=t(49),r=t(5),m=t(97),p=t(9),i=t(27),d=t(41),h=t(502),u=t(131),g=t(196),b=t(197),k=t(132);class E extends n.Component{constructor(e){super(e),this.state={columns:[{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"kode_supplier",text:"Kode Supplier"},{dataField:"qty",text:"Qty"}]}}componentDidMount(){this.props.dispatch(Object(r.Bb)()),this.props.dispatch(Object(m.c)()),this.props.change("lokasi",localStorage.getItem("lokasi_stock_opname")||"")}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"tanggal",component:i.c,type:"date",label:"Tanggal",placeholder:"Masukan Tanggal"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"lokasi",component:i.e,options:this.props.listgudang.map(e=>{return{value:e.kode_lokasi_gudang,name:e.nama_lokasi_gudang}}),type:"text",label:"Lokasi",placeholder:"Masukan Lokasi",onChange:e=>localStorage.setItem("lokasi_stock_opname",e)})),l.a.createElement("div",{className:"col-lg-12 mb-3"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:()=>this.props.dispatch(Object(r.Wb)()),disabled:!localStorage.getItem("lokasi_stock_opname")},"Tambah Data ",l.a.createElement("i",{className:"fa fa-plus ml-3"})))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(k.a,{keyField:"kode_barcode",data:this.props.liststockopname||[],columns:this.state.columns,textEmpty:"Silahkan pilih Lokasi, Setelah itu tambah barang"})),l.a.createElement("div",{className:"col-lg-12 mb-3"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:()=>this.props(Object(s.b)("HeadStockOpname"))},this.props.onSend?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):l.a.createElement(l.a.Fragment,null,"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane ml-3 "})))))))}}E=Object(b.a)({form:"HeadStockOpname",enableReinitialize:!0})(E);var S=Object(c.b)(e=>({listgudang:e.datamaster.listgudang,liststockopname:e.supervisor.liststockopname,onSend:e.datamaster.onSend}))(E),O=t(487);class N extends n.Component{constructor(e){super(e),this.state={listSupplier:[]}}getBarcode(e){let a=localStorage.getItem("lokasi_hancur")||"";Object(p.b)("hancur-barang/get/BarangByBarcodeLokasi/"+"".concat(e.target.value,"&").concat(a)).then(e=>this.setBarang(e.data))}setBarang(e){console.log(e),this.props.change("kode_barang",e[0].kode_barang),this.props.change("nama_barang",e[0].nama_barang),this.props.change("merk",e[0].merk_barang),this.props.change("kwalitas",e[0].kwalitas),this.props.change("satuan",e[0].satuan),this.setState({listSupplier:e&&e[0].data_supplier.map(e=>{return{value:"".concat(e.kode_supplier,"||").concat(e.stock),name:e.nama_supplier}})})}setStock(e){let a=e.split("||");this.props.change("kode_supplier",a[0]),this.props.change("stock",a[1])}render(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"kode_barcode",component:i.c,type:"text",label:"Kode Barcode",placeholder:"Masukan Kode Barcode",onChange:e=>this.getBarcode(e),onBlur:e=>this.getBarcode(e)})),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(g.a,{name:"kode_barang",component:i.c,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang",readOnly:!0})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"nama_barang",component:i.c,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang",readOnly:!0})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"merk",component:i.c,type:"text",label:"Merk",placeholder:"Masukan Merk",readOnly:!0})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"kwalitas",component:i.c,label:"Kualitas",placeholder:"Masukan Kualitas",readOnly:!0})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"satuan",component:i.c,type:"text",label:"Satuan",placeholder:"Masukan Satuan",readOnly:!0})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"kode_supplier1",component:i.e,options:this.state.listSupplier,type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier",onChange:e=>this.setStock(e)})),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(g.a,{name:"kode_supplier",component:i.c,type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier"})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(g.a,{name:"stock",component:i.c,type:"number",label:"Stock",placeholder:"Masukan Stock",readOnly:!0})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(g.a,{name:"qty",component:i.c,type:"number",label:"Qty",placeholder:"Masukan Qty",validate:O.a})))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane"}))))))}}var v=N=Object(b.a)({form:"ModalStockOpname",enableReinitialize:!0})(N);a.default=Object(c.b)()(class extends n.Component{constructor(e){super(e),this.state={}}componentDidMount(){}handleHead(e){this.props.dispatch(Object(r.Vb)());let a={tanggal:e.tanggal,kode_lokasi_gudang:e.lokasi,detail_barang:JSON.parse(localStorage.getItem("StockOpname_temp"))||[]};Object(p.c)("stock-opname/post-transaksi",a).then(()=>Object(i.b)("Stockopname Berhasil")).then(()=>this.props.dispatch(Object(s.a)("HeadStockOpname"))).then(()=>localStorage.removeItem("StockOpname_temp")).then(()=>localStorage.removeItem("lokasi_stock_opname")).then(()=>this.props.dispatch(Object(m.c)())).then(()=>this.props.dispatch(Object(r.Ub)())).catch(e=>Object(i.h)("Gagal StockOpname , Error : ".concat(e.response.data)).then(()=>this.props.dispatch(Object(r.Ub)())))}handleModal(e){let a={kode_supplier:e.kode_supplier,kode_barcode:e.kode_barcode,qty:e.qty};Object(h.a)("StockOpname_temp",a),this.props.dispatch(Object(m.c)()),this.props.dispatch(Object(s.a)("ModalStockOpname"))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(o.b,{to:"#"},"Stock Opname")),l.a.createElement("li",{className:"breadcrumb-item active"},"Stock Opname Barang")),l.a.createElement("h1",{className:"page-header"},"Stock Opname Barang "),l.a.createElement(d.a,null,l.a.createElement(d.c,null,"Stock Opname Barang"),l.a.createElement(d.b,null,l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(S,{onSubmit:e=>this.handleHead(e),liststockopname:this.props.liststockopname})))),l.a.createElement(u.a,{title:"Tambah Data Barang",content:l.a.createElement(v,{onSubmit:e=>this.handleModal(e)})}))}})},487:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n=e=>e?void 0:"Tidak Boleh Kosong"},502:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(16),l=t.n(n);const c=(e,a)=>new Promise((t,n)=>{let c=JSON.parse(localStorage.getItem(e))||[];c.push(a),localStorage.setItem(e,JSON.stringify(c)),l.a.fire({position:"top-right",text:"Tambah Data Berhasil",timer:2e3,icon:"success",showConfirmButton:!1}).then(()=>t("Berhaisl")).catch(()=>n("GAGAL"))})}}]);
//# sourceMappingURL=19.54b73716.chunk.js.map