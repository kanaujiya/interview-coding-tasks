import React from "react";

const ChipList = ({ chipList,handleRemove }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        margin: "20px 0",
        width: "300px",
        justifyContent:"center",
        flexWrap: "wrap",
      }}
    >
      {chipList?.map((item) => {
        return (
          <div
            style={{
              backgroundColor: "crimson",
              color: "white",
              padding: "5px 10px",
            }}
          >
            {item.title}{" "}
            <button onClick={()=>handleRemove(item)}
              style={{
                border: "none",
                backgroundColor: "crimson",
                color: "white",
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ChipList;
