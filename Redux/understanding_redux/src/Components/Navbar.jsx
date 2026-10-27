import React, { useContext } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Context/ContextCart";

export const Navbar = () => {
  const { count } = useContext(CartContext);

  return (
    <div className="navbar">
      <NavLink
        className={({ isActive }) => (isActive ? "isActive" : "")}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "isActive" : "")}
        to="/about"
      >
        About
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "isActive" : "")}
        to="/login"
      >
        Login
      </NavLink>

      {/* Shopping Cart */}
      <NavLink
        className={({ isActive }) => (isActive ? "isActive" : "")}
        to="/cart"
        aria-label="Shopping Cart"
      >
        <span className="batch">{count}</span>
        <FontAwesomeIcon icon={faCartShopping} />
      </NavLink>
    </div>
  );
};
