import { useState } from "react";

const GetRadioButtonData = () => {
  const [game, setGame] = useState("Cricket");
  const [day, setDay] = useState("Sunday");

  return (
    <div className="container mt-3">
      <h2>Select Game</h2>
      <div className="mb-3">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="game"
            id="cricket"
            value="Cricket"
            checked={game === "Cricket"}
            onChange={(e) => setGame(e.target.value)}
          />
          <label className="form-check-label" htmlFor="cricket">
            Cricket
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="game"
            id="soccer"
            value="Soccer"
            checked={game === "Soccer"}
            onChange={(e) => setGame(e.target.value)}
          />
          <label className="form-check-label" htmlFor="soccer">
            Soccer
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="game"
            id="badminton"
            value="badminton"
            checked={game === "badminton"}
            onChange={(e) => setGame(e.target.value)}
          />
          <label className="form-check-label" htmlFor="badminton">
            Badminton
          </label>
        </div>
      </div>

      <h2>Select Day</h2>
      <div className="mb-3">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="day"
            id="weekend"
            value="Weekend"
            checked={day === "Weekend"}
            onChange={(e) => setDay(e.target.value)}
          />
          <label className="form-check-label" htmlFor="weekend">
            Weekend
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="day"
            id="sunday"
            value="Sunday"
            checked={day === "Sunday"}
            onChange={(e) => setDay(e.target.value)}
          />
          <label className="form-check-label" htmlFor="sunday">
            Sunday
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="day"
            id="saturday"
            value="Saturday"
            checked={day === "Saturday"}
            onChange={(e) => setDay(e.target.value)}
          />
          <label className="form-check-label" htmlFor="saturday">
            Saturday
          </label>
        </div>
      </div>

      <div className="alert alert-info mt-3">
        <strong>Selected:</strong> {game} on {day}
      </div>
    </div>
  );
};

export default GetRadioButtonData;
