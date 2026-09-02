import { useContext } from "react";
import ShoppingContext from "../context/shopping/shoppingContext";
import "./Wishlist.css";

const Wishlist = () => {
  const shopping = useContext(ShoppingContext);

  const {
    wishlist,
    addToBasket,
    removeFromWishlist,
  } = shopping;

  const addToBasketHandler = (item) => {
    addToBasket(item);
  };

  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="wishlist_empty">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="wishlist_grid">
          {wishlist.map((item) => (
            <div className="wishlist_item" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="wishlist_info">
                <p className="wishlist_title">{item.title}</p>

                <div className="wishlist_rating">
                  {Array(item.rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                </div>

                <p className="wishlist_price">
                  <small>R</small>
                  <strong>
                    {item.price.toLocaleString("en-ZA", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </strong>
                </p>

                <button
                  className="wishlist_basket_button"
                  onClick={() => addToBasketHandler(item)}
                >
                  Add to basket
                </button>

                <button
                  className="wishlist_remove_button"
                  onClick={() => removeFromWishlist(item)}
                >
                  Remove from wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
