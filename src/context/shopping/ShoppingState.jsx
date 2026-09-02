import { useEffect, useReducer } from "react";
import ShoppingContext from "./shoppingContext";
import { shoppingReducer } from "./shoppingReducer";

export const ShoppingState = (props) => {
  const initialState = {
    basket: JSON.parse(localStorage.getItem("basket")) || [],
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    user: null,
  };

  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.basket]);

  const getBasketTotal = (basket) => {
    return basket?.reduce(
      (amount, item) => item.price * item.quantity + amount,
      0,
    );
  };

  const addToBasket = async (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };

  const increaseQuantity = (item) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: item,
    });
  };

  const decreaseQuantity = (item) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: item,
    });
  };

  const emptyBasket = () => {
    dispatch({
      type: "EMPTY_BASKET",
    });
  };

  const removeFromBasket = (item) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: item });
  };

  const addToWishlist = (item) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: item,
    });
  };

  const removeFromWishlist = (item) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: item,
    });
  };

  const setUser = (user) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  return (
    <ShoppingContext.Provider
      value={{
        basket: state.basket,
        wishlist: state.wishlist,
        user: state.user,
        getBasketTotal,
        addToBasket,
        increaseQuantity,
        decreaseQuantity,
        setUser,
        removeFromBasket,
        emptyBasket,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};
