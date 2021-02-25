import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import HeadLaporanMedicalReport from "./HeadLaporanMedicalReport";

class LaporanMedicalReport extends Component {
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
          <li className="breadcrumb-item active">Laporan Medical Report</li>
        </ol>
        <h1 className="page-header">Laporan Medical Report </h1>
        <Panel>
          <PanelHeader>Laporan Medical Report</PanelHeader>
          <PanelBody>
            <HeadLaporanMedicalReport />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanMedicalReport;