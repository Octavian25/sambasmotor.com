(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1079:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),l=t(7),s=t(25),c=t(16),i=t.n(c),o=t(43),m=t.n(o),d=t(132),p=t(19),g=t(33),u=t(197),h=t(198),b=t(5),k=t(8);class _ extends n.Component{constructor(a){super(a),this.state={listGudang:[]}}componentDidMount(){Object(k.b)("hancur-barang/generate/no-trx").then(a=>this.props.change("no_pindah",a.data[0].no_hancur)),this.props.dispatch(Object(b.Vb)()),Object(k.b)("lokasi-gudang/get/all").then(a=>this.setState({listGudang:a&&a.data.map(a=>{return{value:a.kode_lokasi_gudang,name:a.nama_lokasi_gudang}})})).then(()=>this.props.dispatch(Object(b.Ub)()))}render(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(u.a,{name:"no_pindah",component:p.c,type:"text",label:"Nomor Pindah",placeholder:"Masukan Nomor Pindah",readOnly:!0})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(u.a,{name:"tanggal",component:p.c,type:"date",label:"Tanggal",placeholder:"Masukan Tanggal"})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(u.a,{name:"lokasi",component:p.e,options:this.state.listGudang,label:"Lokasi Gudang",placeholder:"Pilih Lokasi Gudang",onChange:a=>localStorage.setItem("lokasi_hancur",a),loading:this.props.onSend}))),r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"text-left"},r.a.createElement("button",{className:"btn btn-primary"},this.props.onSend?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):r.a.createElement(r.a.Fragment,null,"Simpan ",r.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:()=>this.props.dispatch(Object(b.Wb)())},"Tambah Barang ",r.a.createElement("i",{className:"fa fa-plus ml-3"})))))))}}_=Object(h.a)({form:"permintaanBarang",enableReinitialize:!0})(_);var E=Object(s.b)(a=>({onSend:a.datamaster.onSend}))(_),N=t(134),S=t(30),O=t(79),B=t(34),f=t(42);const j=Object(n.lazy)(()=>t.e(111).then(t.bind(null,597))),x=(a,e)=>{i.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(t=>{if(t.isConfirmed){let t=JSON.parse(localStorage.getItem("HancurBarang_temp")),n=JSON.parse(localStorage.getItem("HancurBarang_temp_kirim"));t.splice(a,1),n.splice(a,1),localStorage.setItem("HancurBarang_temp",JSON.stringify(t)),localStorage.setItem("HancurBarang_temp_kirim",JSON.stringify(n)),Object(p.b)("Berhasil Menghapus Data"),e(Object(S.i)())}})};e.default=Object(s.b)(a=>({hancur_temp:a.stocking.hancur_temp}),null)(class extends r.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_barcode",text:"Kode Barcode",sort:!0},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"merk",text:"Merk"},{dataField:"kwalitas",text:"Kualitas"},{dataField:"satuan",text:"Satuan"},{dataField:"qty",text:"Qty"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e)=>{let t={kode_barcode:e.kode_barcode,nama_barang:e.nama_barang,merk:e.merk,kwalitas:e.kwalitas,satuan:e.satuan,qty:e.qty,harga_satuan:e.harga_satuan,total:e.total};return this.setState({}),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{onClick:()=>this.editModal(t),className:"btn btn-warning mr-3"},"Edit",r.a.createElement("i",{className:"fa fa-edit ml-2"})),r.a.createElement("button",{onClick:()=>x(e.kodeProvinsi,this.props.dispatch),className:"btn btn-danger"},"Hapus",r.a.createElement("i",{className:"fa fa-trash ml-2"}))))}}]}}componentDidMount(){this.props.dispatch(Object(S.i)()),Object(k.b)("hancur-barang/generate/no-trx").then(a=>localStorage.setItem("kode_hancur",a.data[0].no_hancur))}handleSubmit(a){let e=a.kode_supplier&&a.kode_supplier.split("||"),t=JSON.parse(localStorage.getItem("HancurBarang_temp"))||[],n=JSON.parse(localStorage.getItem("HancurBarang_temp_kirim"))||[],r={kode_barcode:a.kode_barcode,nama_barang:a.nama_barang,merk:a.merk,kwalitas:a.kwalitas,satuan:a.satuan,kode_supplier:e[0],qty:a.qty,kondisi:a.kondisi},l={kode_barcode:a.kode_barcode,kode_supplier:e[0],qty:a.qty,kondisi:a.kondisi};t.push(r),n.push(l),localStorage.setItem("HancurBarang_temp",JSON.stringify(t)),localStorage.setItem("HancurBarang_temp_kirim",JSON.stringify(n)),Object(p.b)("Berhasil Menambahan Data").then(()=>this.props.dispatch(Object(S.i)())).then(()=>this.props.dispatch(Object(b.Tb)()))}sendData(a){this.props.dispatch(Object(b.Vb)());let e={no_hancur:localStorage.getItem("kode_hancur")||void 0,tanggal:a.tanggal,kode_lokasi_gudang:a.lokasi,detail_barang:JSON.parse(localStorage.getItem("HancurBarang_temp_kirim"))||[]};console.log(e);const t=[];JSON.parse(localStorage.getItem("HancurBarang_temp")).forEach((a,e)=>{const n=[++e,a.kode_barcode,a.nama_barang,a.merk,a.kwalitas,a.kondisi,a.satuan,a.qty];t.push(n)});let n=["NO","BARCODE","NAMA BARANG","MERK","KW","KONDISI","SATUAN","QTY"];Object(k.c)("hancur-barang/post-transaksi",e).then(()=>Object(N.a)("Tanggal",a.tanggal,"Lokasi",a.lokasi,"No Bukti",a.no_pindah,"","","ADMIN","01-28-2021","ADMIN",n,"BUKTI HANCUR STOK",t,[],!1)).then(()=>Object(p.b)("Berhasil Hancur Barang")).then(()=>Object(B.d)(["HancurBarang_temp","HancurBarang_temp_kirim","kode_hancur","lokasi_hancur"])).then(()=>this.props.dispatch(Object(f.a)("permintaanBarang"))).then(()=>this.props.dispatch(Object(S.i)())).then(()=>this.props.dispatch(Object(b.Ub)())).catch(a=>Object(p.a)("Error: ".concat(a)).then(()=>this.props.dispatch(Object(b.Ub)())))}render(){return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(l.b,{to:"#"},"Data Master")),r.a.createElement("li",{className:"breadcrumb-item active"},"Hancur Barang")),r.a.createElement("h1",{className:"page-header"},"Hancur Barang "),r.a.createElement(g.a,null,r.a.createElement(g.c,null,"Hancur Barang"),r.a.createElement(g.b,null,r.a.createElement("br",null),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(E,{onSubmit:a=>this.sendData(a)})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(O.a,{empty:!0,keyField:"kode_barcode",data:this.props.hancur_temp||[],columns:this.state.columns,CSVExport:!0,textEmpty:"Silahkan Piilih Lokasi Gudang dan Tekan Tombol Kuning Untuk Menambah Data"})),r.a.createElement("br",null),r.a.createElement(d.a,{title:this.state.isEdit?"Edit Data Permintaan Barang":"Tambah Data Barang",content:r.a.createElement(n.Suspense,{fallback:r.a.createElement(m.a,{width:"100%",height:50,count:2})},r.a.createElement(j,{onSubmit:a=>this.handleSubmit(a),onSend:this.props.onSend,isEdit:this.state.isEdit}))}))))}})}}]);
//# sourceMappingURL=110.f7970ba1.chunk.js.map