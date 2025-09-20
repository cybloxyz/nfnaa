import React, { useState, useEffect } from "react";
import PixelImageButton from "./pixelimage";
import clickSound from "../sounds/click.wav";
import { useNavigate } from "react-router-dom";

const ImageCarousel = ({ images, language, setLanguage }) => {
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(
    () => parseInt(localStorage.getItem("selectedIndex")) || 0
  );

  // Cek device
const [isMobile, setIsMobile] = useState(
  typeof window !== "undefined" ? window.innerWidth < 640 : false
);

useEffect(() => {
  if (typeof window === "undefined") return;

  const handleResize = () => setIsMobile(window.innerWidth < 640);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  // Ukuran item
  const selectedSize = isMobile ? 175 : 350;
  const sideSize = isMobile ? 120 : 240;
  const gapPercent = isMobile ? 100 : 180; // % jarak antar item

  const handleClick = (index, path) => {
    const audio = new Audio(clickSound);
    audio.volume = 0.5;
    audio.play().catch(() => {});

    if (index !== selectedIndex) {
      setSelectedIndex(index);
      localStorage.setItem("selectedIndex", index);
      return;
    }
    if (path) {
      if (path.startsWith("https")) {
        window.open(path, "_blank", "noopener, noreferrer");
      }
    }
    else {navigate(path)};
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: `${selectedSize + 60}px`, // kasih ruang buat caption
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {images.map((img, index) => {
        const isSelected = index === selectedIndex;
        const offset = index - selectedIndex;

        if (Math.abs(offset) > 1) return null;

        const size = isSelected ? selectedSize : sideSize;

        return (
          <PixelImageButton
            key={index}
            imgSrc={img.src}
            width={size}
            height={size}
            onClick={() => handleClick(index, img.path)}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translateX(${
                offset * gapPercent
              }%) scale(${isSelected ? 1 : 0.8})`,
              opacity: isSelected ? 1 : 0.5,
              transition: "all 0.4s ease",
              zIndex: isSelected ? 10 : 1,
            }}
          />
        );
      })}

      {/* Caption di bawah gambar */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? "-64px" : "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          maxWidth: isMobile ? "220px" : "300px",
        }}
      >
        <p
          style={{
            whiteSpace: "pre-line",
            fontFamily: "Minecraft Regular",
            fontSize: isMobile ? "14px" : "24px",
            color: "white",
            textShadow: "1px 1px 2px black",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {images[selectedIndex].description[language]}
        </p>
      </div>
    </div>
  );
};

export default ImageCarousel;
