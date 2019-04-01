import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "
        id="navigation-example"
      >
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <a className="navbar-brand" href="javascript:void(0)">
              Dashboard
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-target="#navigation-example"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar" />
            <span className="navbar-toggler-icon icon-bar" />
            <span className="navbar-toggler-icon icon-bar" />
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <form className="navbar-form">
              <div className="input-group no-border">
                <input
                  type="text"
                  defaultValue
                  className="form-control"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="btn btn-default btn-round btn-just-icon"
                >
                  <i className="material-icons">search</i>
                  <div className="ripple-container" />
                </button>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="material-icons">dashboard</i>
                  <p className="d-lg-none d-md-block">Stats</p>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="javscript:void(0)"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="material-icons">notifications</i>
                  <span className="notification">5</span>
                  <p className="d-lg-none d-md-block">Some Actions</p>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="javascript:void(0)">
                    Mike John responded to your email
                  </a>
                  <a className="dropdown-item" href="javascript:void(0)">
                    You have 5 new tasks
                  </a>
                  <a className="dropdown-item" href="javascript:void(0)">
                    You're now friend with Andrew
                  </a>
                  <a className="dropdown-item" href="javascript:void(0)">
                    Another Notification
                  </a>
                  <a className="dropdown-item" href="javascript:void(0)">
                    Another One
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="material-icons">person</i>
                  <p className="d-lg-none d-md-block">Account</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
