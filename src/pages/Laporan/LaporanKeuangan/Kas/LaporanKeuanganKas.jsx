import React, { Component } from "react";
import { Link } from "react-router-dom";
import { onFinish, onProgress } from "../../../../actions/datamaster_action";
import { AxiosMasterGet } from "../../../../axios";
import { getToday } from "../../../../components/notification/function";
import {
  getUserData,
  ToastError,
} from "../../../../components/notification/notification";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import CetakKeuanganKas from "./CetakKeuanganKas";
import HeadLaporanKeuanganKas from "./HeadLaporanKeuanganKas";

class LaporanKeuanganKas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLaporan: [],
    };
  }
  getLaporan(hasil) {
    this.props.dispatch(onProgress());
    AxiosMasterGet(
      "laporan/keuangan/lap-cash/" +
        `${hasil.tanggal_awal}&${hasil.tanggal_akhir}`
    )
      .then(() => this.props.dispatch(onFinish()))
      .then((res) =>
        this.setState({
          listLaporan: res.data,
        })
      )
      .then(() =>
        CetakKeuanganKas(
          hasil.tanggal_awal,
          hasil.tanggal_akhir,
          getUserData().user_name,
          getToday(),
          getUserData().level,
          this.state.listLaporan
        )
      )
      .catch((err) =>
        ToastError(
          `Error Get Laporan , Error : ${err.response.data}`
        ).then(() => this.props.dispatch(onFinish()))
      );
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Laporan</Link>
          </li>
          <li className="breadcrumb-item active">Laporan Keuangan Kas</li>
        </ol>
        <h1 className="page-header">Laporan Keuangan Kas </h1>
        <Panel>
          <PanelHeader>Laporan Keuangan Kas</PanelHeader>
          <PanelBody>
            <HeadLaporanKeuanganKas
              onSubmit={(data) => this.getLaporan(data)}
            />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanKeuanganKas;