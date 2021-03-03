(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1052:function(a,e,t){"use strict";t.r(e);var n=t(0),l=t.n(n),s=t(28),r=t(7),o=t(49),c=t(16),m=t.n(c),i=t(5),p=t(27),d=t(9),h=t(33),u=t(18),b=t(41),g=t(502),k=t(131),_=t(508),E=t(94),y=t.n(E),v=t(197),N=t(198),f=t(489),S=t(487);const x=Object(f.createNumberMask)({prefix:"Rp. ",suffix:" ,-",decimalPlaces:0,locale:"id-ID"});class j extends n.Component{constructor(a){super(a),this.state={listCustomer:[],columns:[{dataField:"nama_barang",text:"Nama Barang"},{dataField:"qty",text:"Qty"},{dataField:"kode_satuan",text:"Satuan"},{dataField:"harga_satuan",text:"Harga Satuan",formatter:a=>parseFloat(a).toLocaleString("id-ID")},{dataField:"harga_total",text:"Total",formatter:a=>parseFloat(a).toLocaleString("id-ID")},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e,t)=>(this.setState({}),l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{type:"button",onClick:()=>this.deleteBarang(t),className:"btn btn-danger"},l.a.createElement("i",{className:"fa fa-trash"})))))}]}}componentDidMount(){this.props.change("total",this.props.sub_total),this.props.change("tanggal",Object(h.c)()),Object(d.b)("penjualan-rosok/generate/no-trx").then(a=>this.props.change("no_faktur",a.data[0].no_faktur_jual))}deleteBarang(a){m.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{if(e.isConfirmed){let e=JSON.parse(localStorage.getItem("BarangRongsok_temp"))||[];e.splice(a,1),localStorage.setItem("BarangRongsok_temp",JSON.stringify(e)),this.props.dispatch(Object(p.u)()),Object(u.i)("Berhasil Menghapus Data")}})}setCustomer(a){let e=a.split("||");this.props.change("kode_customer",e[0]),this.props.change("alamat",e[1]),this.props.change("handphone",e[2])}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(v.a,{name:"tanggal",component:u.c,type:"date",label:"Tanggal",placeholder:"Masukan Tanggal",validate:S.a})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(v.a,{name:"no_faktur",component:u.c,type:"text",label:"Nomor Faktur",placeholder:"Masukan Nomor Faktur",readOnly:!0})),l.a.createElement("div",{className:"col-lg-4"}),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(v.a,{name:"kode_pelanggan",component:u.e,options:this.props.listCustomer.map(a=>{return{value:"".concat(a.nama_customer,"||").concat(a.alamat,"||").concat(a.handphone),name:a.nama_customer}}),type:"text",label:"Pelanggan",placeholder:"Masukan Pelanggan",onChange:a=>this.setCustomer(a),validate:S.a}),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("span",null,"Jika Tidak Ada dalam list, silahkan klik tombol biru untuk menambahkan Customer"))),l.a.createElement("div",{className:"col-lg-1"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"."},"."),l.a.createElement("button",{type:"button",className:"btn btn-block btn-teal form-control",onClick:this.props.showCustomer},l.a.createElement("i",{className:"fa fa-plus"})))),l.a.createElement("div",{className:"col-lg-4 d-none"},l.a.createElement(v.a,{name:"kode_customer",component:u.c,type:"text",label:"Kode Customer",placeholder:"Masukan Alamat",readOnly:!0})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(v.a,{name:"alamat",component:u.c,type:"text",label:"Alamat",placeholder:"Masukan Alamat",readOnly:!0,validate:S.a})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(v.a,{name:"handphone",component:u.c,type:"text",label:"Handphone",placeholder:"Masukan Handphone",readOnly:!0,validate:S.a})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(v.a,Object.assign({name:"total",component:u.c,type:"text",label:"Total Harga",placeholder:"Rp.",readOnly:!0},x))))),l.a.createElement("div",{className:"col-lg-12 mb-3"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.props.showTambah},"Tambah Data ",l.a.createElement("i",{className:"fa fa-plus ml-3"})))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(y.a,{bootstrap4:!0,keyField:"id",data:this.props.listbarangrongsok||[],columns:this.state.columns})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Bayar ",l.a.createElement("i",{className:"fa fa-chevron-circle-right ml-3"}))))))}}j=Object(N.a)({form:"HeadPenjualanRongsok",enableReinitialize:!0})(j);var O=Object(s.b)(a=>({initialValues:{total:a.transaksi.total_bayar,no_faktur:localStorage.getItem("nomor_jual_rongsok")||""},listCustomer:a.datamaster.listcustomer||[]}),null)(j),C=t(209),F=t(132);const M=Object(f.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class B extends n.Component{constructor(a){super(a),this.state={columnsListBayar:[{dataField:"jenis_trx",text:"Jenis Bayar"},{dataField:"no_card",text:"Bank",formatter:a=>"".concat(a)},{dataField:"fee_rp",text:"Fee Card"},{dataField:"bayar_rp",text:"Bayar",formatter:a=>"Rp. ".concat(parseFloat(a).toLocaleString("id-ID"))},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e,t)=>(this.setState({}),l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{onClick:()=>{let a=JSON.parse(localStorage.getItem("listPembayaran_temp"));a.splice(t,1),localStorage.setItem("listPembayaran_temp",JSON.stringify(a)),this.props.dispatch(Object(p.x)())},className:"btn btn-danger"},"Hapus",l.a.createElement("i",{className:"fa fa-trash ml-2"})))))}]}}componentDidMount(){this.props.change("grand_total_all",this.props.total)}setBayar(a){this.setState({bayar:a.target.value}),localStorage.setItem("bayar_rp_rongsok",a.target.value)}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 mb-3"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-left"},l.a.createElement("button",{className:"btn btn-black text-white",onClick:this.props.backMenu},l.a.createElement("i",{className:"fa fa-chevron-left mr-3"})," Back")))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 text-center"},l.a.createElement("h3",null,"Grand Total"),l.a.createElement("p",{style:{fontSize:32,fontWeight:700}},parseFloat(this.props.grand_total_all).toLocaleString("id-ID")),l.a.createElement("h3",null,"Bayar"),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"}),l.a.createElement("div",{className:"col-lg-6 text-center"},l.a.createElement(v.a,Object.assign({name:"bayar",component:u.c,type:"telp",placeholder:"Masukan Bayar",className:" form-control-lg",onChange:a=>this.setBayar(a)},M))))),l.a.createElement("h3",null,"Kembali"),l.a.createElement("p",{style:{fontSize:35,fontWeight:700}},parseFloat(this.props.kembali).toLocaleString("id-ID"))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(F.a,{keyField:"no_ac",data:this.props.listPembayaran_temp,columns:this.state.columnsListBayar,tambahData:!0,handleClick:this.props.showCC})))))),l.a.createElement("div",{className:"text-center col-lg-12"},l.a.createElement("button",{className:"btn btn-primary"},this.props.onSend?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):l.a.createElement(l.a.Fragment,null,"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))))}}B=Object(N.a)({form:"ModalBayar",enableReinitialize:!0})(B);const I=Object(C.a)("ModalBayar");var T=Object(s.b)(a=>(localStorage.setItem("bayar_rp_rongsok",I(a,"bayar")||0),localStorage.setItem("kembalian_bayar",(I(a,"bayar")||0)-a.transaksi.total_bayar+a.transaksi.sum_pembayaran),{grand_total_all:a.transaksi.total_bayar,listPembayaran_temp:a.transaksi.listpembayaran_temp,sum_pembayaran:a.transaksi.sum_pembayaran,kembali:(I(a,"bayar")||0)-a.transaksi.total_bayar+a.transaksi.sum_pembayaran,bayar:I(a,"bayar")||0,onSend:a.datamaster.onSend}))(B);const P=Object(f.createNumberMask)({prefix:"Rp. ",suffix:" ,-",decimalPlaces:0,locale:"id-ID"});class w extends n.Component{constructor(a){super(a),this.state={listSatuan:[]}}setTotal(){this.props.change("total",this.props.total)}componentDidMount(){Object(d.b)("satuan/get/all").then(a=>this.setState({listSatuan:a&&a.data.map(a=>{return{value:a.kode_satuan,name:a.nama_satuan}})}))}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(v.a,{name:"nama_barang",component:u.c,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang"})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(v.a,{name:"qty",component:u.c,type:"text",label:"Qty",placeholder:"Masukan Qty",onChange:this.setTotal()})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(v.a,{name:"satuan",component:u.e,options:this.state.listSatuan,type:"text",label:"Satuan",placeholder:"Masukan "})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(v.a,Object.assign({name:"harga_satuan",component:u.c,type:"text",label:"Harga Satuan",placeholder:"Masukan Harga Satuan",onChange:this.setTotal()},P))),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(v.a,Object.assign({name:"total",component:u.c,type:"text",label:"Total",placeholder:"Masukan Total"},P))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}w=Object(N.a)({form:"ModalPenjualanRongsok",enableReinitialize:!0})(w);const D=Object(C.a)("ModalPenjualanRongsok");var R=Object(s.b)(a=>{const e=D(a,"harga_satuan","qty"),t=e.harga_satuan,n=e.qty;return{total:parseFloat(t||0)*parseFloat(n||0)}})(w),K=t(490);class J extends n.Component{constructor(a){super(a),this.state={listMerk:[]}}componentDidMount(){Object(d.b)("merk-kendaraan/get/all").then(a=>this.setState({listMerk:a.data})).catch(a=>Object(u.a)(a.response.data||"Tidak Ada Koneksi")),this.props.change("kode_customer",this.props.noFaktur)}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 mb-3"},l.a.createElement("div",{className:"text-left"},l.a.createElement("button",{className:"btn btn-black text-white",onClick:this.props.backMenu},l.a.createElement("i",{className:"fa fa-chevron-left mr-3"})," Back"))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(v.a,{name:"kode_customer",component:u.c,type:"text",label:"Kode CUstomer",placeholder:"Masukan Kode Customer",validate:S.a})),l.a.createElement("h3",{className:"mb-3"},"Data Pemilik :"),l.a.createElement(v.a,{name:"nama_customer",component:u.c,type:"text",label:"Nama",placeholder:"Masukan Nama",validate:S.a}),l.a.createElement(v.a,{name:"alamat_customer",component:u.c,type:"text",label:"Alamat",placeholder:"Masukan Alamat"}),l.a.createElement(v.a,{name:"kota_customer",component:u.c,type:"text",label:"Kota",placeholder:"Masukan Kota"}),l.a.createElement(v.a,{name:"handphone_customer",component:u.c,type:"text",label:"Handphone",placeholder:"Masukan Handphone"})),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("h3",{className:"mb-3"},"Data Kendaraan :"),l.a.createElement(v.a,{name:"no_polisi",component:u.c,type:"text",label:"Nomor Polisi",placeholder:"Masukan Nomor Polisi",validate:S.a}),l.a.createElement(v.a,{name:"merk",component:u.e,options:this.state.listMerk.map(a=>{return{value:a.kode_merk_kendaraan,name:a.nama_merk_kendaraan}}),type:"text",label:"Merk",placeholder:"Masukan Merk"}),l.a.createElement(v.a,{name:"type",component:u.c,type:"text",label:"Type",placeholder:"Masukan Type"}),l.a.createElement(v.a,{name:"warna",component:u.c,type:"text",label:"Warna",placeholder:"Masukan Warna"}),l.a.createElement(v.a,{name:"no_mesin",component:u.c,type:"text",label:"Nomor Mesin",placeholder:"Masukan Nomor Mesin",validate:S.a}))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):l.a.createElement(l.a.Fragment,null,"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane ml-3 "})))))}}J=Object(N.a)({form:"tambahCustomer",enableReinitialize:!0,validate:K.a})(J);var A=Object(s.b)(a=>void 0!==a.datamaster.datacustomer?{initialValues:{nama_customer:a.datamaster.datacustomer.nama_customer,kode_customer:a.datamaster.datacustomer.kode_customer,alamat_customer:a.datamaster.datacustomer.alamat,kota_customer:a.datamaster.datacustomer.kota,handphone_customer:a.datamaster.datacustomer.handphone,no_polisi:a.datamaster.datacustomer.nopol_kendaraan,merk:a.datamaster.datacustomer.merk_kendaraan,type:a.datamaster.datacustomer.type_kendaraan,no_mesin:a.datamaster.datacustomer.nomesin_kendaraan,warna:a.datamaster.datacustomer.warna_kendaraan},onSend:a.datamaster.onSend}:{onSend:a.datamaster.onSend},null)(J);e.default=Object(s.b)(a=>({listbarangrongsok:a.transaksi.listbarangrongsok,onSend:a.datamaster.onSend,noFaktur:a.datamaster.noFaktur,grand_total_all:a.transaksi.total_bayar}),null)(class extends n.Component{constructor(a){super(a),this.state={cari_barang:!1,bayar:!1,customer:!1,columnsListBayar:[{dataField:"jenis_trx",text:"Jenis Bayar"},{dataField:"nama_pemilik",text:"Nama Pemilik"},{dataField:"no_ac",text:"Nomor Rekening"},{dataField:"bayar_rp",text:"Total Bayar",formatter:a=>"".concat(parseFloat(a).toLocaleString("id-ID"))},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e,t)=>(this.setState({}),l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{type:"button",onClick:()=>this.deleteBarang(t),className:"btn btn-danger"},l.a.createElement("i",{className:"fa fa-trash"})))))}]}}deleteBarang(a){m.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{if(e.isConfirmed){let e=JSON.parse(localStorage.getItem("listPembayaran_temp"))||[];e.splice(a,1),localStorage.setItem("listPembayaran_temp",JSON.stringify(e)),this.props.dispatch(Object(p.x)()),Object(u.i)("Berhasil Menghapus Data")}})}componentDidMount(){this.props.dispatch(Object(p.u)()),this.props.dispatch(Object(i.xb)()),Object(d.b)("penjualan-rosok/generate/no-trx").then(a=>localStorage.setItem("nomor_jual_rongsok",a.data[0].no_faktur_jual)),this.props.dispatch(Object(p.x)()),this.props.dispatch(Object(i.Ab)())}handleSubmit(a){let e=JSON.parse(localStorage.getItem("BarangRongsok_temp"))||[],t=e.findIndex(e=>e.nama_barang===a.nama_barang);if(-1!==t){let n={nama_barang:a.nama_barang,qty:parseInt(a.qty)+parseFloat(e[t].qty),kode_satuan:a.satuan,harga_satuan:parseFloat(a.harga_satuan),harga_total:parseFloat(a.total)+parseFloat(e[t].harga_total)};e.splice(t,1),e.push(n),localStorage.setItem("BarangRongsok_temp",JSON.stringify(e)),Object(u.i)("Berhasil Menambah Data"),this.props.dispatch(Object(o.a)("ModalPenjualanRongsok")),this.props.dispatch(Object(p.u)())}else{let e={nama_barang:a.nama_barang,qty:parseFloat(a.qty),kode_satuan:a.satuan,harga_satuan:parseFloat(a.harga_satuan),harga_total:parseFloat(a.total)};Object(g.a)("BarangRongsok_temp",e).then(()=>this.props.dispatch(Object(o.a)("ModalPenjualanRongsok"))).then(()=>this.props.dispatch(Object(p.u)()))}}showBayar(a){let e={no_faktur_jual:a.no_faktur,tanggal:a.tanggal,nama_customer:a.kode_customer,alamat:a.alamat,telepon:a.handphone,grand_total:this.props.grand_total_all,no_ref_cash:this.props.noFaktur,detail_barang:JSON.parse(localStorage.getItem("BarangRongsok_temp"))};localStorage.setItem("headPembayaranRongsok",JSON.stringify(e)),this.setState({bayar:!0})}sendBayar(a){this.props.dispatch(Object(i.Vb)());let e=JSON.parse(localStorage.getItem("headPembayaranRongsok"))||[];e.cash_rp=a.bayar,e.detail_non_tunai="[]"===localStorage.getItem("listPembayaran_temp")?[{no_ref:"-",no_ac:"-",bayar_rp:0,fee_rp:0,no_card:"-",valid_until:"-",nama_pemilik:"-",no_ktp:"-",alamat_ktp:"-",kota_ktp:"-",telepon_ktp:"-",jenis_trx:"-"}]:JSON.parse(localStorage.getItem("listPembayaran_temp"))||[],localStorage.setItem("headPembayaranRongsok",JSON.stringify(e)),Object(d.c)("penjualan-rosok/post-transaksi",e).then(()=>Object(h.d)(["headPembayaranRongsok","nomor_jual_rongsok","BarangRongsok_temp","bayar_rp_rongsok","noFaktur"])).then(()=>this.props.dispatch(Object(p.u)())).then(()=>this.props.dispatch(Object(p.x)())).then(()=>Object(u.b)("Berhasil Menambahkan Data")).then(()=>this.props.dispatch(Object(i.Ab)())).then(()=>this.props.dispatch(Object(i.Ub)())).then(()=>this.setState({bayar:!1,customer:!1})).then(()=>this.props.dispatch(Object(i.Ub)())).then(()=>Object(u.b)("Penjualan Berhasil")).catch(a=>{Object(u.h)("Error : ".concat(a.response.data)),this.props.dispatch(Object(i.Ub)())})}showTambah(){this.props.dispatch(Object(i.Wb)()),this.setState({bayar:!1,customer:!1})}showCC(){this.props.dispatch(Object(i.Wb)()),this.setState({jenisModal:"CC"})}handleSimpanCC(a){let e=JSON.parse(localStorage.getItem("listPembayaran_temp"))||[],t={no_ref:this.props.noFaktur,no_ac:"".concat(a.bank),bayar_rp:a.grand_total,fee_rp:a.fee_card,no_card:a.no_card,valid_until:a.expiry,nama_pemilik:a.name,no_ktp:a.no_ktp,alamat_ktp:a.alamat_ktp,kota_ktp:a.kota,telepon_ktp:a.handphone,jenis_trx:a.jenis_trx||"DEBIT"};if(e.push(t),e.map(a=>a.bayar_rp).reduce((a,e)=>a+e)>this.props.grand_total)return Object(u.h)("Pembayaran Melebihi Total Harga"),!1;localStorage.setItem("listPembayaran_temp",JSON.stringify(e)),Object(u.i)("Berhasil Menambahkan Data"),localStorage.removeItem("noFaktur"),this.props.dispatch(Object(i.Ab)()),this.props.dispatch(Object(i.Tb)()),this.props.dispatch(Object(p.x)())}showCustomer(){this.setState({customer:!0,bayar:!1})}handleCustomer(a){let e={kode_customer:this.props.noFaktur||"-",nama_customer:a.nama_customer||"-",alamat:a.alamat_customer||"-",kota:a.kota_customer||"-",handphone:a.handphone_customer||"-",nopol_kendaraan:a.no_polisi||"-",merk_kendaraan:a.merk||"-",type_kendaraan:a.type||"-",nomesin_kendaraan:a.no_mesin||"-",warna_kendaraan:a.warna||"-"};this.props.dispatch(Object(i.Vb)()),Object(d.c)("customer/add",e).then(()=>Object(u.i)("Berhasil Ditambahkan")).then(()=>this.props.dispatch(Object(o.a)("dataBarang"))).then(()=>this.props.dispatch(Object(i.Tb)())).then(()=>this.props.dispatch(Object(i.Ub)())).then(()=>this.props.dispatch(Object(i.xb)())).then(()=>localStorage.removeItem("noFaktur")).then(()=>this.props.dispatch(Object(i.Ab)())).then(()=>this.setState({customer:!1,bayar:!1})).catch(()=>Object(u.h)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi").then(()=>this.props.dispatch(Object(i.Ub)())))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(r.b,{to:"#"},"Transaksi")),l.a.createElement("li",{className:"breadcrumb-item active"},"Penjualan Barang Rongsok")),l.a.createElement("h1",{className:"page-header"},"Penjualan Barang Rongsok "),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(b.a,null,l.a.createElement(b.c,null,"Penjualan Barang Rongsok"),l.a.createElement(b.b,null,l.a.createElement("br",null),this.state.bayar?l.a.createElement(T,{showCC:()=>this.showCC(),columns:this.state.columnsListBayar,data:this.state.dataListBayar,backMenu:()=>this.setState({bayar:!1}),onSubmit:a=>this.sendBayar(a)}):this.state.customer?l.a.createElement(A,{onSubmit:a=>this.handleCustomer(a),onSend:this.props.onSend,isEdit:!1,noFaktur:this.props.noFaktur,backMenu:()=>this.setState({bayar:!1,customer:!1})}):l.a.createElement(O,{listbarangrongsok:this.props.listbarangrongsok,onSubmit:a=>this.showBayar(a),showTambah:()=>this.showTambah(),showCustomer:()=>this.showCustomer()}),l.a.createElement("br",null))),l.a.createElement(k.a,{title:this.state.bayar?"Credit Card":"Tambah Data Rongsok",content:this.state.bayar?l.a.createElement(_.a,{onSubmit:a=>this.handleSimpanCC(a)}):l.a.createElement(R,{onSubmit:a=>this.handleSubmit(a)})}))))}})},487:function(a,e,t){"use strict";t.d(e,"a",function(){return n});const n=a=>a?void 0:"Tidak Boleh Kosong"},490:function(a,e,t){"use strict";e.a=((a,e)=>{const t={};return a.kode_kategori||(t.kode_kategori="Kode Tidak Boleh Kosong"),a.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),a.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),a.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),a.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t})},502:function(a,e,t){"use strict";t.d(e,"a",function(){return s});var n=t(16),l=t.n(n);const s=(a,e)=>new Promise((t,n)=>{let s=JSON.parse(localStorage.getItem(a))||[];s.push(e),localStorage.setItem(a,JSON.stringify(s)),l.a.fire({position:"top-right",text:"Tambah Data Berhasil",timer:2e3,icon:"success",showConfirmButton:!1}).then(()=>t("Berhaisl")).catch(()=>n("GAGAL"))})},508:function(a,e,t){"use strict";var n=t(0),l=t.n(n),s=t(533),r=(t(534),t(28)),o=t(197),c=t(198),m=t(209),i=t(489),p=t(9),d=t(18);const h=Object(i.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class u extends n.Component{constructor(a){super(a),this.handleInputFocus=(a=>{this.setState({focus:a.target.name})}),this.handleInputChange=(a=>{const e=a.target,t=e.name,n=e.value;this.setState({[t]:n}),this.props.change(t,n)}),this.state={cvc:"",expiry:"",focus:"",name:"",no_card:"",nav1:"nav-item nav-link active",nav2:"nav-item nav-link",nav3:"nav-item nav-link",listBank:[]}}componentDidMount(){Object(p.b)("bank/get/all").then(a=>this.setState({listBank:a&&a.data.map(a=>{return{value:a.no_ac,name:"".concat(a.atas_nama," / ").concat(a.nama_bank)}})}))}setTotal(){this.props.change("fee_card",this.props.fee_card),this.props.change("total_card",this.props.total)}render(){return l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(s.a,{cvc:this.state.cvc,expiry:this.state.expiry,focused:this.state.focus,name:this.state.name,number:this.state.no_card}),l.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"mt-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("nav",{className:"nav nav-pills nav-fill"},l.a.createElement("button",{type:"button",className:this.state.nav1,onClick:()=>{this.setState({nav1:"nav-item nav-link active",nav2:"nav-item nav-link",nav3:"nav-item nav-link"}),this.props.change("jenis_trx","DEBIT")}},"DEBIT"),l.a.createElement("button",{type:"button",className:this.state.nav2,onClick:()=>{this.setState({nav1:"nav-item nav-link ",nav2:"nav-item nav-link active",nav3:"nav-item nav-link"}),this.props.change("jenis_trx","CARD")}},"CREDIT"),l.a.createElement("button",{type:"button",className:this.state.nav3,onClick:()=>{this.setState({nav1:"nav-item nav-link ",nav2:"nav-item nav-link",nav3:"nav-item nav-link active"}),this.props.change("jenis_trx","TRANSFER")}},"TRANSFER"))),l.a.createElement("div",{className:"col-lg-12 mb-2 mt-2"},l.a.createElement("h4",null,"Data Kartu")),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"No.Card"),l.a.createElement("input",{type:"tel",className:"form-control",name:"no_card",placeholder:"Card Number",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(o.a,{name:"no_card",component:d.c,type:"telp",label:"No.Card",placeholder:"Masukan No.Card",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Valid Until"),l.a.createElement("input",{type:"tel",className:"form-control",name:"expiry",placeholder:"MM/YY",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(o.a,{name:"expiry",component:d.c,type:"telp",label:"Valid until ( MM/YY )",placeholder:"Masukan Valid until ( MM/YY )",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Nama Pemilik"),l.a.createElement("input",{type:"tel",className:"form-control",name:"name",placeholder:"Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(o.a,{name:"name",component:d.c,type:"text",label:"Nama Pemilik",placeholder:"Masukan Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"CVC / CVV"),l.a.createElement("input",{type:"tel",className:"form-control",name:"cvc",placeholder:"Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(o.a,{name:"cvc",component:d.c,type:"text",label:"Nama Pemilik",placeholder:"Masukan Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),l.a.createElement("div",{className:"col-lg-12 mb-2"},l.a.createElement("h4",null,"Data Pemilik")),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,{name:"no_ktp",component:d.c,type:"number",label:"Nomor KTP",placeholder:"Masukan Nomor KTP"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,{name:"alamat_ktp",component:d.c,type:"text",label:"Alamat KTP",placeholder:"Masukan Alamat KTP"})),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(o.a,{name:"jenis_trx",component:d.c,type:"text",label:"Jenis Transaksi",placeholder:"Masukan Jenis Transaksi"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,{name:"kota",component:d.c,type:"text",label:"Kota",placeholder:"Masukan Kota"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,{name:"handphone",component:d.c,type:"telp",label:"Handphone",placeholder:"Masukan Handphone"})),l.a.createElement("div",{className:"col-lg-12 mb-2"},l.a.createElement("h4",null,"Data Harga")),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(o.a,{name:"bank",component:d.e,options:this.state.listBank,label:"Bank",placeholder:"Masukan Bank"})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(o.a,Object.assign({name:"sub_total",component:d.c,type:"text",label:"Sub Total",placeholder:"Masukan Sub Total",readOnly:!0},h))),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(o.a,Object.assign({name:"grand_total",component:d.c,type:"telp",label:"Grand Total",placeholder:"Masukan Grand Total"},h))),l.a.createElement("div",{className:"col-lg-1"},l.a.createElement(o.a,{name:"fee_card_percent",component:d.c,type:"number",label:"% Card",placeholder:"0",onChange:this.setTotal()})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(o.a,Object.assign({name:"fee_card",component:d.c,type:"telp",label:"Fee Card",placeholder:"0"},h))),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,Object.assign({name:"total_card",component:d.c,type:"telp",label:"Card + Fee",placeholder:"Masukan Card + Fee"},h))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane"})))))))}}u=Object(c.a)({form:"ModalCC",enableReinitialize:!0,validate:a=>{const e={};return a.grand_total>a.sub_total&&(e.grand_total="Pembayaran Tidak Boleh Lebih Dari Sub Total"),e}})(u);const b=Object(m.a)("ModalCC");e.a=Object(r.b)(a=>{const e=b(a,"grand_total","fee_card_percent"),t=e.grand_total,n=e.fee_card_percent;return{fee_card:parseFloat(t||0)*(parseFloat(n||0)/100),total:parseFloat(t||0)+parseFloat(t||0)*(parseFloat(n||0)/100),sub_total:a.transaksi.sub_total,initialValues:{sub_total:Math.abs(localStorage.getItem("kembalian_bayar")||0)}}})(u)}}]);
//# sourceMappingURL=10.8613c397.chunk.js.map