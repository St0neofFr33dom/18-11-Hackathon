import React from "react";
import "./InfoBox.css";
function InfoBox({ props }) {
  return (
    <div className="InfoBox">
      <h2>{props.name}</h2>
      <div className="data">
        <div className="labels">
          <h4>Address:</h4>
          <h4>Town and Postcode</h4>
          <h4>Telephone:</h4>
          <h4>E-Mail:</h4>
          <h4>Website:</h4>
        </div>
        <div className="values">
          <h4>{props.firstLine} {props.secondLine}</h4>
          <h4>{props.town}, {props.postcode}</h4>
          <h4>{props.phone}</h4>
          <h4>{props.email}</h4>
          <h4>{props.website}</h4>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
