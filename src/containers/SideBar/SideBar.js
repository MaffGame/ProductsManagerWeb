import React from "react";
import "./SideBar.css";

function SideBar({ children, ...props }) {
  return (
    <div className="side-bar" {...props}>
      {children}
    </div>
  );
}

export default SideBar;
