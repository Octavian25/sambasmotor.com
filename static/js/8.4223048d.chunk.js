(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1076:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),o=t(41),i=t(29),s=t(197),c=t(198),m=t(209),p=t(18),u=t(489),g=t(9),d=t(27),h=t(15),b=t.n(h),_=t(132),f=t(486);const v=Object(u.createNumberMask)({prefix:"Rp. ",decimalPlaces:0,locale:"id-ID"});class k extends n.Component{constructor(e){super(e),this.state={listSupplier:[],columns:[{dataField:"kode_barcode",text:"Barcode"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"merk",text:"Merk"},{dataField:"kwalitas",text:"Kualitas"},{dataField:"satuan",text:"Satuan"},{dataField:"qty",text:"Qty"},{dataField:"harga_satuan",text:"Harga Satuan",formatter:e=>parseFloat(e).toLocaleString("id-ID")},{dataField:"total",text:"Total",formatter:e=>parseFloat(e).toLocaleString("id-ID")},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,a)=>(this.setState({}),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"button",onClick:()=>this.deleteBarang(a),className:"btn btn-danger"},"Hapus",r.a.createElement("i",{className:"fa fa-trash ml-2"})))))}]}}deleteBarang(e){b.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(a=>{a.isConfirmed&&(Object(p.k)("PenerimaanSupplier_temp_kirim",e.kode_barcode),Object(p.k)("PenerimaanSupplier_temp",e.kode_barcode),this.props.dispatch(Object(d.B)()))})}componentDidMount(){Object(g.b)("terima-barang-supplier/generate/no-trx").then(e=>localStorage.setItem("penerimaan_kode_terima",e.data[0].no_terima)),Object(g.b)("supplier/get/all").then(e=>this.setState({listSupplier:e.data}))}setTotal(){this.props.change("total",this.props.total)}setLocal(e,a){localStorage.setItem(e,a)}setCheckbox(e){let a=localStorage.getItem(e);if(a){let t="true"===a;localStorage.setItem(e,!t)}else localStorage.setItem(e,!0)}setSupplier(e){let a=e&&e.split("||");this.setLocal("penerimaan_kode_supplier",a[0]),this.setLocal("type_pembayaran",a[1])}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(s.a,{name:"kode_terima",component:p.c,type:"text",label:"Kode Terima",placeholder:"Masukan Kode Terima",readOnly:!0,validate:f.a})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(s.a,{name:"kode_supplier",component:p.e,options:this.state.listSupplier.map(e=>{return{value:"".concat(e.kode_supplier,"||").concat(e.pembayaran_cash),name:e.nama_supplier}}),type:"text",label:"Supplier",placeholder:"Masukan Supplier",onChange:e=>this.setSupplier(e),validate:f.a})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(s.a,{name:"tanggal_invoice",component:p.c,type:"date",label:"Tanggal Invoice",placeholder:"Masukan Tanggal Invoice",onChange:e=>this.setLocal("penerimaan_tanggal_invoice",e.target.value),validate:f.a})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(s.a,{name:"tanggal_barang",component:p.c,type:"date",label:"Tanggal Barang",placeholder:"Masukan Tanggal Barang",onChange:e=>this.setLocal("penerimaan_tanggal_barang",e.target.value),validate:f.a})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(s.a,{name:"keterangan",component:p.c,type:"text",label:"Keterangan",placeholder:"Masukan Keterangan",onChange:e=>this.setLocal("penerimaan_keterangan",e.target.value)})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(s.a,{name:"no_bon",component:p.c,type:"text",label:"Nomor Bon",placeholder:"Masukan Nomor Bon",onChange:e=>this.setLocal("penerimaan_no_bon",e.target.value),validate:f.a})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(s.a,{name:"type_pembayaran",component:p.c,type:"text",label:"Type Pembayaran",placeholder:"Masukan Type Pembayaran",readOnly:!0})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"btn btn-warning",type:"button",onClick:this.props.showTambah},"Tambah Data ",r.a.createElement("i",{className:"fa fa-plus ml-3"})))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(_.a,{keyField:"kode_barcode",data:this.props.listterimasupplier||[],columns:this.state.columns,CSVExport:!0,textEmpty:"Silahkan klik Tombol Kuning Untuk Tambah Barang"})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(s.a,Object.assign({name:"sub_total",component:p.c,type:"text",label:"Sub Total",placeholder:"Masukan Sub Total",readOnly:!0},v))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(s.a,Object.assign({name:"discount",component:p.c,type:"text",label:"Discount",placeholder:"Masukan Discount"},v,{onChange:this.setTotal()}))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(s.a,Object.assign({name:"total",component:p.c,type:"text",label:"Total",placeholder:"Masukan Total"},v))))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"btn btn-primary"},"Simpan ",r.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}k=Object(c.a)({form:"HeadSupplierPenerimaan",enableReinitialize:!0})(k);const S=Object(m.a)("HeadSupplierPenerimaan");var E=Object(i.b)(e=>{const a=S(e,"sub_total","discount"),t=a.sub_total,n=a.discount;return localStorage.setItem("penerimaan_discount",n||0),{total:parseFloat(t||0)-parseFloat(n||0),initialValues:{sub_total:e.transaksi.sub_total,kode_terima:localStorage.getItem("penerimaan_kode_terima")||null,kode_supplier:"".concat(localStorage.getItem("penerimaan_kode_supplier"),"||").concat(localStorage.getItem("type_pembayaran"))||null,tanggal_invoice:localStorage.getItem("penerimaan_tanggal_invoice")||null,tanggal_barang:localStorage.getItem("penerimaan_tanggal_barang")||null,keterangan:localStorage.getItem("penerimaan_keterangan")||null,no_bon:localStorage.getItem("penerimaan_no_bon")||null,discount:localStorage.getItem("penerimaan_discount")||0,type_pembayaran:"true"===localStorage.getItem("type_pembayaran")?"CASH":"KREDIT"}}})(k),y=t(131),N=t(49),O=t(502),T=t(134),I=t(33),x=t(42),j=t.n(x),A=t(5),P=t(568);const M=Object(u.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class w extends n.Component{constructor(e){super(e),this.state={type_bayar:"row",cash:"col-lg-12 d-none",transfer:"col-lg-12 d-none",listBank:[],bayar:!0}}reRender(){this.setState({bayar:!this.state.bayar})}setTotal(){this.props.total>this.props.total_cash&&Object(p.a)("Jumlah Cash Melebihi Tagihan"),this.props.change("total_ref",this.props.total_cash),this.props.change("total",this.props.total),this.props.change("no_bon",this.props.no_terima),this.props.change("kode_supplier",this.props.kode_supplier),this.props.change("tanggal_terima",localStorage.getItem("tanggal"))}componentDidMount(){Object(g.b)("bank/get/all").then(e=>this.setState({listBank:e.data}))}render(){return r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 text-center mb-3"},r.a.createElement("h4",null,"Total Hutang"),r.a.createElement("h1",null,"".concat(parseFloat(this.props.sisa_hutang).toLocaleString("id-ID")))),r.a.createElement("div",{className:"col-lg-6 text-center mb-3"},r.a.createElement("h4",null,"Total Retur"),r.a.createElement("h1",null,"".concat(parseFloat(this.props.retur_rp).toLocaleString("id-ID")))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("h3",null,"Pembayaran Cash"),r.a.createElement("br",null)),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(s.a,Object.assign({name:"cash",component:p.c,type:"text",label:"Cash",placeholder:"Masukan Cash"},M,{onChange:this.setTotal(),onBlur:this.setTotal()}))),r.a.createElement("div",{className:"col-lg-3 d-none"},r.a.createElement(s.a,{name:"kode_supplier",component:p.c,type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier"})),r.a.createElement("div",{className:"col-lg-3 d-none"},r.a.createElement(s.a,{name:"tanggal_terima",component:p.c,type:"text",label:"Tanggal Terima",placeholder:"Masukan Tanggal Terima"})),r.a.createElement("div",{className:"col-lg-3 d-none"},r.a.createElement(s.a,{name:"no_bon",component:p.c,type:"text",label:"Nomor Bon",placeholder:"Masukan Nomor Bon"}),r.a.createElement("div",{className:"col-lg-3 d-none"},r.a.createElement(s.a,{name:"retur_rp",component:p.c,type:"text",label:"Return Rp",placeholder:"Masukan Return Rp"})),r.a.createElement("div",{className:"col-lg-3 d-none"},r.a.createElement(s.a,{name:"sisa_hutang",component:p.c,type:"text",label:"Sisa Hutang",placeholder:"Masukan Sisa Hutang"}))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("p",null,"* Silahkan isi sesuai metode pembayaran, bisa menggunakan 2 metode sekaligus"))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("h3",null,"Pembayaran Transfer"),r.a.createElement("br",null)),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(s.a,Object.assign({name:"transfer",component:p.c,type:"text",label:"Transfer",placeholder:"Masukan Transfer"},M,{onChange:this.setTotal(),onBlur:this.setTotal()}))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(s.a,{name:"no_ac_asal",component:p.e,options:this.state.listBank.map(e=>{return{value:e.no_ac,name:"".concat(e.no_ac," - ( ").concat(e.atas_nama," )")}}),type:"text",label:"Nomor A/C Asal",placeholder:"Masukan Nomor A/C Asal"})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(s.a,{name:"no_ac_tujuan",component:p.c,type:"text",label:"Nomor A/C Tujuan",placeholder:"Masukan Nomor A/C Tujuan"}))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("h3",null,"Pembayaran Return"),r.a.createElement("br",null)),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(P.a,{reRender:()=>this.reRender()})))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(s.a,Object.assign({name:"total_ref",component:p.c,type:"text",label:"Total Harus Dibayar",placeholder:"Masukan Total Harus Dibayar",readOnly:!0},M))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(s.a,Object.assign({name:"total",component:p.c,type:"text",label:"Total",placeholder:"Masukan Total",readOnly:!0},M))))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"btn btn-primary"},this.props.onSend?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):r.a.createElement(r.a.Fragment,null,"Simpan ",r.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))))))}}w=Object(c.a)({form:"ModalBayarSupplierPenerimaan",enableReinitialize:!0})(w);const C=Object(m.a)("ModalBayarSupplierPenerimaan");var F=Object(i.b)(e=>{const a=C(e,"cash","transfer"),t=a.cash,n=a.transfer;let r=JSON.parse(localStorage.getItem("list_return"))||[],l=r&&r.map(e=>e.total_retur).reduce((e,a)=>e+a,0);return{onSend:e.datamaster.onSend,total:parseFloat(t||0)+parseFloat(n||0),sisa_hutang:e.transaksi.sub_total-parseFloat(localStorage.getItem("penerimaan_discount")||0),retur_rp:l,kode_supplier:e.transaksi.listPembayaran.kode_supplier,no_terima:e.transaksi.listPembayaran.no_terima,tanggal_terima:e.transaksi.listPembayaran.tanggal_terima,total_cash:parseFloat(e.transaksi.sub_total)-parseFloat(l)-parseFloat(localStorage.getItem("penerimaan_discount")||0)}})(w);const R=Object(n.lazy)(()=>t.e(120).then(t.bind(null,1050)));class B extends n.Component{constructor(e){super(e),this.state={bayar:!1}}componentDidMount(){this.props.dispatch(Object(d.B)()),this.getKodePenerimaan(),this.props.dispatch(Object(A.Ab)())}handleHead(e){if("true"===localStorage.getItem("type_pembayaran"))return this.setState({bayar:!0}),this.props.dispatch(Object(A.Wb)()),!1;if(null===localStorage.getItem("PenerimaanSupplier_temp_kirim"))return Object(p.a)("Data Barang Masih Kosong, Mohon isi barang dulu"),!1;{this.props.dispatch(Object(A.Vb)());let a={no_terima:localStorage.getItem("penerimaan_kode_terima"),tanggal_terima:localStorage.getItem("penerimaan_tanggal_barang"),no_bon:localStorage.getItem("penerimaan_no_bon"),tanggal_bon:localStorage.getItem("penerimaan_tanggal_invoice"),kode_supplier:localStorage.getItem("penerimaan_kode_supplier"),pembayaran_cash:"true"===localStorage.getItem("type_pembayaran"),pembayaran_kredit:"true"!==localStorage.getItem("type_pembayaran"),keterangan:localStorage.getItem("penerimaan_keterangan"),diskon_rp:localStorage.getItem("penerimaan_discount")||0,detail_barang:JSON.parse(localStorage.getItem("PenerimaanSupplier_temp_kirim"))||[]};const t=[],n=[];let r=JSON.parse(localStorage.getItem("PenerimaanSupplier_temp"));r.forEach((e,a)=>{const n=[++a,e.kode_barcode,e.nama_barang,e.merk,e.kwalitas,e.type,e.satuan,e.qty,parseFloat(e.harga_satuan).toLocaleString("id-ID"),parseFloat(e.total).toLocaleString("id-ID")];t.push(n)});const l=["","","","","","","","","TOTAL TAGIHAN",parseFloat(r.map(e=>e.total).reduce((e,a)=>e+a,0)).toLocaleString("id-ID")];n.push(l);let o=["NO","BARCODE","JENIS BARANG","MERK","KW","TYPE","SATUAN","QTY","HARGA SATUAN","TOTAL"];Object(g.c)("terima-barang-supplier/post-transaksi",a).then(()=>Object(p.b)("Berhasil Melakukan Pembayaran Non-Tunai")).then(()=>Object(T.a)("NO TERIMA",e.kode_terima,"TANGGAL",e.tanggal_invoice,"NO BON",e.no_bon,"SUPP",localStorage.getItem("penerimaan_kode_supplier"),Object(p.l)().user_name,"01-28-2021",Object(p.l)().user_name,o,"BUKTI PENERIMAAN BARANG SUPPLIER",t,n,!0)).then(()=>Object(I.d)(["PenerimaanSupplier_temp","PenerimaanSupplier_temp_kirim","penerimaan_keterangan","penerimaan_kode_supplier","penerimaan_no_bon","penerimaan_kode_terima","penerimaan_tanggal_barang","penerimaan_tanggal_invoice"])).then(()=>this.props.dispatch(Object(N.a)("HeadSupplierPenerimaan"))).then(()=>this.getKodePenerimaan()).then(()=>this.props.dispatch(Object(d.B)())).then(()=>this.props.dispatch(Object(A.Tb)())).then(()=>this.props.dispatch(Object(A.Ab)())).then(()=>this.props.dispatch(Object(A.Ub)())).then(()=>window.location.reload()).catch(e=>Object(p.a)(e.response.data).then(()=>this.props.dispatch(Object(A.Ub)())))}}showTambah(){this.setState({bayar:!1}),this.props.dispatch(Object(A.Wb)())}getKodePenerimaan(){Object(g.b)("terima-barang-supplier/generate/no-trx").then(e=>localStorage.setItem("penerimaan_kode_terima",e.data[0].no_terima))}handleModal(e){let a=JSON.parse(localStorage.getItem("PenerimaanSupplier_temp_kirim"))||[],t=JSON.parse(localStorage.getItem("PenerimaanSupplier_temp"))||[],n=a.findIndex(a=>a.kode_barcode===e.kode_barcode),r=t.findIndex(a=>a.kode_barcode===e.kode_barcode);if(-1!==n){let l={kode_barcode:e.kode_barcode,qty:parseInt(e.qty)+parseFloat(a[n].qty),harga_satuan:parseFloat(e.harga_satuan),harga_total:parseFloat(e.total)+parseFloat(a[n].harga_total)},o={harga_satuan:e.harga_satuan,kode_barcode:e.kode_barcode,kwalitas:e.kwalitas,merk:e.merk,nama_barang:e.nama_barang,qty:parseFloat(e.qty)+parseFloat(t[r].qty),satuan:e.satuan,total:parseFloat(e.total)+parseFloat(t[r].total),type:e.type};a.splice(n,1),t.splice(r,1),a.push(l),t.push(o),localStorage.setItem("PenerimaanSupplier_temp",JSON.stringify(t)),localStorage.setItem("PenerimaanSupplier_temp_kirim",JSON.stringify(a)),Object(p.b)("Berhasil"),this.props.dispatch(Object(N.a)("ModalSupplierPenerimaan")),this.props.dispatch(Object(d.B)())}else{let a={kode_barcode:e.kode_barcode,qty:parseInt(e.qty),harga_satuan:parseFloat(e.harga_satuan),harga_total:parseFloat(e.total)},t={harga_satuan:e.harga_satuan,kode_barcode:e.kode_barcode,kwalitas:e.kwalitas,merk:e.merk,nama_barang:e.nama_barang,qty:e.qty,satuan:e.satuan,total:e.total,type:e.type};Object(O.a)("PenerimaanSupplier_temp",t).then(()=>this.props.dispatch(Object(N.a)("ModalSupplierPenerimaan"))).then(()=>this.props.dispatch(Object(d.B)())),Object(O.a)("PenerimaanSupplier_temp_kirim",a).then(()=>this.props.dispatch(Object(N.a)("ModalSupplierPenerimaan"))).then(()=>this.props.dispatch(Object(d.B)()))}}handleCash(e){if(null===localStorage.getItem("PenerimaanSupplier_temp_kirim"))return Object(p.a)("Data Barang Masih Kosong, Mohon isi barang dulu"),!1;{let a={no_terima:localStorage.getItem("penerimaan_kode_terima"),tanggal_terima:localStorage.getItem("penerimaan_tanggal_barang"),no_bon:localStorage.getItem("penerimaan_no_bon"),tanggal_bon:localStorage.getItem("penerimaan_tanggal_invoice"),kode_supplier:localStorage.getItem("penerimaan_kode_supplier"),no_ref:this.props.noFaktur,no_ref_cash:this.props.noFaktur,pembayaran_cash:"true"===localStorage.getItem("type_pembayaran"),pembayaran_kredit:"true"!==localStorage.getItem("type_pembayaran"),keterangan:localStorage.getItem("penerimaan_keterangan"),diskon_rp:localStorage.getItem("penerimaan_discount"),cash_rp:e.cash||0,transfer_rp:e.transfer||0,no_ac_asal:e.no_ac_asal&&e.no_ac_asal.toString()||"-",no_ac_tujuan:e.no_ac_tujuan||"-",detail_barang:JSON.parse(localStorage.getItem("PenerimaanSupplier_temp_kirim"))||[],detail_bayar_retur:JSON.parse(localStorage.getItem("list_return"))||[]};console.log(JSON.stringify(a));const t=[],n=[];let r=JSON.parse(localStorage.getItem("PenerimaanSupplier_temp"));r.forEach((e,a)=>{const n=[++a,e.kode_barcode,e.nama_barang,e.merk,e.kwalitas,e.type,e.satuan,e.qty,parseFloat(e.harga_satuan).toLocaleString("id-ID"),parseFloat(e.total).toLocaleString("id-ID")];t.push(n)});const l=["","","","","","","","","TOTAL TAGIHAN",parseFloat(r.map(e=>e.total).reduce((e,a)=>e+a,0)).toLocaleString("id-ID")];n.push(l);let o=["NO","BARCODE","JENIS BARANG","MERK","KW","TYPE","SATUAN","QTY","HARGA SATUAN","TOTAL"];Object(g.c)("terima-barang-supplier/post-transaksi-tunai",a).then(()=>Object(p.b)("Berhasil Melakukan Pembayaran Cash")).then(()=>Object(T.a)("NO TERIMA",localStorage.getItem("penerimaan_kode_terima"),"TANGGAL",localStorage.getItem("penerimaan_tanggal_invoice"),"NO BON",localStorage.getItem("penerimaan_no_bon"),"SUPPLIER",localStorage.getItem("penerimaan_kode_supplier"),Object(p.l)().user_name,"01-28-2021",Object(p.l)().user_name,o,"BUKTI PENERIMAAN BARANG SUPPLIER",t,n,!0)).then(()=>Object(I.d)(["PenerimaanSupplier_temp","PenerimaanSupplier_temp_kirim","penerimaan_keterangan","penerimaan_kode_supplier","penerimaan_no_bon","penerimaan_kode_terima","penerimaan_tanggal_barang","penerimaan_tanggal_invoice","penerimaan_discount","noFaktur"])).then(()=>this.props.dispatch(Object(N.a)("HeadSupplierPenerimaan"))).then(()=>this.getKodePenerimaan()).then(()=>this.props.dispatch(Object(A.Tb)())).then(()=>this.props.dispatch(Object(A.Ab)())).then(()=>this.props.dispatch(Object(d.B)())).catch(e=>Object(p.a)(e.response.data))}}render(){return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(l.b,{to:"#"},"Transaksi")),r.a.createElement("li",{className:"breadcrumb-item active"},"Penerimaan Supplier")),r.a.createElement("h1",{className:"page-header"},"Penerimaan Supplier "),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(o.a,null,r.a.createElement(o.c,null,"Penerimaan Supplier"),r.a.createElement(o.b,null,r.a.createElement("br",null),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(E,{onSubmit:e=>this.handleHead(e),listterimasupplier:this.props.listterimasupplier,sub_total:this.props.sub_total,showTambah:()=>this.showTambah()})),r.a.createElement("br",null))),r.a.createElement(y.a,{content:r.a.createElement(n.Suspense,{fallback:r.a.createElement(j.a,{width:"100%",height:300})},this.state.bayar?r.a.createElement(F,{onSubmit:e=>this.handleCash(e)}):r.a.createElement(R,{onSubmit:e=>this.handleModal(e)})),title:this.state.bayar?"Pembayaran Cash":"Tambah Barang Penerimaan Supplier"}))))}}B=Object(c.a)({form:"SupplierPenerimaan",enableReinitialize:!0})(B);a.default=Object(i.b)(e=>({listterimasupplier:e.transaksi.listterimasupplier,sub_total:e.transaksi.sub_total,noFaktur:e.datamaster.noFaktur}),null)(B)},209:function(e,a,t){"use strict";var n=t(61),r=t.n(n),l=t(16);a.a=function(e){var a=e.getIn;return function(e,t){r()(e,"Form value must be specified");var n=t||function(e){return a(e,"form")};return function(t){for(var o=arguments.length,i=new Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];return r()(i.length,"No fields specified"),1===i.length?a(n(t),e+".values."+i[0]):i.reduce(function(r,o){var i=a(n(t),e+".values."+o);return void 0===i?r:l.a.setIn(r,o,i)},{})}}}(l.a)},486:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n=e=>e?void 0:"Tidak Boleh Kosong"},489:function(e,a,t){"undefined"!=typeof self&&self,e.exports=function(e){function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}var t={};return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="/dist/",a(a.s=1)}([function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},r=function(e,a){return a[e]},l=function(e,a,t,n,l,o){var i="",s=e||"";if(0===s.length&&l&&!n)return"";for(var c=0,m=0;m<a.length;m+=1){var p=s.charAt(c),u=a.charAt(m),g=r(u,o);if(g)if(p)if(g.regExp.test(p))i=i.concat(p),c+=1;else{if(!n)return i;i=i.concat(t),s=""}else{if(!n)return i;i=i.concat(t)}else i=i.concat(u)}return i};a.applyMask=l,a.applyTransform=function(e,a,t,n){for(var l=e||"",o=a||"",i="",s=0;s<l.length;s+=1){var c=l.charAt(s);if(c!==o.charAt(s)){var m=t.charAt(s),p=r(m,n);i=p&&p.transform?i.concat(p.transform(c)):i.concat(c)}else i=i.concat(c)}return i},a.countOcurrences=function(e,a){return(e.match(a)||[]).length},a.escapeRegExp=n,a.firstUnfilledPosition=function(e,a,t,n){if(""===e)return 0;for(var l=0;l<e.length;l+=1){var o=e.charAt(l),i=a.charAt(l);if(o===t&&o!==i)return l}if(e.length===a.length)for(var s=a.length-1;s>=0;s-=1){var c=a.charAt(s);if(r(c,n))return s+1}return e.length},a.getMaskDefinition=r,a.inputReformat=function(e,a,t,o,i,s){for(var c=e||"",m=0;m<a.length;m+=1){var p=a.charAt(m);if(!r(p,s)){var u=n(p);c=c.replace(new RegExp(u),"")}}var g=n(t);return c=c.replace(g,""),l(c,a,t,o,i,s)},a.isPatternComplete=function(e,a,t){if(!e||0===e.length)return!1;if(e.length!==a.length)return!1;for(var n=0;n<e.length;n+=1){var l=e.charAt(n),o=a.charAt(n),i=r(o,t);if(i){if(!i.regExp.test(l))return!1}else if(l!==o)return!1}return!0},a.maskStrip=function(e,a,t,n){for(var l="",o=e||"",i=0;i<o.length;i+=1){var s=o.charAt(i),c=a.charAt(i),m=r(c,n);m&&(m.regExp.test(s)?l=l.concat(s):s===t&&(o=""))}return l},a.numberToLocaleString=function(e,a,t){return e.toLocaleString(a,{minimumFractionDigits:t,maximumFractionDigits:t})},a.charMatchTest=function(e,a){for(var t=Object.keys(a),n=0;n<t.length;n+=1){var r=t[n];if(a[r].regExp.test(e))return r}},a.validCaretPositions=function(e,a){var t=[];if(!e||"string"!=typeof e||0===e.length)return t;r(e.charAt(0),a)&&t.push(0);for(var n=1;n<e.length;n+=1){var l=e.charAt(n-1),o=e.charAt(n);(r(l,a)||r(o,a))&&t.push(n)}return r(e.charAt(e.length-1),a)&&t.push(e.length),t}},function(e,a,t){e.exports=t(2)},function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0}),a.createTextMask=a.createNumberMask=void 0;var r=t(3),l=n(r),o=t(4),i=n(o);a.createNumberMask=l.default,a.createTextMask=i.default},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0);a.default=function(e){var a=e||{},t=a.prefix,r=void 0===t?"":t,l=a.suffix,o=void 0===l?"":l,i=a.decimalPlaces,s=void 0===i?0:i,c=a.multiplier,m=void 0===c?1:c,p=a.stringValue,u=void 0!==p&&p,g=a.allowEmpty,d=void 0!==g&&g,h=a.allowNegative,b=void 0!==h&&h,_=a.showPlusSign,f=void 0!==_&&_,v=a.spaceAfterSign,k=void 0!==v&&v,S=a.locale,E=a.onChange;if(s>10)throw new Error("The maximum value for createNumberMask's option `decimalPlaces` is 10.");if("number"!=typeof m)throw new Error("The createNumberMask's option `multilpier` should be of type number.");if(0===m)throw new Error("The createNumberMask's option `multilpier` cannot be zero.");var y=function(e){var a=e.target;a&&(e.persist&&e.persist(),setTimeout(function(){var t=a.value.length-o.length;e.target.setSelectionRange(t,t)}))};return{format:function(e){return function(e){var a=e;if(null===a||void 0===a||""===a){if(d)return"";a=0}else"number"!=typeof a&&(a=Number(a));var t=f?"+":"";return a<0&&(a*=-1,b&&(t="-")),t&&k&&(t+=" "),a*=1/m,a=(0,n.numberToLocaleString)(a,S,s),""+t+r+a+o}(e)},normalize:function(e,a){return function(e,a){var t=(0,n.escapeRegExp)(r),l=(0,n.escapeRegExp)(o),i=new RegExp("^[-|+]? ?"+t),c=new RegExp(l+"$"),p=1;if(b){var g=/-/g,h=(0,n.countOcurrences)(e,g)-(0,n.countOcurrences)(r,g)-(0,n.countOcurrences)(o,g);p=Math.pow(-1,h)%2}var _=e;if(r&&(_=_.replace(i,"")),o&&(_=_.replace(c,"")),_=_.replace(/\D/g,""),d){var f=""===_,v=""===_.replace(/0+/g,""),k=_.length<=s,S=void 0===a;if(f||!S&&k&&v)return"0"===_?u?"0":0:null}var y=Number(_)/Math.pow(10,s)*p;y=Number((y*m).toPrecision(10)),u&&(y=y.toString());var N=y!==a;return E&&N&&E(y),y}(e,a)},onChange:function(e){return y(e)},onFocus:function(e){return y(e)},autoComplete:"off"}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t(5),l=function(e){return e&&e.__esModule?e:{default:e}}(r);a.default=function(e){var a=e.pattern,t=e.placeholder,r=void 0===t?"_":t,o=e.maskDefinitions,i=void 0===o?l.default:o,s=e.guide,c=void 0===s||s,m=e.stripMask,p=void 0===m||m,u=e.allowEmpty,g=void 0!==u&&u,d=e.onChange,h=e.onCompletePattern;if(!a)throw new Error("The key `pattern` is required for createTextMask. You probably forgot to add it to your options.");if(!r||1!==r.length)throw new Error("The key `placeholder` should have a single character as a value.");var b=(0,n.validCaretPositions)(a,i);if(0===b.length)throw new Error("The pattern `"+a+"` passed for createTextMask is not valid.");var _=(0,n.charMatchTest)(r,i);if(_)throw new Error("The placeholder `"+r+"` matches the mask definition`"+_+"`. The mask created using `createTextMask`is therefore invalid.");var f=(0,n.maskStrip)(a,a,r,i),v=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?p||t?(0,n.applyMask)(e,a,r,c,g,i):e:(0,n.applyMask)("",a,r,c,g,i)},k=function(e,t){var l=(0,n.inputReformat)(e,a,r,c,g,i),o=(0,n.maskStrip)(l,a,r,i),s=(0,n.applyTransform)(o,p?t:(0,n.maskStrip)(t,a,r,i),f,i),m=v(s,!0),u=p?s:m,b=u!==t&&(""!==u||void 0!==t);return d&&b&&d(u),h&&(0,n.isPatternComplete)(m,a,i)&&b&&setTimeout(function(){return h(u)},10),u},S=function(e){var t=(0,n.firstUnfilledPosition)(e.value,a,r,i);e.setSelectionRange(t,t)},E=function(e,a,t){for(var n=void 0,r=0;r<=b.length;r+=1)if(b[r]>a){n=r;break}var l=void 0;if(void 0===(l="left"===t?b[n-1]:b[n])){var o="left"===t?0:b.length-1;l=b[o]}e.setSelectionRange(l,l)},y=function(e){if(e.target){e.persist&&e.persist();var t=e.target.selectionStart,n=e.target.value;setTimeout(function(){var r=e.target,l=e.type,o=e.key,i=e.target,s=i.value,c=i.selectionStart,m=i.selectionEnd;switch(l){case"change":if(s.length===n.length+1&&s.charAt(t)===a.charAt(t)){E(r,t,"left");break}S(r);break;case"focus":S(r);break;case"click":c===m&&(b.indexOf(c)>=0?e.preventDefault():S(r));break;case"keydown":"ArrowLeft"===o?E(r,c,"left"):"ArrowRight"===o&&E(r,t,"right")}})}};return{format:function(e){return v(e)},normalize:function(e,a){return k(e,a)},onKeyDown:function(e){return y(e)},onChange:function(e){return y(e)},onFocus:function(e){return y(e)},onClick:function(e){return y(e)},autoComplete:"off"}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={A:{regExp:/[A-Za-z]/,transform:function(e){return e.toUpperCase()}},a:{regExp:/[A-Za-z]/,transform:function(e){return e.toLowerCase()}},U:{regExp:/[A-Z]/},l:{regExp:/[a-z]/},9:{regExp:/[0-9]/}}}])},502:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var n=t(15),r=t.n(n);const l=(e,a)=>new Promise((t,n)=>{let l=JSON.parse(localStorage.getItem(e))||[];l.push(a),localStorage.setItem(e,JSON.stringify(l)),r.a.fire({position:"top-right",text:"Tambah Data Berhasil",timer:2e3,icon:"success",showConfirmButton:!1}).then(()=>t("Berhaisl")).catch(()=>n("GAGAL"))})},568:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(198),o=t(9),i=t(18);class s extends n.Component{constructor(e){super(e),this.state={nomor_return:"",deleted:!0}}tambahData(){if(""===this.state.nomor_return)return Object(i.h)("Silahkan isi nomor return"),!1;Object(o.b)("retur-barang-supplier/getDataReturSupplier/"+this.state.nomor_return).then(e=>{if(0===e.data.length)return console.log("NOL"),Object(i.h)("Nomor Return Tidak Ditemukan"),this.props.change(""),!1;console.log("TIDAK NOL"),this.saveLocal(e)}).catch(e=>"Error : ".concat(e&&e.response.data))}saveLocal(e){let a=JSON.parse(localStorage.getItem("list_return"))||[],t={no_faktur:e&&e.data.no_retur_supplier,total_retur:e&&e.data.jml_netto_rp},n=a.findIndex(a=>a.no_return===e.data.no_retur_supplier);~n?a[n]=t:a.push(t),localStorage.setItem("list_return",JSON.stringify(a)),this.setState({no_faktur:e&&e.data.no_retur_supplier,total_retur:e&&e.data.jml_netto_rp}),this.props.reRender()}delete(e){let a=JSON.parse(localStorage.getItem("list_return"))||[];a.splice(e,1),localStorage.setItem("list_return",JSON.stringify(a)),Object(i.i)("Berhasil Menghapus Data"),this.setState({deleted:!this.state.deleted}),this.props.reRender()}render(){let e=JSON.parse(localStorage.getItem("list_return"))||[],a="Rp. "+e.map(e=>e.total_retur).reduce((e,a)=>e+a,0).toLocaleString("id-ID");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-9"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Nomor Return"),r.a.createElement("input",{type:"text",className:"form-control",onChange:e=>this.setState({nomor_return:e.target.value})}))),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("label",{htmlFor:""},"."),r.a.createElement("button",{type:"button",className:"btn btn-block btn-primary",onClick:()=>this.tambahData()},r.a.createElement("strong",null,"+")))),r.a.createElement("div",{className:"widget-list widget-list-rounded m-b-30"},e.map((e,a)=>r.a.createElement("div",{className:"widget-list-item"},r.a.createElement("div",{className:"widget-list-content"},r.a.createElement("h4",{className:"widget-list-title"},e.no_faktur),r.a.createElement("p",{className:"widget-list-desc"},parseFloat(e.total_retur).toLocaleString("id-ID"))),r.a.createElement("div",{className:"widget-list-action"},r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:()=>this.delete(a)},r.a.createElement("i",{className:"fa fa-times"})))))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h5",null,"Total Return")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h5",null,a)))))}}s=Object(l.a)({form:"ComponentReturn",enableReinitialize:!0})(s),a.a=s}}]);
//# sourceMappingURL=8.4223048d.chunk.js.map