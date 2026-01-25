import { useState } from "react";
import "./style.css";

export default function ShowRandomDetails() {
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    try {
      setIsLoading(true);
      setUserDetails({});
      setError("");
      let response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      let result = await response.json();
      let maxlength = result?.users?.length;
      let finalUserId = Math.floor(Math.random() * maxlength);
      setUserDetails(result?.users[finalUserId]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Fetch Random User Details</h1>
      <button onClick={handleFetch}>Refesh</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {Object.entries(userDetails).length > 0 && (
        <div className="user-details-card">
          <img src={userDetails.image} alt={userDetails.id} />
          <div>
            <h2>
              Name:
              {userDetails?.firstName} {userDetails?.lastName}
            </h2>
            <p>Username: {userDetails?.username}</p>
            <p>Email: {userDetails.email}</p>
          </div>
        </div>
      )}
    </div>
  );
}
