import React, { useState, useReducer, useMemo, memo } from "react";

import "../CSS/product.css";
import { productsData } from "../data";

function productReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.product];
    case "REMOVE_PRODUCT":
      return state.filter(p => p.id !== action.id);
    case "UPDATE_STOCK":
      return state.map(p => p.id === action.id ? { ...p, stock: action.stock } : p);
    default:
      return state;
  }
}

export default function Product() {
  const [products, dispatch] = useReducer(productReducer, productsData);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("none");

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (category !== "All") {
      result = result.filter(p => p.category === category);
    }
    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    return result;
  }, [products, category, sort]);

  const totalPrice = useMemo(() =>
    filteredProducts.reduce((acc, p) => acc + p.price, 0),
    [filteredProducts]
  );

  return (
    <div className="app">
      <ProductHeader category={category} sort={sort} />

      <div className="filters">
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option>All</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Books</option>
        </select>
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="none">No Sort</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      <ProductList products={filteredProducts} dispatch={dispatch} />
      <Summary totalPrice={totalPrice} />
    </div>
  );
}

const ProductHeader = memo(({ category, sort }) => {
  return (
    <div className="header">
      <h2>Product Dashboard</h2>
      <p>Filter: {category}, Sort: {sort}</p>
    </div>
  );
});

function ProductList({ products, dispatch }) {
  return (
    <div className="product-list">
      {products.map(p => (
        <ProductCard key={p.id} product={p} dispatch={dispatch} />
      ))}
    </div>
  );
}

const ProductCard = memo(({ product, dispatch }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button
        className="btn remove"
        onClick={() => dispatch({ type: "REMOVE_PRODUCT", id: product.id })}
      >
        Remove
      </button>
      <button
        className="btn update"
        onClick={() => dispatch({ type: "UPDATE_STOCK", id: product.id, stock: product.stock - 1 })}
      >
        Decrease Stock
      </button>
    </div>
  );
});

const Summary = memo(({ totalPrice }) => {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Price of Visible Products: ${totalPrice}</p>
    </div>
  );
});
