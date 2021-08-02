import React, { useState, useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  }

  function showButton() {
    if (cartItems.length > 0) {
      return (
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      );
    } else {
      return <p>You have no items in your cart.</p>;
    }
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      {showButton()}
    </main>
  );
}

export default Cart;
