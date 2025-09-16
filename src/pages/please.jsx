import React, { useState, useEffect } from "react";

import typingSound from "../assets/sounds/typingcut.mp3";
import pixsong from "../assets/sounds/midnight.mp3";
import "../../Minecraft_Regular/stylesheet.css";
import "../please.css";
import "../reason.css";
import Plane from "../assets/images/plane.png";
import Navbar from "../assets/components/navbar";
import Bento from "../components/bentobox";
import Card from "../components/bentocard";


const Dadplease = () => {
  const [text, setText] = useState("");
  const fullText = "welcome to my portofolio!";

  useEffect(() => {
    // ====== Background Music ======
    const bgAudio = new Audio(pixsong);
    bgAudio.volume = 0.5;
    bgAudio.loop = true;
    bgAudio.muted = false;
    bgAudio
      .play()
      .then(() => {
        bgAudio.muted = false;
      })
      .catch(() => {
        console.log("Autoplay diblokir di browser ini");
      });

    // ====== Typing Sound ======
    const typingSounds = [];
    for (let j = 0; j < 2; j++) {
      const audio = new Audio(typingSound);
      audio.volume = 0.3;
      typingSounds.push(audio);
    }

    let soundIndex = 0;
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));

      const sound = typingSounds[soundIndex];
      sound.currentTime = 0;
      sound.play().catch(() => {});
      soundIndex = (soundIndex + 1) % typingSounds.length;

      i++;
      if (i === fullText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => {
      clearInterval(interval);
      bgAudio.pause();
    };
  }, []);

  return (
  <div className="default-bg relative">
    <Navbar />

    {/* ====== Baris 1 ====== */}
    <section className="h-500 flex flex-col">
      <div className="flex-container">
        <img className="responsive-img" src={Plane} alt="plane" />
        <h1 className="dadplease-typing">{text}</h1>
      </div>
    </section>


    <section className="h-500 flex flex-col justify-center items-center">
      <div className='items-start justify-center mt-28'>
                <h1 className='minecraft-text1'>
                    About Me
                </h1>
      </div>
      <Bento />
    </section>

     <section className="h-500 flex flex-col justify-center items-center">
      <div className='items-start justify-center mx-1'>
                <h1 className='minecraft-text1'>
                    Projects
                </h1>
      </div>
      <Card />
    </section>
   
  </div>
);

};

export default Dadplease;
