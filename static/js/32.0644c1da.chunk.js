(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{488:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n=e=>e?void 0:"Tidak Boleh Kosong"},490:function(e,a,t){"use strict";a.a=((e,a)=>{const t={};return e.kode_kategori||(t.kode_kategori="Kode Tidak Boleh Kosong"),e.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),e.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),e.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),e.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t})},993:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(22),s=t(196),r=t(49),l=t(197),c=t(9),m=t(28),d=t(488),p=t(490);class u extends n.Component{constructor(e){super(e),this.state={isRp:!0,listKategori:[]}}componentDidMount(){Object(c.b)("kategori/get/all").then(e=>this.setState({listKategori:e.data}))}render(){return o.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},o.a.createElement(s.a,{name:"jenis_kategori",component:m.e,options:this.state.listKategori.map(e=>{return{value:e.kode_kategori,name:e.nama_kategori}}),type:"text",label:"Jenis Kategori",placeholder:"Masukan Jenis Kategori",validate:d.a}),o.a.createElement("label",{htmlFor:""},"Jenis Discount"),o.a.createElement("div",{className:"form-check"},o.a.createElement("label",null,o.a.createElement(s.a,{className:"form-check-input",name:"jenis_discount",component:"input",type:"radio",value:"RP",onClick:()=>this.setState({isRp:!0})}),"Rp"),o.a.createElement("label",{className:"ml-5"},o.a.createElement(s.a,{className:"form-check-input",name:"jenis_discount",component:"input",type:"radio",value:"PERSEN",onClick:()=>this.setState({isRp:!1})}),"%")),o.a.createElement(s.a,{name:"nominal_discount",component:m.c,type:"number",label:this.state.isRp?"Nominal Discount RP":"Nominal Discount %",placeholder:"Masukan Nominal Discount"}),o.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:()=>this.props(Object(r.b)("dataParameterDiscount"))},this.props.onSend?o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):o.a.createElement(o.a.Fragment,null,"Simpan ",o.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))}}u=Object(l.a)({form:"dataParameterDiscount",enableReinitialize:!0,validate:p.a})(u),a.default=Object(i.b)(e=>void 0!==e.datamaster.datakategoriservice?{initialValues:{jenis_kategori:e.datamaster.datakategoriservice.kode_kategori,nominal_discount:e.datamaster.datakategoriservice.diskon,jenis_discount:e.datamaster.datakategoriservice.status_diskon},onSend:e.datamaster.onSend}:{onSend:e.datamaster.onSend},null)(u)}}]);
//# sourceMappingURL=32.0644c1da.chunk.js.map