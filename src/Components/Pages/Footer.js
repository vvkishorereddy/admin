import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <nav className="float-left">
            <ul>
              <li>
                <a href="https://www.careersera.com">Careers Era</a>
              </li>
              <li>
                <a href="https://www.careersera.com">About Us</a>
              </li>
              <li>
                <a href="https://www.careersera.com">Blog</a>
              </li>
              <li>
                <a href="https://www.careersera.com">Licenses</a>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right" id="date" />
        </div>
      </footer>
    );
  }
}
