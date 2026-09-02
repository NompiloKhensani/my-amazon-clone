import { useState, useEffect, useReducer, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://assets.aboutamazon.com/dims4/default/8bc99b1/2147483647/strip/true/crop/6110x2047+0+0/resize/645x216!/format/webp/quality/90/?url=https%3A%2F%2Fassets.aboutamazon.com%2F2e%2Fd7%2Fac71f1f344c39f8949f48fc89e71%2Famazon-logo-squid-ink-smile-orange.png"
          alt="amazon logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in or create account</h1>
        <form>
          <h4>Email</h4>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4>Password</h4>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login_registerButton" onClick={register}>
          Create Account
        </button>
      </div>
      <div className="login_footer">
        <div className="login_footer_links">
          <a
            href="https://www.amazon.com/conditionsofuse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conditions of Use
          </a>

          <a
            href="https://www.amazon.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Notice
          </a>

          <a
            href="https://www.amazon.co.za/hz/contact-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help
          </a>
          <a
            href="https://www.amazon.co.za/gp/help/customer/display.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookies Notice
          </a>
          <a
            href="https://www.amazon.co.za/gp/help/customer/display.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Interest-Based Ads
          </a>
        </div>

        <p className="login_footer_copyright">
          © 2026, Nompilo Shabangu Amazon Clone
        </p>
      </div>
    </div>
  );
};

export default Login;
