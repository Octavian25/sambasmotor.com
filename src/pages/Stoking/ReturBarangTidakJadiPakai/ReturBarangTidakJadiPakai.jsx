import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { reset } from "redux-form";
import { onProgress } from "../../../actions/datamaster_action";
import { getReturBarangTidakJadi } from "../../../actions/stocking_action";
import { AxiosMasterGet } from "../../../axios";
import { NotifSucces } from "../../../components/notification/notification";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import { simpanLocal } from "../../../config/Helper";
import HeadReturBarang from "./HeadReturBarangTidakJadiPakai";

const maptostate = (state) => {
  return {
    returbarang_temp: state.stocking.retur_barang,
  };
};

class ReturBarangTidakJadiPakai extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      modalDialog: false,
      isLoading: false,
    };
  }

  componentDidMount() {
    localStorage.removeItem("ReturBarang_temp");
    this.props.dispatch(getReturBarangTidakJadi());
    AxiosMasterGet("").then((res) =>
      localStorage.setItem("", res.data[0].no_retur)
    );
  }

  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Stocking</Link>
          </li>
          <li className="breadcrumb-item active">
            Retur Barang Tidak Jadi Pakai
          </li>
        </ol>
        <h1 className="page-header">Retur Barang Tidak Jadi Pakai</h1>
        <Panel>
          <PanelHeader>Retur</PanelHeader>
          <PanelBody>
            <HeadReturBarang
              onSubmit={(data) => this.sendData(data)}
              retur_temp={this.props.retur_temp}
            />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default connect(maptostate, null)(ReturBarangTidakJadiPakai);
