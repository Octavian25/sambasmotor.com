(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1037:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i),n=a(7),o=a(41),r=a(29),c=a(16),l=a.n(c),d=a(27),h=a(5),b=a(131),m=a(42),p=a.n(m),g=a(9),k=a(49),u=a(132);const E=Object(i.lazy)(()=>a.e(28).then(a.bind(null,1004))),O=(t,e)=>{l.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(a=>{a.isConfirmed&&Object(g.a)("kategori/delete/"+t).then(()=>Object(d.b)("Data Berhasil Di Hapus").then(()=>e(Object(h.Fb)())).catch(()=>Object(d.a)("Sepertinya ada gangguan, Mohon lakukan beberapa saat lagi")))})};e.default=Object(r.b)(t=>({hideModal:t.datamaster.modalDialog,onSend:t.datamaster.onSend,listkategori:t.datamaster.listkategori}),null)(class extends s.a.Component{constructor(t){super(t),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_kategori",text:"Kode Kategori",sort:!0},{dataField:"nama_kategori",text:"Nama Kategori"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(t,e)=>{let a={kode_kategori:e.kode_kategori,nama_kategori:e.nama_kategori};return this.setState({}),s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:()=>this.editModal(a),className:"btn btn-warning mr-3"},"Edit",s.a.createElement("i",{className:"fa fa-edit ml-2"})),s.a.createElement("button",{onClick:()=>O(e.kode_kategori,this.props.dispatch),className:"btn btn-danger"},"Hapus",s.a.createElement("i",{className:"fa fa-trash ml-2"}))))}}],datakategori:[{kode_kategori:"KAT001",nama_kategori:"KATEGORI 01"}]}}componentDidMount(){this.props.dispatch(Object(h.Fb)())}editModal(t){this.props.dispatch(Object(h.Wb)()),this.props.dispatch(Object(h.hb)(t)),this.setState({isEdit:!0})}tambahModal(){this.props.dispatch(Object(h.Wb)()),this.props.dispatch(Object(h.hb)("")),this.setState({isEdit:!1})}handleSubmit(t){let e={kode_kategori:t.kode_kategori||"-",nama_kategori:t.nama_kategori||"-"};this.state.isEdit?Object(g.d)(this.props.dispatch,"kategori/update/by-kode-kategori/"+t.kode_kategori.toLowerCase()||!1,{nama_kategori:t.nama_kategori}).then(()=>this.props.dispatch(Object(k.a)("ModalKategori"))).then(()=>this.props.dispatch(Object(h.Tb)())).then(()=>this.props.dispatch(Object(h.Fb)())).then(()=>Object(d.b)("Berhasil Ditambahkan")).catch(()=>Object(d.a)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi")):Object(g.c)("kategori/add",e).then(()=>this.props.dispatch(Object(k.a)("ModalKategori"))).then(()=>this.props.dispatch(Object(h.Tb)())).then(()=>this.props.dispatch(Object(h.Fb)())).then(()=>Object(d.b)("Berhasil Ditambahkan")).catch(e=>this.handleReactive(e,t.kode_kategori,{nama_kategori:t.nama_kategori}))}handleReactive(t,e,a){this.props.dispatch(Object(h.Tb)()),t.response.data.includes("hapus")?Object(d.m)(t,e,"kategori/reactive/",a,"kategori/update/by-kode-kategori/").then(()=>this.props.dispatch(Object(h.Fb)())):Object(d.a)("Data Gagal Ditambahkan")}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(n.b,{to:"#"},"Data Master")),s.a.createElement("li",{className:"breadcrumb-item active"},"Master Kategori")),s.a.createElement("h1",{className:"page-header"},"Master Kategori "),s.a.createElement(o.a,null,s.a.createElement(o.c,null,"Master Kategori"),s.a.createElement(o.b,null,s.a.createElement("br",null),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(u.a,{keyField:"kode_kategori",data:this.props.listkategori||[],columns:this.state.columns,CSVExport:!0,tambahData:!0,handleClick:()=>this.tambahModal()})),s.a.createElement("br",null)),s.a.createElement(b.a,{title:this.state.isEdit?"Edit Data Kategori":"Tambah Data Kategori",content:s.a.createElement(i.Suspense,{fallback:s.a.createElement(p.a,{width:"100%",height:50,count:2})},s.a.createElement(E,{onSubmit:t=>this.handleSubmit(t),onSend:this.props.onSend,isEdit:this.state.isEdit}))})))}})}}]);
//# sourceMappingURL=70.73c6c81f.chunk.js.map