(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1032:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(7),l=t(94),s=t.n(l),r=t(63),m=t.n(r),o=t(95),d=t.n(o),u=t(29),p=t(16),k=t.n(p),h=t(42),E=t.n(h),b=t(131),g=t(23),_=t(41),N=t(5),x=t(30);const f=Object(n.lazy)(()=>t.e(113).then(t.bind(null,1e3))),S=r.Search.SearchBar,v=r.CSVExport.ExportCSVButton,w=(e,a)=>{k.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{e.isConfirmed&&Object(g.b)("Data Berhasil Di Hapus")})};a.default=Object(u.b)(e=>({kunci_temp:e.stocking.kunci_temp}),null)(class extends i.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"id_mekanik",text:"ID Mekanik",sort:!0},{dataField:"nama_mekanik",text:"Nama Mekanik"},{dataField:"kode_kunci",text:"Kode kunci"},{dataField:"nama_kunci",text:"Nama Kunci"},{dataField:"qty",text:"Qty"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,a)=>{let t={id_mekanik:a.id_mekanik,nama_mekanik:a.nama_mekanik,kode_kunci:a.kode_kunci,nama_kunci:a.nama_kunci,qty:a.qty};return this.setState({}),i.a.createElement("div",{className:"row text-center"},i.a.createElement("div",{className:"col-12"},i.a.createElement("button",{onClick:()=>this.editModal(t),className:"btn btn-warning mr-3"},"Edit",i.a.createElement("i",{className:"fa fa-edit ml-2"})),i.a.createElement("button",{onClick:()=>w(a.kodeProvinsi,this.props.dispatch),className:"btn btn-danger"},"Hapus",i.a.createElement("i",{className:"fa fa-trash ml-2"}))))}}]}}componentDidMount(){this.props.dispatch(Object(x.j)())}handleSubmit(e){let a=JSON.parse(localStorage.getItem("KunciBarang_temp"))||[],t={id_mekanik:e.id_mekanik,nama_mekanik:e.nama_mekanik,kode_kunci:e.kode_kunci,nama_kunci:e.nama_kunci,qty:e.qty,tanggal:e.tanggal};a.push(t),localStorage.setItem("KunciBarang_temp",JSON.stringify(a)),Object(g.b)("Berhasil Menambahan Data").then(()=>this.props.dispatch(Object(x.j)())).then(()=>this.props.dispatch(Object(N.Tb)()))}render(){return i.a.createElement("div",null,i.a.createElement("ol",{className:"breadcrumb float-xl-right"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(c.b,{to:"#"},"Data Master")),i.a.createElement("li",{className:"breadcrumb-item active"},"Kunci Barang")),i.a.createElement("h1",{className:"page-header"},"Kunci Barang "),i.a.createElement(_.a,null,i.a.createElement(_.c,null,"Kunci Barang"),i.a.createElement(_.b,null,i.a.createElement("br",null),this.props.kunci_temp?i.a.createElement("div",{className:"col-lg-12"},i.a.createElement(m.a,{keyField:"no_acc",data:this.props.kunci_temp||[],columns:this.state.columns,search:!0,exportCSV:{fileName:"Export Master Kategori.csv"}},e=>i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"text-left"},i.a.createElement(S,e.searchProps))),i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",onClick:()=>this.props.dispatch(Object(N.Wb)(Object(N.Wb)()))},"Tambah Data ",i.a.createElement("i",{className:"fa fa-plus ml-3"})))),i.a.createElement("hr",null),i.a.createElement("div",{className:"col-12"},i.a.createElement(s.a,Object.assign({pagination:d()()},e.baseProps)),i.a.createElement("br",null),i.a.createElement(v,e.csvProps,"Export CSV!!"))))):i.a.createElement(E.a,{width:"100%",height:400}),i.a.createElement("br",null),i.a.createElement(b.a,{title:this.state.isEdit?"Edit Data Kunci":"Tambah Data Kunci",content:i.a.createElement(n.Suspense,{fallback:i.a.createElement(E.a,{width:"100%",height:50,count:2})},i.a.createElement(f,{onSubmit:e=>this.handleSubmit(e),onSend:this.props.onSend,isEdit:this.state.isEdit}))}))))}})}}]);
//# sourceMappingURL=112.e41c9183.chunk.js.map