import React from "react";

const EnqueryBox = ({ ItineryData }) => {
  return (
      <div className="card-body p-4 enquiry-box" >
        <div className="d-flex justify-content-end mb-2">
          {/* <span className="badge bg-warning text-dark px-2 py-1 rounded-pill">
            ⭐ 4.8(12k)
          </span> */}
        </div>

        <h4 className="card-title">Starting at</h4>
        <h2 className="fw-bold">
          INR {ItineryData?.price ? Math.ceil(ItineryData.price).toLocaleString("en-IN") : ""}
          <p className="card-text">
            Per Adult
          </p>
        </h2>
        

        <button
          className="btn btn-warning text-dark fw-semibold w-100 py-2 rounded-pill"
          style={{ fontSize: "0.9rem", letterSpacing: "0.5px" }}
        >
          SEND ENQUIRY
        </button>
      </div>
  );
};

export default EnqueryBox;
