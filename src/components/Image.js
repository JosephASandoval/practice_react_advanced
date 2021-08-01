import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";

function Image({ img, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems } = useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const cartItem = cartItems.find((item) => item.id === img.id);

    if (isHovered && cartItem) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
