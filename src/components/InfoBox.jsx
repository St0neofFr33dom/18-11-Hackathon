import React from "react";
import "./InfoBox.css";
function InfoBox({ props }) {
  return (
    <div className="InfoBox" tabIndex={0}>
  
        <div className="values">
          <h4 style={{fontWeight:"bold"}}>{props.name}</h4>
          <h4>{props.firstLine} {props.secondLine}</h4>
          <h4>{props.town}</h4>
          <h4>{props.postcode}</h4>
        </div>
    </div>
  );
}

export default InfoBox;
