import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/SubmitImage/">Submit Image</Link>
          </li>
          <li>
            <Link to="/Nature/">Nature</Link>
          </li>
          <li>
            <Link to="/Animals/">Animals</Link>
          </li>
          <li>
            <Link to="/Oceans/">Oceans</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
