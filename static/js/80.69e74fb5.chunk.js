(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1021:function(t,a,e){"use strict";e.r(a);var i=e(0),s=e.n(i),r=e(7),n=e(33),c=e(25),o=e(16),l=e.n(o),d=e(19),h=e(5),p=e(132),m=e(43),b=e.n(m),k=e(8),u=e(42),g=e(79);const E=Object(i.lazy)(()=>e.e(35).then(e.bind(null,991))),O=(t,a)=>{l.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{e.isConfirmed&&Object(k.a)((void 0).props.dispatch,"kategori-transaksi/delete/by-id-kategori/"+t).then(()=>a(Object(h.Tb)())).then(()=>a(Object(h.Lb)()))})};a.default=Object(c.b)(t=>({hideModal:t.datamaster.modalDialog,onSend:t.datamaster.onSend,noFaktur:t.datamaster.noFaktur,listparameter:t.datamaster.listparameter}),null)(class extends s.a.Component{constructor(t){super(t),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kategori",text:"Nama Parameter",sort:!0},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(t,a)=>{let e={id_kategori:a.id_kategori,kategori:a.kategori};return this.setState({}),s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:()=>this.editModal(e),className:"btn btn-warning mr-3"},"Edit",s.a.createElement("i",{className:"fa fa-edit ml-2"})),s.a.createElement("button",{onClick:()=>O(a.id_kategori,this.props.dispatch),className:"btn btn-danger"},"Hapus",s.a.createElement("i",{className:"fa fa-trash ml-2"}))))}}],datakategori:[{nama_parameter:"LISTRIK"}]}}componentDidMount(){this.props.dispatch(Object(h.Lb)()),this.props.dispatch(Object(h.Ab)())}editModal(t){this.props.dispatch(Object(h.Wb)()),this.props.dispatch(Object(h.nb)(t)),this.setState({isEdit:!0})}tambahModal(){this.props.dispatch(Object(h.Wb)()),this.props.dispatch(Object(h.nb)("")),this.setState({isEdit:!1})}handleSubmit(t){let a={id_kategori:t.id_kategori||"-",kategori:t.kategori||"-"},e={kategori:t.kategori||"-"};this.state.isEdit?Object(k.d)(this.props.dispatch,"kategori-transaksi/update/by-id-kategori/"+t.id_kategori||!1,e).then(()=>Object(d.b)("Berhasil Dirubah")).then(()=>this.props.dispatch(Object(u.a)("dataParameterTransaksi"))).then(()=>this.props.dispatch(Object(h.Tb)())).then(()=>this.props.dispatch(Object(h.Lb)())).catch(t=>Object(d.a)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi")):Object(k.c)("kategori-transaksi/add",a).then(()=>Object(d.b)("Berhasil Ditambahkan")).then(()=>this.props.dispatch(Object(u.a)("dataParameterTransaksi"))).then(()=>this.props.dispatch(Object(h.Tb)())).then(()=>this.props.dispatch(Object(h.Lb)())).catch(a=>this.handleReactive(a,t.id_kategori,{kategori:t.kategori}))}handleReactive(t,a,e){this.props.dispatch(Object(h.Tb)()),t.response.data.includes("hapus")?Object(d.m)(t,a,"kategori-transaksi/reactive/by-id-kategori/",e,"kategori-transaksi/update/by-id-kategori/").then(()=>this.props.dispatch(Object(h.Lb)())):Object(d.a)("Data Gagal Ditambahkan")}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(r.b,{to:"#"},"Data Master")),s.a.createElement("li",{className:"breadcrumb-item active"},"Master Parameter Transaksi")),s.a.createElement("h1",{className:"page-header"},"Master Parameter Transaksi "),s.a.createElement(n.a,null,s.a.createElement(n.c,null,"Master Parameter Transaksi"),s.a.createElement(n.b,null,s.a.createElement("br",null),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(g.a,{keyField:"kategori",data:this.props.listparameter||[],columns:this.state.columns,CSVExport:!0,tambahData:!0,handleClick:()=>this.tambahModal()})),s.a.createElement("br",null)),s.a.createElement(p.a,{title:this.state.isEdit?"Edit Data Parameter Transaksi":"Tambah Data Parameter Transaksi",content:s.a.createElement(i.Suspense,{fallback:s.a.createElement(b.a,{width:"100%",height:50,count:2})},s.a.createElement(E,{onSubmit:t=>this.handleSubmit(t),onSend:this.props.onSend,isEdit:this.state.isEdit,noFaktur:this.props.noFaktur}))})))}})}}]);
//# sourceMappingURL=80.69e74fb5.chunk.js.map