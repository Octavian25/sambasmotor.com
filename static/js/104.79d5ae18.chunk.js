(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1054:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(7),r=a(9),c=a(33),i=a(18),s=a(41),p=a(60);a(133);var u=(e="",t="",a="",n="",l="",o)=>{const r=new p.default;let c=[],i=[],s=40,u=0,d=0;r.setFontSize(15),r.text("LAPORAN DETAIL RETURN SUPPLIER",14,15),r.setFontSize(10),r.text("Supplier : ".concat(e),14,25),r.text("Tanggal\t: ".concat(t),120,25),o.forEach((e,t)=>{let a=[[{content:"NO FAKTUR : ".concat(e.no_retur_supplier),colSpan:5},{content:"NO BON : ".concat(e.no_bon),colSpan:3}],[{content:"TANGGAL TERIMA : ".concat(e.tanggal_retur),colSpan:8}],["KODE BARCODE","NAMA JENIS","MERK","KWT","SATUAN","QTY","H. SATUAN","TOTAL"]];e.detail_barang.forEach((e,t)=>{let a=[e.kode_barcode,e.nama_barang,e.merk_barang,e.kwalitas,e.satuan,e.qty,e.harga_satuan,"Rp. "+parseFloat(e.harga_total).toLocaleString("id-ID")];u+=parseFloat(e.harga_total),d+=parseInt(e.qty),c.push(a),console.log(c)});let n=["","","","","Sub Total","".concat(d),""," ".concat(parseFloat(e.jml_bruto_rp).toLocaleString("id-ID"))];i.push(n);let l=["","","","","Diskon","",""," ".concat(parseFloat(e.diskon_rp).toLocaleString("id-ID"))];i.push(l),r.autoTable({head:a,body:c,foot:i,startY:0===t?35:s+5,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),s=r.autoTableEndPosY()+10,c=[],i=[],u=0,d=0}),r.text("User\t: ".concat(a),14,s+10),r.text("Cetak\t: ".concat(n),14,s+16),r.text("Valid\t: ".concat(l),14,s+22);const m=r.internal.getNumberOfPages(),g=r.internal.pageSize.width,h=r.internal.pageSize.height;r.setFontSize(10);for(let p=1;p<m+1;p++){let e=g/2,t=h-10;r.setPage(p),r.text("".concat(p," of ").concat(m),e,t,{align:"center"})}r.autoPrint();var b="<embed width='100%' height='100%' src='"+r.output("datauristring")+"'/>",S=window.open();S.document.open(),S.document.write(b)};var d=(e="",t="",a="",n="",l="",o)=>{const r=new p.default;let i=[],s=0;r.setFontSize(15),r.text("LAPORAN REKAP RETURN SUPPLIER",14,15),r.setFontSize(10),r.text("Supplier : ".concat(e),14,25),r.text("Tanggal\t: ".concat(t),120,25),o.forEach((e,t)=>{e.detail_barang.forEach(e=>{s+=e.qty});let a=[e.no_retur_supplier,Object(c.b)(e.tanggal_retur)||"",e.no_bon,e.kode_supplier,Object.keys(e.detail_barang).length,s,parseFloat(e.jml_bruto_rp).toLocaleString("id-ID"),parseFloat(e.diskon_rp).toLocaleString("id-ID"),parseFloat(e.jml_netto_rp).toLocaleString("id-ID")];i.push(a),console.log(i),s=0}),r.autoTable({head:[[{content:"FAKTUR"},{content:"TANGGAL TERIMA"},{content:"NO BON",styles:{cellWidth:20}},{content:"KODE SUPPLIER"},{content:"ITEM"},{content:"QTY"},{content:"TOTAL"},{content:"DISKON"},{content:"BERSIH"}]],body:i,foot:[],startY:35,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}});let u=r.lastAutoTable.finalY+10;r.text("Print on\t: ".concat(Object(c.c)()),14,u+10);const d=r.internal.getNumberOfPages(),m=r.internal.pageSize.width,g=r.internal.pageSize.height;r.setFontSize(10);for(let c=1;c<d+1;c++){let e=m/2,t=g-10;r.setPage(c),r.text("".concat(c," of ").concat(d),e,t,{align:"center"})}r.autoPrint();var h="<embed width='100%' height='100%' src='"+r.output("datauristring")+"'/>",b=window.open();b.document.open(),b.document.write(h)},m=a(29),g=a(197),h=a(198);class b extends n.Component{constructor(e){super(e),this.state={listSupplier:[]}}componentDidMount(){Object(r.b)("supplier/get/all").then(e=>this.setState({listSupplier:e.data}))}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"kode_supplier",component:i.e,options:this.state.listSupplier.map(e=>{return{value:e.kode_supplier,name:e.nama_supplier}}),type:"text",label:"Nama Supplier",placeholder:"Masukan Nama Supplier"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"tanggal_awal",component:i.c,type:"date",label:"Dari Tanggal",placeholder:"Masukan Tanggal Awal"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"tanggal_akhir",component:i.c,type:"date",label:"Sampai Tanggal",placeholder:"Masukan Sampai Tanggal"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"type",component:i.e,options:[{value:"REKAP",name:"REKAP"},{value:"DETAIL",name:"DETAIL"}],type:"text",label:"Type",placeholder:"Masukan Divisi"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyiapkan Laporan"):l.a.createElement(l.a.Fragment,null,"Lihat Data ",l.a.createElement("i",{className:"fa fa-print ml-3 "})))))))}}b=Object(h.a)({form:"HeadLaporanReturnSupplier",enableReinitialize:!0})(b);var S=Object(m.b)(e=>({onSend:e.datamaster.onSend}))(b);t.default=class extends n.Component{constructor(e){super(e),this.state={}}handleSubmit(e){Object(r.b)("laporan/supplier/lap-retur-supplier/"+"".concat(e.kode_supplier||"SEMUA","&").concat(e.tanggal_awal,"&").concat(e.tanggal_akhir)).then(e=>{if(e.data)return Object(i.h)("Data Kosong"),!1;this.setState({hasilLaporan:e.data})}).then(()=>"DETAIL"===e.type?u(e.kode_supplier||"SEMUA",Object(c.c)(),"ADMIN",Object(c.c)(),"ADMIN",this.state.hasilLaporan):d(e.kode_supplier||"SEMUA",Object(c.c)(),"ADMIN",Object(c.c)(),"ADMIN",this.state.hasilLaporan))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(o.b,{to:"#"},"Laporan")),l.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Return Supplier")),l.a.createElement("h1",{className:"page-header"},"Laporan Return Supplier "),l.a.createElement(s.a,null,l.a.createElement(s.c,null,"Laporan Return Supplier"),l.a.createElement(s.b,null,l.a.createElement(S,{onSubmit:e=>this.handleSubmit(e)}))))}}}}]);
//# sourceMappingURL=104.79d5ae18.chunk.js.map