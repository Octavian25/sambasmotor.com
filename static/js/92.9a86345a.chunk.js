(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1063:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),l=t(7),o=t(9),c=t(18),s=t(41),i=t(60),p=(t(133),t(33));var m=(a="",e="",t="",n)=>{const r=new i.default("landscape");let l=[];r.setFontSize(15),r.text("LAPORAN PENJUALAN SPAREPART",14,15),r.setFontSize(10),r.text("TANGGAL : ".concat(a," s/d ").concat(e),14,25),r.text("KATEGORI : ".concat(t),14,30),n.forEach((a,e)=>{let t=[Object(p.b)(a.tanggal),a.no_faktur_jual,a.kode_barcode,a.nama_barang,a.merk_barang,a.qty,parseFloat(a.harga_satuan).toLocaleString("id-ID"),parseFloat(a.harga_total).toLocaleString("id-ID")];l.push(t)}),r.autoTable({head:[[{content:"TANGGAL"},{content:"NO FAKTUR"},{content:"BARCODE"},{content:"NAMA"},{content:"MERK"},{content:"QTY"},{content:"SATUAN"},{content:"TOTAL"}]],body:l,startY:35,theme:"plain",rowPageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}});var o="<embed width='100%' height='100%' src='"+r.output("datauristring")+"'/>",c=window.open();c.document.open(),c.document.write(o)},d=t(29),g=t(197),u=t(198),h=t(5);class b extends n.Component{constructor(a){super(a),this.state={}}componentDidMount(){this.props.dispatch(Object(h.Fb)())}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(g.a,{name:"kriteria_sparepart",component:c.e,options:this.props.listkategori.map(a=>{return{value:a.kode_kategori,name:a.nama_kategori}}),type:"text",label:"Kriteria Sparepart",placeholder:"Masukan Kriteria Sparepart"})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(g.a,{name:"tanggal_awal",component:c.c,type:"date",label:"Dari Tanggal",placeholder:"Masukan Tanggal Awal"})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(g.a,{name:"tanggal_akhir",component:c.c,type:"date",label:"Sampai Tanggal",placeholder:"Masukan Sampai Tanggal"})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyiapkan Laporan"):r.a.createElement(r.a.Fragment,null,"Lihat Data ",r.a.createElement("i",{className:"fa fa-print ml-3 "})))))))}}b=Object(u.a)({form:"HeadLaporanPenjualanSparepart",enableReinitialize:!0})(b);var E=Object(d.b)(a=>({listkategori:a.datamaster.listkategori,onSend:a.datamaster.onSend}))(b);e.default=class extends n.Component{constructor(a){super(a),this.state={listLaporan:[]}}getLaporan(a){Object(o.b)("laporan/penjualan/lap-penjualan-sparepart/"+"".concat(a.tanggal_awal,"&").concat(a.tanggal_akhir,"&").concat(a.kriteria_sparepart)).then(a=>{if(a.data)return Object(c.h)("Data Kosong"),!1;this.setState({listLaporan:a&&a.data})}).then(()=>this.state.listLaporan?m(a.tanggal_awal,a.tanggal_akhir,a.kriteria_sparepart,this.state.listLaporan):Object(c.h)("Data Kosong"))}render(){return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(l.b,{to:"#"},"Laporan")),r.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Penjualan Sparepart")),r.a.createElement("h1",{className:"page-header"},"Laporan Penjualan Sparepart "),r.a.createElement(s.a,null,r.a.createElement(s.c,null,"Laporan Penjualan Sparepart"),r.a.createElement(s.b,null,r.a.createElement(E,{onSubmit:a=>this.getLaporan(a)}))))}}}}]);
//# sourceMappingURL=92.9a86345a.chunk.js.map