(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{487:function(a,e,t){"use strict";t.d(e,"a",function(){return r});const r=a=>a?void 0:"Tidak Boleh Kosong"},489:function(a,e,t){"use strict";e.a=((a,e)=>{const t={};return a.kode_kategori||(t.kode_kategori="Kode Tidak Boleh Kosong"),a.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),a.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),a.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),a.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t})},989:function(a,e,t){"use strict";t.r(e);var r=t(0),n=t.n(r),o=t(29),s=t(196),i=t(49),d=t(197),m=t(27),l=t(487),p=t(489);class c extends r.Component{constructor(a){super(a),this.state={}}componentDidMount(){this.props.change("id_kategori",this.props.noFaktur)}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},n.a.createElement(s.a,{name:"id_kategori",component:m.c,type:"text",label:"Nama Parameter",placeholder:"Masukan Nama Parameter",readOnly:!0,validate:l.a}),n.a.createElement(s.a,{name:"kategori",component:m.c,type:"text",label:"Nama Parameter",placeholder:"Masukan Nama Parameter",validate:l.a}),n.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:()=>this.props(Object(i.b)("dataParameterTransaksi"))},this.props.onSend?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):n.a.createElement(n.a.Fragment,null,"Simpan ",n.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))}}c=Object(d.a)({form:"dataParameterTransaksi",enableReinitialize:!0,validate:p.a})(c),e.default=Object(o.b)(a=>void 0!==a.datamaster.dataparameter?{initialValues:{id_kategori:a.datamaster.dataparameter.id_kategori,kategori:a.datamaster.dataparameter.kategori},onSend:a.datamaster.onSend}:{onSend:a.datamaster.onSend},null)(c)}}]);
//# sourceMappingURL=34.51d65d73.chunk.js.map