import React from "react";
import "./NavbarStyle.css";

import Home from "../../pages/Home";
import Product from "../../pages/products/Product";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div>
            <h1 className="nav-h1">Let's shopp...</h1>
          </div>
          <div className="form-div">
            <input className="form-input"></input>

            <button className="form-btn">search</button>
          </div>

          <div className="nav-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Product">Products</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
