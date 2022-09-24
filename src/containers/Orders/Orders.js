import React from "react";
import "./Orders.css";
import Options from "../Options/Options";

function Orders() {
  return (
    <div className="body">
      <Options>
        <p>Search</p>
        <p>Add</p>
        <p>My</p>
      </Options>
      <div className="content">
        <h1>Orders</h1>
      </div>
    </div>
  );
}

export default Orders;
