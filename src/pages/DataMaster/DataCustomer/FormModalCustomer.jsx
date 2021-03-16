import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, hasSubmitFailed, reduxForm } from "redux-form";
import { AxiosMasterGet } from "../../../axios";
import {
  NotifError,
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";
import { required } from "../../../validasi/normalize";
import ValidasiMasterKategori from "../../../validasi/ValidasiMasterKategori";

const maptostate = (state) => {
  if (state.datamaster.datacustomer !== undefined) {
    return {
      initialValues: {
        nama_customer: state.datamaster.datacustomer.nama_customer,
        kode_customer: state.datamaster.datacustomer.kode_customer,
        alamat_customer: state.datamaster.datacustomer.alamat,
        kota_customer: state.datamaster.datacustomer.kota,
        handphone_customer: state.datamaster.datacustomer.handphone,
        no_polisi: JSON.stringify(state.datamaster.datacustomer.nopol_kendaraan),
        merk: state.datamaster.datacustomer.merk_kendaraan,
        type: state.datamaster.datacustomer.type_kendaraan,
        no_mesin: state.datamaster.datacustomer.nomesin_kendaraan,
        warna: state.datamaster.datacustomer.warna_kendaraan,
      },
      onSend: state.datamaster.onSend,
    };
  } else {
    return {
      onSend: state.datamaster.onSend,
    };
  }
};

class FormModalCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMerk: [],
      listCustomer: [],
    };
  }

  componentDidMount() {
    AxiosMasterGet("merk-kendaraan/get/all")
      .then((res) =>
        this.setState({
          listMerk: res.data,
        })
      )
      .catch((err) => NotifError(err.response.data || "Tidak Ada Koneksi"));
    this.props.change("kode_customer", this.props.noFaktur);
  }
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      >
        <div className="row">
          <div className="col-lg-6">
            <div className="col-lg-3 d-none">
              <Field
                name="kode_customer"
                component={ReanderField}
                type="text"
                label="Kode CUstomer"
                placeholder="Masukan Kode Customer"
                validate={required}
              />
            </div>
            <h3 className="mb-3">Data Pemilik :</h3>
            <Field
              name="nama_customer"
              component={ReanderField}
              type="text"
              label="Nama"
              placeholder="Masukan Nama"
              validate={required}
            />
            <Field
              name="alamat_customer"
              component={ReanderField}
              type="text"
              label="Alamat"
              placeholder="Masukan Alamat"
            />
            <Field
              name="kota_customer"
              component={ReanderField}
              type="text"
              label="Kota"
              placeholder="Masukan Kota"
            />
            <Field
              name="handphone_customer"
              component={ReanderField}
              type="text"
              label="Handphone"
              placeholder="Masukan Handphone"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="mb-3">Data Kendaraan :</h3>
            <Field
              name="no_polisi"
              component={ReanderSelect}
              type="text"
              label="Nomor Polisi"
              placeholder="Masukan Nomor Polisi"
              validate={required}
              options={this.state.listCustomer.map((list) => {
                let data = {
                  value: list.nopol_kendaraan[0],
                  name: list.nopol_kendaraan[0].nopol_kendaraan
                };
                console.log(list)
                return data;
              })}
            />
            <Field
              name="merk"
              component={ReanderSelect}
              options={this.state.listMerk.map((list) => {
                let data = {
                  value: list.kode_merk_kendaraan,
                  name: list.nama_merk_kendaraan,
                };
                return data;
              })}
              type="text"
              label="Merk"
              placeholder="Masukan Merk"
            />
            <Field
              name="type"
              component={ReanderField}
              type="text"
              label="Type"
              placeholder="Masukan Type"
            />
            <Field
              name="warna"
              component={ReanderField}
              type="text"
              label="Warna"
              placeholder="Masukan Warna"
            />
            <Field
              name="no_mesin"
              component={ReanderField}
              type="text"
              label="Nomor Mesin"
              placeholder="Masukan Nomor Mesin"
              validate={required}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <button className="btn btn-primary" disabled={this.props.onSend}>
            {this.props.onSend ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> &nbsp; Sedang
                Menyimpan
              </>
            ) : (
              <>
                Simpan <i className="fa fa-paper-plane ml-3 "></i>
              </>
            )}
          </button>
        </div>
      </form>
    );
  }
}

FormModalCustomer = reduxForm({
  form: "dataCustomer",
  enableReinitialize: true,
  validate: ValidasiMasterKategori,
})(FormModalCustomer);
export default connect(maptostate, null)(FormModalCustomer);
