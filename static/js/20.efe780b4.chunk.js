(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1081:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),i=t(7),s=t(29),l=t(42),o=t.n(l),c=t(131),m=t(23),p=t(41),d=t(197),g=t(198),b=t(5),h=t(16),u=t.n(h),k=t(30),_=t(9),E=t(132),N=t(33),O=t(486);class B extends n.Component{constructor(a){super(a),this.state={listDivisi:[],listSales:[],listSupplier:[],columns:[{dataField:"kode_barcode",text:"Kode barcode",sort:!0},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"merk",text:"Merk"},{dataField:"kwalitas",text:"Kualitas"},{dataField:"ukuran",text:"Ukuran"},{dataField:"stock",text:"Stock"},{dataField:"qty",text:"Qty"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e)=>(this.setState({}),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"button",onClick:()=>this.deleteBarang(e),className:"btn btn-danger"},"Hapus",r.a.createElement("i",{className:"fa fa-trash ml-2"})))))}]}}deleteBarang(a){u.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{e.isConfirmed&&(Object(m.k)("PermintaanBarang_temp",a.kode_barcode),this.props.dispatch(Object(k.m)()))})}componentDidMount(){this.props.dispatch(Object(b.Nb)()),Object(_.b)("permintaan-barang/generate/no-trx").then(a=>this.props.change("no_permintaan",a.data[0].no_permintaan)),this.props.change("tanggal",Object(N.c)())}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:!0},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-2"},r.a.createElement(d.a,{name:"no_permintaan",component:m.c,type:"text",label:"Nomor Permintaan",placeholder:"Masukan Nomor Permintaan",readOnly:!0})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(d.a,{name:"pegawai",component:m.e,options:this.props.listsales.filter(a=>"MKN"===a.kode_divisi).map(a=>{return{value:a.kode_pegawai,name:a.nama_pegawai}}),type:"text",label:"Pegawai",placeholder:"Masukan Pegawai",loading:this.props.onSend,validate:O.a})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(d.a,{name:"tanggal",component:m.c,type:"date",label:"Tanggal",placeholder:"Masukan Tanggal",validate:O.a}))))),r.a.createElement("div",{className:"col-lg-12 mb-5"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:()=>this.props.dispatch(Object(b.Wb)())},"Tambah Barang ",r.a.createElement("i",{className:"fa fa-plus ml-3"})))),r.a.createElement("div",{className:"col-lg-12"},this.props.permintaan_temp?r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(E.a,{keyField:"kode_barcode",data:this.props.permintaan_temp||[],columns:this.state.columns,CSVExport:!0,textEmpty:"Silahkan Tekan Tombol Kuning Untuk Tambah Barang"})):r.a.createElement(o.a,{width:"100%",height:400})),r.a.createElement("div",{className:"col-lg-12 mb-5 mt-3"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"btn btn-primary"},this.props.onSend?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):r.a.createElement(r.a.Fragment,null,"Simpan ",r.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))))}}B=Object(g.a)({form:"permintaanBarang",enableReinitialize:!0})(B);var S=Object(s.b)(a=>({initialValues:{no_permintaan:localStorage.getItem("kode_permintaan_barang")||""},onSend:a.datamaster.onSend,listsales:a.datamaster.listsales}),null)(B),f=t(134),j=t(502),v=t(49);const w=Object(n.lazy)(()=>t.e(114).then(t.bind(null,1042)));e.default=Object(s.b)(a=>({permintaan_temp:a.stocking.permintaan_temp}),null)(class extends r.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,datakategori:[{no_acc:"8200930213",nama_bank:"BCA",atas_nama:"OCTAVIAN"}]}}componentDidMount(){this.props.dispatch(Object(k.m)()),Object(_.b)("permintaan-barang/generate/no-trx").then(a=>localStorage.setItem("kode_permintaan_barang",a.data[0].no_permintaan))}handleModal(a){let e=JSON.parse(localStorage.getItem("PermintaanBarang_temp_kirim"))||[],t=JSON.parse(localStorage.getItem("PermintaanBarang_temp"))||[],n=e.findIndex(e=>e.kode_barcode===a.kode_barcode),r=t.findIndex(e=>e.kode_barcode===a.kode_barcode);if(-1!==n){let i={kode_barcode:a.kode_barcode,qty:parseInt(a.qty)+parseFloat(e[n].qty),kode_supplier:a.kode_supplier},s={kode_barcode:a.kode_barcode,nama_barang:a.nama_barang,merk:a.merk,kwalitas:a.kwalitas,ukuran:a.ukuran,stock:a.stock,qty:parseInt(a.qty)+parseInt(t[r].qty)};e.splice(n,1),t.splice(r,1),e.push(i),t.push(s),localStorage.setItem("PermintaanBarang_temp",JSON.stringify(t)),localStorage.setItem("PermintaanBarang_temp_kirim",JSON.stringify(e)),Object(m.b)("Berhasil"),this.props.dispatch(Object(v.a)("ModalReturnSupplier")),this.props.dispatch(Object(k.m)())}else{let e={kode_barcode:a.kode_barcode,qty:parseInt(a.qty),kode_supplier:a.kode_supplier},t={kode_barcode:a.kode_barcode,nama_barang:a.nama_barang,merk:a.merk,kwalitas:a.kwalitas,ukuran:a.ukuran,stock:a.stock,qty:a.qty};Object(j.a)("PermintaanBarang_temp",t).then(()=>this.props.dispatch(Object(v.a)("ModalPermintaanBarang"))).then(()=>this.props.dispatch(Object(k.m)())),Object(j.a)("PermintaanBarang_temp_kirim",e).then(()=>this.props.dispatch(Object(v.a)("ModalPermintaanBarang"))).then(()=>this.props.dispatch(Object(k.m)()))}}sendData(a){this.props.dispatch(Object(b.Vb)());let e={no_permintaan:a.no_permintaan,kode_divisi:a.divisi||"MKN",kode_pegawai:a.pegawai,tanggal:a.tanggal,detail_barang:JSON.parse(localStorage.getItem("PermintaanBarang_temp_kirim"))};const t=[];JSON.parse(localStorage.getItem("PermintaanBarang_temp")).forEach((a,e)=>{const n=[++e,a.kode_barcode,a.nama_barang,a.merk,a.kwalitas,a.qty];t.push(n)});let n=["NO","BARCODE","JENIS BARANG","MERK","KW","QTY"];Object(_.c)("permintaan-barang/post-transaksi",e).then(()=>Object(m.b)("Berhasil Menyimpan Data")).then(()=>Object(f.a)("Tanggal",a.tanggal,"PEGAWAI",a.pegawai,"NO PERMINTAAN",a.no_permintaan,"DIVISI",a.divisi,"ADMIN","01-28-2021","ADMIN",n,"BUKTI PERMINTAAN BARANG",t,[],!0)).then(()=>Object(N.d)(["PermintaanBarang_temp_kirim","PermintaanBarang_temp","kode_permintaan_barang"])).then(()=>this.props.dispatch(Object(v.a)("permintaanBarang"))).then(()=>this.props.dispatch(Object(k.m)())).then(()=>this.props.dispatch(Object(b.Ub)())).catch(a=>Object(m.a)(a.response.data).then(()=>this.props.dispatch(Object(b.Ub)())))}render(){return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(i.b,{to:"#"},"Data Master")),r.a.createElement("li",{className:"breadcrumb-item active"},"Permintaan Barang")),r.a.createElement("h1",{className:"page-header"},"Permintaan Barang "),r.a.createElement(p.a,null,r.a.createElement(p.c,null,"Permintaan Barang"),r.a.createElement("br",null),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(S,{onSubmit:a=>this.sendData(a),permintaan_temp:this.props.permintaan_temp})),r.a.createElement("br",null),r.a.createElement(c.a,{title:this.state.isEdit?"Edit Data Permintaan Barang":"Tambah Data Barang",content:r.a.createElement(n.Suspense,{fallback:r.a.createElement(o.a,{width:"100%",height:50,count:2})},r.a.createElement(w,{onSubmit:a=>this.handleModal(a),onSend:this.props.onSend,isEdit:this.state.isEdit}))})))}})},486:function(a,e,t){"use strict";t.d(e,"a",function(){return n});const n=a=>a?void 0:"Tidak Boleh Kosong"},502:function(a,e,t){"use strict";t.d(e,"a",function(){return i});var n=t(16),r=t.n(n);const i=(a,e)=>new Promise((t,n)=>{let i=JSON.parse(localStorage.getItem(a))||[];i.push(e),localStorage.setItem(a,JSON.stringify(i)),r.a.fire({position:"top-right",text:"Tambah Data Berhasil",timer:2e3,icon:"success",showConfirmButton:!1}).then(()=>t("Berhaisl")).catch(()=>n("GAGAL"))})}}]);
//# sourceMappingURL=20.efe780b4.chunk.js.map