import { useNavigate } from "react-router-dom";
import "../CartList/CartList.css";
import { useToast } from "../../Contexts/ToastContext";

export function PriceDetails({ netPrice, netDiscount }) {
  const navigate = useNavigate();
  const { setToast } = useToast();
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
        <button
          className="button__primary cart-btn--primary"
          onClick={() => {
            if (netPrice > 0) {
              setToast((prev) => ({
                ...prev,
                isVisible: "show",
                message: "Placed the order",
              }));
              navigate("/");
            } else {
              setToast((prev) => ({
                ...prev,
                isVisible: "show",
                message: "Add items to buy",
              }));
            }
          }}
        >
          Proceed to buy
        </button>
      </div>
    </div>
  );
}
