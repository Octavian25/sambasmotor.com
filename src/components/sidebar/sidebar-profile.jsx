import React from "react";
import { Link } from "react-router-dom";
import { getUserData } from "../notification/notification.jsx";
import { PageSettings } from "./../../config/page-settings.js";

class SidebarProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileActive: 0,
    };
    this.handleProfileExpand = this.handleProfileExpand.bind(this);
  }

  handleProfileExpand(e) {
    e.preventDefault();
    this.setState((state) => ({
      profileActive: !this.state.profileActive,
    }));
  }

  render() {
    return (
      <PageSettings.Consumer>
        {({ pageSidebarMinify }) => (
          <ul className="nav">
            <li
              className={
                "nav-profile " + (this.state.profileActive ? "expand " : "")
              }
            >
              <Link to="/" onClick={this.handleProfileExpand}>
                <div className="cover with-shadow"></div>
                <div className="image">
                  <img
                    src={require("../../assets/img/user/user-13.jpg")}
                    alt=""
                  />
                </div>
                <div className="info">
                  <b className="caret pull-right"></b>
                  {getUserData().user_name}
                  <small>{getUserData().level}</small>
                </div>
              </Link>
            </li>
          </ul>
        )}
      </PageSettings.Consumer>
    );
  }
}

export default SidebarProfile;
