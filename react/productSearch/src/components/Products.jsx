import React, { useEffect, useState } from "react";

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const result = await response.json();
      const allProducts = result.products.map((p) => ({ ...p, isLike: false }));
      setProducts(allProducts);
      setFiltered(allProducts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleLike(index) {
    const updated = filtered.map((p, i) =>
      i === index ? { ...p, isLike: !p.isLike } : p
    );
    setFiltered(updated);
  }

  function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === "") {
      setFiltered(products);
    } else {
      const filteredData = products.filter((p) =>
        p.title.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(filteredData);
    }
  }

  return (
    <>
      <div>
        <h3>Search product name</h3>
        <input
          type="text"
          placeholder="Enter Name"
          value={query}
          onChange={handleSearch}
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div>
        {filtered?.length > 0 && <h3>Products</h3>}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {filtered.map((product, idx) => (
            <div
              key={idx}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <p>
                <strong>Title: {product.title}</strong>
              </p>
              <p>Price: ${product.price}</p>
              <button
                style={{
                  color: product.isLike ? "red" : "green",
                  cursor: "pointer",
                }}
                onClick={() => handleLike(idx)}
              >
                {product.isLike ? "Dislike" : "Like"}
              </button>
            </div>
          ))}
        </div>

        {!loading && filtered.length === 0 && (
          <p>No products found for "{query}"</p>
        )}
      </div>
    </>
  );
}
