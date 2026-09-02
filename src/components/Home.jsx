import React from "react";
import "./Home.css";
import Products from "./Products";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_hero">
          <img
            src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg"
            alt="home banner"
            className="home_image"
          />
        </div>

        <div className="home_categories">
          <div className="category_tile">
            <h2>Electronics</h2>
            <div className="category_tile_grid">
              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300"
                  alt="Phones"
                />
                <span>Phones</span>
              </Link>

              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300"
                  alt="Laptops"
                />
                <span>Laptops</span>
              </Link>

              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
                  alt="Headphones"
                />
                <span>Headphones</span>
              </Link>

              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300"
                  alt="Smartwatches"
                />
                <span>Smartwatches</span>
              </Link>
            </div>

            <Link to="/products" className="category_shop">
              See more
            </Link>
          </div>

          <div className="category_tile">
            <h2>Sports & Outdoors</h2>
            <div className="category_tile_grid">
              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300"
                  alt="Running"
                />
                <span>Running</span>
              </Link>
              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300"
                  alt="Gym & Fitness"
                />
                <span>Gym & Fitness</span>
              </Link>
              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=300"
                  alt="Sports"
                />
                <span>Sports</span>
              </Link>
              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=300"
                  alt="Outdoor Recreation"
                />
                <span>Outdoor Recreation</span>
              </Link>
            </div>
            <Link to="/products" className="category_shop">
              See more
            </Link>
          </div>

          <div className="category_tile">
            <h2>Home & Kitchen</h2>

            <div className="category_tile_grid">
              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300"
                  alt="Furniture"
                />
                <span>Furniture</span>
              </Link>

              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=300"
                  alt="Kitchen"
                />
                <span>Kitchen</span>
              </Link>

              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300"
                  alt="Bedroom"
                />
                <span>Bedroom</span>
              </Link>

              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300"
                  alt="Cleaning"
                />
                <span>Cleaning</span>
              </Link>
            </div>

            <Link to="/products" className="category_shop">
              See more
            </Link>
          </div>

          <div className="category_tile">
            <h2>Books</h2>

            <div className="category_tile_grid">
              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300"
                  alt="Fiction"
                />
                <span>Fiction</span>
              </Link>

              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300"
                  alt="Education"
                />
                <span>Education</span>
              </Link>

              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300"
                  alt="Best Sellers"
                />
                <span>Best Sellers</span>
              </Link>

              <Link to="/products">
                <img
                  src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300"
                  alt="Children's Books"
                />
                <span>Children's Books</span>
              </Link>
            </div>

            <Link to="/products" className="category_shop">
              See more
            </Link>
          </div>
        </div>

        <div className="home_products">
          <h2>Today's Deals</h2>
          <Products />
        </div>
        <footer className="home_footer">
          <div className="footer_back_to_top">
            <a href="#">Back to top</a>
          </div>
          <div className="footer_columns">
            <div className="footer_column">
              <h3>Get to Know Us</h3>
               <Link to="/">About Us</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Contact Us</Link>
            </div>
            <div className="footer_column">
              <h3>Make Money with Us</h3>
              <Link to="/products">Sell Products</Link>
              <Link to="/products">Advertise Your Products</Link>
              <Link to="/products">Become an Affiliate</Link>
            </div>
            <div className="footer_column">
              <h3>Amazon Payment Products</h3> 
              <Link to="/">Amazon Pay</Link>
              <Link to="/">Payment Methods</Link>
              <Link to="/">Gift Cards</Link>
            </div>
            <div className="footer_column">
              <h3>Let Us Help You</h3>
              <Link to="/orders">Your Orders</Link>
              <Link to="/checkout">Your Cart</Link>
              <Link to="/login">Your Account</Link>
            </div>
          </div>
          <div className="footer_bottom">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
              className="footer_logo"
            />
            <p>© 2026 Nompilo Shabangu Amazon Clone. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
