import { useContext, useEffect, useState } from "react";
import axios from "../axios";
import ShoppingContext from "../context/shopping/shoppingContext";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { NumericFormat } from "react-number-format";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import "./Payment.css";

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, getBasketTotal, emptyBasket } = shoppingContext;

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
  const total = Math.round(getBasketTotal(basket) * 100);

  console.log("Basket:", basket);
  console.log("Total:", total);

  const response = await axios({
    method: "POST",
    url: `/payments/create?total=${total}`,
  });

  setClientSecret(response.data.clientSecret);
};
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!stripe || !elements || !clientSecret) {
    return;
  }

  setProcessing(true);
  setError(null);

  try {
    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      setError(error.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      await setDoc(
        doc(db, "user", user.uid, "orders", paymentIntent.id),
        {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        }
      );

      setSucceeded(true);
      setProcessing(false);

      emptyBasket();

      navigate("/orders");
    }
  } catch (err) {
    setError(err.message);
    setProcessing(false);
  }
};

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout <Link to={"/checkout"}>{basket?.reduce((total, item) => total + item.quantity, 0)} items</Link>
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 JSX Road</p>
            <p>Johannesburg, South Africa</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
                hideButton
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_price_container">
                <NumericFormat
                  renderText={(value) => <h3>Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"R"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing...</p> : "Pay Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
