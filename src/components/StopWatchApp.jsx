import React, { useEffect, useRef, useState } from "react";

const StopWatchApp = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef();
  const handleStart = () => {
    if (timerRef.current == null) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  const setFormat = () =>{
    
    return timer
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{setFormat()}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleStart}>Start</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default StopWatchApp;
