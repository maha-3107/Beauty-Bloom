import BottomNav from "../../components/BottomNav";

function ProductDetails() {
 return (
  <>
   <div className="container">

    <h1>Product Details</h1>

    <img
      src="https://via.placeholder.com/400"
      alt=""
      width="100%"
    />

    <h2>Vitamin C Serum</h2>

    <p>
      Brightening serum for glowing skin.
    </p>

    <button>
      Add To Cart
    </button>

   </div>

   <BottomNav />
  </>
 );
}

export default ProductDetails;