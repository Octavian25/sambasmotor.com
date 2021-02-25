(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1078:function(a,e,t){"use strict";t.r(e);var n=t(0),i=t.n(n),r=t(7),s=t(29),l=t(42),o=t.n(l),c=t(131),m=t(27),p=t(41),d=t(196),h=t(197),b=t(5),g=t(16),u=t.n(g),k=t(31),_=t(9),E=t(132);class O extends n.Component{constructor(a){super(a),this.state={listDivisi:[],listSales:[],listSupplier:[],columns:[{dataField:"kode_barcode",text:"Kode barcode",sort:!0},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"merk",text:"Merk"},{dataField:"kwalitas",text:"Kualitas"},{dataField:"ukuran",text:"Ukuran"},{dataField:"stock",text:"Stock"},{dataField:"qty",text:"Qty"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e)=>(this.setState({}),i.a.createElement("div",{className:"row text-center"},i.a.createElement("div",{className:"col-12"},i.a.createElement("button",{type:"button",onClick:()=>this.deleteBarang(e),className:"btn btn-danger"},"Hapus",i.a.createElement("i",{className:"fa fa-trash ml-2"})))))}]}}deleteBarang(a){u.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{e.isConfirmed&&(Object(m.k)("PermintaanBarang_temp",a.kode_barcode),this.props.dispatch(Object(k.m)()))})}componentDidMount(){this.props.dispatch(Object(b.Vb)()),Object(_.b)("divisi/get/all").then(a=>this.setState({listDivisi:a.data.map(a=>{return{value:a.kode_divisi,name:a.nama_divisi}})})).then(()=>this.props.dispatch(Object(b.Ub)())),Object(_.b)("supplier/get/all").then(a=>this.setState({listSupplier:a.data.map(a=>{return{value:a.kode_supplier,name:"".concat(a.nama_supplier," ( ").concat(a.kode_supplier," )")}})})).then(()=>this.props.dispatch(Object(b.Ub)())),Object(_.b)("permintaan-barang/generate/no-trx").then(a=>this.props.change("no_permintaan",a.data[0].no_permintaan))}getSales(a){this.props.dispatch(Object(b.Vb)()),Object(_.b)("pegawai/get/by-kode-divisi/"+a).then(a=>this.setState({listSales:a.data.map(a=>{return{value:a.kode_pegawai,name:a.nama_pegawai}})})).then(()=>this.props.dispatch(Object(b.Ub)()))}render(){return i.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:!0},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-2"},i.a.createElement(d.a,{name:"no_permintaan",component:m.c,type:"text",label:"Nomor Permintaan",placeholder:"Masukan Nomor Permintaan",readOnly:!0})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(d.a,{name:"divisi",component:m.e,options:this.state.listDivisi,type:"text",label:"Divisi",placeholder:"Masukan Divisi",onChange:a=>this.getSales(a),loading:this.props.onSend})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(d.a,{name:"pegawai",component:m.e,options:this.state.listSales,type:"text",label:"Pegawai",placeholder:"Masukan Pegawai",loading:this.props.onSend})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(d.a,{name:"tanggal",component:m.c,type:"date",label:"Tanggal",placeholder:"Masukan Tanggal"}))))),i.a.createElement("div",{className:"col-lg-12 mb-5"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:()=>this.props.dispatch(Object(b.Wb)())},"Tambah Barang ",i.a.createElement("i",{className:"fa fa-plus ml-3"})))),i.a.createElement("div",{className:"col-lg-12"},this.props.permintaan_temp?i.a.createElement("div",{className:"col-lg-12"},i.a.createElement(E.a,{keyField:"kode_barcode",data:this.props.permintaan_temp||[],columns:this.state.columns,CSVExport:!0,textEmpty:"Silahkan Tekan Tombol Kuning Untuk Tambah Barang"})):i.a.createElement(o.a,{width:"100%",height:400})),i.a.createElement("div",{className:"col-lg-12 mb-5 mt-3"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary"},this.props.onSend?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):i.a.createElement(i.a.Fragment,null,"Simpan ",i.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))))}}O=Object(h.a)({form:"permintaanBarang",enableReinitialize:!0})(O);var N=Object(s.b)(a=>({initialValues:{no_permintaan:localStorage.getItem("kode_permintaan_barang")||""},onSend:a.datamaster.onSend}),null)(O),S=t(134),B=t(502),v=t(49),j=t(33);const f=Object(n.lazy)(()=>t.e(113).then(t.bind(null,1041)));e.default=Object(s.b)(a=>({permintaan_temp:a.stocking.permintaan_temp}),null)(class extends i.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,datakategori:[{no_acc:"8200930213",nama_bank:"BCA",atas_nama:"OCTAVIAN"}]}}componentDidMount(){this.props.dispatch(Object(k.m)()),Object(_.b)("permintaan-barang/generate/no-trx").then(a=>localStorage.setItem("kode_permintaan_barang",a.data[0].no_permintaan))}handleModal(a){let e=JSON.parse(localStorage.getItem("PermintaanBarang_temp_kirim"))||[],t=JSON.parse(localStorage.getItem("PermintaanBarang_temp"))||[],n=e.findIndex(e=>e.kode_barcode===a.kode_barcode),i=t.findIndex(e=>e.kode_barcode===a.kode_barcode);if(-1!==n){let r={kode_barcode:a.kode_barcode,qty:parseInt(a.qty)+parseFloat(e[n].qty),kode_supplier:a.kode_supplier},s={kode_barcode:a.kode_barcode,nama_barang:a.nama_barang,merk:a.merk,kwalitas:a.kwalitas,ukuran:a.ukuran,stock:a.stock,qty:parseInt(a.qty)+parseInt(t[i].qty)};e.splice(n,1),t.splice(i,1),e.push(r),t.push(s),localStorage.setItem("PermintaanBarang_temp",JSON.stringify(t)),localStorage.setItem("PermintaanBarang_temp_kirim",JSON.stringify(e)),Object(m.b)("Berhasil"),this.props.dispatch(Object(v.a)("ModalReturnSupplier")),this.props.dispatch(Object(k.m)())}else{let e={kode_barcode:a.kode_barcode,qty:parseInt(a.qty),kode_supplier:a.kode_supplier},t={kode_barcode:a.kode_barcode,nama_barang:a.nama_barang,merk:a.merk,kwalitas:a.kwalitas,ukuran:a.ukuran,stock:a.stock,qty:a.qty};Object(B.a)("PermintaanBarang_temp",t).then(()=>this.props.dispatch(Object(v.a)("ModalPermintaanBarang"))).then(()=>this.props.dispatch(Object(k.m)())),Object(B.a)("PermintaanBarang_temp_kirim",e).then(()=>this.props.dispatch(Object(v.a)("ModalPermintaanBarang"))).then(()=>this.props.dispatch(Object(k.m)()))}}sendData(a){this.props.dispatch(Object(b.Vb)());let e={no_permintaan:a.no_permintaan,kode_divisi:a.divisi,kode_pegawai:a.pegawai,tanggal:a.tanggal,detail_barang:JSON.parse(localStorage.getItem("PermintaanBarang_temp_kirim"))};const t=[];JSON.parse(localStorage.getItem("PermintaanBarang_temp")).forEach((a,e)=>{const n=[++e,a.kode_barcode,a.nama_barang,a.merk,a.kwalitas,a.qty];t.push(n)});let n=["NO","BARCODE","JENIS BARANG","MERK","KW","QTY"];Object(_.c)(this.props.dispatch,"permintaan-barang/post-transaksi",e).then(()=>Object(m.b)("Berhasil Menyimpan Data")).then(()=>Object(S.a)("Tanggal",a.tanggal,"PEGAWAI",a.pegawai,"NO PERMINTAAN",a.no_permintaan,"DIVISI",a.divisi,"ADMIN","01-28-2021","ADMIN",n,"BUKTI PERMINTAAN BARANG",t,[],!0)).then(()=>Object(j.d)(["PermintaanBarang_temp_kirim","PermintaanBarang_temp","kode_permintaan_barang"])).then(()=>this.props.dispatch(Object(v.a)("permintaanBarang"))).then(()=>this.props.dispatch(Object(k.m)())).then(()=>this.props.dispatch(Object(b.Ub)())).catch(a=>Object(m.a)(a.response.data).then(()=>this.props.dispatch(Object(b.Ub)())))}render(){return i.a.createElement("div",null,i.a.createElement("ol",{className:"breadcrumb float-xl-right"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(r.b,{to:"#"},"Data Master")),i.a.createElement("li",{className:"breadcrumb-item active"},"Permintaan Barang")),i.a.createElement("h1",{className:"page-header"},"Permintaan Barang "),i.a.createElement(p.a,null,i.a.createElement(p.c,null,"Permintaan Barang"),i.a.createElement("br",null),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement(N,{onSubmit:a=>this.sendData(a),permintaan_temp:this.props.permintaan_temp})),i.a.createElement("br",null),i.a.createElement(c.a,{title:this.state.isEdit?"Edit Data Permintaan Barang":"Tambah Data Barang",content:i.a.createElement(n.Suspense,{fallback:i.a.createElement(o.a,{width:"100%",height:50,count:2})},i.a.createElement(f,{onSubmit:a=>this.handleModal(a),onSend:this.props.onSend,isEdit:this.state.isEdit}))})))}})},502:function(a,e,t){"use strict";t.d(e,"a",function(){return r});var n=t(16),i=t.n(n);const r=(a,e)=>new Promise((t,n)=>{let r=JSON.parse(localStorage.getItem(a))||[];r.push(e),localStorage.setItem(a,JSON.stringify(r)),i.a.fire({position:"top-right",text:"Tambah Data Berhasil",timer:2e3,icon:"success",showConfirmButton:!1}).then(()=>t("Berhaisl")).catch(()=>n("GAGAL"))})}}]);
//# sourceMappingURL=46.e12af75e.chunk.js.map