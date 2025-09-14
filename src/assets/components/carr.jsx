import React, { useState } from "react";
import PixelImageButton from "./pixelimage";
import clickSound from "../sounds/click.wav";
import { useNavigate } from "react-router-dom";

const ImageCarousel = ({ images }) => {
  const navigate = useNavigate();

  // Ambil index terakhir dari localStorage kalau ada
  const [selectedIndex, setSelectedIndex] = useState(
    () => parseInt(localStorage.getItem("selectedIndex")) || 0
  );

  const selectedWidth = 140;
  const selectedHeight = 140;
  const sideWidth = 100;
  const sideHeight = 100;
  const gap = 20;

  const handleClick = (index, path) => {
    const audio = new Audio(clickSound);
    audio.volume = 0.5;
    audio.play().catch(() => {});

    if (index !== selectedIndex) {
      // kalau klik item kiri/kanan → geser aja + simpan ke localStorage
      setSelectedIndex(index);
      localStorage.setItem("selectedIndex", index);
      return;
    }

    // kalau item sudah di tengah → baru navigate
    if (path) {
      navigate(path);
    }
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
            imgSrc={img.src} // pakai img.src
            width={width}
            height={height}
            onClick={() => handleClick(index, img.path)}
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
      <div style={{ marginTop: "182px", textAlign: "center", maxWidth: "300px", position: "absolute" }}>
        <p style={{ whiteSpace: "pre-line", fontFamily: "Minecraft Regular", fontSize: "14px", color: "white", textShadow: "1px 1px 2px black", margin: 0 }}>
          {images[selectedIndex].description}
        </p>
      </div>
    </div>
  );
};

export default ImageCarousel;
