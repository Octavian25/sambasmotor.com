(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{209:function(e,a,t){"use strict";var n=t(61),l=t.n(n),s=t(15);a.a=function(e){var a=e.getIn;return function(e,t){l()(e,"Form value must be specified");var n=t||function(e){return a(e,"form")};return function(t){for(var r=arguments.length,m=new Array(r>1?r-1:0),o=1;o<r;o++)m[o-1]=arguments[o];return l()(m.length,"No fields specified"),1===m.length?a(n(t),e+".values."+m[0]):m.reduce(function(l,r){var m=a(n(t),e+".values."+r);return void 0===m?l:s.a.setIn(l,r,m)},{})}}}(s.a)},486:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n=e=>e?void 0:"Tidak Boleh Kosong"},489:function(e,a,t){"use strict";a.a=((e,a)=>{const t={};return e.kode_kategori||(t.kode_kategori="Kode Tidak Boleh Kosong"),e.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),e.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),e.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),e.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t})},591:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,l=t(555),s=(n=l)&&n.__esModule?n:{default:n};a.default=s.default},999:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(29),r=t(197),m=t(49),o=t(198),p=t(209),c=t(23),i=t(489),d=t(591),u=t.n(d),b=t(486);class h extends n.Component{constructor(e){super(e),this.state={step:0,step1:"row",step2:"row d-none",step3:"row d-none"}}nextStep(){switch(this.state.step){case 0:this.setState({step:this.state.step+1,step1:"row d-none",step2:"row",step3:"row d-none"});break;case 1:this.setState({step:this.state.step+1,step1:"row d-none",step2:"row d-none",step3:"row "})}}prevStep(){switch(this.state.step){case 1:this.setState({step:this.state.step-1,step1:"row ",step2:"row d-none",step3:"row d-none"});break;case 2:this.setState({step:this.state.step-1,step1:"row d-none",step2:"row ",step3:"row d-none "})}}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"mb-5"},l.a.createElement(u.a,{defaultBarColor:"#98CCEC",completeColor:"#00ACAC",steps:[{title:"Data Diri"},{title:"Data Rekening"},{title:"Data NPWP"}],activeStep:this.state.step})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:this.state.step1},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"kode_supplier",component:c.c,type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier",readOnly:this.props.isEdit,validate:b.a})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"nama_supplier",component:c.c,type:"text",label:"Nama Supplier",placeholder:"Masukan Nama Supplier",validate:b.a})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"contact_person",component:c.c,type:"number",label:"Nomor Handphone",placeholder:"Masukan Nomor Handphone"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"fax",component:c.c,type:"number",label:"Fax",placeholder:"Masukan Fax"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"telepon",component:c.c,type:"number",label:"Telepon",placeholder:"Masukan Telepon"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"alamat",component:c.c,type:"text",label:"Alamat",placeholder:"Masukan Alamat"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"kota",component:c.c,type:"text",label:"Kota",placeholder:"Masukan Kota"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"kode_pos",component:c.c,type:"number",label:"Kode Pos",placeholder:"Masukan Kode Pos"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"email",component:c.c,type:"text",label:"Email",placeholder:"Masukan Email"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(r.a,{name:"type_pembayaran",component:c.e,options:[{value:"cash",name:"CASH"},{value:"kredit",name:"KREDIT"}],type:"text",label:"Type Pembayaran",placeholder:"Masukan Type Pembayaran"})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(r.a,{name:"tanggal_pembayaran",component:c.c,type:"number",label:"Lama Pembayaran",placeholder:"Lama Pembayaran",readOnly:"cash"===this.props.jenis_bayar||void 0===this.props.jenis_bayar}))),l.a.createElement("div",{className:this.state.step2},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"nama_bank",component:c.c,type:"text",label:"Nama Bank",placeholder:"Masukan Nama Bank"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"no_acc",component:c.c,type:"number",label:"Nomor A/C",placeholder:"Masukan Nomor A/C"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"nama_pemilik",component:c.c,type:"text",label:"Nama Pemilik",placeholder:"Masukan Nama Pemilik"}))),l.a.createElement("div",{className:this.state.step3},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"NPWP",component:c.c,type:"number",label:"NPWP",placeholder:"Masukan NPWP"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"nama_NPWP",component:c.c,type:"text",label:"Nama NPWP",placeholder:"Masukan Nama NPWP"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(r.a,{name:"alamat_NPWP",component:c.c,type:"text",label:"Alamat NPWP",placeholder:"Masukan Alamat NPWP"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"text-left"},l.a.createElement("button",{type:"button",className:0===this.state.step?"btn btn-primary d-none":"btn btn-primary",onClick:()=>this.prevStep()},"Back"))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"button",className:2===this.state.step?"btn btn-primary d-none":"btn btn-primary",onClick:()=>this.nextStep()},"Next")))))),l.a.createElement("div",{className:"col-lg-12 mt-5"},l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:()=>this.props(Object(m.b)("dataBarang"))},this.props.onSend?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):l.a.createElement(l.a.Fragment,null,"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane ml-3 "})))))}}h=Object(o.a)({form:"dataBarang",enableReinitialize:!0,validate:i.a})(h);const k=Object(p.a)("dataBarang");a.default=Object(s.b)(e=>void 0!==e.datamaster.datasupplier?{initialValues:{kode_supplier:e.datamaster.datasupplier.kode_supplier,nama_supplier:e.datamaster.datasupplier.nama_supplier,contact_person:e.datamaster.datasupplier.contact_person,fax:e.datamaster.datasupplier.fax,telepon:e.datamaster.datasupplier.telepon,alamat:e.datamaster.datasupplier.alamat,kota:e.datamaster.datasupplier.kota,kode_pos:e.datamaster.datasupplier.kode_pos,email:e.datamaster.datasupplier.email,nama_bank:e.datamaster.datasupplier.bank,no_acc:e.datamaster.datasupplier.bank_ac,nama_pemilik:e.datamaster.datasupplier.bank_atas_nama,NPWP:e.datamaster.datasupplier.npwp,nama_NPWP:e.datamaster.datasupplier.npwp_nama,alamat_NPWP:e.datamaster.datasupplier.npwp_alamat,cash:e.datamaster.datasupplier.cash,kredit:e.datamaster.datasupplier.kredit,type_pembayaran:e.datamaster.datasupplier.cash?"cash":"kredit",tanggal_pembayaran:e.datamaster.datasupplier.hari},jenis_bayar:k(e,"type_pembayaran"),onSend:e.datamaster.onSend}:{onSend:e.datamaster.onSend,jenis_bayar:k(e,"type_pembayaran")})(h)}}]);
//# sourceMappingURL=12.b70a3f6e.chunk.js.map