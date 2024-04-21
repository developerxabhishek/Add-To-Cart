import React from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CiForkAndKnife } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import CartPage from "../pages/CartPage";
const Navbar = () => {
  const [state, setState] = useState("hide");
  const mySelector = useSelector((state) => state.cartSlice.cart);
  console.log(mySelector);
  const displayCart = (state) => {
    if (state) {
      setState("show");
    } else {
      setState("hide");
    }
  };
  const dispatch = useDispatch();
  return (
    <>
      <div className="nav">
        <div className="nav-icon-container">
          <div>
            <CiForkAndKnife style={{ fontSize: "25px " }} />
          </div>
          <h3>Food's Restaurant</h3>
        </div>
        <div className="nav-cart">
          <FaShoppingCart
            style={{ fontSize: "25px", color: "white" }}
            onClick={() => {
              if (state === "show") {
                displayCart(false);
              } else {
                displayCart(true);
              }
            }}
          />
          <span className="cart-quantity-display">{mySelector.length}</span>
        </div>
      </div>
      <div className={state}>
        <CartPage displayCart={displayCart} />
      </div>
    </>
  );
};
export default Navbar;
