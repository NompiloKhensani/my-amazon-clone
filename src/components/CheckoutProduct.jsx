import { useContext } from "react";
import ShoppingContext from "../context/shopping/shoppingContext";
import "./CheckoutProduct.css";

const CheckoutProduct = ({
  id,
  image,
  title,
  rating,
  price,
  quantity,
  hideButton,
}) => {
  const shopping = useContext(ShoppingContext);
  const { removeFromBasket, increaseQuantity, decreaseQuantity } = shopping;

  const removeFromBasketHandler = () => {
    removeFromBasket({ id: id });
  };

  const increaseQuantityHandler = () => {
    increaseQuantity({ id: id });
  };

  const decreaseQuantityHandler = () => {
    decreaseQuantity({ id: id });
  };

  return (
    <div className="checkout_product">
      <img className="checkout_product_image" src={image} alt="" />

      <div className="checkout_product_info">
        <p className="checkout_product_title">{title}</p>

        <div className="checkout_product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>

        <p className="checkout_product_price">
          <small>R</small>
          <strong>{price}</strong>
        </p>

        {!hideButton && (
          <>
            <div className="checkout_product_quantity">
              <span>Quantity:</span>

              <button onClick={decreaseQuantityHandler}>−</button>

              <strong>{quantity}</strong>

              <button onClick={increaseQuantityHandler}>+</button>
            </div>

            <button onClick={removeFromBasketHandler}>
              Remove From Basket
            </button>
          </>
        )}

        {hideButton && (
          <p className="checkout_product_quantity">
            Quantity: <strong>{quantity}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
