import { useEffect } from "react";
import Product from "./Product";
import "./Products.css";

const Products = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="products_grid">

      <Product
        id="1"
        title="Apple iPhone 15 (128 GB) - Black"
        image="https://m.media-amazon.com/images/I/61eEYLATF9L._AC_SR480,440_.jpg"
        rating={4}
        price={12499.99}
      />

      <Product
        id="2"
        title="instax Fujifilm Instax Mini Instant Film 10 Sheets, Soft Lavender"
        image="https://m.media-amazon.com/images/I/4135Dtjg4iL._AC_SR240,220_.jpg"
        rating={4}
        price={199.99}
      />

      <Product
        id="3"
        title="KF 5L Multi-function Air Fryer with Micro Switch, Touch Screen and LED Display, Modern and Stylish"
        image="https://m.media-amazon.com/images/I/51eZIONrg+L._AC_SY300_SX300_QL70_ML2_.jpg"
        rating={3}
        price={378.99}
      />

      <Product
        id="4"
        title="HUAWEI WATCH FIT 4 GPS PURPLE"
        image="https://m.media-amazon.com/images/I/417lAIAYDXL._AC_SX522_.jpg"
        rating={3}
        price={1879.06}
      />

      <Product
        id="5"
        title="USN Hardcore Whey gH Protein Powder | 1kg – 30 Servings | Peanut Buttercup | 27g & 3g Creatine Per | Tribulus Terrestris, Zinc & Magnesium | All-in-One Lean Muscle Growth & Recovery"
        image="https://m.media-amazon.com/images/I/61G4RGyu05L._AC_SX522_.jpg"
        rating={5}
        price={369.35}
      />

      <Product
        id="6"
        title="Large Women's Laptop Tote Bag Handbag Crocodile Pattern PU Leather"
        image="https://m.media-amazon.com/images/I/41DMl1EGgfL._AC_.jpg"
        rating={3}
        price={412.24}
      />

      <Product
        id="7"
        title="Active Stylus Pen for Touchscreen Android iPhone Tablet Phone, Touch Screen Pen for iPhone/iPad/Pencil/Samsung/iOS/Lenovo/Huawei/Vivo - White"
        image="https://m.media-amazon.com/images/I/51JA2PptYEL._AC_SX522_.jpg"
        rating={4}
        price={209.99}
      />

      <Product
        id="8"
        title="Hart - J7 Cookware - Set of 10"
        image="https://m.media-amazon.com/images/I/31z-aQjxHzL._AC_.jpg"
        rating={5}
        price={665.99}
      />

    </div>
  );
};

export default Products;
