import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const CallApiListTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const result = await response.json();
      setUserData(result);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  return (
    <div className="container">
      <h2>Fourth Example</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          {!userData.length && (
            <tr>
              <td colSpan={5} className="text-center">
                Loading...
              </td>
            </tr>
          )}

          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <a href={`https://${user.website}`}>{user.website}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CallApiListTable;
