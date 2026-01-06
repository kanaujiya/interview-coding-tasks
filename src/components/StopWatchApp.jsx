import React, { useEffect, useRef, useState } from "react";

const StopWatchApp = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const handleStart = () => {
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  const handlePause = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTimer(0);
  };

  const setFormat = (totalsecond) => {
    const hur = Math.floor(totalsecond / 3600);
    const min = Math.floor((totalsecond % 3600) / 60);
    const sec = totalsecond % 60;

    return `${String(hur).padStart(2, "0")}:${String(min).padStart(
      2,
      "0"
    )}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{setFormat(timer)}</h2>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatchApp;
