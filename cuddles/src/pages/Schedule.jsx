import React, { useState } from "react";
import "../styles/Schedule.css";
// import Calendar from "react-calendar";
import ScheduleCard from "../components/ScheduleCard";

const Schedule = () => {
  const [selectedOption1, setSelectedOption1] = useState("option1");
  const [selectedOption2, setSelectedOption2] = useState("optionA");

  const handleDropdown1Change = (e) => {
    setSelectedOption1(e.target.value);
  };

  const handleDropdown2Change = (e) => {
    setSelectedOption2(e.target.value);
  };

  return (
    <div>
      <div className="dropdown">
        <select value={selectedOption1} onChange={handleDropdown1Change}>
          <option value="option1">Consultant</option>
          <option value="option2">Dr. M.R.M. Rishard</option>
          <option value="option3">Dr. Sanjaya De Silva</option>
        </select>
      </div>

      <div className="dropdown">
        <select value={selectedOption2} onChange={handleDropdown2Change}>
          <option value="optionA">Session</option>
          <option value="optionB">8.30 am - 12.30 pm</option>
          <option value="optionC">12.30 pm - 5.30 pm</option>
        </select>
      </div>

      <div className="content-container">
        <div className="left-content">
          <ScheduleCard />
        </div>

        <div className="right-content">
          <span>Add Calender Here - Laterr</span>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
