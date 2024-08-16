import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName="active">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
