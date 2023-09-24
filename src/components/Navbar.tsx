// src/components/Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container">
        <Link className="navbar-brand text-info" to="/">
          Game Website
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-info" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
