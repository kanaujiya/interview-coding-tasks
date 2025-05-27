import React, { useEffect, useState } from "react";

const DebouncingFunctionality = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [keywords, setKeywords] = useState("");

  const handleApi = async (str) => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/1/todos${
          str && `?title=${str}`
        }`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const result = await response.json();

      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      handleApi(keywords);
    }, 2000);

    return () => clearInterval(debounce);
    
  }, [keywords]);

  return (
    <div>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <table style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed ? "Done" : "Pending"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DebouncingFunctionality;
