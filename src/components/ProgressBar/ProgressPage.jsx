import React,{ useEffect, useState } from "react";
import ProgressBar from "./ProgressBar.jsx";
import "./style.css";
export default function ProgressPage() {
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100);
  }, []);

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar value={value} handleStatus={() => setStatus(true)} />
      <p>{status ? "Completed!" : "Loading..."}</p>
    </div>
  );
}
