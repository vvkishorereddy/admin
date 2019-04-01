import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  HOME_ROUTE,
  JAVASCRIPT_ROUTE,
  JAVASCRIPT_ADD_ROUTE
} from "../../constants";

class Nav extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <div
        className="sidebar"
        data-color="azure"
        data-background-color="black"
        data-image="/assets/img/sidebar-2.jpg"
      >
        <div className="logo">
          <a
            href="http://www.careersera.com"
            className="simple-text logo-normal"
          >
            Admin Panel
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className={`nav-item ${pathname === HOME_ROUTE && `active`}`}>
              <Link to={HOME_ROUTE} className="nav-link">
                <i className="material-icons">dashboard</i>
                <p>Dashboard</p>
              </Link>
            </li>

            <li
              className={`nav-item ${(pathname === JAVASCRIPT_ROUTE ||
                pathname === JAVASCRIPT_ADD_ROUTE) &&
                `active`}`}
            >
              <Link to={JAVASCRIPT_ROUTE} className="nav-link">
                <i className="material-icons">content_paste</i>
                <p>JavaScript QA</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
