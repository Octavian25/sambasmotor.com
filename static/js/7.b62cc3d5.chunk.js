(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1033:function(a,e,t){"use strict";t.r(e);var l=t(0),n=t.n(l),r=t(7),s=t(29),c=t(27),o=t(41),i=t(49),m=t(26),p=t(131),d=t(5),h=t(532),b=t(508),g=t(558),u=t(62),_=t(9),v=t(33);const k=Object(l.lazy)(()=>t.e(118).then(t.bind(null,1e3)));e.default=Object(s.b)(a=>({listbayar_service:a.stocking.listbayar_service,grand_total_all:a.transaksi.total_bayar,noFaktur:a.datamaster.noFaktur}),null)(class extends n.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,bayar:!0,jenisModal:"",columns:[{dataField:"kode_supplier",text:"Kode Supplier"},{dataField:"kode",text:"Kode Barang"},{dataField:"nama",text:"Nama Barang"},{dataField:"jenis_barang",text:"Jenis barang"},{dataField:"keterangan",text:"Keterangan"},{dataField:"harga_satuan",text:"Harga Satuan",formatter:a=>"".concat(parseFloat(a).toLocaleString("id-ID"))},{dataField:"qty",text:"QTY"},{dataField:"harga_total",text:"Harga Total",formatter:a=>"".concat(parseFloat(a).toLocaleString("id-ID"))}],columnsSparepart:[{dataField:"kode_barcode",text:"Barcode"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"merk",text:"Merk"},{dataField:"type",text:"Type"},{dataField:"qty",text:"Qty"},{dataField:"satuan",text:"Satuan"},{dataField:"harga",text:"harga"},{dataField:"total",text:"Total"}],columnsListBayar:[{dataField:"no_ac",text:"No Bank"},{dataField:"jenis_trx",text:"Jenis"},{dataField:"fee_rp",text:"Fee Card"},{dataField:"bayar_rp",text:"Total"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e,t)=>(this.setState({}),n.a.createElement("div",{className:"row text-center"},n.a.createElement("div",{className:"col-12"},n.a.createElement("button",{onClick:()=>{let a=JSON.parse(localStorage.getItem("listPembayaran_temp"));a.splice(t,1),localStorage.setItem("listPembayaran_temp",JSON.stringify(a)),this.props.dispatch(Object(m.w)())},className:"btn btn-danger"},"Hapus",n.a.createElement("i",{className:"fa fa-trash ml-2"})))))}],dataSparepart:[{kode_barcode:"barcode",nama_barang:"nama_barang",merk:"merk",type:"type",qty:3,satuan:"PCS",harga:1e5,total:3e5}],data:[{jenis_Kendaraan:"ADA",no_polisi:"ADA",nama_pemilik:"ADA",alamat:"ADA",jenis_service:"ADA",sparepart:"ADA",harga_sparepart:"ADA",ongkos:"ADA",harga_ongkos:"ADA"}],dataListBayar:[{jenis_bayar:"CREDIT CARD",bank:"BCA",jumlah:1e8}]}}componentDidMount(){this.props.dispatch(Object(d.Ab)()),this.props.dispatch(Object(m.u)()),this.props.dispatch(Object(m.s)())}showBayar(){this.setState({bayar:!1})}showSparepart(){this.props.dispatch(Object(d.Wb)()),this.setState({jenisModal:"SPAREPART"})}showJasa(){this.props.dispatch(Object(d.Wb)()),this.setState({jenisModal:"JASA"})}showCC(){this.props.dispatch(Object(d.Wb)()),this.setState({jenisModal:"CC"})}handleSimpanCC(a){let e={no_ref:this.props.noFaktur,no_ac:"".concat(a.bank),bayar_rp:a.grand_total,fee_rp:a.fee_card,no_card:a.no_card,valid_until:a.expiry,nama_pemilik:a.name,no_ktp:a.no_ktp,alamat_ktp:a.alamat_ktp,kota_ktp:a.kota,telepon_ktp:a.handphone,jenis_trx:a.jenis_trx||"DEBIT"},t=JSON.parse(localStorage.getItem("listPembayaran_temp"))||[];t.push(e),localStorage.setItem("listPembayaran_temp",JSON.stringify(t)),Object(c.b)("Simpan Berhasil"),this.props.dispatch(Object(m.w)()),localStorage.removeItem("noFaktur"),this.props.dispatch(Object(d.Ab)())}tambahSparepart(a){if(void 0!==a.kode_sparepart&&void 0!==a.kategori_service){let e={kode_supplier:"-",kode:a.kategori_service,nama:a.nama_service,qty:1,harga_satuan:a.harga_service,harga_total:a.harga_service,keterangan:a.keterangan_service,jenis_barang:"JASA SERVICE"},t={kode_supplier:a.kode_supplier||"-",kode:a.kode_sparepart||"-",nama:a.nama_sparepart||"-",qty:1,harga_satuan:a.harga_sparepart||"-",harga_total:a.harga_sparepart||"-",keterangan:a.kategori_service||"-",jenis_barang:"SPAREPART"},l=JSON.parse(localStorage.getItem("list_tambahan_bayar_temp"))||[],n=JSON.parse(localStorage.getItem("list_barang_bayar"))||[];l.push(e,t),n.push(e,t),localStorage.setItem("list_tambahan_bayar_temp",JSON.stringify(l)),localStorage.setItem("list_barang_bayar",JSON.stringify(n)),Object(c.i)("Tambah Data Berhasil"),this.props.dispatch(Object(d.Tb)()),this.props.dispatch(Object(i.a)("TambahService")),this.props.dispatch(Object(m.s)()),localStorage.removeItem("noFaktur"),this.props.dispatch(Object(d.Ab)())}else if(void 0===a.kode_sparepart){let e={kode_supplier:"-",kode:a.kategori_service,nama:a.nama_service,qty:1,harga_satuan:a.harga_service,harga_total:a.harga_service,keterangan:a.keterangan_service,jenis_barang:"JASA SERVICE"},t=JSON.parse(localStorage.getItem("list_tambahan_bayar_temp"))||[],l=JSON.parse(localStorage.getItem("list_barang_bayar"))||[];t.push(e),l.push(e),localStorage.setItem("list_tambahan_bayar_temp",JSON.stringify(t)),localStorage.setItem("list_barang_bayar",JSON.stringify(l)),Object(c.i)("Tambah Data Berhasil"),this.props.dispatch(Object(d.Tb)()),this.props.dispatch(Object(i.a)("TambahService")),this.props.dispatch(Object(m.s)()),localStorage.removeItem("noFaktur"),this.props.dispatch(Object(d.Ab)())}else{let e={kode_supplier:a.kode_supplier||"-",kode:a.kode_sparepart||"-",nama:a.nama_sparepart||"-",qty:1,harga_satuan:a.harga_sparepart||"-",harga_total:a.harga_sparepart||"-",keterangan:a.kategori_service||"-",jenis_barang:"SPAREPART"},t=JSON.parse(localStorage.getItem("list_tambahan_bayar_temp"))||[],l=JSON.parse(localStorage.getItem("list_barang_bayar"))||[];t.push(e),l.push(e),localStorage.setItem("list_tambahan_bayar_temp",JSON.stringify(t)),localStorage.setItem("list_barang_bayar",JSON.stringify(l)),Object(c.i)("Tambah Data Berhasil"),this.props.dispatch(Object(d.Tb)()),this.props.dispatch(Object(i.a)("TambahService")),this.props.dispatch(Object(m.s)()),localStorage.removeItem("noFaktur"),this.props.dispatch(Object(d.Ab)())}}bayarservice(a){this.props.dispatch(Object(d.Vb)());let e={no_daftar:localStorage.getItem("no_daftar")||"",tgl_bayar:Object(u.a)(),disk_part_rp:a.barang||0,disk_jasa_rp:a.jasa||0,total_bayar:parseFloat(this.props.grand_total_all)-parseFloat(a.barang||0)-parseFloat(a.jasa||0),cash_rp:a.bayar,no_ref_cash:this.props.noFaktur,status_masuk_piutang:a.piutang||!1,detail_barang:JSON.parse(localStorage.getItem("list_tambahan_bayar_temp"))||[],detail_non_tunai:"[]"===localStorage.getItem("listPembayaran_temp")?[{no_ref:"-",no_ac:"-",bayar_rp:0,fee_rp:0,no_card:"-",valid_until:"-",nama_pemilik:"-",no_ktp:"-",alamat_ktp:"-",kota_ktp:"-",telepon_ktp:"-",jenis_trx:"-"}]:null!==localStorage.getItem("listPembayaran_temp")?JSON.parse(localStorage.getItem("listPembayaran_temp")):[{no_ref:"-",no_ac:"-",bayar_rp:0,fee_rp:0,no_card:"-",valid_until:"-",nama_pemilik:"-",no_ktp:"-",alamat_ktp:"-",kota_ktp:"-",telepon_ktp:"-",jenis_trx:"-"}]};console.log(e),Object(_.c)("bayar-service/post-transaksi",e).then(()=>Object(c.i)("Berhasil Melakukan Pembayaran, Terima Kasih")).then(()=>Object(v.d)(["list_tambahan_bayar_temp","list_barang_bayar","no_daftar","list_tambahan_bayar_temp","listPembayaran_temp","noFaktur"])).then(()=>this.props.dispatch(Object(m.s)())).then(()=>this.props.dispatch(Object(m.w)())).then(()=>this.props.dispatch(Object(d.Ab)())).then(()=>this.props.dispatch(Object(d.Ub)())).then(()=>this.props.getListBayarService()).then(()=>this.setState({bayar:!0})).catch(a=>Object(c.h)("Error : ".concat(a.response.data)).then(()=>this.props.dispatch(Object(d.Ub)())))}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(r.b,{to:"#"},"Transaksi")),n.a.createElement("li",{className:"breadcrumb-item active"},"Bayar Service")),n.a.createElement("h1",{className:"page-header"},"Bayar Service "),n.a.createElement(o.a,null,n.a.createElement(o.c,null,"Bayar Service"),n.a.createElement(o.b,null,n.a.createElement("br",null),this.state.bayar?n.a.createElement(k,{onSubmit:a=>this.handleSubmit(a),listbayar_service:this.props.listbayar_service,columns:this.state.columns,data:this.state.data,showBayar:()=>this.showBayar(),showSparepart:()=>this.showSparepart(),showJasa:()=>this.showJasa()}):n.a.createElement(h.a,{showCC:()=>this.showCC(),columns:this.state.columnsListBayar,data:this.state.dataListBayar,backMenu:()=>this.setState({bayar:!0}),onSubmit:a=>this.bayarservice(a)})),n.a.createElement(p.a,{content:"JASA"===this.state.jenisModal?n.a.createElement(g.a,{onSubmit:a=>this.tambahSparepart(a)}):"CC"===this.state.jenisModal?n.a.createElement(b.a,{onSubmit:a=>this.handleSimpanCC(a)}):null,title:"SPAREPART"===this.state.jenisModal?"Tambah Data Sparepart":"JASA"===this.state.jenisModal?"Tambah Data Jasa":"BAYAR"===this.state.jenisModal?"Tambah pembayaran":null})))}})},487:function(a,e,t){"use strict";t.d(e,"a",function(){return l});const l=a=>a?void 0:"Tidak Boleh Kosong"},508:function(a,e,t){"use strict";var l=t(0),n=t.n(l),r=t(533),s=(t(534),t(29)),c=t(196),o=t(197),i=t(209),m=t(490),p=t(9),d=t(27);const h=Object(m.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class b extends l.Component{constructor(a){super(a),this.handleInputFocus=(a=>{this.setState({focus:a.target.name})}),this.handleInputChange=(a=>{const e=a.target,t=e.name,l=e.value;this.setState({[t]:l}),this.props.change(t,l)}),this.state={cvc:"",expiry:"",focus:"",name:"",no_card:"",nav1:"nav-item nav-link active",nav2:"nav-item nav-link",nav3:"nav-item nav-link",listBank:[]}}componentDidMount(){Object(p.b)("bank/get/all").then(a=>this.setState({listBank:a&&a.data.map(a=>{return{value:a.no_ac,name:"".concat(a.atas_nama," / ").concat(a.nama_bank)}})}))}setTotal(){this.props.change("fee_card",this.props.fee_card),this.props.change("total_card",this.props.total)}render(){return n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(r.a,{cvc:this.state.cvc,expiry:this.state.expiry,focused:this.state.focus,name:this.state.name,number:this.state.no_card}),n.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"mt-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("nav",{className:"nav nav-pills nav-fill"},n.a.createElement("button",{type:"button",className:this.state.nav1,onClick:()=>{this.setState({nav1:"nav-item nav-link active",nav2:"nav-item nav-link",nav3:"nav-item nav-link"}),this.props.change("jenis_trx","DEBIT")}},"DEBIT"),n.a.createElement("button",{type:"button",className:this.state.nav2,onClick:()=>{this.setState({nav1:"nav-item nav-link ",nav2:"nav-item nav-link active",nav3:"nav-item nav-link"}),this.props.change("jenis_trx","CARD")}},"CREDIT"),n.a.createElement("button",{type:"button",className:this.state.nav3,onClick:()=>{this.setState({nav1:"nav-item nav-link ",nav2:"nav-item nav-link",nav3:"nav-item nav-link active"}),this.props.change("jenis_trx","TRANSFER")}},"TRANSFER"))),n.a.createElement("div",{className:"col-lg-12 mb-2 mt-2"},n.a.createElement("h4",null,"Data Kartu")),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"No.Card"),n.a.createElement("input",{type:"tel",className:"form-control",name:"no_card",placeholder:"Card Number",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(c.a,{name:"no_card",component:d.c,type:"telp",label:"No.Card",placeholder:"Masukan No.Card",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"Valid Until"),n.a.createElement("input",{type:"tel",className:"form-control",name:"expiry",placeholder:"MM/YY",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(c.a,{name:"expiry",component:d.c,type:"telp",label:"Valid until ( MM/YY )",placeholder:"Masukan Valid until ( MM/YY )",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"Nama Pemilik"),n.a.createElement("input",{type:"tel",className:"form-control",name:"name",placeholder:"Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(c.a,{name:"name",component:d.c,type:"text",label:"Nama Pemilik",placeholder:"Masukan Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"CVC / CVV"),n.a.createElement("input",{type:"tel",className:"form-control",name:"cvc",placeholder:"Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(c.a,{name:"cvc",component:d.c,type:"text",label:"Nama Pemilik",placeholder:"Masukan Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement("div",{className:"col-lg-12 mb-2"},n.a.createElement("h4",null,"Data Pemilik")),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(c.a,{name:"no_ktp",component:d.c,type:"number",label:"Nomor KTP",placeholder:"Masukan Nomor KTP"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(c.a,{name:"alamat_ktp",component:d.c,type:"text",label:"Alamat KTP",placeholder:"Masukan Alamat KTP"})),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(c.a,{name:"jenis_trx",component:d.c,type:"text",label:"Jenis Transaksi",placeholder:"Masukan Jenis Transaksi"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(c.a,{name:"kota",component:d.c,type:"text",label:"Kota",placeholder:"Masukan Kota"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(c.a,{name:"handphone",component:d.c,type:"telp",label:"Handphone",placeholder:"Masukan Handphone"})),n.a.createElement("div",{className:"col-lg-12 mb-2"},n.a.createElement("h4",null,"Data Harga")),n.a.createElement("div",{className:"col-lg-2"},n.a.createElement(c.a,{name:"bank",component:d.e,options:this.state.listBank,label:"Bank",placeholder:"Masukan Bank"})),n.a.createElement("div",{className:"col-lg-2"},n.a.createElement(c.a,Object.assign({name:"sub_total",component:d.c,type:"text",label:"Sub Total",placeholder:"Masukan Sub Total",readOnly:!0},h))),n.a.createElement("div",{className:"col-lg-2"},n.a.createElement(c.a,Object.assign({name:"grand_total",component:d.c,type:"telp",label:"Grand Total",placeholder:"Masukan Grand Total"},h))),n.a.createElement("div",{className:"col-lg-1"},n.a.createElement(c.a,{name:"fee_card_percent",component:d.c,type:"number",label:"% Card",placeholder:"0",onChange:this.setTotal()})),n.a.createElement("div",{className:"col-lg-2"},n.a.createElement(c.a,Object.assign({name:"fee_card",component:d.c,type:"telp",label:"Fee Card",placeholder:"0"},h))),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(c.a,Object.assign({name:"total_card",component:d.c,type:"telp",label:"Card + Fee",placeholder:"Masukan Card + Fee"},h))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-right"},n.a.createElement("button",{className:"btn btn-primary"},"Simpan ",n.a.createElement("i",{className:"fa fa-paper-plane"})))))))}}b=Object(o.a)({form:"ModalCC",enableReinitialize:!0,validate:a=>{const e={};return a.grand_total>a.sub_total&&(e.grand_total="Pembayaran Tidak Boleh Lebih Dari Sub Total"),e}})(b);const g=Object(i.a)("ModalCC");e.a=Object(s.b)(a=>{const e=g(a,"grand_total","fee_card_percent"),t=e.grand_total,l=e.fee_card_percent;return{fee_card:parseFloat(t||0)*(parseFloat(l||0)/100),total:parseFloat(t||0)+parseFloat(t||0)*(parseFloat(l||0)/100),sub_total:a.transaksi.sub_total,initialValues:{sub_total:a.transaksi.total_bayar-(a.transaksi.totalTukar||0)}}})(b)},530:function(a,e,t){"use strict";t.d(e,"a",function(){return r});var l=t(0),n=t.n(l);t(89),t(559),t(560),t(42);const r=({input:a,label:e,type:t,readOnly:l,placeholder:r,meta:{touched:s,error:c,warning:o}})=>n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"",className:"text-black"},e),n.a.createElement("input",Object.assign({onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},a,{autoComplete:"off",type:t,className:"form-control",readOnly:l,placeholder:r})),s&&(c&&n.a.createElement("ul",{className:"parsley-errors-list filled"},n.a.createElement("li",{className:"parsley-required"}," ",c,"."))||o&&n.a.createElement("p",null,o)))},532:function(a,e,t){"use strict";var l=t(0),n=t.n(l),r=t(29),s=t(196),c=t(197),o=t(209),i=t(490),m=t(26),p=t(27),d=t(132),h=t(487);const b=Object(i.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class g extends l.Component{constructor(a){super(a),this.state={}}componentDidMount(){this.props.change("grand_total_all",this.props.total),this.props.dispatch(Object(m.w)())}setBayar(a){this.setState({bayar:a.target.value}),localStorage.setItem("bayar_rp_rongsok",a.target.value)}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 mb-3"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-left"},n.a.createElement("button",{className:"btn btn-black text-white",onClick:this.props.backMenu},n.a.createElement("i",{className:"fa fa-chevron-left mr-3"})," Back")))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement("h3",null,"Grand Total"),n.a.createElement("p",{style:{fontSize:32,fontWeight:700}},parseFloat(this.props.grand_total_all).toLocaleString("id-ID")),n.a.createElement("h3",null,"Bayar"),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"}),n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement(s.a,Object.assign({name:"bayar",component:p.d,type:"telp",placeholder:"Masukan Bayar",className:" form-control-lg",onChange:a=>this.setBayar(a)},b,{validate:h.a}))))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"}),n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement(s.a,Object.assign({name:"jasa",label:"Diskon Jasa",component:p.d,type:"telp",placeholder:"Masukan Bayar",className:" form-control-lg",onChange:a=>this.setBayar(a)},b))))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"}),n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement(s.a,Object.assign({name:"barang",label:"Diskon Barang",component:p.d,type:"telp",placeholder:"Masukan Bayar",className:" form-control-lg",onChange:a=>this.setBayar(a)},b))))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"}),n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement("label",{htmlFor:""},"Masuk Piutang ?"),n.a.createElement(s.a,{name:"piutang",component:"input",type:"checkbox",placeholder:"Masukan Bayar",className:"ml-3"})))),n.a.createElement("h3",null,"Kembali"),n.a.createElement("p",{style:{fontSize:35,fontWeight:700}},parseFloat(this.props.kembali).toLocaleString("id-ID"))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(d.a,{keyField:"no_ac",data:this.props.listPembayaran_temp,columns:this.props.columns,tambahData:!0,handleClick:this.props.showCC})))))),n.a.createElement("div",{className:"text-center col-lg-6"},n.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):n.a.createElement(n.a.Fragment,null,"Simpan ",n.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))))}}g=Object(c.a)({form:"ModalBayarService",enableReinitialize:!0})(g);const u=Object(o.a)("ModalBayarService");e.a=Object(r.b)(a=>(localStorage.setItem("bayar_rp_rongsok",u(a,"bayar")||0),{grand_total_all:a.transaksi.total_bayar,listPembayaran_temp:a.transaksi.listpembayaran_temp,sum_pembayaran:a.transaksi.sum_pembayaran,total_bayar:a.transaksi.total_bayar,kembali:(u(a,"bayar")||0)-(a.transaksi.total_bayar-(u(a,"jasa")||0)-(u(a,"barang")||0)-a.transaksi.sum_pembayaran),bayar:u(a,"bayar")||0,onSend:a.datamaster.onSend}))(g)},558:function(a,e,t){"use strict";var l=t(0),n=t.n(l),r=t(29),s=t(196),c=t(197),o=t(490),i=t(5),m=t(9),p=t(530),d=t(27);const h=Object(o.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class b extends l.Component{constructor(a){super(a),this.state={listSupplier:[]}}componentDidMount(){this.props.dispatch(Object(i.Gb)()),this.props.dispatch(Object(i.wb)())}setSparepart(a){let e=a.split("||");this.props.change("kode_supplier1",null),Object(m.b)("daftar-service/getDataBarangDaftarService/"+e[3]).then(a=>this.setState({listSupplier:a&&a.data[0].data_supplier})).catch(a=>Object(d.h)("Error Get Supplier, ".concat(a))),this.props.change("harga_sparepart",e[1]),this.props.change("kode_sparepart",e[3]),this.props.change("nama_sparepart",e[2])}setService(a){let e=a.split("||");this.props.change("kategori_service",e[0]),this.props.change("harga_service",e[1]),this.props.change("nama_service",e[2])}setBarang(a){this.props.change("stock",a.split("||")[1]),this.props.change("kode_supplier",a.split("||")[0])}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(s.a,{name:"kategori_service1",component:d.e,options:this.props.listkategoriservice.map(a=>{return{value:"".concat(a.kategori_service,"||").concat(a.harga_jasa_service,"||").concat(a.jenis_service),name:a.kategori_service}}),onChange:a=>this.setService(a),type:"text",label:"Jenis Service",placeholder:"Masukan Jenis Service"})),n.a.createElement("div",{className:"col-lg-12 d-none"},n.a.createElement(s.a,{name:"kategori_service",component:d.d,type:"text",label:"Harga Service",placeholder:"Masukan Harga Service"})),n.a.createElement("div",{className:"col-lg-12 "},n.a.createElement(s.a,Object.assign({name:"harga_service",component:d.d,type:"telp",label:"Harga Service",placeholder:"Masukan Harga Service"},h,{readOnly:!0}))),n.a.createElement("div",{className:"col-lg-12 "},n.a.createElement(s.a,{name:"keterangan_service",component:d.d,type:"text",label:"Keterangan Service",placeholder:"Masukan Keterangan Service"})),n.a.createElement("div",{className:"col-lg-12 d-none "},n.a.createElement(s.a,Object.assign({name:"nama_service",component:d.d,type:"telp",label:"Harga Service",placeholder:"Masukan Harga Service"},h)))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(s.a,{name:"sparepart",component:d.e,options:this.props.listBarang.map(a=>{return{value:"".concat(a.kode_barang,"||").concat(a.harga_jual,"||").concat(a.nama_barang,"||").concat(a.kode_barcode),name:a.nama_barang}}),onChange:a=>this.setSparepart(a),type:"text",label:"Jenis Service",placeholder:"Masukan Jenis Service"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(s.a,{name:"kode_supplier1",component:d.e,options:this.state.listSupplier.map(a=>{return{value:"".concat(a.kode_supplier,"||").concat(a.stock),name:a.nama_supplier}}),onChange:a=>this.setBarang(a),type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier"})),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(s.a,{name:"stock",component:p.a,type:"text",label:"Stock",placeholder:"Masukan Kode Supplier",readOnly:!0})))),n.a.createElement("div",{className:"col-lg-12 d-none"},n.a.createElement(s.a,{name:"kode_sparepart",component:d.d,type:"text",label:"Harga Service",placeholder:"Masukan Harga Service",readOnly:!0})),n.a.createElement("div",{className:"col-lg-12 d-none"},n.a.createElement(s.a,{name:"kode_supplier",component:d.d,type:"text",label:"Harga Service",placeholder:"Masukan Harga Service"})),n.a.createElement("div",{className:"col-lg-12 d-none"},n.a.createElement(s.a,{name:"nama_sparepart",component:d.d,type:"text",label:"Harga Service",placeholder:"Masukan Harga Service"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(s.a,Object.assign({name:"harga_sparepart",component:d.d,type:"telp",label:"Harga Service",placeholder:"Masukan Harga Service"},h,{readOnly:!0}))),n.a.createElement("div",{className:"col-lg-12 "},n.a.createElement(s.a,{name:"keterangan_sparepart",component:d.d,type:"text",label:"Keterangan Sparepart",placeholder:"Masukan Keterangan Sparepart"}))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-right"},n.a.createElement("button",{className:"btn btn-primary"},"Submit ",n.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))))}}b=Object(c.a)({form:"TambahService",enableReinitialize:!0})(b),e.a=Object(r.b)(a=>({listBarang:a.datamaster.listbarang,listkategoriservice:a.datamaster.listkategoriservice}))(b)}}]);
//# sourceMappingURL=7.b62cc3d5.chunk.js.map