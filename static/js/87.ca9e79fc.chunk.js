(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1010:function(a,t,e){"use strict";e.r(t);var n=e(0),s=e.n(n),r=e(7),i=e(33),c=e(25),d=e(16),l=e.n(d),o=e(19),h=e(5),b=e(132),p=e(43),m=e.n(p),u=e(8),w=e(42),E=e(79);const k=Object(n.lazy)(()=>e.e(41).then(e.bind(null,980))),O=(a,t)=>{l.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{e.isConfirmed&&Object(u.a)((void 0).props.dispatch,"warna/delete/by-kode-warna/"+a).then(()=>t(Object(h.Tb)())).then(()=>t(Object(h.Sb)())).then(()=>Object(o.b)("Data Berhasil Dihapus"))})};t.default=Object(c.b)(a=>({hideModal:a.datamaster.modalDialog,onSend:a.datamaster.onSend,noFaktur:a.datamaster.noFaktur,listwarna:a.datamaster.listwarna}),null)(class extends s.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_warna",text:"Kode Warna",sort:!0},{dataField:"nama_warna",text:"Nama Warna",sort:!0},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,t)=>{let e={kode_warna:t.kode_warna,nama_warna:t.nama_warna};return this.setState({}),s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:()=>this.editModal(e),className:"btn btn-warning mr-3"},"Edit",s.a.createElement("i",{className:"fa fa-edit ml-2"})),s.a.createElement("button",{onClick:()=>O(t.kode_warna,this.props.dispatch),className:"btn btn-danger"},"Hapus",s.a.createElement("i",{className:"fa fa-trash ml-2"}))))}}],datakategori:[{nama_parameter:"LISTRIK"}]}}componentDidMount(){this.props.dispatch(Object(h.Sb)()),this.props.dispatch(Object(h.Ab)())}editModal(a){this.props.dispatch(Object(h.Wb)()),this.props.dispatch(Object(h.ub)(a)),this.setState({isEdit:!0})}tambahModal(){this.props.dispatch(Object(h.Wb)()),this.props.dispatch(Object(h.ub)("")),this.setState({isEdit:!1})}handleSubmit(a){let t={kode_warna:a.kode_warna,nama_warna:a.nama_warna},e={nama_warna:a.nama_warna};this.state.isEdit?Object(u.d)(this.props.dispatch,"warna/update/by-kode-warna/"+a.kode_warna,e).then(()=>Object(o.b)("Berhasil Dirubah")).then(()=>this.props.dispatch(Object(w.a)("dataWarna"))).then(()=>this.props.dispatch(Object(h.Tb)())).then(()=>this.props.dispatch(Object(h.Sb)())).catch(a=>Object(o.a)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi")):Object(u.c)("warna/add",t).then(()=>Object(o.b)("Berhasil Ditambahkan")).then(()=>this.props.dispatch(Object(w.a)("dataWarna"))).then(()=>this.props.dispatch(Object(h.Tb)())).then(()=>this.props.dispatch(Object(h.Sb)())).catch(t=>this.handleReactive(t,a.kode_warna,{nama_warna:a.nama_warna}))}handleReactive(a,t,e){this.props.dispatch(Object(h.Tb)()),a.response.data.includes("hapus")?Object(o.m)(a,t,"warna/reactive/by-kode-warna/",e,"warna/update/by-kode-warna/").then(()=>this.props.dispatch(Object(h.Sb)())):Object(o.a)("Data Gagal Ditambahkan")}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(r.b,{to:"#"},"Data Master")),s.a.createElement("li",{className:"breadcrumb-item active"},"Master Warna")),s.a.createElement("h1",{className:"page-header"},"Master Warna "),s.a.createElement(i.a,null,s.a.createElement(i.c,null,"Master Warna"),s.a.createElement(i.b,null,s.a.createElement("br",null),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(E.a,{keyField:"kode_warna",data:this.props.listwarna||[],columns:this.state.columns,CSVExport:!0,tambahData:!0,handleClick:()=>this.tambahModal()})),s.a.createElement("br",null)),s.a.createElement(b.a,{title:this.state.isEdit?"Edit Data Warna":"Tambah Data Warna",content:s.a.createElement(n.Suspense,{fallback:s.a.createElement(m.a,{width:"100%",height:50,count:2})},s.a.createElement(k,{onSubmit:a=>this.handleSubmit(a),onSend:this.props.onSend,isEdit:this.state.isEdit,noFaktur:this.props.noFaktur}))})))}})}}]);
//# sourceMappingURL=87.ca9e79fc.chunk.js.map