import React from "react";

const CartTotal = ({ cart }) => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let { price, quantity } = cart[i];
    total = total + price * quantity;
  }
  return (
    <div>
      <h2>Total = ${total}.00</h2>
    </div>
  );
};

export default CartTotal;
