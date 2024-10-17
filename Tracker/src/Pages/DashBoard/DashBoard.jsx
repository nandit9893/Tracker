import React, { useEffect, useState } from "react";
import user from "../../assets/user.jpeg";
import "./DashBoard.css";
import axios from "axios";

const DashBoard = () => {
  const [employee, setEmployee] = useState({});
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/employee"); 
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchData();

    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      const formattedTime = now.toLocaleTimeString("en-US");
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="dashboard">
      <div className="header">
        <h2>{employee.name}</h2>
        <img src={user} alt="" />
      </div>
      <div className="user-basic-info">
        <p><strong>EMP ID :</strong> {employee.empid}</p>
        <p><strong>Department :</strong> {employee.department}</p>
        <p><strong>Role :</strong> {employee.role}</p>
        <p><strong>Email :</strong> {employee.email}</p>
        <p><strong>Contact :</strong> {employee.contact}</p>
        <p><strong>Address :</strong> {employee.address}</p>
        <p><strong>Date Of Joining :</strong> {employee.dateofjoining}</p>
      </div>
      <div className="emp-clock">
        <div className="current">
          <p>Today's Date : {currentDate}</p>
        </div>
        <div className="current">
          <p>Time : {currentTime}</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
