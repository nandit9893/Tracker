import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/SideBar/SideBar";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Attendance from "./Pages/Attendance/Attendance";
import DailyUpdate from "./Pages/DailyUpdate/DailyUpdate";
import "./App.css"; 

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <SideBar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/daily-update" element={<DailyUpdate />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
