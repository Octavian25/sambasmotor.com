(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1032:function(a,e,t){"use strict";t.r(e);var n=t(0),s=t.n(n),r=t(7),o=t(41),i=t(28),c=t(18),d=t(5),m=t(131),l=t(42),h=t.n(l),p=t(49),u=t(9),b=t(132);const k=Object(n.lazy)(()=>t.e(24).then(t.bind(null,1001)));e.default=Object(i.b)(a=>({hideModal:a.datamaster.modalDialog,onSend:a.datamaster.onSend,listcustomer:a.datamaster.listcustomer,noFaktur:a.datamaster.noFaktur}),null)(class extends s.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"nama_customer",text:"Nama",sort:!0},{dataField:"alamat",text:"Alamat"},{dataField:"kota",text:"Kota"},{dataField:"handphone",text:"Handphone"},{dataField:"nopol_kendaraan",text:"Nomor Polisi"},{dataField:"merk_kendaraan",text:"Merk"},{dataField:"warna_kendaraan",text:"Warna"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e)=>{let t={kode_customer:e.kode_customer,nama_customer:e.nama_customer,alamat:e.alamat,kota:e.kota,handphone:e.handphone,nopol_kendaraan:e.nopol_kendaraan,merk_kendaraan:e.merk_kendaraan,type_kendaraan:e.type_kendaraan,nomesin_kendaraan:e.nomesin_kendaraan,warna_kendaraan:e.warna_kendaraan};return this.setState({}),s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:()=>this.editModal(t),className:"btn btn-warning mr-3"},"Edit",s.a.createElement("i",{className:"fa fa-edit ml-2"}))))}}],datakategori:[{nama_customer:"Octa",alamat_customer:"ARIA GRAHA",kota_customer:"BANDUNG",handphone_customer:"0988888",no_polisi:"D 4093 AAP",merk:"NMAX",type:"MATIC",no_mesin:"QWERT1234ASDFG",warna:"HITAM"}]}}componentDidMount(){this.props.dispatch(Object(d.xb)()),this.props.dispatch(Object(d.Ab)())}editModal(a){this.props.dispatch(Object(d.Wb)()),this.props.dispatch(Object(d.bb)(a)),this.setState({isEdit:!0})}tambahModal(){this.props.dispatch(Object(d.Wb)()),this.props.dispatch(Object(d.bb)("")),this.setState({isEdit:!1})}handleSubmit(a){let e={kode_customer:this.props.noFaktur||"-",nama_customer:a.nama_customer||"-",alamat:a.alamat_customer||"-",kota:a.kota_customer||"-",handphone:a.handphone_customer||"-",nopol_kendaraan:a.no_polisi.replace(/\s/g,"")||"-",merk_kendaraan:a.merk||"-",type_kendaraan:a.type||"-",nomesin_kendaraan:a.no_mesin||"-",warna_kendaraan:a.warna||"-"},t={nama_customer:a.nama_customer||"-",alamat:a.alamat_customer||"-",kota:a.kota_customer||"-",handphone:a.handphone_customer||"-",nopol_kendaraan:a.no_polisi.replace(/\s/g,"")||"-",merk_kendaraan:a.merk||"-",type_kendaraan:a.type||"-",nomesin_kendaraan:a.no_mesin||"-",warna_kendaraan:a.warna||"-"};this.state.isEdit?Object(u.d)(this.props.dispatch,"customer/update/by-kode-customer/"+a.kode_customer,t).then(()=>Object(c.b)("Berhasil Dirubah")).then(()=>this.props.dispatch(Object(p.a)("dataBarang"))).then(()=>this.props.dispatch(Object(d.Tb)())).then(()=>this.props.dispatch(Object(d.xb)())).then(()=>this.props.dispatch(Object(d.Ab)())).catch(()=>Object(c.a)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi")):Object(u.c)("customer/add",e).then(()=>Object(c.b)("Berhasil Ditambahkan")).then(()=>this.props.dispatch(Object(p.a)("dataBarang"))).then(()=>this.props.dispatch(Object(d.Tb)())).then(()=>this.props.dispatch(Object(d.xb)())).then(()=>this.props.dispatch(Object(d.Ab)())).catch(()=>Object(c.a)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi"))}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(r.b,{to:"#"},"Data Master")),s.a.createElement("li",{className:"breadcrumb-item active"},"Master Customer")),s.a.createElement("h1",{className:"page-header"},"Master Customer "),s.a.createElement(o.a,null,s.a.createElement(o.c,null,"Master Customer"),s.a.createElement(o.b,null,s.a.createElement("br",null),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(b.a,{keyField:"kode_customer",data:this.props.listcustomer||[],columns:this.state.columns,CSVExport:!0,tambahData:!0,handleClick:()=>this.tambahModal()})),s.a.createElement("br",null)),s.a.createElement(m.a,{title:this.state.isEdit?"Edit Data Customer":"Tambah Data Customer",content:s.a.createElement(n.Suspense,{fallback:s.a.createElement(h.a,{width:"100%",height:50,count:2})},s.a.createElement(k,{onSubmit:a=>this.handleSubmit(a),onSend:this.props.onSend,isEdit:this.state.isEdit,noFaktur:this.props.noFaktur}))})))}})}}]);
//# sourceMappingURL=66.b46e2b02.chunk.js.map