import React, { useState } from "react";
import { useParams } from "react-router-dom";
export function ProductDetail() {
  let { id } = useParams();
  let [product, setProduct] = useState(null);
  async function fetch() {
    try {
      let res = await fetch(`https://fakestoreapi.com/products/${id}`);
      let data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    fetch();
  }, []);
}
