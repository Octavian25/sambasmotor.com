import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
  RenderTime,
} from "../../../components/notification/notification";
import {
  getCustomer,
  getKategoriService,
  getSales,
} from "../../../actions/datamaster_action";

class ModalBookingService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange(nama, data) {
    let split = data || "DEFAULT|DEFAULT";
    let hasil = split.split("|");
    this.props.change(nama, hasil[1]);
  }
  componentDidMount() {
    this.props.dispatch(getCustomer());
    this.props.dispatch(getKategoriService());
    this.props.dispatch(getSales());
  }
  setCustomerDetail(data) {
    let hasil = data.split("||");
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3">
                <Field
                  name="pelaggan"
                  component={ReanderSelect}
                  options={this.props.listCustomer.map((list) => {
                    let data = {
                      value: `${list.kode_customer}||${list.nama_customer}||${list.alamat}||${list.handphone}||${list.nopol_kendaraan}||${list.merk_kendaraan}||${list.warna_kendaraann}`,
                      name: list.nama_customer,
                    };
                    return data;
                  })}
                  type="text"
                  label="Nama customer"
                  placeholder="Masukan Nama customer"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="kategori_service"
                  component={ReanderSelect}
                  options={this.props.listkategoriservice.map((list) => {
                    let data = {
                      value: list.id_kategori_service,
                      name: list.kategori_service,
                    };
                    return data;
                  })}
                  type="text"
                  label="Kategori Service"
                  placeholder="Masukan Kategori Service"
                />
              </div>
              <div className="col-lg-2">
                <Field
                  name="tanggal"
                  component={ReanderField}
                  type="date"
                  label="Tanggal Pelayanan"
                  placeholder="Masukan Tanggal Pelayanan"
                />
              </div>
              <div className="col-lg-1">
                <Field
                  name="jam"
                  component={RenderTime}
                  type="text"
                  label="Jam"
                  placeholder="Masukan Jam"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="id_mekanik"
                  component={ReanderSelect}
                  options={this.props.listsales
                    .filter((list) => list.kode_divisi === "MKN")
                    .map((list) => {
                      let data = {
                        value: list.kode_pegawai,
                        name: list.nama_pegawai,
                      };
                      return data;
                    })}
                  type="text"
                  label="ID Mekanik"
                  placeholder="Masukan ID Mekanik"
                />
              </div>
              <div className="col-lg-12">
                <label htmlFor="">Catatan</label>
                <Field
                  name="catatan"
                  component="textarea"
                  type="text"
                  label="Catatan"
                  placeholder="Masukan Catatan"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt-3">
            <div className="text-right">
              <button className="btn btn-primary">
                Simpan <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ModalBookingService = reduxForm({
  form: "ModalBookingService",
  enableReinitialize: true,
})(ModalBookingService);
export default connect((state) => {
  return {
    listCustomer: state.datamaster.listcustomer,
    listkategoriservice: state.datamaster.listkategoriservice,
    listsales: state.datamaster.listsales,
  };
})(ModalBookingService);
