import BottomNav from "../../components/BottomNav";

function Brands() {

  const brands = [
    "Lakme",
    "Maybelline",
    "Mamaearth",
    "Good Vibes",
    "NY Bae",
    "Alps Goodness"
  ];

  return (
    <>
      <div className="container">

        <h1 className="category-page-title">
          Brands
        </h1>

        <div className="brands-grid">
          {brands.map((brand,index)=>(
            <div key={index}>
              {brand}
            </div>
          ))}
        </div>

      </div>

      <BottomNav />
    </>
  );
}

export default Brands;