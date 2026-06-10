const categories = [
  "💄 Makeup",
  "🧴 Skin Care",
  "💇 Hair Care",
  "🌸 Fragrance",
  "💅 Nails",
  "🛍️ Offers",
];

function CategoryChips() {
  return (
    <div className="category-scroll">
      {categories.map((item) => (
        <button
          key={item}
          className="category-chip"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryChips;