import React, { useEffect, useState } from "react";
import user from "../../assets/user.jpeg";
import axios from "axios";
import "./DailyUpdate.css";

const DailyUpdate = () => {
  const [dailyUpdates, setDailyUpdates] = useState([]);
  const [formData, setFormData] = useState({
    projecttitle: "",
    dateofsubmission: "",
    workDescription: "",
  });

  useEffect(() => {
    const fetchDailyUpdates = async () => {
      try {
        const response = await axios.get("http://localhost:3001/dailyUpdates");
        const sortedUpdates = response.data.sort((a, b) => new Date(b.dateofsubmission) - new Date(a.dateofsubmission));
        setDailyUpdates(sortedUpdates.slice(0, 5));
      } catch (error) {
        console.error("Error fetching daily updates:", error);
      }
    };

    fetchDailyUpdates();
  }, []);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const saveDailyData = async () => {
    try {
      const response = await axios.post("http://localhost:3001/dailyUpdates", formData);
      const updatedUpdates = await axios.get("http://localhost:3001/dailyUpdates");
      const sortedUpdates = updatedUpdates.data.sort((a, b) => new Date(b.dateofsubmission) - new Date(a.dateofsubmission));
      setDailyUpdates(sortedUpdates.slice(0, 5));
      setFormData({
        projecttitle: "",
        dateofsubmission: "",
        workDescription: "",
      });
    } catch (error) {
      console.error("Error saving daily data:", error);
    }
  };

  return (
    <div className="daily-update">
      <header className="daily-header">
        <h2>Rahul Kapoor</h2>
        <img src={user} alt="User Avatar" />
      </header>

      <section className="today-task">
        <h1>Today's Task</h1>
        <hr />
        <div className="task-inputs">
          <label>
            <h3>Work Title</h3>
            <input type="text" placeholder="Project Title" name="projecttitle" onChange={onChangeHandler} value={formData.projecttitle} />
          </label>
          <label>
            <h3>Work Date</h3>
            <input type="date" name="dateofsubmission" onChange={onChangeHandler} value={formData.dateofsubmission} />
          </label>
          <label className="text-area">
            <h3>Work Description</h3>
            <textarea rows="7" placeholder="Type here..." name="workDescription" onChange={onChangeHandler} value={formData.workDescription}></textarea>
          </label>
          <button onClick={saveDailyData} className="save-button">Save</button>
        </div>
      </section>

      <section className="last-updates">
        <h1>Last 5 Days' Updates</h1>
        <div className="data-header">
          <p>Date</p>
          <p>Work Title</p>
          <p>Work Description</p>
        </div>
        {
          dailyUpdates.map((update, index) => (
            <div key={index} className="update-row">
              <p>{update.dateofsubmission}</p>
              <p>{update.projecttitle}</p>
              <p>{update.workDescription}</p>
            </div>
          ))
        }
      </section>
    </div>
  );
};

export default DailyUpdate;
