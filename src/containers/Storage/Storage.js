import React from "react";
import "./Storage.css";
import Options from "../Options/Options";
import { Button } from "antd";
import SideBar from "../SideBar/SideBar";

function Storage() {
  return (
    <div className="body">
      <SideBar>
        <Options>
          <Button className="option" type="primary" shape="circle">
            Search
          </Button>
          <Button className="option" type="primary" shape="circle">
            Add
          </Button>
          <Button className="option" type="primary" shape="circle">
            Sort
          </Button>
          <Button className="option" type="primary" shape="circle">
            Filter
          </Button>
        </Options>
      </SideBar>
      <div className="content">
        <h1>Storage</h1>
      </div>
    </div>
  );
}

export default Storage;
