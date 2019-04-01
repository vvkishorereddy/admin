import React, { Component } from "react";

export default class JavascriptAdd extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="card card-nav-tabs">
            <h4 className="card-header card-header-info">Qa</h4>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInput1" className="bmd-label-floating">
                    Question
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInput1"
                  />
                </div>
                <div className="form-group">
                  <div className="form-group">
                    <label className="bmd-label-floating">Answer</label>
                    <textarea
                      className="form-control"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
