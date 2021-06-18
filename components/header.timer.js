import React, { useState, useEffect } from "react";

const Timer = () => {
  const [date, setDate] = new useState(new Date());
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return (
    <div id="date_time_header" className="dateHeader">
      {new Date().toDateString("en-US")},{" "}
      {date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' })}
    </div>
  )
}

export default Timer