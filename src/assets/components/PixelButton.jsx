import React, { useState } from "react";
import buttonImg from "./button.png";
import clickSound from "../sounds/click.wav";

const PixelButton = ({ label, onClick }) => {
  const [pressed, setPressed] = useState(false);
  const [setHovered] = useState(false);


  const handleClick = () => {
    setPressed(true);

    const audio = new Audio(clickSound);
    audio.play();
    audio.volume = 0.3;

    if (onClick) onClick();

    setTimeout(() => setPressed(false), 150);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "128px",
        height: "64px",
        background: `url(${buttonImg}) no-repeat center/100% 100%`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        hover: "scale-110",
        imageRendering: "pixelated",
        transform: pressed ? "scale(0.9)" : "scale(1)",
        transition: "transform 0.1s",
      }}
    >
      <span
        style={{
          fontFamily: "Minecraft Regular",
          color: "white",
          fontSize: "20px",
          pointerEvents: "none",
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default PixelButton;
