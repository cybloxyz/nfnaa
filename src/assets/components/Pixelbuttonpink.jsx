import React, { useState } from "react";
import buttonImg from "./buttonp.png";
import clickSound from "../sounds/click.wav";

const PixelButtonpink = ({ label, onClick }) => {
  const [pressed, setPressed] = useState(false);


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
      style={{
        width: "138px",
        height: "64px",
         margin: "20px",
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

export default PixelButtonpink;
