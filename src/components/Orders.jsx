import { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import ShoppingContext from "../context/shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "./Orders.css";

const Orders = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { user } = shoppingContext;
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      if (!user) return;

      const ordersSnapshot = await getDocs(
        collection(db, "user", user.uid, "orders"),
      );

      const ordersList = ordersSnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      setOrders(ordersList);
    };

    getOrders();
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <button onClick={() => navigate("/")}>Back to Home</button>

      <div className="orders_order">
        {orders.length === 0 ? (
          <p>You have no orders yet.</p>
        ) : (
          orders.map((order) => (
            <div className="order" key={order.id}>
              <h2>Order #{order.id}</h2>

              <p>
                {moment
                  .unix(order.data.created)
                  .format("MMMM Do YYYY, h:mm:ss a")}
              </p>

              <NumericFormat
                renderText={(value) => (
                  <h3 className="order_total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType="text"
                thousandSeparator={true}
                prefix="R"
              />

              {order.data.basket.map((item) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
