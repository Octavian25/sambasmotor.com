import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import HeadLaporanPembayaranCustomer from "./HeadLaporanPembayaranCustomer";

class LaporanPembayaranCustomer extends Component {
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
          <li className="breadcrumb-item active">Laporan PembayaranCustomer</li>
        </ol>
        <h1 className="page-header">Laporan PembayaranCustomer </h1>
        <Panel>
          <PanelHeader>Laporan PembayaranCustomer</PanelHeader>
          <PanelBody>
            <HeadLaporanPembayaranCustomer />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanPembayaranCustomer;
