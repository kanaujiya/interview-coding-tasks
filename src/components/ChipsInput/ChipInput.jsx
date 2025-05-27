import React, { useState } from "react";
import ChipList from "./components/ChipList";

const ChipInput = () => {
  const [chipList, setChipList] = useState([]);
  const [chip, setChip] = useState("");

  const handleChip = (e) => {
    if (e.key === "Enter" && chip.length !== 0) {
      let data = { id: Date.now(), title: chip };
      setChipList([...chipList, data]);
      setChip("");
    }
  };

  const handleRemove = (item) => {
    let data = chipList.filter((chip) => chip.id !== item.id);
    setChipList(data);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Inputs</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={chip}
        onChange={(e) => setChip(e.target.value.trim())}
        onKeyDown={handleChip}
      />
      <ChipList chipList={chipList} handleRemove={handleRemove} />
    </div>
  );
};

export default ChipInput;
