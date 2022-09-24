import React from "react";
import './CustomLink.css';
import {Link , useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
        <Link className={isActive ? "active" : ""} to={to} {...props}>
            {children}
        </Link>
    )
  }

export default CustomLink;