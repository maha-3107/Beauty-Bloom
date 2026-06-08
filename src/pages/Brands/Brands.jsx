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

    <h1>Brands</h1>

    {brands.map((brand,index)=>(
      <div
       key={index}
       className="category-card"
      >
       {brand}
      </div>
    ))}

   </div>

   <BottomNav />
  </>
 );
}

export default Brands;