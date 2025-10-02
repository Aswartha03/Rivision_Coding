import { Route, Routes } from "react-router-dom";
import { Products } from "./components/products";
import { ProductDetail } from "./components/productDetail";
import { Home } from "./components/Home";
import { Private } from "./components/private";

export function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/product/:id"
          element={
            <Private>
              <ProductDetail />
            </Private>
          }
        />
      </Routes>
    </>
  );
}
