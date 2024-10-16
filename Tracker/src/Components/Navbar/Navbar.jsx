import React from "react";
import "./Navbar.css";
import employee_logo from "../../assets/employee_logo.jpg";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <h1>Employee Details</h1>
        <div className="nav-image">
          <img src={employee_logo} alt="" />
        </div>
      </div>
      <div className="nav-right">
        <button><p>Log Out</p></button>
      </div>
    </nav>
  );
};

export default Navbar;
