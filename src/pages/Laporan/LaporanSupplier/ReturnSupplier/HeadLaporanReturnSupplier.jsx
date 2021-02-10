import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { AxiosMasterGet } from "../../../../axios";
import {
  ReanderField,
  ReanderSelect,
} from "../../../../components/notification/notification";

class HeadLaporanReturnSupplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSupplier: [],
    };
  }

  componentDidMount() {
    AxiosMasterGet("supplier/get/all").then((res) =>
      this.setState({
        listSupplier: res.data,
      })
    );
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-3">
            <Field
              name="kode_supplier"
              component={ReanderSelect}
              options={this.state.listSupplier.map((list) => {
                let data = {
                  value: list.kode_supplier,
                  name: list.nama_supplier,
                };
                return data;
              })}
              type="text"
              label="Kode Supplier"
              placeholder="Masukan Kode Supplier"
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
          <div className="col-lg-3">
            <Field
              name="type"
              component={ReanderSelect}
              options={[
                { value: "REKAP", name: "REKAP" },
                { value: "DETAIL", name: "DETAIL" },
              ]}
              type="text"
              label="Type"
              placeholder="Masukan Divisi"
            />
          </div>
          <div className="col-lg-12">
            <div className="text-right">
              <button className="btn btn-primary">
                Lihat Data <i className="fa fa-print ml-3"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

HeadLaporanReturnSupplier = reduxForm({
  form: "HeadLaporanReturnSupplier",
  enableReinitialize: true,
})(HeadLaporanReturnSupplier);
export default connect()(HeadLaporanReturnSupplier);
