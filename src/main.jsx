import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ShoppingState } from "./context/shopping/ShoppingState.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <ShoppingState>
          <App />
        </ShoppingState>
    </BrowserRouter>
  </StrictMode>,
);
