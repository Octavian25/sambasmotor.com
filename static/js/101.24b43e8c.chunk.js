(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1067:function(a,e,t){"use strict";t.r(e);var n=t(0),l=t.n(n),c=t(7),o=t(9),r=t(38),s=t(27),i=t(41),p=t(59);t(132);var m=(a="",e="",t="",n="",l="",c)=>{const o=new p.default;let s=[],i=40,m=0,d=[];o.setFontSize(15),o.text("LAPORAN KARTU STOCK",14,15),o.setFontSize(10),o.text("Tanggal : ".concat(a," s/d ").concat(e),14,25),c.forEach((a,e)=>{d=[[{content:"LOKASI : ".concat(a.lokasi),colSpan:3},{content:"NAMA BARANG : ".concat(a.nama_barang),colSpan:3}],[{content:"MERK BARANG : ".concat(a.merk_barang),colSpan:3},{content:"SALDO AWAL : ".concat(a.saldo_awal_barang),colSpan:3}],[{content:"TANGGAL"},{content:"NO BON"},{content:"KETERANGAN"},{content:"MASUK"},{content:"KELUAR"},{content:"SALDO"}]],a.detail.forEach(a=>{let e=[Object(r.a)(a.tanggal),a.no_bon,a.keterangan,a.masuk_qty||"",a.keluar_qty||"",a.saldo_barang];m+=parseInt(a.qty),s.push(e),m=0})}),o.autoTable({head:d,body:s,foot:[],startY:35,theme:"plain",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[187,187,187]}}),i=o.autoTableEndPosY()+10,o.text("User\t: ".concat(t),14,i),o.text("Cetak\t: ".concat(n),14,i+5),o.text("Valid\t: ".concat(l),14,i+10);const u=o.internal.getNumberOfPages(),g=o.internal.pageSize.width,b=o.internal.pageSize.height;o.setFontSize(10);for(let r=1;r<u+1;r++){let a=g/2,e=b-10;o.setPage(r),o.text("".concat(r," of ").concat(u),a,e,{align:"center"})}o.autoPrint();var h="<embed width='100%' height='100%' src='"+o.output("datauristring")+"'/>",E=window.open();E.document.open(),E.document.write(h)},d=t(29),u=t(195),g=t(196),b=t(6);class h extends n.Component{constructor(a){super(a),this.state={}}componentDidMount(){this.props.dispatch(Object(b.Qb)()),this.props.dispatch(Object(b.wb)())}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(u.a,{name:"tanggal_awal",component:s.c,type:"date",label:"Dari Tanggal",placeholder:"Masukan Tanggal Awal"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(u.a,{name:"tanggal_akhir",component:s.c,type:"date",label:"Sampai Tanggal",placeholder:"Masukan Sampai Tanggal"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(u.a,{name:"kode_supplier",component:s.e,options:this.props.listsupplier.map(a=>{return{value:a.kode_supplier,name:"".concat(a.kode_supplier," - ").concat(a.nama_supplier)}}),type:"text",label:"Supplier",placeholder:"Masukan Supplier"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(u.a,{name:"kode_barcode",component:s.e,options:this.props.listbarang.map(a=>{return{value:a.kode_barcode,name:"".concat(a.kode_barcode," - ").concat(a.nama_barang)}}),type:"text",label:" Nama Barang",placeholder:"Masukan Nama Barang"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Lihat Data ",l.a.createElement("i",{className:"fa fa-print ml-3"}))))))}}h=Object(g.a)({form:"HeadLaporanPengeluaranBarang",enableReinitialize:!0})(h);var E=Object(d.b)(a=>({listsupplier:a.datamaster.listsupplier,listbarang:a.datamaster.listbarang}))(h);e.default=class extends n.Component{constructor(a){super(a),this.state={listLaporan:[]}}getLaporan(a){Object(o.b)("laporan/stocking/lap-kartu-barang/".concat(a.kode_supplier,"&").concat(a.tanggal_awal,"&").concat(a.tanggal_akhir,"&").concat(a.kode_barcode)).then(a=>this.setState({listLaporan:a.data})).then(()=>m(a.tanggal_awal,a.tanggal_akhir,Object(s.k)().user_name,Object(r.b)(),Object(s.k)().user_name,this.state.listLaporan))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(c.b,{to:"#"},"Laporan")),l.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Kartu Stock")),l.a.createElement("h1",{className:"page-header"},"Laporan Kartu Stock "),l.a.createElement(i.a,null,l.a.createElement(i.c,null,"Laporan Kartu Stock"),l.a.createElement(i.b,null,l.a.createElement(E,{onSubmit:a=>this.getLaporan(a)}))))}}}}]);
//# sourceMappingURL=101.24b43e8c.chunk.js.map