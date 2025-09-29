import React, { useRef, useEffect } from "react";
import "./music.css";
import song1 from "../images/m2.png"; // ganti jadi file audio beneran
import song2 from "../images/m1.png"; // ganti jadi file audio beneran
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
<motion.img
key={theme}
className="song drop-shadow-xl"
src={currentSong} // bisa gambar cover album
alt="current song"
initial={{ x: -200, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
exit={{ x: 200, opacity: 0 }}
transition={{ duration: 0.5, ease: easeOut }}
onClick={handlePlay}
/> </nav>
);
};

export default Music;
