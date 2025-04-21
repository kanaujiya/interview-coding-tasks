import React, { useRef, useState } from "react";

const StopWatchApp = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const handleStart = () => {
    if (timerRef.current != null) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1000);
      }, 1000);
    }
  };

  const getFormatTimer = () => {
    const date = new Date(timer);
    // console.log(date,date.toISOString.substr(11,8));
    return date.toISOString.slice(11,19);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{getFormatTimer()}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleStart}>Start</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default StopWatchApp;
