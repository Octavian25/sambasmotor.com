(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1096:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(7),m=t(5),r=t(9),c=t(28),o=t(41),i=t(22),p=t(196),b=t(49),d=t(197),u=t(52),h=t(488);class E extends n.Component{constructor(e){super(e),this.state={}}componentDidMount(){this.props.dispatch(Object(u.h)())}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(p.a,{name:"kode_customer",component:c.e,options:this.props.listmember.map(e=>{return{value:e.kode_customer,name:e.nama_customer}}),type:"text",label:"Kode Member",validate:h.a,placeholder:"Masukan Kode Member"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(p.a,{name:"jenis",component:c.e,options:[{value:"TAMBAH POINT MANUAL",name:" TAMBAH POINT MANUAL"},{value:"AMBIL POINT MANUAL",name:" AMBIL POINT MANUAL"}],type:"text",label:"Type",placeholder:"Masukan Type",validat:h.a})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(p.a,{name:"poin",component:c.c,type:"text",label:"Point",placeholder:"Masukan Point",validate:h.a})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:()=>this.props(Object(b.b)("HeadTambahPointManual"))},this.props.onSend?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):l.a.createElement(l.a.Fragment,null,"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane ml-3 "})))))))}}E=Object(d.a)({form:"HeadTambahPointManual",enableReinitialize:!0})(E);var N=Object(i.b)(e=>({listmember:e.member.listmember,onSend:e.datamaster.onSend}))(E);a.default=class extends n.Component{constructor(e){super(e),this.state={}}handleSubmit(e){this.props.dispatch(Object(m.Xb)());let a={kode_customer:e.kode_customer,jenis_trx:e.jenis,poin:e.poin};Object(r.c)(this.props.dispatch,"member/tambah-ambil-poin-manual",a).then(()=>this.props.dispatch(Object(m.Wb)())).then(()=>Object(c.b)("".concat(e.jenis," Berhasil")).catch(a=>Object(c.a)("Gagal ".concat(e.jenis,", Error: ").concat(a.response.data)).then(()=>this.props.dispatch(Object(m.Wb)()))))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(s.b,{to:"#"},"Member")),l.a.createElement("li",{className:"breadcrumb-item active"},"Tambah / Ambil Point Manual")),l.a.createElement("h1",{className:"page-header"}," Tambah / Ambil Point Manual "),l.a.createElement(o.a,null,l.a.createElement(o.c,null," Tambah / Ambil Point Manual"),l.a.createElement(o.b,null,l.a.createElement("div",{className:"col-lg-12 mt-3"},l.a.createElement(N,{onSubmit:e=>this.handleSubmit(e)})))))}}},488:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n=e=>e?void 0:"Tidak Boleh Kosong"}}]);
//# sourceMappingURL=56.3e62b4b7.chunk.js.map