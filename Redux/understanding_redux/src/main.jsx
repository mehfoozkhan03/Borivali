import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import { App } from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import { CartProvider } from "./Context/ContextCart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </StrictMode>,
);
