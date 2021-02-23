import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AxiosMasterGet } from "../../../../axios";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import CetakPenjualanSparepart from "./CetakPenjualanSparepart";
import HeadLaporanPenjualanSparepart from "./HeadLaporanPenjualanSparepart";

class LaporanPenjualanSparepart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getLaporan(hasil) {
    AxiosMasterGet(
      "laporan/penjualan/lap-penjualan-sparepart/" +
        `${hasil.tanggal_awal}&${hasil.tanggal_akhir}&${hasil.kriteria_sparepart}`
    )
      .then((res) =>
        this.setState({
          listLaporan: res && res.data,
        })
      )
      .then(() =>
        CetakPenjualanSparepart(
          hasil.tanggal_awal,
          hasil.tanggal_akhir,
          hasil.kriteria_sparepart,
          this.state.listLaporan
        )
      );
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Laporan</Link>
          </li>
          <li className="breadcrumb-item active">
            Laporan Penjualan Sparepart
          </li>
        </ol>
        <h1 className="page-header">Laporan Penjualan Sparepart </h1>
        <Panel>
          <PanelHeader>Laporan Penjualan Sparepart</PanelHeader>
          <PanelBody>
            <HeadLaporanPenjualanSparepart
              onSubmit={(data) => this.getLaporan(data)}
            />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanPenjualanSparepart;
