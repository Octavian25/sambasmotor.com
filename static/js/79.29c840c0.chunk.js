(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1026:function(a,e,t){"use strict";t.r(e);var i=t(0),s=t.n(i),n=t(7),l=t(41),d=t(29),o=t(16),c=t.n(o),r=t(27),p=t(5),h=t(131),m=t(42),b=t.n(m),k=t(9),g=t(49),u=t(33),_=t(132);const w=Object(i.lazy)(()=>t.e(36).then(t.bind(null,994))),E=(a,e)=>{c.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(t=>{t.isConfirmed&&Object(k.a)((void 0).props.dispatch,"pegawai/delete/by-kode-pegawai/"+a).then(()=>e(Object(p.Tb)())).then(()=>e(Object(p.Nb)())).then(()=>Object(r.b)("Data Berhasil Dihapus"))})};e.default=Object(d.b)(a=>({hideModal:a.datamaster.modalDialog,onSend:a.datamaster.onSend,listsales:a.datamaster.listsales}),null)(class extends s.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_divisi",text:"Kode Divisi",sort:!0},{dataField:"kode_pegawai",text:"Kode Pegawai"},{dataField:"nama_pegawai",text:"Nama Pegawai"},{dataField:"alamat",text:"Alamat"},{dataField:"kota",text:"Kota"},{dataField:"handphone",text:"Handphone"},{dataField:"tgl_masuk",text:"Tanggal Masuk",formatter:a=>Object(u.e)(a)},{dataField:"tgl_keluar",text:"Tanggal Keluar",formatter:a=>Object(u.e)(a)},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e)=>{let t={kode_divisi:e.kode_divisi,kode_pegawai:e.kode_pegawai,nama_pegawai:e.nama_pegawai,alamat:e.alamat,kota:e.kota,handphone:e.handphone,tgl_masuk:Object(u.e)(e.tgl_masuk),tgl_keluar:Object(u.e)(e.tgl_keluar),status_aktif:e.status_aktif};return this.setState({}),s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:()=>this.editModal(t),className:"btn btn-warning"},s.a.createElement("i",{className:"fa fa-edit"})),s.a.createElement("button",{onClick:()=>E(e.kode_pegawai,this.props.dispatch),className:"btn btn-danger ml-2"},s.a.createElement("i",{className:"fa fa-trash"}))))}}],datakategori:[{kode_divisi:"SALES",kode_pegawai:"PG001",nama_pegawai:"OCTA",alamat:"ARIA GRAHA",kota:"BANDUNG",handphone:"085998233",tanggal_masuk:"2020-01-01",tanggal_keluar:"2020-01-01",status_aktif:"aktif"}]}}componentDidMount(){this.props.dispatch(Object(p.Nb)())}editModal(a){this.props.dispatch(Object(p.Wb)()),this.props.dispatch(Object(p.pb)(a)),this.setState({isEdit:!0})}tambahModal(){this.props.dispatch(Object(p.Wb)()),this.props.dispatch(Object(p.pb)("")),this.setState({isEdit:!1})}handleSubmit(a){let e={kode_divisi:a.kode_divisi||"-",kode_pegawai:a.kode_pegawai||"-",nama_pegawai:a.nama_pegawai||"-",alamat:a.alamat||"-",kota:a.kota||"-",handphone:a.handphone||"-",tgl_masuk:a.tanggal_masuk||"-",tgl_keluar:a.tanggal_keluar||"-",status_aktif:"true"===a.status_aktif},t={kode_divisi:a.kode_divisi||"-",nama_pegawai:a.nama_pegawai||"-",alamat:a.alamat||"-",kota:a.kota||"-",handphone:a.handphone||"-",tgl_masuk:a.tanggal_masuk||"-",tgl_keluar:a.tanggal_keluar||"-",status_aktif:"true"===a.status_aktif};console.log(e),this.state.isEdit?Object(k.d)(this.props.dispatch,"pegawai/update/by-kode-pegawai/"+a.kode_pegawai,t).then(()=>Object(r.b)("Berhasil Dirubah")).then(()=>this.props.dispatch(Object(g.a)("dataSales"))).then(()=>this.props.dispatch(Object(p.Tb)())).then(()=>this.props.dispatch(Object(p.Nb)())).catch(a=>Object(r.a)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi")):Object(k.c)("pegawai/add",e).then(()=>Object(r.b)("Berhasil Ditambahkan")).then(()=>this.props.dispatch(Object(g.a)("dataSales"))).then(()=>this.props.dispatch(Object(p.Tb)())).then(()=>this.props.dispatch(Object(p.Nb)())).catch(e=>this.handleReactive(e,a.kode_pegawai,t))}handleReactive(a,e,t){this.props.dispatch(Object(p.Tb)()),a.response.data.includes("Deleted")?Object(r.m)(a,e,"pegawai/reactive/by-kode-pegawai/",t,"pegawai/update/by-kode-pegawai/").then(()=>this.props.dispatch(Object(p.Nb)())):Object(r.a)("Data Gagal Ditambahkan")}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(n.b,{to:"#"},"Data Master")),s.a.createElement("li",{className:"breadcrumb-item active"},"Master Sales & Mekanik")),s.a.createElement("h1",{className:"page-header"},"Master Sales & Mekanik "),s.a.createElement(l.a,null,s.a.createElement(l.c,null,"Master Sales & Mekanik"),s.a.createElement(l.b,null,s.a.createElement("br",null),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(_.a,{keyField:"kode_pegawai",data:this.props.listsales||[],columns:this.state.columns,CSVExport:!0,tambahData:!0,handleClick:()=>this.tambahModal()})),s.a.createElement("br",null)),s.a.createElement(h.a,{title:this.state.isEdit?"Edit Data Sales & Mekanik":"Tambah Data Sales & Mekanik",content:s.a.createElement(i.Suspense,{fallback:s.a.createElement(b.a,{width:"100%",height:50,count:2})},s.a.createElement(w,{onSubmit:a=>this.handleSubmit(a),onSend:this.props.onSend,isEdit:this.state.isEdit}))})))}})}}]);
//# sourceMappingURL=79.29c840c0.chunk.js.map