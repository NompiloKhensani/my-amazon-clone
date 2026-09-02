import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ShoppingContext from "../../context/shopping/shoppingContext";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import "./Header.css";

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;
  const [department, setDepartment] = useState("All");
  const [accountOpen, setAccountOpen] = useState(false);

  const handleAuthentication = () => {
    if (user) {
      signOut(auth);
      setAccountOpen(false);
    }
  };

  const handleAccountClick = () => {
    setAccountOpen((prev) => !prev);
  };

  const closeAccountDropdown = () => {
    setAccountOpen(false);
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
          className="header_logo"
        />
      </Link>

      <div className="header_location">
        <LocationOnRoundedIcon className="location_icon" />
        <div className="location_text">
          <span className="location_one">
            Delivering to Johannesburg 0000
          </span>
          <span className="location_two">
            Update location
          </span>
        </div>
      </div>

      <div className="header_search">
        <div className="header_searchDropdownWrapper">
          <select
            className="header_searchDropdown"
            style={{
              width:
                department === "All"
                  ? "60px"
                  : `${department.length * 7 + 45}px`,
            }}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Beauty">Beauty</option>
            <option value="Books">Books</option>
            <option value="Electronics">Electronics</option>
            <option value="Home & Kitchen">
              Home & Kitchen
            </option>
            <option value="Sports & Outdoors">
              Sports & Outdoors
            </option>
            <option value="Video Games">
              Video Games
            </option>
          </select>
          <ArrowDropDownRoundedIcon className="searchDropdown_icon" />
        </div>

        <input
          className="header_input"
          type="text"
          placeholder="Search Amazon"
        />
        <SearchIcon className="search_icon" />
      </div>

      <div className="header_nav">

        <div className="header_account">
          <div
            className="header_option"
            onClick={handleAccountClick}
          >
            <span className="header_optionOne">
              Hello, {!user ? "Sign In" : user.email}
            </span>
            <span className="header_optionTwo">
              Account & Lists
              <ArrowDropDownRoundedIcon
                className="accountDropdown_icon"
              />
            </span>
          </div>

          {accountOpen && (
            <div className="account_dropdown">
              {!user ? (
                <>
                  <div className="account_dropdown_top">
                    <Link
                      to="/login"
                      onClick={closeAccountDropdown}
                    >
                      <button className="account_signin">
                        Sign in
                      </button>
                    </Link>

                    <p className="account_new">
                      New customer?{" "}
                      <Link
                        to="/login"
                        onClick={closeAccountDropdown}
                      >
                        Start here.
                      </Link>
                    </p>
                  </div>

                  <div className="account_divider"></div>
                  <div className="account_dropdown_columns">
                    <div className="account_column">
                      <h3>
                        Your Lists
                      </h3>

                      <Link
                        to="/login"
                        className="account_link"
                        onClick={closeAccountDropdown}
                      >
                        Find a List
                      </Link>
                    </div>

                    <div className="account_column">
                      <h3>
                        Your Account
                      </h3>

                      <Link
                        to="/login"
                        className="account_link"
                        onClick={closeAccountDropdown}
                      >
                        Account
                      </Link>

                      <Link
                        to="/orders"
                        className="account_link"
                        onClick={closeAccountDropdown}
                      >
                        Orders
                      </Link>

                      <Link
                        to="/checkout"
                        className="account_link"
                        onClick={closeAccountDropdown}
                      >
                        Cart
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="account_dropdown_columns">
                    <div className="account_column">
                      <h3>
                        Your Lists
                      </h3>

                      <Link
                        to="/wishlist"
                        className="account_link"
                        onClick={closeAccountDropdown}
                      >
                        Open Wishlist
                      </Link>
                    </div>

                    <div className="account_column">

                      <h3>
                        Your Account
                      </h3>
                      <div className="account_info">
                        <span className="account_label">
                          Signed in as:
                        </span>
                        <span className="account_email">
                          {user.email}
                        </span>
                      </div>

                      <Link
                        to="/orders"
                        className="account_link"
                        onClick={closeAccountDropdown}
                      >
                        Your Orders
                      </Link>

                      <Link
                        to="/checkout"
                        className="account_link"
                        onClick={closeAccountDropdown}
                      >
                        Your Cart
                      </Link>

                      <button
                        className="account_signout"
                        onClick={handleAuthentication}
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <Link
          to="/orders"
          className="header_navLink"
        >
          <div className="header_option">
            <span className="header_optionOne">
              Returns
            </span>
            <span className="header_optionTwo">
              & Orders
            </span>
          </div>
        </Link>

        <Link
          to="/checkout"
          className="header_navLink"
        >
          <div className="header_optionBasket">
            <AddShoppingCartIcon />
            <span className="header_optionTwo header_basketCount">
              {basket?.reduce(
                (total, item) => total + item.quantity,
                0
              )}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
