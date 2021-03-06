import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { getCustomer } from "../../../actions/datamaster_action";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

class HeadLaporanMedicalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatch(getCustomer());
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-3">
            <Field
              name="nopol_kendaran"
              component={ReanderSelect}
              options={this.props.listcustomer.map((list) => {
                let data = {
                  value: list.nopol_kendaraan,
                  name: `${list.nopol_kendaraan} - ${list.nama_customer}`,
                };
                return data;
              })}
              type="text"
              label="Nomor Polisi"
              placeholder="Masukan Nomor Polisi"
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="tanggal_awal"
              component={ReanderField}
              type="date"
              label="Dari Tanggal"
              placeholder="Masukan Tanggal Awal"
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="tanggal_akhir"
              component={ReanderField}
              type="date"
              label="Sampai Tanggal"
              placeholder="Masukan Sampai Tanggal"
            />
          </div>
          <div className="col-lg-12">
            <div className="text-right">
              <button className="btn btn-primary" disabled={this.props.onSend}>
                {this.props.onSend ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> &nbsp; Sedang
                    Menyiapkan Laporan
                  </>
                ) : (
                  <>
                    Lihat Data <i className="fa fa-print ml-3 "></i>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

HeadLaporanMedicalReport = reduxForm({
  form: "HeadLaporanMedicalReport",
  enableReinitialize: true,
})(HeadLaporanMedicalReport);
export default connect((state) => {
  return {
    listcustomer: state.datamaster.listcustomer,
    onSend: state.datamaster.onSend,
  };
})(HeadLaporanMedicalReport);
