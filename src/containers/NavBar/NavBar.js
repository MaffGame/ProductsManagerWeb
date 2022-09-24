import React from "react";
import "./NavBar.css";
import CustomLink from "../../components/CustomLink/CustomLink";

function NavBar() {
  return (
    <div className="nav-bar">
      <CustomLink to="/storage">Storage</CustomLink>
      <CustomLink to="/orders">Orders</CustomLink>
      <CustomLink to="/reciepts">Reciepts</CustomLink>
    </div>
  );
}

export default NavBar;
