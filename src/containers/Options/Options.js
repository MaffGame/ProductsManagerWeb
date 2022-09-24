import React from "react";
import './Options.css';

function Options({ children, ...props }) {
    return (
      <div className="options" {...props}>
          {children}
      </div>
    )
  }

export default Options;