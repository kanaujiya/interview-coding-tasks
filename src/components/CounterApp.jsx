import React, { useRef, useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const intervalInfo = useRef(null);

  const startCount = () => {
    if (!intervalInfo.current) {
      intervalInfo.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
  };

  const pauseCount = () => {
    clearInterval(intervalInfo.current);
    intervalInfo.current = null;
  };

  const stopCount = () => {
    clearInterval(intervalInfo.current);
    setCount(0);
  };
  return (
    <div className="container">
      <h1>{count}</h1>
      <div>
        <button onClick={startCount}>Start</button>
        <button onClick={pauseCount}>Pause</button>
        <button onClick={stopCount}>Reset</button>
      </div>
    </div>
  );
};

export default CounterApp;
