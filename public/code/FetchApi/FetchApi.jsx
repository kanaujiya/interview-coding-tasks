import { useEffect, useState } from "react";
import "./style.css";

export default function FetchApi() {
  const [details, setDetails] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = async () => {
    try {
      setIsLoading(true);
      setDetails([]);
      let response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      let result = await response.json();
      setDetails(result.products);
    } catch (err) {
      setError(err);
      setDetails([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="App">
      <h1>Call Api & List Details</h1>

      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {details.length > 0 && (
        <table border={1}>
          <thead>
            <th>ID</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
          </thead>
          <tbody>
            {details.map((detail) => {
              return (
                <>
                  <tr>
                    <td>{detail.id}</td>
                    <td>
                      <img
                        src={detail.thumbnail}
                        alt={detail.title}
                        height={100}
                        width={100}
                      />
                    </td>
                    <td>{detail.title}</td>
                    <td>${detail.price}</td>
                    <td>{detail.availabilityStatus}</td>
                    <td>{detail.category}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
