(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1071:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t(9),o=t(33),c=t(18),i=t(41),p=t(60);t(133);var m=(e="",a)=>{const t=new p.default;t.setFontSize(15),t.text("LAPORAN HUTANG SUPPLIER",14,15),t.setFontSize(10),t.text("Tanggal\t: ".concat(e),14,22);let n=[],l=40,r=0,s=["KODE SUPPLIER","NAMA SUPPLIER","ALAMAT","SALDO HUTANG"];a.forEach((e,a)=>{t.setFontSize(10);let o=[e.kode_supplier,e.nama_supplier,e.alamat_supplier,parseFloat(e.saldo_hutang).toLocaleString("id-ID")];r+=parseFloat(e.saldo_hutang),n.push(o);let c=["","","Total : ","Rp, "+parseInt(r).toLocaleString("id-ID")];n.push(c),t.autoTable(s,n,{startY:0===a?30:l,theme:"plain",bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),l=t.lastAutoTable.finalY+10,n=[],r=0}),t.text("Printed on\t: ".concat(Object(o.c)()),14,l+22);var c="<embed width='100%' height='100%' src='"+t.output("datauristring")+"'/>",i=window.open();i.document.open(),i.document.write(c),i.document.close()},u=t(29),d=t(198);class b extends n.Component{constructor(e){super(e),this.state={}}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyiapkan Laporan"):l.a.createElement(l.a.Fragment,null,"Lihat Data ",l.a.createElement("i",{className:"fa fa-print ml-3 "})))))))}}b=Object(d.a)({form:"HeadLaporanHutangSupplier",enableReinitialize:!0})(b);var h=Object(u.b)(e=>({onSend:e.datamaster.onSend}))(b);a.default=class extends n.Component{constructor(e){super(e),this.state={}}handleSubmit(){Object(s.b)("laporan/supplier/lap-saldo-hutang-supplier").then(e=>m(Object(o.c)(),e.data)).catch(e=>Object(c.h)("Error Mendapat Laporan, Detail : ".concat(e.response.data)))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(r.b,{to:"#"},"Laporan")),l.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Hutang Supplier")),l.a.createElement("h1",{className:"page-header"},"Laporan Hutang Supplier "),l.a.createElement(i.a,null,l.a.createElement(i.c,null,"Laporan Hutang Supplier"),l.a.createElement(i.b,null,l.a.createElement(h,{onSubmit:e=>this.handleSubmit(e)}))))}}}}]);
//# sourceMappingURL=101.2f83d8c3.chunk.js.map