(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1062:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t(9),o=t(41),c=t(60);t(133);var i=(e="",a="",t)=>{const n=new c.default;n.setFontSize(15),n.text("LAPORAN SERVICE",14,15),n.setFontSize(10),n.text("TANGGAL : ".concat(e),14,25);let l=[],r=0;t.forEach((e,a)=>{let t=[e.tanggal,e.no_faktur,e.jenis_service,parseFloat(e.total).toLocaleString("id-ID")];r+=parseFloat(e.total),l.push(t),console.log(l),r=0}),n.autoTable({head:[[{content:"TANGGAL"},{content:"NOMOR FAKTUR"},{content:"KETERANGAN"},{content:"TOTAL"}]],body:l,startY:35,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[187,187,187]}});var s="<embed width='100%' height='100%' src='"+n.output("datauristring")+"'/>",o=window.open();o.document.open(),o.document.write(s),o.document.close()},m=t(29),p=t(196),d=t(197),u=t(5),g=t(27);class h extends n.Component{constructor(e){super(e),this.state={}}componentDidMount(){this.props.dispatch(Object(u.Gb)())}render(){return this.props.listkategoriservice.push({value:"SEMUA",name:"SEMUA"}),l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(p.a,{name:"tanggal_awal",component:g.c,type:"date",label:"Dari Tanggal",placeholder:"Masukan Tanggal Awal"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(p.a,{name:"tanggal_akhir",component:g.c,type:"date",label:"Sampai Tanggal",placeholder:"Masukan Sampai Tanggal"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(p.a,{name:"kode_jenis",component:g.e,options:this.props.listkategoriservice.map(e=>{return{value:e.jenis_service,name:e.jenis_service}}),type:"text",label:"Jenis",placeholder:"Masukan Jenis"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyiapkan Laporan"):l.a.createElement(l.a.Fragment,null,"Lihat Data ",l.a.createElement("i",{className:"fa fa-print ml-3 "})))))))}}h=Object(d.a)({form:"HeadLaporanService",enableReinitialize:!0})(h);var E=Object(m.b)(e=>({listkategoriservice:e.datamaster.listkategoriservice,onSend:e.datamaster.onSend}))(h);a.default=class extends n.Component{constructor(e){super(e),this.state={}}getLaporan(e){Object(s.b)("laporan/service/lap-service/".concat(e.tanggal_awal,"&").concat(e.tanggal_akhir,"&").concat(e.kode_jenis||"SEMUA")).then(e=>this.setState({listLaporan:e&&e.data})).then(()=>i(e.tanggal_awal,e.kode_jenis,this.state.listLaporan))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(r.b,{to:"#"},"Laporan")),l.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Penjualan Sales")),l.a.createElement("h1",{className:"page-header"},"Laporan Penjualan Sales "),l.a.createElement(o.a,null,l.a.createElement(o.c,null,"Laporan Penjualan Sales"),l.a.createElement(o.b,null,l.a.createElement(E,{onSubmit:e=>this.getLaporan(e)}))))}}}}]);
//# sourceMappingURL=92.9787a109.chunk.js.map