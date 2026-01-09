import { useEffect, useState } from "react";
import "./style.css";

export default function ClientSidePaginationApp() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [order, setOrder] = useState("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* -------- Fetch once -------- */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products?limit=194");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProducts(data.products);
        setFiltered(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* -------- Search -------- */
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setPage(1);

    const result = products.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setFiltered(result);
  };

  /* -------- Sort -------- */
  const handleSort = () => {
    const sorted = [...filtered].sort((a, b) =>
      order === "desc" ? b.id - a.id : a.id - b.id
    );
    setOrder(order === "desc" ? "asc" : "desc");
    setFiltered(sorted);
    setPage(1);
  };

  /* -------- Pagination -------- */
  const totalPages = Math.ceil(filtered.length / limit);
  const start = (page - 1) * limit;
  const currentData = filtered.slice(start, start + limit);

  return (
    <div className="App">
      <h1>Client Side Pagination</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />

      <button onClick={handleSort}>
        {order === "desc" ? "Descending" : "Ascending"}
      </button>

      <select
        value={limit}
        onChange={(e) => {
          setLimit(Number(e.target.value));
          setPage(1);
        }}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="products__wrapper">
        {currentData.map((item) => (
          <div key={item.id} className="product">
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={page === i + 1 ? "select_page" : ""}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
