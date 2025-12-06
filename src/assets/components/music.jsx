import React, { useRef, useEffect } from "react";
import "./music.css";
import song1 from "../images/m2.webp"; // ganti jadi file audio beneran
import song2 from "../images/m1.webp"; // ganti jadi file audio beneran
import { easeOut, motion } from "framer-motion";

const Music = ({ theme }) => {
// mapping theme -> lagu
const songs = {
dark: song1,
light: song2,
};

const currentSong = songs[theme] || song2;

const audioRef = useRef(null);

useEffect(() => {
// update audio setiap theme berubah
audioRef.current = new Audio(currentSong);
return () => {
if (audioRef.current) {
audioRef.current.pause();
}
};
}, [currentSong]);

const handlePlay = () => {
if (audioRef.current) {
audioRef.current.play().catch((err) => {
console.log("Audio tidak bisa diputar:", err);
});
}
};

return ( <nav>
<a href="/nafisa_cv.pdf" target="_blank" rel="noopener noreferrer">
  <motion.img
    key={theme}
    className="song drop-shadow-xl p-0 m-0 bg-transparent border-none cursor-pointer"
    src={currentSong}
    alt="open-cv"
    initial={{ x: -200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 200, opacity: 0 }}
    transition={{ duration: 0.5, ease: easeOut }}
    onClick={handlePlay}
  />
</a>
 </nav>
);
};

export default Music;
