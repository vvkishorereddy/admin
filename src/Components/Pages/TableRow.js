import React from "react";

export default function TableRow() {
  return (
    <tr>
      <td style={{ width: "5%" }}>1</td>
      <td style={{ width: "10%" }}>What is JavaScript?</td>
      <td style={{ width: "60%" }}>
        JavaScript is a client-side as well as server side scripting language
        that can be inserted into HTML pages and is understood by web browsers.
        JavaScript is also an Object based Programming language
      </td>
      <td style={{ width: "5%" }}>
        <div className="togglebutton">
          <label>
            <input type="checkbox" defaultChecked disabled />
            <span className="toggle" />
          </label>
        </div>
      </td>
      <td className="td-actions text-right" style={{ width: "5%" }}>
        <button type="button" className="btn btn-success btn-link">
          <i className="material-icons">edit</i>
          <div className="ripple-container" />
        </button>
        <button type="button" className="btn btn-danger btn-link">
          <i className="material-icons">close</i>
          <div className="ripple-container" />
        </button>
      </td>
    </tr>
  );
}
