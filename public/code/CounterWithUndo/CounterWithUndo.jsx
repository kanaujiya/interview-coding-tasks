import { useState } from "react";
import "./style.css";

const CounterWithUndo = () => {
    const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  const handleAction = (action) => {
    setHistory((prev) => [...prev, counter]);
    setCounter((prev) => {
      if (action === "Increment") return prev + 1;
      if (action === "Decrement") return prev - 1;
      if (action === "Multiply") return prev * 2;
      return prev;
    });
  };

  const handleUndo = () => {
    if (!history.length) return;
    let latest = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setCounter(latest);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <div className="btn-wrapper">
        <button
          disabled={counter === 0}
          onClick={() => handleAction("Multiply")}
        >
          2*counter
        </button>
        <button onClick={() => handleAction("Increment")}>Increment</button>
        <button
          disabled={counter <= 0}
          onClick={() => handleAction("Decrement")}
        >
          Decrement
        </button>
        <button disabled={!history.length} onClick={() => handleUndo()}>
          Undo
        </button>
      </div>
      {history.length > 0 && (
        <div className="history">
          <h2>History</h2>
          {history?.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default CounterWithUndo;