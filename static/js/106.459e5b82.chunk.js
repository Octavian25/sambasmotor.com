(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1075:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(29),o=t(7),r=t(5),s=t(9),i=t(27),m=t(41),d=t(60);t(133);var p=(e="",a="",t)=>{const n=new d.default("landscape");let l=[],c=[],o=40;n.setFontSize(15),n.text("LAPORAN STOCK OPNAME",14,15),n.setFontSize(10),n.text("TANGGAL : ".concat(e," s/d ").concat(a),14,25),t.forEach((e,a)=>{let t=[[{content:"LOKASI \t: ".concat(e.kode_lokasi_gudang),colSpan:2},{content:"NO STOCK OPNAME\t: ".concat(e.no_stock_opname),colSpan:4}],[{content:"KODE_BARCODE"},{content:"NAMA BARANG"},{content:"KODE SUPPLIER"},{content:"STOCK SYSTEM"},{content:"STOCK FISIK"},{content:"SELISIH"}]];e.detail.forEach(e=>{let a=[e.kode_barcode,e.nama_barang,e.kode_supplier,e.stock,e.stock_fisik,e.selisih];l.push(a)});let r=["","","",e.jml_stock,e.jml_stock_fisik,e.jml_selisih];c.push(r),o=n.lastAutoTable.finalY+10,n.autoTable({head:t,body:l,foot:c,startY:0===a?35:o+5,theme:"plain",rowPageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[187,187,187]}}),l=[]});var r="<embed width='100%' height='100%' src='"+n.output("datauristring")+"'/>",s=window.open();s.document.open(),s.document.write(r)},h=t(196),g=t(197);class b extends n.Component{constructor(e){super(e),this.state={}}componentDidMount(){this.props.dispatch(Object(r.Bb)())}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"}),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(h.a,{name:"tanggal_awal",component:i.c,type:"date",label:"Tanggal",placeholder:"Masukan Tanggal"})),l.a.createElement("div",{className:"col-lg-3"}),l.a.createElement("div",{className:"col-lg-3"}),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(h.a,{name:"tanggal_akhir",component:i.c,type:"date",label:"Tanggal",placeholder:"Masukan Tanggal"})),l.a.createElement("div",{className:"col-lg-3"}),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyiapkan Laporan"):l.a.createElement(l.a.Fragment,null,"Lihat Data ",l.a.createElement("i",{className:"fa fa-print ml-3 "})))))))}}b=Object(g.a)({form:"HeadLihatLaporanStockOpname",enableReinitialize:!0})(b);var u=Object(c.b)(e=>({listgudang:e.datamaster.listgudang,onSend:e.datamaster.onSend}))(b);a.default=Object(c.b)()(class extends n.Component{constructor(e){super(e),this.state={listLaporan:[]}}handleSubmit(e){this.props.dispatch(Object(r.Vb)()),Object(s.b)("laporan/lap-stock-opname/".concat(e.tanggal_awal,"&").concat(e.tanggal_akhir)).then(e=>console.log(e.data)).then(()=>p(e.tanggal_awal,e.tanggal_akhir,this.state.listLaporan)).then(()=>this.props.dispatch(Object(r.Ub)())).catch(e=>Object(i.h)("Error Get Data , Error : ".concat(e.response.data)))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(o.b,{to:"#"},"Stock Opname")),l.a.createElement("li",{className:"breadcrumb-item active"},"Lihat Laporan Stock Opname Barang")),l.a.createElement("h1",{className:"page-header"}," Lihat Laporan Stock Opname Barang "),l.a.createElement(m.a,null,l.a.createElement(m.c,null," Lihat Laporan Stock Opname Barang"),l.a.createElement(m.b,null,l.a.createElement(u,{onSubmit:e=>this.handleSubmit(e)}))))}})}}]);
//# sourceMappingURL=106.459e5b82.chunk.js.map