import React, { useState } from "react";

function Image({ img, className }) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img.url} className="image-grid" />
    </div>
  );
}

export default Image;
