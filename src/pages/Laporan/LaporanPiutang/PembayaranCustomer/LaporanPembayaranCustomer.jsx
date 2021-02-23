import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AxiosMasterGet } from "../../../../axios";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import CetakPembayaranPiutang from "./CetakPembayaranCustomer";
import HeadLaporanPembayaranCustomer from "./HeadLaporanPembayaranCustomer";

class LaporanPembayaranCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getLaporan(hasil) {
    AxiosMasterGet(
      "laporan/bayar-piutang-customer/lap-pembayaran-piutang/" +
        `${hasil.tanggal_awal}&${hasil.tanggal_akhir}&${hasil.kode_customer}`
    )
      .then((res) =>
        this.setState({
          listLaporan: res.data,
        })
      )
      .then(() => CetakPembayaranPiutang(this.state.listLaporan));
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Laporan</Link>
          </li>
          <li className="breadcrumb-item active">Laporan Pembayaran Piutang</li>
        </ol>
        <h1 className="page-header">Laporan Pembayaran Piutang </h1>
        <Panel>
          <PanelHeader>Laporan Pembayaran Piutang</PanelHeader>
          <PanelBody>
            <HeadLaporanPembayaranCustomer
              onSubmit={(data) => this.getLaporan(data)}
            />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanPembayaranCustomer;
