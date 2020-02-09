import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink style={{margin: 5}} to="/">all</NavLink>
      <NavLink style={{margin: 5}} to="/active">active</NavLink>
      <NavLink style={{margin: 5}} to="/compleated">compleated</NavLink>
    </nav>
  );
}

export default Navigation;