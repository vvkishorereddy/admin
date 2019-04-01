import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { JAVASCRIPT_ADD_ROUTE } from "../../../constants";
import Loader from "../../Loader";
import TableRow from "../TableRow";

import { lisItems } from "../../../Actions/javascriptActions";

class Javascript extends Component {
  componentDidMount() {
    this.props.listItems();
  }
  render() {
    const { data } = this.props.JavascriptQuestionAnswer;
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="card">
                <div className="card-header card-header-info">
                  <div className="row">
                    <div className="col-lg-10 col-md-12">
                      <h4 className="card-title">Javascript QA</h4>
                    </div>
                    <div className="col-lg-2 col-md-12">
                      <Link
                        to={JAVASCRIPT_ADD_ROUTE}
                        className="btn btn-success float-right"
                      >
                        Add
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body table-responsive">
                  <table className="table table-hover">
                    <thead className="text-warning">
                      <tr>
                        <th>ID</th>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.length &&
                        data.map(row => <TableRow key={row.id} row={row} />)}
                      {!data.length && (
                        <tr>
                          <td colSpan="5">
                            <Loader />
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    JavascriptQuestionAnswer: state.JavascriptQuestionAnswer
  };
};

const mapDispatchToProps = dispatch => ({
  listItems: () => dispatch(lisItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Javascript);
