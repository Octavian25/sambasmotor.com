(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1020:function(a,t,e){"use strict";e.r(t);var n=e(0),s=e.n(n),c=e(7),i=e(33),l=e(25),o=e(16),r=e.n(o),b=e(19),d=e(5),h=e(132),m=e(43),p=e.n(m),u=e(8),k=e(42),E=e(79);const O=Object(n.lazy)(()=>e.e(23).then(e.bind(null,990))),j=(a,t)=>{r.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{e.isConfirmed&&Object(u.a)("bank/delete/by-no-ac/"+a).then(()=>t(Object(d.Tb)())).then(()=>t(Object(d.vb)())).then(()=>Object(b.b)("Berhasil Dihapus"))})};t.default=Object(l.b)(a=>({hideModal:a.datamaster.modalDialog,onSend:a.datamaster.onSend,listbank:a.datamaster.listbank}),null)(class extends s.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"no_ac",text:"Nomor A/C",sort:!0},{dataField:"nama_bank",text:"Nama Bank"},{dataField:"atas_nama",text:"Atas Nama"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,t)=>{let e={no_acc:t.no_ac,nama_bank:t.nama_bank,atas_nama:t.atas_nama};return this.setState({}),s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:()=>this.editModal(e),className:"btn btn-warning mr-3"},"Edit",s.a.createElement("i",{className:"fa fa-edit ml-2"})),s.a.createElement("button",{onClick:()=>j(t.no_ac,this.props.dispatch),className:"btn btn-danger"},"Hapus",s.a.createElement("i",{className:"fa fa-trash ml-2"}))))}}],datakategori:[{no_acc:"8200930213",nama_bank:"BCA",atas_nama:"OCTAVIAN"}]}}componentDidMount(){this.props.dispatch(Object(d.vb)())}editModal(a){this.props.dispatch(Object(d.Wb)()),this.props.dispatch(Object(d.Z)(a)),this.setState({isEdit:!0})}tambahModal(){this.props.dispatch(Object(d.Wb)()),this.props.dispatch(Object(d.Z)("")),this.setState({isEdit:!1})}handleSubmit(a){let t={no_ac:a.nomor_bank||"-",nama_bank:a.nama_bank||"-",atas_nama:a.atas_nama||"-"},e={atas_nama:a.atas_nama||"-"};this.state.isEdit?Object(u.d)("bank/update/by-no-ac/"+a.nomor_bank,e).then(()=>Object(b.b)("Berhasil Dirubah")).then(()=>this.props.dispatch(Object(k.a)(""))).then(()=>this.props.dispatch(Object(d.Tb)())).then(()=>this.props.dispatch(Object(d.vb)())).catch(a=>Object(b.a)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi")):Object(u.c)("bank/add",t).then(()=>Object(b.b)("Berhasil Ditambahkan")).then(()=>this.props.dispatch(Object(k.a)("dataBank"))).then(()=>this.props.dispatch(Object(d.Tb)())).then(()=>this.props.dispatch(Object(d.vb)())).catch(t=>this.handleReactive(t,a.nomor_bank,e))}handleReactive(a,t,e){this.props.dispatch(Object(d.Tb)()),a.response.data.includes("Deleted")?Object(b.m)(a,t,"bank/reactive/by-no-ac",e,"bank/update/by-no-ac/").then(()=>this.props.dispatch(Object(d.vb)())):Object(b.a)("Data Gagal Ditambahkan")}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(c.b,{to:"#"},"Data Master")),s.a.createElement("li",{className:"breadcrumb-item active"},"Master Bank")),s.a.createElement("h1",{className:"page-header"},"Master Bank "),s.a.createElement(i.a,null,s.a.createElement(i.c,null,"Master Bank"),s.a.createElement(i.b,null,s.a.createElement("br",null),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(E.a,{keyField:"no_acc",data:this.props.listbank||[],columns:this.state.columns,CSVExport:!0,tambahData:!0,handleClick:()=>this.tambahModal()})),s.a.createElement("br",null)),s.a.createElement(h.a,{title:this.state.isEdit?"Edit Data Bank":"Tambah Data Bank",content:s.a.createElement(n.Suspense,{fallback:s.a.createElement(p.a,{width:"100%",height:50,count:2})},s.a.createElement(O,{onSubmit:a=>this.handleSubmit(a),onSend:this.props.onSend,isEdit:this.state.isEdit}))})))}})}}]);
//# sourceMappingURL=65.ac636afa.chunk.js.map