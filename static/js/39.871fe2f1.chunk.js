(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{486:function(a,e,t){"use strict";t.d(e,"a",function(){return n});const n=a=>a?void 0:"Tidak Boleh Kosong"},490:function(a,e,t){"use strict";e.a=((a,e)=>{const t={};return a.kode_kategori||(t.kode_kategori="Kode Tidak Boleh Kosong"),a.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),a.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),a.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),a.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t})},989:function(a,e,t){"use strict";t.r(e);var n=t(0),o=t.n(n),s=t(29),r=t(197),d=t(198),i=t(18),l=t(486),m=t(490);class u extends n.Component{constructor(a){super(a),this.state={}}render(){return o.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},o.a.createElement(r.a,{name:"kode_satuan",component:i.c,type:"text",label:"Kode Satuan",placeholder:"Masukan kode Satuan",readOnly:this.props.isEdit,validate:l.a}),o.a.createElement(r.a,{name:"nama_satuan",component:i.c,type:"text",label:"Nama Satuan",placeholder:"Masukan Nama Satuan",validate:l.a}),o.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):o.a.createElement(o.a.Fragment,null,"Simpan ",o.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))}}u=Object(d.a)({form:"dataSatuan",enableReinitialize:!0,validate:m.a})(u),e.default=Object(s.b)(a=>void 0!==a.datamaster.datasatuan?{initialValues:{kode_satuan:a.datamaster.datasatuan.kode_satuan,nama_satuan:a.datamaster.datasatuan.nama_satuan},onSend:a.datamaster.onSend}:{onSend:a.datamaster.onSend},null)(u)}}]);
//# sourceMappingURL=39.871fe2f1.chunk.js.map