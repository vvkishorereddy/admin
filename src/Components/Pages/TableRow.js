import React from "react";

export default function TableRow({ row }) {
  const { id, question, answer, status } = row;
  return (
    <tr>
      <td style={{ width: "5%" }}>{id}</td>
      <td style={{ width: "10%" }}>{question}</td>
      <td style={{ width: "60%" }}>{answer}</td>
      <td style={{ width: "5%" }}>
        <div className="togglebutton">
          <label>
            <input type="checkbox" defaultChecked={status} disabled />
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
