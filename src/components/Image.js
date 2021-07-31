import React, { useState } from "react";

function Image({ img, className }) {
  const [isHovered, setIsHovered] = useState(false);

  const heartIcon = isHovered && <i className="ri-heart-line favorite"></i>;
  const cartIcon = isHovered && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}

export default Image;
