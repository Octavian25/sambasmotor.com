(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1015:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(7),s=a(33),u=a(25),d=a(16),r=a.n(d),l=a(19),o=a(5),k=a(132),h=a(43),m=a.n(h),b=a(8),p=a(42),_=a(79);const E=Object(n.lazy)(()=>a.e(31).then(a.bind(null,985))),j=(e,t)=>{r.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{e.isConfirmed&&Object(l.b)("Data Berhasil Di Hapus")})};t.default=Object(u.b)(e=>({hideModal:e.datamaster.modalDialog,onSend:e.datamaster.onSend,listkunci:e.datamaster.listkunci}),null)(class extends i.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_jenis_kunci",text:"Kode Jenis Kunci",sort:!0},{dataField:"kode_kunci",text:"Kode Kunci",sort:!0},{dataField:"nama_kunci",text:"Nama Kunci"},{dataField:"ukuran",text:"Ukuran kunci"},{dataField:"merk_kunci",text:"Merk Kunci"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,t)=>{let a={kode_jenis_kunci:t.kode_jenis_kunci,kode_kunci:t.kode_kunci,nama_kunci:t.nama_kunci,merk_kunci:t.merk_kunci,ukuran:t.ukuran};return this.setState({}),i.a.createElement("div",{className:"row text-center"},i.a.createElement("div",{className:"col-12"},i.a.createElement("button",{onClick:()=>this.editModal(a),className:"btn btn-warning mr-3"},"Edit",i.a.createElement("i",{className:"fa fa-edit ml-2"})),i.a.createElement("button",{onClick:()=>j(t.kodeProvinsi,this.props.dispatch),className:"btn btn-danger"},"Hapus",i.a.createElement("i",{className:"fa fa-trash ml-2"}))))}}],datakategori:[{kode_jenis_kunci:"KC001",kode_kunci:"C001",nama_kunci:"KUNCI PAS",merk_kunci:"SIMBADA",ukuran_kunci:"20"}]}}componentDidMount(){this.props.dispatch(Object(o.Ib)())}editModal(e){this.props.dispatch(Object(o.Wb)()),this.props.dispatch(Object(o.kb)(e)),this.setState({isEdit:!0})}tambahModal(){this.props.dispatch(Object(o.Wb)()),this.props.dispatch(Object(o.lb)("")),this.setState({isEdit:!1})}handleSubmit(e){let t={kode_jenis_kunci:e.kode_jenis_kunci||"-",kode_kunci:e.kode_kunci||"-",nama_kunci:e.nama_kunci||"-",merk_kunci:e.merk_kunci||"-",ukuran:e.ukuran_kunci||"-"},a={kode_jenis_kunci:e.kode_jenis_kunci||"-",nama_kunci:e.nama_kunci||"-",merk_kunci:e.merk_kunci||"-",ukuran:e.ukuran_kunci||"-"};this.state.isEdit?Object(b.d)(this.props.dispatch,"kunci/update/by-kode-kunci/"+e.kode_kunci||!1,a).then(()=>Object(l.b)("Berhasil Dirubah")).then(()=>this.props.dispatch(Object(p.a)("dataKunci"))).then(()=>this.props.dispatch(Object(o.Tb)())).then(()=>this.props.dispatch(Object(o.Ib)())).catch(()=>Object(l.a)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi")):Object(b.c)("kunci/add",t).then(()=>Object(l.b)("Berhasil Ditambahkan")).then(()=>this.props.dispatch(Object(p.a)("dataKunci"))).then(()=>this.props.dispatch(Object(o.Tb)())).then(()=>this.props.dispatch(Object(o.Ib)())).catch(t=>this.handleReactive(t,e.kode_kunci,a))}handleReactive(e,t,a){this.props.dispatch(Object(o.Tb)()),e.response.data.includes("hapus")?Object(l.m)(e,t,"kunci/reactive/by-kode-kunci/",a,"kunci/update/by-kode-kunci/").then(()=>this.props.dispatch(Object(o.Ib)())):Object(l.a)("Data Gagal Ditambahkan")}render(){return i.a.createElement("div",null,i.a.createElement("ol",{className:"breadcrumb float-xl-right"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(c.b,{to:"#"},"Data Master")),i.a.createElement("li",{className:"breadcrumb-item active"},"Master Kunci")),i.a.createElement("h1",{className:"page-header"},"Master Kunci "),i.a.createElement(s.a,null,i.a.createElement(s.c,null,"Master Kunci"),i.a.createElement(s.b,null,i.a.createElement("br",null),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement(_.a,{keyField:"kode_kunci",data:this.props.listkunci||[],columns:this.state.columns,CSVExport:!0,tambahData:!0,handleClick:()=>this.tambahModal()})),i.a.createElement("br",null)),i.a.createElement(k.a,{title:this.state.isEdit?"Edit Data Kunci":"Tambah Data Kunci",content:i.a.createElement(n.Suspense,{fallback:i.a.createElement(m.a,{width:"100%",height:50,count:2})},i.a.createElement(E,{onSubmit:e=>this.handleSubmit(e),onSend:this.props.onSend,isEdit:this.state.isEdit}))})))}})}}]);
//# sourceMappingURL=75.c243b2cc.chunk.js.map