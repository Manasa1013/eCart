import "../CartList/CartList.css";

export function PriceDetails({ netPrice, netDiscount }) {
  const totalPrice = netPrice + netDiscount;
  const totalDiscount = netDiscount;
  const deliveryCharges = netPrice < 500 ? 50 : 0;
  return (
    <div className="summary-container">
      <div className="summary-card">
        <div className="flex-row">
          <h3>Price Details</h3>
          <hr></hr>
          <div>
            <span>Price</span>
            <span>₹{totalPrice}</span>
          </div>
          <div>
            <span>Discount</span>
            <span>-₹{totalDiscount}</span>
          </div>
          <div>
            <span>Delivery Charges</span>
            <span>₹{deliveryCharges}</span>
          </div>
          <hr></hr>
          <span className="total-tag">Total : </span>
          <h2 className="total-price">
            <span>{`₹${netPrice}`}</span>
          </h2>
        </div>
        <button className="button__primary cart-btn--primary">
          Proceed to buy
        </button>
      </div>
    </div>
  );
}
