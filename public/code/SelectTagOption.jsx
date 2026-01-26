import axios from "axios";
import React, { useEffect, useState } from "react";

const SelectTagOption = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    handleUser();
  }, []);

  const handleUser = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="container">
      <h3>Five Interview Question</h3>
      <select name="email" id="user-email">
        <option>Select Email</option>
        {users.map((item, i) => {
          return (
            <option value={item.email} key={item.id}>
              {item.email}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectTagOption;
