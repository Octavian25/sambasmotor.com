(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1016:function(a,e,t){"use strict";t.r(e);var s=t(0),i=t.n(s),n=t(7),l=t(41),o=t(29),r=t(16),d=t.n(r),c=t(27),k=t(6),h=t(131),b=t(52),m=t.n(b),p=t(9),u=t(48),_=t(130);const g=Object(s.lazy)(()=>t.e(34).then(t.bind(null,984))),E=(a,e)=>{d.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(t=>{t.isConfirmed&&Object(p.a)("lokasi-rak/delete/"+a).then(()=>e(Object(k.Mb)())).then(()=>Object(c.b)("Data Berhasil Di Hapus")).catch(()=>Object(c.a)("Sepertinya ada yang error"))})};e.default=Object(o.b)(a=>({hideModal:a.datamaster.modalDialog,onSend:a.datamaster.onSend,listrak:a.datamaster.listrak}),null)(class extends i.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_lokasi_gudang",text:"Kode Gudang",sort:!0},{dataField:"kode_lokasi_rak",text:"Kode Rak"},{dataField:"nama_lokasi_rak",text:"Nama Rak"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e)=>{let t={kode_gudang:e.kode_lokasi_gudang,kode_rak:e.kode_lokasi_rak,nama_rak:e.nama_lokasi_rak};return this.setState({}),i.a.createElement("div",{className:"row text-center"},i.a.createElement("div",{className:"col-12"},i.a.createElement("button",{onClick:()=>this.editModal(t),className:"btn btn-warning mr-3"},"Edit",i.a.createElement("i",{className:"fa fa-edit ml-2"})),i.a.createElement("button",{onClick:()=>E(e.kode_lokasi_rak,this.props.dispatch),className:"btn btn-danger"},"Hapus",i.a.createElement("i",{className:"fa fa-trash ml-2"}))))}}],datakategori:[{kode_gudang:"RAK001",nama_gudang:"RAK 1"}]}}componentDidMount(){this.props.dispatch(Object(k.Mb)())}editModal(a){this.props.dispatch(Object(k.Wb)()),this.props.dispatch(Object(k.ob)(a)),this.setState({isEdit:!0})}tambahModal(){this.props.dispatch(Object(k.Wb)()),this.props.dispatch(Object(k.ob)("")),this.setState({isEdit:!1})}handleSubmit(a){let e={kode_lokasi_gudang:a.kode_gudang||"-",kode_lokasi_rak:a.kode_rak||"-",nama_lokasi_rak:a.nama_rak||"-"};this.state.isEdit?Object(p.d)("lokasi-rak/update/by-kode-lokasi-rak/"+a.kode_rak||!1,{kode_lokasi_gudang:a.kode_gudang||"-",nama_lokasi_rak:a.nama_rak||"-"}).then(()=>Object(c.b)("Berhasil Dirubah")).then(()=>this.props.dispatch(Object(u.a)(""))).then(()=>this.props.dispatch(Object(k.Tb)())).then(()=>this.props.dispatch(Object(k.Mb)())).catch(()=>Object(c.a)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi")):Object(p.c)("lokasi-rak/add",e).then(()=>Object(c.b)("Berhasil Ditambahkan")).then(()=>this.props.dispatch(Object(u.a)("dataRak"))).then(()=>this.props.dispatch(Object(k.Tb)())).then(()=>this.props.dispatch(Object(k.Mb)())).catch(e=>this.handleReactive(e,a.kode_rak,{kode_lokasi_gudang:a.kode_gudang||"-",nama_lokasi_rak:a.nama_rak||"-"}))}handleReactive(a,e,t){this.props.dispatch(Object(k.Tb)()),a.response.data.includes("hapus")?Object(c.l)(a,e,"lokasi-rak/reactive/",t,"lokasi-rak/update/by-kode-lokasi-rak/").then(()=>this.props.dispatch(Object(k.Mb)())):Object(c.a)("Data Gagal Ditambahkan")}render(){return i.a.createElement("div",null,i.a.createElement("ol",{className:"breadcrumb float-xl-right"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(n.b,{to:"#"},"Data Master")),i.a.createElement("li",{className:"breadcrumb-item active"},"Master Rak")),i.a.createElement("h1",{className:"page-header"},"Master Rak "),i.a.createElement(l.a,null,i.a.createElement(l.c,null,"Master Rak"),i.a.createElement(l.b,null,i.a.createElement("br",null),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement(_.a,{keyField:"kode_lokasi_rak",data:this.props.listrak||[],columns:this.state.columns,CSVExport:!0,tambahData:!0,handleClick:()=>this.tambahModal()})),i.a.createElement("br",null)),i.a.createElement(h.a,{title:this.state.isEdit?"Edit Data Rak":"Tambah Data Rak",content:i.a.createElement(s.Suspense,{fallback:i.a.createElement(m.a,{width:"100%",height:50,count:2})},i.a.createElement(g,{onSubmit:a=>this.handleSubmit(a),onSend:this.props.onSend,isEdit:this.state.isEdit}))})))}})}}]);
//# sourceMappingURL=80.eaef2738.chunk.js.map