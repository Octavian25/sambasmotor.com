(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1077:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(5),s=t(33),r=t(44),m=t(67),o=t(66),i=t(160),p=t(161),d=t(52);class h extends l.Component{constructor(e){super(e),this.state={}}componentDidMount(){this.props.change("tanggal_start",Object(d.b)()),this.props.change("tanggal_end",Object(d.b)())}render(){return n.a.createElement("div",null,n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,{name:"tanggal_start",component:r.c,type:"date",label:"Tanggal Mulai",placeholder:"Masukan Tanggal Mulai"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,{name:"tanggal_end",component:r.c,type:"date",label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),n.a.createElement("div",{className:"col-lg-12 mt-4"},n.a.createElement("button",{className:"btn btn-block btn-primary"},"CARI")))}}var u=h=Object(p.a)({form:"ModalPencarianService",enableReinitialize:!0})(h),E=t(388),b=t(449),g=t(6),v=t(422);const N=Object(l.lazy)(()=>t.e(123).then(t.bind(null,1042)));a.default=Object(s.b)(e=>({kunci_temp:e.stocking.kunci_temp}),null)(class extends n.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,bayar:!1,columnsListBayar:[{dataField:"jenis_bayar",text:"Jenis Bayar"},{dataField:"nama_bank",text:"Bank"},{dataField:"jumlah",text:"Jumlah"}],dataListBayar:[{jenis_bayar:"CREDIT CARD",bank:"BCA",jumlah:1e8}]}}componentDidMount(){}handleSubmit(e){console.log(e);let a=JSON.parse(localStorage.getItem("DaftarService"))||[];localStorage.setItem("DaftarService",JSON.stringify(a)),Object(r.b)("Berhasil Menambahan Data Booking").then(()=>this.props.dispatch(Object(o.a)("ModalLihatService")))}showCC(){this.props.dispatch(Object(g.Wb)()),this.setState({jenisModal:"CC"})}handleSimpanCC(e){console.log(e)}setBayar(){this.setState({bayar:!0})}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(c.b,{to:"#"},"Transaksi")),n.a.createElement("li",{className:"breadcrumb-item active"},"Lihat Service")),n.a.createElement("h1",{className:"page-header"},"Lihat Service "),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-2"},n.a.createElement(m.a,null,n.a.createElement(m.c,null,"Pencarian"),n.a.createElement(m.b,null,n.a.createElement("br",null),n.a.createElement(u,null)))),n.a.createElement("div",{className:"col-lg-10"},n.a.createElement(m.a,null,n.a.createElement(m.c,null,"Data Service"),n.a.createElement(m.b,null,n.a.createElement("br",null),this.state.bayar?n.a.createElement(b.a,{showCC:()=>this.showCC(),columns:this.state.columnsListBayar,data:this.state.dataListBayar,backMenu:()=>this.setState({bayar:!1})}):n.a.createElement(N,{setBayar:()=>this.setBayar()}))))),n.a.createElement(E.a,{content:n.a.createElement(v.a,{onSubmit:e=>this.handleSimpanCC(e)})}))}})},388:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(33),s=t(402),r=t(400),m=t(401),o=t(6);a.a=Object(c.b)(e=>({isOpen:e.datamaster.modalDialog}),null)(class extends l.Component{constructor(e){super(e),this.state={}}render(){return n.a.createElement(s.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:()=>this.props.dispatch(Object(o.Tb)()),size:this.props.size||"xl"},n.a.createElement(r.a,{toggle:()=>this.props.dispatch(Object(o.Tb)())},this.props.title),n.a.createElement(m.a,null,this.props.content))}})},389:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(394),s=t.n(c),r=t(396),m=t.n(r),o=t(397),i=t.n(o),p=t(391),d=t.n(p);var h=function(e){return n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:d.a,width:"250",height:"250",alt:"Empty"}),n.a.createElement("h5",null,e.text)))},u=t(112),E=t.n(u);const b=r.Search.SearchBar,g=r.CSVExport.ExportCSVButton;a.a=function(e){let a=e.textEmpty,t=e.handleClick,l=e.tambahData,c=e.expandRow,r=e.selectRow,o=e.exportCSV;return e.data?n.a.createElement(m.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},e=>n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"text-left"},n.a.createElement(b,e.searchProps))),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"text-right"},l&&n.a.createElement("button",{onClick:t,className:"btn btn-primary",type:"button"},"Tambah Data",n.a.createElement("i",{className:"fa fa-plus ml-3"})))),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-12"},n.a.createElement(s.a,Object.assign({pagination:i()(),selectRow:r,expandRow:c},e.baseProps,{noDataIndication:n.a.createElement(h,{text:a||"Tidak Ada Data"})})),n.a.createElement("br",null),o&&n.a.createElement(g,e.csvProps,"Export CSV!!")))):e.empty?n.a.createElement(m.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},e=>n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"text-left"},n.a.createElement(b,e.searchProps))),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"text-right"},l&&n.a.createElement("button",{onClick:t,className:"btn btn-primary",type:"button"},"Tambah Data",n.a.createElement("i",{className:"fa fa-plus ml-3"})))),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-12"},n.a.createElement(s.a,Object.assign({pagination:i()()},e.baseProps,{noDataIndication:n.a.createElement(h,{text:a||"Tidak Ada Data"})})),n.a.createElement("br",null),e.CSVExport&&n.a.createElement(g,e.csvProps,"Export CSV!!")))):n.a.createElement(E.a,{width:"100%",height:250})}},391:function(e,a,t){e.exports=t.p+"static/media/empty.02c14787.svg"},422:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(450),s=(t(451),t(33)),r=t(160),m=t(161),o=t(173),i=t(399),p=t(10),d=t(44);const h=Object(i.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class u extends l.Component{constructor(e){super(e),this.handleInputFocus=(e=>{this.setState({focus:e.target.name})}),this.handleInputChange=(e=>{const a=e.target,t=a.name,l=a.value;this.setState({[t]:l}),this.props.change(t,l)}),this.state={cvc:"",expiry:"",focus:"",name:"",no_card:"",nav1:"nav-item nav-link active",nav2:"nav-item nav-link",nav3:"nav-item nav-link",listBank:[]}}componentDidMount(){Object(p.b)("bank/get/all").then(e=>this.setState({listBank:e&&e.data.map(e=>{return{value:e.no_ac,name:"".concat(e.atas_nama," / ").concat(e.nama_bank)}})}))}setTotal(){this.props.change("fee_card",this.props.fee_card),this.props.change("total_card",this.props.total)}render(){return n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(c.a,{cvc:this.state.cvc,expiry:this.state.expiry,focused:this.state.focus,name:this.state.name,number:this.state.no_card}),n.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"mt-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("nav",{className:"nav nav-pills nav-fill"},n.a.createElement("button",{type:"button",className:this.state.nav1,onClick:()=>{this.setState({nav1:"nav-item nav-link active",nav2:"nav-item nav-link",nav3:"nav-item nav-link"}),this.props.change("jenis_trx","DEBIT")}},"DEBIT"),n.a.createElement("button",{type:"button",className:this.state.nav2,onClick:()=>{this.setState({nav1:"nav-item nav-link ",nav2:"nav-item nav-link active",nav3:"nav-item nav-link"}),this.props.change("jenis_trx","CARD")}},"CREDIT"),n.a.createElement("button",{type:"button",className:this.state.nav3,onClick:()=>{this.setState({nav1:"nav-item nav-link ",nav2:"nav-item nav-link",nav3:"nav-item nav-link active"}),this.props.change("jenis_trx","TRANSFER")}},"TRANSFER"))),n.a.createElement("div",{className:"col-lg-12 mb-2 mt-2"},n.a.createElement("h4",null,"Data Kartu")),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"No.Card"),n.a.createElement("input",{type:"tel",className:"form-control",name:"no_card",placeholder:"Card Number",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(r.a,{name:"no_card",component:d.c,type:"telp",label:"No.Card",placeholder:"Masukan No.Card",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"Valid Until"),n.a.createElement("input",{type:"tel",className:"form-control",name:"expiry",placeholder:"MM/YY",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(r.a,{name:"expiry",component:d.c,type:"telp",label:"Valid until ( MM/YY )",placeholder:"Masukan Valid until ( MM/YY )",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"Nama Pemilik"),n.a.createElement("input",{type:"tel",className:"form-control",name:"name",placeholder:"Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(r.a,{name:"name",component:d.c,type:"text",label:"Nama Pemilik",placeholder:"Masukan Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"CVC / CVV"),n.a.createElement("input",{type:"tel",className:"form-control",name:"cvc",placeholder:"Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(r.a,{name:"cvc",component:d.c,type:"text",label:"Nama Pemilik",placeholder:"Masukan Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement("div",{className:"col-lg-12 mb-2"},n.a.createElement("h4",null,"Data Pemilik")),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(r.a,{name:"no_ktp",component:d.c,type:"number",label:"Nomor KTP",placeholder:"Masukan Nomor KTP"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(r.a,{name:"alamat_ktp",component:d.c,type:"text",label:"Alamat KTP",placeholder:"Masukan Alamat KTP"})),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(r.a,{name:"jenis_trx",component:d.c,type:"text",label:"Jenis Transaksi",placeholder:"Masukan Jenis Transaksi"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(r.a,{name:"kota",component:d.c,type:"text",label:"Kota",placeholder:"Masukan Kota"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(r.a,{name:"handphone",component:d.c,type:"telp",label:"Handphone",placeholder:"Masukan Handphone"})),n.a.createElement("div",{className:"col-lg-12 mb-2"},n.a.createElement("h4",null,"Data Harga")),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(r.a,{name:"bank",component:d.e,options:this.state.listBank,label:"Bank",placeholder:"Masukan Bank"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(r.a,Object.assign({name:"grand_total",component:d.c,type:"telp",label:"Grand Total",placeholder:"Masukan Grand Total"},h))),n.a.createElement("div",{className:"col-lg-1"},n.a.createElement(r.a,{name:"fee_card_percent",component:d.c,type:"number",label:"% Card",placeholder:"0",onChange:this.setTotal()})),n.a.createElement("div",{className:"col-lg-2"},n.a.createElement(r.a,Object.assign({name:"fee_card",component:d.c,type:"telp",label:"Fee Card",placeholder:"0"},h))),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(r.a,Object.assign({name:"total_card",component:d.c,type:"telp",label:"Card + Fee",placeholder:"Masukan Card + Fee"},h))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-right"},n.a.createElement("button",{className:"btn btn-primary"},"Simpan ",n.a.createElement("i",{className:"fa fa-paper-plane"})))))))}}u=Object(m.a)({form:"ModalCC",enableReinitialize:!0})(u);const E=Object(o.a)("ModalCC");a.a=Object(s.b)(e=>{const a=E(e,"grand_total","fee_card_percent"),t=a.grand_total,l=a.fee_card_percent;return{fee_card:parseFloat(t||0)*(parseFloat(l||0)/100),total:parseFloat(t||0)+parseFloat(t||0)*(parseFloat(l||0)/100)}})(u)},449:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(33),s=t(160),r=t(161),m=t(173),o=t(399),i=t(44),p=t(389);const d=Object(o.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class h extends l.Component{constructor(e){super(e),this.state={}}componentDidMount(){this.props.change("grand_total_all",this.props.total)}setBayar(e){this.setState({bayar:e.target.value}),localStorage.setItem("bayar_rp_rongsok",e.target.value)}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 mb-3"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-left"},n.a.createElement("button",{className:"btn btn-black text-white",onClick:this.props.backMenu},n.a.createElement("i",{className:"fa fa-chevron-left mr-3"})," Back")))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement("h3",null,"Grand Total"),n.a.createElement("p",{style:{fontSize:32,fontWeight:700}},parseFloat(this.props.grand_total_all).toLocaleString("id-ID")),n.a.createElement("h3",null,"Bayar"),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"}),n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement(s.a,Object.assign({name:"bayar",component:i.d,type:"telp",placeholder:"Masukan Bayar",className:" form-control-lg",onChange:e=>this.setBayar(e)},d))))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"}),n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement(s.a,Object.assign({name:"jasa",label:"Diskon Jasa",component:i.d,type:"telp",placeholder:"Masukan Bayar",className:" form-control-lg",onChange:e=>this.setBayar(e)},d))))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"}),n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement(s.a,Object.assign({name:"barang",label:"Diskon Barang",component:i.d,type:"telp",placeholder:"Masukan Bayar",className:" form-control-lg",onChange:e=>this.setBayar(e)},d))))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"}),n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement("label",{htmlFor:""},"Masuk Piutang ?"),n.a.createElement(s.a,{name:"piutang",component:"input",type:"checkbox",placeholder:"Masukan Bayar",className:"ml-3"})))),n.a.createElement("h3",null,"Kembali"),n.a.createElement("p",{style:{fontSize:35,fontWeight:700}},parseFloat(this.props.kembali).toLocaleString("id-ID"))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(p.a,{keyField:"no_ac",data:this.props.listPembayaran_temp,columns:this.props.columns,tambahData:!0,handleClick:this.props.showCC})))))),n.a.createElement("div",{className:"text-center col-lg-6"},n.a.createElement("button",{className:"btn-lg btn-primary btn-block",disabled:this.props.onSend},this.props.onSend?n.a.createElement("i",{className:"fas fa-spinner fa-spin"}):null,"BAYAR ",n.a.createElement("i",{className:"fa fa-money-bill-alt ml-3"})))))}}h=Object(r.a)({form:"ModalBayarService",enableReinitialize:!0})(h);const u=Object(m.a)("ModalBayarService");a.a=Object(c.b)(e=>(localStorage.setItem("bayar_rp_rongsok",u(e,"bayar")||0),{grand_total_all:e.transaksi.total_bayar,listPembayaran_temp:e.transaksi.listpembayaran_temp,sum_pembayaran:e.transaksi.sum_pembayaran,total_bayar:e.transaksi.total_bayar,kembali:(u(e,"bayar")||0)-(e.transaksi.total_bayar-(u(e,"jasa")||0)-(u(e,"barang")||0)),bayar:u(e,"bayar")||0,onSend:e.datamaster.onSend}))(h)}}]);
//# sourceMappingURL=40.4833c6c3.chunk.js.map