(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1080:function(a,e,t){"use strict";t.r(e);var n=t(0),l=t.n(n),i=t(7),r=t(9),o=t(33),c=t(23),s=t(41),m=t(60);t(133);var d=(a="",e="",t="",n="",l="",i)=>{const r=new m.default;let o=[],c=[],s=40,d=0;r.setFontSize(15),r.text("LAPORAN PERMINTAAN BARANG",14,15),r.setFontSize(10),r.text("Tanggal : ".concat(a," s/d ").concat(e),14,25),i.forEach((a,e)=>{let t=[[{content:"NOMOR: ".concat(a.no_permintaan),colSpan:1},{content:"DIVISI: ".concat(a.kode_divisi),colSpan:1},{content:"NAMA : ".concat(a.kode_pegawai),colSpan:2},{content:"TANGGAL : ".concat(a.tgl_permintaan),colSpan:1}],[{content:"BARCODE"},{content:"NAMA BARANG"},{content:"MERK"},{content:"KUALITAS"},{content:"QTY"}]];a.detail.forEach((a,e)=>{let t=[a.kode_barcode,a.nama_barang,a.merk_barang,a.kwalitas,a.qty];d+=parseInt(a.qty),o.push(t)});let n=["","","","Total","".concat(d)];c.push(n),r.autoTable({head:t,body:o,foot:c,startY:0===e?35:s+5,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),s=r.autoTableEndPosY()+10,o=[],c=[],d=0}),r.text("User\t: ".concat(t),14,s+10),r.text("Cetak\t: ".concat(n),14,s+16),r.text("Valid\t: ".concat(l),14,s+22);const p=r.internal.getNumberOfPages(),g=r.internal.pageSize.width,u=r.internal.pageSize.height;r.setFontSize(10);for(let m=1;m<p+1;m++){let a=g/2,e=u-10;r.setPage(m),r.text("".concat(m," of ").concat(p),a,e,{align:"center"})}r.autoPrint();var b="<embed width='100%' height='100%' src='"+r.output("datauristring")+"'/>",h=window.open();h.document.open(),h.document.write(b)},p=t(29),g=t(196),u=t(197);class b extends n.Component{constructor(a){super(a),this.state={listDivisi:[]}}componentDidMount(){Object(r.b)("divisi/get/all").then(a=>this.setState({listDivisi:a&&a.data.map(a=>{return{value:a.kode_divisi,name:a.nama_divisi}})}))}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(g.a,{name:"tanggal_awal",component:c.c,type:"date",label:"Dari Tanggal",placeholder:"Masukan Tanggal Awal"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(g.a,{name:"tanggal_akhir",component:c.c,type:"date",label:"Sampai Tanggal",placeholder:"Masukan Sampai Tanggal"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(g.a,{name:"divisi",component:c.e,options:this.state.listDivisi,type:"text",label:"Divisi",placeholder:"Masukan Divisi"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyiapkan Laporan"):l.a.createElement(l.a.Fragment,null,"Lihat Data ",l.a.createElement("i",{className:"fa fa-print ml-3 "})))))))}}b=Object(u.a)({form:"HeadLaporanPermintaan",enableReinitialize:!0})(b);var h=Object(p.b)(a=>({onSend:a.datamaster.onSend}))(b);e.default=class extends n.Component{constructor(a){super(a),this.state={}}getLaporan(a){Object(r.b)("laporan/stocking/lap-permintaan-barang/"+"".concat(a.divisi,"&").concat(a.tanggal_awal,"&").concat(a.tanggal_akhir)).then(a=>this.setState({listLaporan:a.data})).then(()=>d(a.tanggal_awal,a.tanggal_akhir,Object(c.l)().user_name,Object(o.c)(),Object(c.l)().user_name,this.state.listLaporan))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(i.b,{to:"#"},"Laporan")),l.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Permintaan Barang")),l.a.createElement("h1",{className:"page-header"},"Laporan Permintaan Barang "),l.a.createElement(s.a,null,l.a.createElement(s.c,null,"Laporan Permintaan Barang"),l.a.createElement(s.b,null,l.a.createElement(h,{onSubmit:a=>this.getLaporan(a)}))))}}}}]);
//# sourceMappingURL=99.31ead2d8.chunk.js.map