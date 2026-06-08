import coupons from "../data/coupons";

function OfferBanner() {
 return (
  <div>

   {coupons.map(coupon=>(
    <div key={coupon.code}>
      {coupon.code}
      - {coupon.discount}% OFF
    </div>
   ))}

  </div>
 );
}

export default OfferBanner;