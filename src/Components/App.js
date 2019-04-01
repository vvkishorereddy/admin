import React, { Component, Fragment } from "react";
//import Plugin from "./Plugin";
import Nav from "./Pages/Nav";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Router from "./Router";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="wrapper ">
          <Nav />
          <div className="main-panel">
            <Header />
            <Router />
            <Footer />
          </div>
        </div>
        {/*<Plugin />*/}
      </Fragment>
    );
  }
}

export default App;
