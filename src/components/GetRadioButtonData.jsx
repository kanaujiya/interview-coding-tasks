import React, { useState } from "react";

const GetRadioButtonData = () => {
  const [game, setGame] = useState("Cricket");
  const [day, setDay] = useState("Sunday");

  return (
    <div>
      <h2>Select Game</h2>
      <input
        type="radio"
        name="game"
        value="Cricket"
        onChange={(e) => setGame(e.target.value)}
      />{" "}
      Cricket
      <input
        type="radio"
        name="game"
        value="Soccer"
        onChange={(e) => setGame(e.target.value)}
      />{" "}
      Soccer
      <input
        type="radio"
        name="game"
        value="badminton"
        onChange={(e) => setGame(e.target.value)}
      />{" "}
      badminton
      <h2>Select Game</h2>
      <input
        type="radio"
        name="day"
        value="Weekend"
        onChange={(e) => setDay(e.target.value)}
      />{" "}
      Weekend
      <input
        type="radio"
        name="day"
        value="Sunday"
        onChange={(e) => setDay(e.target.value)}
      />{" "}
      Sunday
      <input
        type="radio"
        name="day"
        value="Saturday"
        onChange={(e) => setDay(e.target.value)}
      />{" "}
      Saturday
    </div>
  );
};

export default GetRadioButtonData;
