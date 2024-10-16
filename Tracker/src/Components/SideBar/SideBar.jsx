import React from 'react';
import attendance from "../../assets/attendance.png";
import dailyupdate from "../../assets/dailyupdate.png";
import employee from "../../assets/employee.png";
import "./SideBar.css";
import { NavLink } from 'react-router-dom';
import employee_logo from "../../assets/employee_logo.jpg";
const SideBar = () => {
  return (
    <div className="sidebar">
        <div className="top-sidebar">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}>
                        <img src={employee} alt="Employee Information" />
                        <p>Employee Information</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/attendance" className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}>
                        <img src={attendance} alt="Attendance" />
                        <p>Attendance</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/daily-update" className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}>
                        <img src={dailyupdate} alt="Daily Update" />
                        <p>Daily Update</p>
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className="down-sidebar">
            <img src={employee_logo} alt="" />
        </div>
    </div>
  )
}

export default SideBar;
