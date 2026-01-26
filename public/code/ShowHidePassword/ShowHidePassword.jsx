import { useState } from "react";
import "./styles.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function App() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="App">
      <h1>Show / Hide Password</h1>
      <div>
        <label htmlFor="password">Password </label>
        <input
          type={!show ? "password" : "text"}
          name="password"
          id="password"
          placeholder="Please Enter Password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          className="wrapper"
          aria-label={show ? "Hide password" : "Show password"}
          onClick={handleToggle}
        >
          {show ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      </div>
    </div>
  );
}
