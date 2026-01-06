import { useState } from "react";
import "./style.css";

export default function ControlledFormHandling() {
  const [showDetails, setShowDetails] = useState(false);
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setShowDetails(false);
    setFormInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formInput;
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("All field are required!");
      return;
    }
    setShowDetails(true);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div className="App">
        <h1>Controlled Form Handling</h1>
      </div>

      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              value={formInput.name}
              onChange={handleInput}
            />
          </div>

          <div className="form-input">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={formInput.email}
              onChange={handleInput}
            />
          </div>

          <div className="form-input">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={formInput.password}
              onChange={handleInput}
            />
          </div>

          <div className="form-input">
            <button type="submit">Submit</button>
          </div>
        </form>
        {showDetails && (
          <div>
            <p>
              <b>Name: </b>
              {formInput?.name}
            </p>
            <p>
              <b>Email: </b>
              {formInput?.email}
            </p>
            <p>
              <b>Password: </b>
              {formInput?.password}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
