import { useState } from "react";

import SearchBar from "../../components/SearchBar";
import BeautyAssistant from "../../components/BeautyAssistant";
import ProductCard from "../../components/ProductCard";
import BottomNav from "../../components/BottomNav";

import products from "../../data/products";

function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <h1>Beauty Bloom</h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <BeautyAssistant />

        <h2 style={{ marginTop: "20px" }}>
          Trending Products
        </h2>

        <div className="products-grid">
          {filteredProducts.map((product) => (
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

export default Home;