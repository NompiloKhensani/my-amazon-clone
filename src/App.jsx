import { useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import SubHeader from "./components/layout/SubHeader";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Wishlist from "./components/Wishlist";
import NotFound from "./components/NotFound";
import ShoppingContext from "./context/shopping/shoppingContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
import "./App.css";

const promise = loadStripe(
  "pk_test_51UAxWZLI9Ll2s84aRdw54T70GZVB4gEXhWy2aZYFnn6BGc6E6PZpIBIJOLrryEVw8sFa27a5sbGHyszU7apuTHEB00ZYpvrdbK",
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <>
      {location.pathname !== "/login" && (
        <>
          <Header /> <SubHeader />
        </>
      )}
      <main>
        <Elements stripe={promise}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/home/username"
              element={<h1>Welcome, username!</h1>}
            />
            <Route path="/products" element={<Products />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Elements>
      </main>
    </>
  );
};

export default App;
