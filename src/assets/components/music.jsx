import React, { useRef } from "react";
import "./music.css";
import song1 from "../images/m2.png";
import song2 from "../images/m1.png";
import { easeOut, motion } from "framer-motion";

const Music = ({ theme, setTheme }) => {
  // Mapping theme ke gambar lagu
  const songs = {
    dark: song1,
    light: song2,
  };

const navbarSong = () => {
  const audioRef = useRef(new Audio(currentSong));

  const handlePlay = () => {
  audioRef.current.play().catch(err => {
    console.log("audio tidak bisa diputar", err);
  });

}

}
  // Ambil lagu sesuai theme, default ke light
  const currentSong = songs[theme] || song2;

  return (
    <nav>
      <motion.img 
         key={theme}
         className="song drop-shadow-xl"
         src={currentSong}
         alt="current song"
         initial={{x: -200, opacity: 0}}
         animate={{x: 0, opacity: 1}}
         exit={{x: 200, opacity: 0}}
         transition={{duration: 0.5, ease: easeOut}}
      />
    </nav>
  );
};

export default Music;
