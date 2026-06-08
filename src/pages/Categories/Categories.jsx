import { useState } from "react";
import BottomNav from "../../components/BottomNav";
import ProductCard from "../../components/ProductCard";
import products from "../../data/products";

const categories = [
  "All",
  "Makeup",
  "Skin Care",
  "Hair Care",
];

function Categories() {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? products
      : products.filter(
          (p) => p.category === category
        );

  return (
    <>
      <div className="container">
        <h1>Categories</h1>

        <div className="category-tabs">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </>
  );
}

export default Categories;