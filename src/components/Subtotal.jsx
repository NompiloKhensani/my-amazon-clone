import { useContext, useState } from "react";
import { NumericFormat } from "react-number-format";
import ShoppingContext from "../context/shopping/shoppingContext";
import { useNavigate } from "react-router-dom";
import "./Subtotal.css";

const Subtotal = () => {
  const navigate = useNavigate();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;

  const [promoCode, setPromoCode] = useState("");

  return (
    <div className="subtotal">
      <NumericFormat
        value={getBasketTotal(basket)}
        decimalScale={2}
        displayType="text"
        prefix="R"
        thousandSeparator
        renderText={(value) => (
          <>
            <p>
              Subtotal (
              {basket.reduce((total, item) => total + item.quantity, 0)} items
              ): <strong>{value}</strong>
            </p>

            <div className="promo_code">
              <label htmlFor="promo">Promo code or Voucher</label>
              <div className="promo_input">
                <input
                  id="promo"
                  type="text"
                  placeholder="Enter code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button type="button">Apply</button>
              </div>
            </div>
          </>
        )}
      />
      <button onClick={() => navigate("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;