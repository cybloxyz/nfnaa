import React, { useState } from "react";

const PixelImageButton = ({ imgSrc, width = 128, height = 64, onClick, style }) => {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(true);
    if (onClick) onClick();
    setTimeout(() => setPressed(false), 100);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width,
        height,
        background: `url(${imgSrc}) no-repeat center/100% 100%`,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: pressed ? "scale(0.9)" : "scale(1)",
        transition: "transform 0.1s ease",
        imageRendering: "pixelated",
        ...style,
      }}
    />
  );
};

export default PixelImageButton;
