import React, { Component } from "react";
import { Link } from "react-router-dom";
import { JAVASCRIPT_ROUTE } from "../../../constants";

export default class JavascriptAdd extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="card ">
                <div className="card-header card-header-info">
                  <div className="row">
                    <div className="col-lg-10 col-md-12">
                      <h4 className="card-title">Javascript QA</h4>
                    </div>
                    <div className="col-lg-2 col-md-12">
                      <Link
                        to={JAVASCRIPT_ROUTE}
                        class="btn btn-success float-right"
                      >
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInput1"
                        className="bmd-label-floating"
                      >
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
        </div>
      </div>
    );
  }
}
