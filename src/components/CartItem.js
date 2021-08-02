import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  const [isHovering, setIsHovering] = useState(false);

  const trashClassName = isHovering
    ? "ri-delete-bin-fill"
    : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={trashClassName}
        onClick={() => removeFromCart(item.id)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
