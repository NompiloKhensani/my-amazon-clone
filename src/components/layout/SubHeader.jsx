import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./SubHeader.css";

const SubHeader = () => {
  return (
    <nav className="subheader">
      <div className="subheader_left">
        <Link to="#" className="subheader_option">
          <MenuIcon className="subheader_menuIcon" />
          All
        </Link>
        <Link to="#" className="subheader_option">
          Customer Service
        </Link>
        <Link to="#" className="subheader_option">
          Prime
        </Link>
        <Link to="#" className="subheader_option">
          Today's Deals
        </Link>
        <Link to="#" className="subheader_option">
          Keep Shopping for
        </Link>
        <Link to="#" className="subheader_option">
          Everyday Essentials
        </Link>
        <Link to="#" className="subheader_option">
          Best Sellers
        </Link>
        <Link to="#" className="subheader_option">
          Shop Mzansi
        </Link>
        <Link to="#" className="subheader_option">
          Gift Cards
        </Link>
        <Link to="#" className="subheader_option">
          Sell
        </Link>
      </div>

      <div className="subheader_prime">
        <img
          src="https://m.media-amazon.com/images/G/53/RBSxFELA/2025/payday/Fast_free_delivery_swm_motion_primex02._CB760254565_.jpg"
          alt="Start your free trial"
        />
      </div>
    </nav>
  );
};

export default SubHeader;