import React from "react";
import "./InfoBox.css";
function InfoBox({ props }) {
  return (
    <div className="InfoBox">
      <h2>{props.name}</h2>
      <div className="data">
        <div className="labels">
          <h4>Address:</h4>
          <h4>Telephone:</h4>
          <h4>E-Mail:</h4>
          <h4>Rating:</h4>
        </div>
        <div className="values">
          <h4>{props.address}</h4>
          <h4>{props.telephone}</h4>
          <h4>{props.email}</h4>
          <h4>{props.rating}</h4>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
