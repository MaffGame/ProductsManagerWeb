import React from "react";
import "./Family.css";
import Options from "../Options/Options";

function Family() {
  return (
    <div className="body">
      <Options>
        <p>Users</p>
        <p>Requests</p>
        <p>Analyze</p>
      </Options>
      <div className="content">
        <h1>Family</h1>
      </div>
    </div>
  );
}

export default Family;
