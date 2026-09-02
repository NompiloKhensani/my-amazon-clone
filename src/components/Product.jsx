import { useContext } from "react";

import "./Product.css";

import ShoppingContext from "../context/shopping/shoppingContext";

const Product = ({ id, image, title, rating, price }) => {
  const shopping = useContext(ShoppingContext);

  const {
    addToBasket,
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = shopping;

  const addToBasketHandler = () => {
    addToBasket({ id, image, title, rating, price });
  };

  const isInWishlist = wishlist.some((item) => item.id === id);

  const wishlistHandler = () => {
    if (isInWishlist) {
      removeFromWishlist({ id });
    } else {
      addToWishlist({ id, image, title, rating, price });
    }
  };

  return (
    <div className="product" key={id}>
      <img src={image} alt="" />

      <div className="product_info">
        <p className="product_title">{title}</p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>

        <p className="product_price">
          <small>R</small>
          <strong>
            {price.toLocaleString("en-ZA", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </strong>
        </p>
      </div>

      <button
        className="product_button"
        onClick={addToBasketHandler}
      >
        Add to basket
      </button>

      <button
        className="wishlist_button"
        onClick={wishlistHandler}
      >
        {isInWishlist ? "♥ Remove from wishlist" : "♡ Add to wishlist"}
      </button>
    </div>
  );
};

export default Product;
