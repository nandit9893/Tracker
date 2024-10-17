import React, { useEffect, useState } from "react";
import user from "../../assets/user.jpeg";
import "./Attendance.css";
import axios from "axios";

const Attendance = () => {
	const [attendance, setAttendance] = useState({});
	const [editInMode, setEditInMode] = useState(false);
	const [editOutMode, setEditOutMode] = useState(false);
	const [inData, setInData] = useState({
		clockInTime: "",
	});

	const [outData, setOutData] = useState({
		totalHours: "",
		clockOutTime: "",
	});

	useEffect(() => {
		const fetchAttendance = async () => {
			try {
				const response = await axios.get("http://localhost:3000/attendance");
				setAttendance(response.data);
			} catch (error) {
				console.error("Error fetching attendance data:", error);
			}
		};

		fetchAttendance();
	}, []);

	const changeInData = (event) => {
		const { name, value } = event.target;
		setInData((prev) => ({ ...prev, [name]: value }));
	};

	const changeOutData = (event) => {
		const { name, value } = event.target;
		setOutData((prev) => ({ ...prev, [name]: value }));
	};

	const handleClockIn = () => {
		setEditInMode(true);
	};

	const handleClockOut = () => {
		setEditOutMode(true);
	};

	const saveClockIn = async () => {
		const clockInData = {
			...attendance, 
			clockInTime: inData.clockInTime,
			status: "in",
		};

		try {
			await axios.put("http://localhost:3001/attendance", clockInData);
			setInData({ clockInTime: "" });
			setEditInMode(false);
			await fetchAttendance(); 
		} catch (error) {
			console.error("Error updating attendance data:", error);
		}
	};

	const saveClockOut = async () => {
		const clockOutData = {
			...attendance, 
			clockOutTime: outData.clockOutTime,
			totalHours: outData.totalHours,
			status: "out",
		};
		
		try {
			await axios.put("http://localhost:3001/attendance", clockOutData);
			setOutData({ totalHours: "", clockOutTime: "" }); 
			setEditOutMode(false);
			await fetchAttendance(); 
		} catch (error) {
			console.error("Error updating attendance data:", error);
		}
	};

  return (
    <div className="attendance">
      <div className="attendance-header">
        <h2>Rahul Kapoor</h2>
        <img src={user} alt="" />
      </div>
      <div className="current-attendance">
        <h2>Currently Attendance Status:</h2>
        {
          editInMode ? 
          ( <input type="text" placeholder="Set In/Out Status" name="status" value={inData.status} onChange={changeInData} /> ) 
          : 
          ( <h3>{attendance.status}</h3> )
        }
      </div>
      <div className="current-attendance">
        <h2>Total hours worked for the current day:</h2>
        {
          editOutMode ? 
          ( <input type="text" placeholder="Set Time Hours" name="totalHours" value={outData.totalHours} onChange={changeOutData} /> ) 
          : 
          ( <h3>{attendance.totalHours || "0"}</h3> )
        }
      </div>
      <div className="current-attendance">
        <h2>Today In Time:</h2>
        {
          editInMode ? 
          ( <input type="text" placeholder="Format 00:00" name="clockInTime" value={inData.clockInTime} onChange={changeInData} /> ) 
          : 
          ( <h3>{attendance.clockInTime || "0"}</h3> )
        }
      </div>
      <div className="current-attendance">
        <h2>Today Out Time:</h2>
        {
          editOutMode ? 
          ( <input type="text" placeholder="Format 00:00" name="clockOutTime" value={outData.clockOutTime} onChange={changeOutData} /> ) 
          : 
          ( <h3>{attendance.clockOutTime || "0"}</h3> )
        }
      </div>
      <div className="button-clock">
        <button onClick={editInMode ? saveClockIn : handleClockIn} disabled={editOutMode}><p>{editInMode ? "Save" : "Set IN"}</p></button>
        <button onClick={editOutMode ? saveClockOut : handleClockOut} disabled={editInMode}><p>{editOutMode ? "Save" : "Set OUT"}</p></button>
      </div>
    </div>
  );
};

export default Attendance;
