(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{486:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n=e=>e?void 0:"Tidak Boleh Kosong"},490:function(e,a,t){"use strict";a.a=((e,a)=>{const t={};return e.kode_kategori||(t.kode_kategori="Kode Tidak Boleh Kosong"),e.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),e.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),e.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),e.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t})},992:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(29),o=t(197),s=t(198),l=t(18),c=t(486),d=t(490);class m extends n.Component{constructor(e){super(e),this.state={}}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},r.a.createElement(o.a,{name:"id_kategori_service",component:l.c,type:"text",label:"ID Kategori Service",placeholder:"Masukan ID Kategori Service",validate:c.a}),r.a.createElement(o.a,{name:"jenis_kategori",component:l.e,options:[{value:"KAKI",name:"Kaki"},{value:"TUNEUP",name:"Tune Up"},{value:"TURUN MESIN",name:"Turun Mesin"},{value:"ELECTRIC",name:"Electric"},{value:"ACC",name:"Acc"},{value:"SERVICE LUAR",name:"Service Luar"},{value:"LAIN-LAIN",name:"Lain-lain"}],type:"text",label:"Jenis Kategori",placeholder:"Masukan Jenis Kategori",validate:c.a}),r.a.createElement(o.a,{name:"jenis_service",component:l.c,type:"text",label:"Jenis Service",placeholder:"Masukan Jenis Service",validate:c.a}),r.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):r.a.createElement(r.a.Fragment,null,"Simpan ",r.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))}}m=Object(s.a)({form:"dataKategoriService",enableReinitialize:!0,validate:d.a})(m),a.default=Object(i.b)(e=>void 0!==e.datamaster.datakategoriservice?{initialValues:{id_kategori_service:e.datamaster.datakategoriservice.id_kategori_service,jenis_kategori:e.datamaster.datakategoriservice.kategori_service,jenis_service:e.datamaster.datakategoriservice.jenis_service},onSend:e.datamaster.onSend}:{onSend:e.datamaster.onSend},null)(m)}}]);
//# sourceMappingURL=29.bffab3d8.chunk.js.map