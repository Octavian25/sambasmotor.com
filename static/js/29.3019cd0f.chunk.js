(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{487:function(a,e,n){"use strict";n.d(e,"a",function(){return t});const t=a=>a?void 0:"Tidak Boleh Kosong"},489:function(a,e,n){"use strict";e.a=((a,e)=>{const n={};return a.kode_kategori||(n.kode_kategori="Kode Tidak Boleh Kosong"),a.nama_kategori||(n.nama_kategori="Nama Kategori Tidak Boleh Kosong"),a.harga_pergram||(n.harga_pergram="Harga / Gram Tidak Boleh Kosong"),a.presentase||(n.presentase="Presentase Tidak Boleh Kosong"),a.kadar||(n.kadar="Kadar Tidak Boleh Kosong"),n})},986:function(a,e,n){"use strict";n.r(e);var t=n(0),i=n.n(t),c=n(29),o=n(196),r=n(49),s=n(197),u=n(9),d=n(23),l=n(487),k=n(489);class m extends t.Component{constructor(a){super(a),this.state={listKunci:[]}}componentDidMount(){Object(u.b)("jenis-kunci/get/all").then(a=>this.setState({listKunci:a.data})).catch(()=>Object(d.a)("Sepertinya ada masalah, silahkan menunggu beberapa saat lagi"))}render(){return i.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},i.a.createElement(o.a,{name:"kode_jenis_kunci",component:d.e,options:this.state.listKunci.map(a=>{return{value:a.kode_jenis_kunci,name:"".concat(a.kode_jenis_kunci," - ( ").concat(a.nama_jenis_kunci," )")}}),label:"Kode Jenis Kunci",placeholder:"Masukan kode Jenis Kunci",readOnly:this.props.isEdit,validate:l.a}),i.a.createElement(o.a,{name:"kode_kunci",component:d.c,type:"text",label:"Kode Kunci",placeholder:"Masukan kode Kunci",readOnly:this.props.isEdit,validate:l.a}),i.a.createElement(o.a,{name:"nama_kunci",component:d.c,type:"text",label:"Nama Kunci",placeholder:"Masukan Nama Kunci",validate:l.a}),i.a.createElement(o.a,{name:"ukuran_kunci",component:d.c,type:"text",label:"Ukuran Kunci",placeholder:"Masukan Ukuran Kunci"}),i.a.createElement(o.a,{name:"merk_kunci",component:d.c,type:"text",label:"Merk Kunci",placeholder:"Masukan Merk Kunci"}),i.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:()=>this.props(Object(r.b)("dataKunci"))},this.props.onSend?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):i.a.createElement(i.a.Fragment,null,"Simpan ",i.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))}}m=Object(s.a)({form:"dataKunci",enableReinitialize:!0,validate:k.a})(m),e.default=Object(c.b)(a=>void 0!==a.datamaster.datakunci?{initialValues:{kode_jenis_kunci:a.datamaster.datakunci.kode_jenis_kunci,kode_kunci:a.datamaster.datakunci.kode_kunci,ukuran_kunci:a.datamaster.datakunci.ukuran,merk_kunci:a.datamaster.datakunci.merk_kunci,nama_kunci:a.datamaster.datakunci.nama_kunci},onSend:a.datamaster.onSend}:{onSend:a.datamaster.onSend},null)(m)}}]);
//# sourceMappingURL=29.3019cd0f.chunk.js.map