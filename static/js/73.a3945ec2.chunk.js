(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1016:function(a,t,e){"use strict";e.r(t);var s=e(0),i=e.n(s),l=e(7),n=e(41),c=e(29),d=e(16),r=e.n(d),o=e(27),h=e(5),b=e(131),m=e(42),p=e.n(m),k=e(9),u=e(49),w=e(132);const E=Object(s.lazy)(()=>e.e(30).then(e.bind(null,984))),O=(a,t)=>{r.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{e.isConfirmed&&Object(k.a)("kwalitas/delete/"+a).then(()=>t(Object(h.Tb)())).then(()=>t(Object(h.Jb)())).then(()=>Object(o.b)("Data Terhapus"))})};t.default=Object(c.b)(a=>({hideModal:a.datamaster.modalDialog,onSend:a.datamaster.onSend,listkwalitas:a.datamaster.listkwalitas}),null)(class extends i.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_kwalitas",text:"Kode Kualitas",sort:!0},{dataField:"nama_kwalitas",text:"Nama Kualitas"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,t)=>{let e={kode_kwalitas:t.kode_kwalitas,nama_kwalitas:t.nama_kwalitas};return this.setState({}),i.a.createElement("div",{className:"row text-center"},i.a.createElement("div",{className:"col-12"},i.a.createElement("button",{onClick:()=>this.editModal(e),className:"btn btn-warning mr-3"},"Edit",i.a.createElement("i",{className:"fa fa-edit ml-2"})),i.a.createElement("button",{onClick:()=>O(t.kode_kwalitas,this.props.dispatch),className:"btn btn-danger"},"Hapus",i.a.createElement("i",{className:"fa fa-trash ml-2"}))))}}],datakategori:[{kode_kwalitas:"KW001",nama_kwalitas:"ORIGINAL"}]}}componentDidMount(){this.props.dispatch(Object(h.Jb)())}editModal(a){this.props.dispatch(Object(h.Wb)()),this.props.dispatch(Object(h.lb)(a)),this.setState({isEdit:!0})}tambahModal(){this.props.dispatch(Object(h.Wb)()),this.props.dispatch(Object(h.lb)("")),this.setState({isEdit:!1})}handleSubmit(a){let t={kode_kwalitas:a.kode_kwalitas||"-",nama_kwalitas:a.nama_kwalitas||"-"};this.state.isEdit?Object(k.d)(this.props.dispatch,"kwalitas/update/by-kode-kwalitas/"+a.kode_kwalitas||!1,{nama_kwalitas:a.nama_kwalitas}).then(()=>Object(o.b)("Berhasil Dirubah")).then(()=>this.props.dispatch(Object(u.a)("dataKwalitas"))).then(()=>this.props.dispatch(Object(h.Tb)())).then(()=>this.props.dispatch(Object(h.Jb)())).catch(()=>Object(o.a)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi")):Object(k.c)("kwalitas/add",t).then(()=>Object(o.b)("Berhasil Ditambahkan")).then(()=>this.props.dispatch(Object(u.a)("dataKwalitas"))).then(()=>this.props.dispatch(Object(h.Tb)())).then(()=>this.props.dispatch(Object(h.Jb)())).catch(t=>this.handleReactive(t,a.kode_kwalitas,{nama_kwalitas:a.nama_kwalitas}))}handleReactive(a,t,e){this.props.dispatch(Object(h.Tb)()),a.response.data.includes("hapus")?Object(o.m)(a,t,"kwalitas/reactive/",e,"kwalitas/update/by-kode-kwalitas/").then(()=>this.props.dispatch(Object(h.Jb)())):Object(o.a)("Data Gagal Ditambahkan")}render(){return i.a.createElement("div",null,i.a.createElement("ol",{className:"breadcrumb float-xl-right"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(l.b,{to:"#"},"Data Master")),i.a.createElement("li",{className:"breadcrumb-item active"},"Master Kualitas")),i.a.createElement("h1",{className:"page-header"},"Master Kualitas "),i.a.createElement(n.a,null,i.a.createElement(n.c,null,"Master Kualitas"),i.a.createElement(n.b,null,i.a.createElement("br",null),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement(w.a,{keyField:"kode_kwalitas",data:this.props.listkwalitas||[],columns:this.state.columns,CSVExport:!0,tambahData:!0,handleClick:()=>this.tambahModal()})),i.a.createElement("br",null)),i.a.createElement(b.a,{title:this.state.isEdit?"Edit Data Kualitas":"Tambah Data Kualitas",content:i.a.createElement(s.Suspense,{fallback:i.a.createElement(p.a,{width:"100%",height:50,count:2})},i.a.createElement(E,{onSubmit:a=>this.handleSubmit(a),onSend:this.props.onSend,isEdit:this.state.isEdit}))})))}})}}]);
//# sourceMappingURL=73.a3945ec2.chunk.js.map