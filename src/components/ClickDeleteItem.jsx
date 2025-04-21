import React, { useState } from "react";

const ClickDeleteItem = () => {
  const [lists, setLists] = useState([
    { id: 1, title: "Sunday" },
    { id: 2, title: "Monday" },
    { id: 3, title: "Tuesday" },
    { id: 4, title: "Wednesday" },
    { id: 5, title: "Thursday" },
  ]);

  // using filter method delete
  const handleFilterDelete = (id) => {
    console.log("Deleted ID:", id);
    const filteredList = lists.filter((list) => list.id !== id);
    setLists(filteredList);
  };

  //   using splice method
  const handleSliceDelete = (index) => {
    console.log("Deleted ID:", index);
    const updatedArray = [...lists];
    updatedArray.splice(index, 1);
    setLists(updatedArray);
  };

  return (
    <div>
      <ul>
        {lists.map((list, i) => (
          <li key={list.id}>
            {list.id}.{list.title}{" "}
            <button onClick={() => handleSliceDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClickDeleteItem;
