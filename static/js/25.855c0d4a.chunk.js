(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{487:function(a,e,t){"use strict";t.d(e,"a",function(){return i});const i=a=>a?void 0:"Tidak Boleh Kosong"},490:function(a,e,t){"use strict";e.a=((a,e)=>{const t={};return a.kode_kategori||(t.kode_kategori="Kode Tidak Boleh Kosong"),a.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),a.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),a.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),a.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t})},998:function(a,e,t){"use strict";t.r(e);var i=t(0),n=t.n(i),s=t(28),o=t(197),r=t(198),d=t(18),l=t(487),m=t(490);class p extends i.Component{constructor(a){super(a),this.state={}}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},n.a.createElement(o.a,{name:"kode_divisi",component:d.c,type:"text",label:"Kode Divisi",placeholder:"Masukan kode Divisi",readOnly:this.props.isEdit,validate:l.a}),n.a.createElement(o.a,{name:"nama_divisi",component:d.c,type:"text",label:"Nama Divisi",placeholder:"Masukan Nama Divisi",validate:l.a}),n.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):n.a.createElement(n.a.Fragment,null,"Simpan ",n.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))}}p=Object(r.a)({form:"dataDivisi",enableReinitialize:!0,validate:m.a})(p),e.default=Object(s.b)(a=>void 0!==a.datamaster.datadivisi?{initialValues:{kode_divisi:a.datamaster.datadivisi.kode_divisi,nama_divisi:a.datamaster.datadivisi.nama_divisi},onSend:a.datamaster.onSend}:{onSend:a.datamaster.onSend},null)(p)}}]);
//# sourceMappingURL=25.855c0d4a.chunk.js.map