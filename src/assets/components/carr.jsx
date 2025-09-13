import React, { useState } from "react";
import PixelImageButton from "./pixelimage";
import clickSound from "../sounds/click.wav"; // pastikan path benar

const ImageCarousel = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedWidth = 140;
  const selectedHeight = 140;
  const sideWidth = 100;
  const sideHeight = 100;
  const gap = 20;

  const handleClick = (index) => {
    const audio = new Audio(clickSound);
    audio.volume = 0.5;
    audio.play().catch(() => {}); // mainkan suara klik

    setSelectedIndex(index);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: `${selectedHeight}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "visible",
      }}
    >
      {images.map((img, index) => {
        const isSelected = index === selectedIndex;
        const offset = index - selectedIndex;
        const width = isSelected ? selectedWidth : sideWidth;
        const height = isSelected ? selectedHeight : sideHeight;

        return (
          <PixelImageButton
            key={index}
            imgSrc={img}
            width={width}
            height={height}
            onClick={() => handleClick(index)} // pake handleClick
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translateX(${
                offset * (sideWidth + gap)
              }px) translateX(-50%) translateY(-50%) scale(${
                isSelected ? 1 : 0.8
              })`,
              opacity: isSelected ? 1 : 0.5,
              transition: "all 0.5s ease",
              zIndex: isSelected ? 10 : 1,
            }}
          />
        );
      })}
    </div>
  );
};

export default ImageCarousel;
