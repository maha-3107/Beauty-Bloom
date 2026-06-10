import { useState } from "react";

import SearchBar from "../../components/SearchBar";
import BeautyAssistant from "../../components/BeautyAssistant";
import ProductCard from "../../components/ProductCard";
import BottomNav from "../../components/BottomNav";

import HeroBanner from "../../components/HeroBanner";
import CategoryChips from "../../components/CategoryChips";
import FeaturedBrands from "../../components/FeaturedBrands";

import products from "../../data/products";

function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container">

        <div className="beauty-header">
          <h1>✨ Beauty Bloom 🌸</h1>
          <p>Glow Naturally, Shine Beautifully</p>
        </div>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <HeroBanner />

        <CategoryChips />

        <BeautyAssistant />

        <h2 className="section-title">
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

        <FeaturedBrands />

      </div>

      <BottomNav />
    </>
  );
}

export default Home;