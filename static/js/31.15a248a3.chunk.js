(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{487:function(a,e,n){"use strict";n.d(e,"a",function(){return t});const t=a=>a?void 0:"Tidak Boleh Kosong"},489:function(a,e,n){"use strict";e.a=((a,e)=>{const n={};return a.kode_kategori||(n.kode_kategori="Kode Tidak Boleh Kosong"),a.nama_kategori||(n.nama_kategori="Nama Kategori Tidak Boleh Kosong"),a.harga_pergram||(n.harga_pergram="Harga / Gram Tidak Boleh Kosong"),a.presentase||(n.presentase="Presentase Tidak Boleh Kosong"),a.kadar||(n.kadar="Kadar Tidak Boleh Kosong"),n})},979:function(a,e,n){"use strict";n.r(e);var t=n(0),r=n.n(t),o=n(29),s=n(196),i=n(49),m=n(197),d=n(27),l=n(487),p=n(489);class c extends t.Component{constructor(a){super(a),this.state={}}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},r.a.createElement(s.a,{name:"merk_barang",component:d.c,type:"text",label:"Merk Barang",placeholder:"Masukan Merk Barang",readOnly:this.props.isEdit,validate:l.a}),r.a.createElement(s.a,{name:"nama_barang",component:d.c,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang",validate:l.a}),r.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:()=>this.props(Object(i.b)("dataBarang"))},this.props.onSend?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):r.a.createElement(r.a.Fragment,null,"Simpan ",r.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))}}c=Object(m.a)({form:"dataBarang",enableReinitialize:!0,validate:p.a})(c),e.default=Object(o.b)(a=>void 0!==a.datamaster.datamerkbarang?{initialValues:{merk_barang:a.datamaster.datamerkbarang.kode_merk_barang,nama_barang:a.datamaster.datamerkbarang.nama_merk_barang},onSend:a.datamaster.onSend}:{onSend:a.datamaster.onSend},null)(c)}}]);
//# sourceMappingURL=31.15a248a3.chunk.js.map