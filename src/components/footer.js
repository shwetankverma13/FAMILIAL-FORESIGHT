import React, { useState } from "react";

const Footer = () => {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  let day = new Date().getDay();

  const [aTime, setAtime] = useState(time);
  const [aDate, setAdate] = useState(date);
  const [aDay, setAday] = useState(day);

  const Update = () => {
    time = new Date().toLocaleTimeString();
    setAtime(time);

    date = new Date().toLocaleDateString();
    setAdate(date);

    day = new Date().getDay().toLocaleString();
    setAday(day);
  };

  setInterval(Update, 1000);

  const arr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div
      style={{
        marginLeft: "400px",
        marginRight: "400px",
        marginTop: "20px",
      }}
    >
      <h4>Developed by Team TASK</h4>

      <h6>{aTime}</h6>

      <h6>
        {aDate} {arr[aDay - 1]}
      </h6>
    </div>
  );
};

export default Footer;
