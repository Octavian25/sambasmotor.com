(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1091:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(7),r=t(722),m=t.n(r),s=t(41),i=t(92),o=t.n(i),d=t(62),p=t.n(d),E=t(94),h=t.n(E),b=t(131),u=t(29),N=t(195),v=t(196),x=t(27);class f extends l.Component{constructor(e){super(e),this.state={}}render(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(N.a,{name:"nama_hadiah",component:x.c,type:"text",label:"Nama Hadiah",placeholder:"Masukan Nama Hadiah"})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(N.a,{name:"stock_hadiah",component:x.c,type:"text",label:"Stock Hadiah",placeholder:"Masukan Stock Hadiah"})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(N.a,{name:"point",component:x.c,type:"text",label:"Point",placeholder:"Masukan Point"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary"},"Simpan ",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}f=Object(v.a)({form:"ModalDaftarHadiah",enableReinitialize:!0})(f);var g=Object(u.b)()(f),k=t(6);const S=d.Search.SearchBar,H=d.CSVExport.ExportCSVButton;a.default=Object(u.b)()(class extends l.Component{constructor(e){super(e),this.state={columns:[{dataField:"nama_hadiah",text:"Nama Hadiah"},{dataField:"stock_hadiah",text:"Stock"},{dataField:"point",text:"Point"}]}}render(){return c.a.createElement("div",null,c.a.createElement("ol",{className:"breadcrumb float-xl-right"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(n.b,{to:"#"},"Stock Opname")),c.a.createElement("li",{className:"breadcrumb-item active"},"Daftar Hadiah")),c.a.createElement("h1",{className:"page-header"}," Daftar Hadiah "),c.a.createElement(s.a,null,c.a.createElement(s.c,null," Daftar Hadiah"),c.a.createElement(s.b,null,c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:m.a,alt:"Gift",width:300}))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(p.a,{keyField:"no_acc",data:this.state.datakategori||[],columns:this.state.columns,search:!0,exportCSV:{fileName:"Export Master Kategori.csv"}},e=>c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("button",{onClick:()=>this.props.dispatch(Object(k.Wb)()),className:"btn btn-primary"},"Tambah Data",c.a.createElement("i",{className:"fa fa-plus ml-3"}))),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement(S,e.searchProps))),c.a.createElement("hr",null),c.a.createElement("div",{className:"col-12"},c.a.createElement(o.a,Object.assign({noDataIndication:"Belum Ada Data",pagination:h()()},e.baseProps)),c.a.createElement("br",null),c.a.createElement(H,e.csvProps,"Export CSV!!"))))))),c.a.createElement(b.a,{title:"Simpan Data Hadiah",content:c.a.createElement(g,null)}))}})},722:function(e,a,t){e.exports=t.p+"static/media/Gift.6bc49431.svg"}}]);
//# sourceMappingURL=56.93d89306.chunk.js.map