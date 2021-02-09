import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import HeadLaporanPenjualanRongsok from "./HeadLaporanPenjualanRongsok";

class LaporanPenjualanRongsok extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Laporan</Link>
          </li>
          <li className="breadcrumb-item active">Laporan Penjualan Rongsok</li>
        </ol>
        <h1 className="page-header">Laporan Penjualan Rongsok </h1>
        <Panel>
          <PanelHeader>Laporan Penjualan Rongsok</PanelHeader>
          <PanelBody>
            <HeadLaporanPenjualanRongsok />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanPenjualanRongsok;
