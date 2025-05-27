import React, { useEffect, useState } from "react";

const useFetch = ({ method, url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleApi = async (method, url) => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(url, {
        method: method,
      });
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
    handleApi(method, url);
  }, [url, method]);
  return { data, loading, error };
};

export default useFetch;
