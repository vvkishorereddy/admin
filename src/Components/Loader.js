import React from "react";

export default function Loader() {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 text-center">
            <div className="lds-ring">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
