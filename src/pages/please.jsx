import React, { useState, useEffect } from "react";
import typingSound from "../assets/sounds/typingcut.mp3";
import pixsong from "../assets/sounds/midnight.mp3";
import "../../Minecraft_Regular/stylesheet.css";
import "../please.css";
import "../reason.css";
import Plane from "../assets/images/plane.png";
import Me from "../assets/images/mee.png";
import Pr from "../assets/images/proj.png";
import Bb from "../assets/images/bb.png";
import R from "../assets/images/run.png";
import S from "../assets/images/sp.png";
import G from "../assets/images/git.png";
import I from "../assets/images/ig.png";
import Navbar from "../assets/components/navbar";
import Faq from "../assets/components/faq";
import Bento from "../components/bentobox";
import Card from "../components/bentocard";
import Carr from "../assets/components/carrousel";

 const images = [
  { src: Plane, description: "aaa", path: "/about" },
  { src: Plane, description: "bbb", path: "/contact" },
  { src: Plane, description: "ccc", path: "/about" },
  { src: Plane, description: "ddd", path: "/about" },
  { src: Plane, description: "eee", path: "/about" },
  { src: Plane, description: "fff", path: "/contact" }
];


const Dadplease = () => {
  const [text, setText] = useState("");
  const fullText = "welcome to my portofolio!";

 function FAQItem({ question, answer }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="faq-item flex justify-center">
      <h3 onClick={() => setOpen(!open)}>{question}</h3>
      {open && <p>{answer}</p>}
    </div>
  );
}
  
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

<section className="h-400 flex flex-col justify-center items-center">
  <div className="flex justify-center items-center mt-24 mb-64 relative group">
    {/* Gambar + efek hover */}
    <img 
      src={Me}
      height="1000px"
      width="1200px"
      className="transition-transform duration-300 group-hover:scale-110"
    />

    {/* Teks di atas gambar */}
    <div className="absolute top-56 left-48 transition-transform duration-300 group-hover:scale-110">
      <h1 className="text-6xl font-bold text-white drop-shadow-lg">
        Helloo!!
      </h1>
      <p className="mt-2 text-2xl text-gray-100 max-w-xl">
        Nafisa Nailal Husna, grade 11 student who have big interest in STEM field
      </p>
    </div>
  </div>
</section>



    <img 
          src={R}
    />

    <section className="h-120 flex flex-col justify-center items-center mt-64 pb-64">
       <img 
          src={Pr}
          className="hover:scale-110 transition-transform duration-300"
        />
        <Carr images={images}/>
    </section>

     <img 
          src={R}
    />

     <section className="h-500 flex flex-col justify-center items-center z-1000">
      <div className='items-start justify-center mx-1 mt-64'>    
        <img 
          src={Bb}
          className="hover:scale-110 transition-transform duration-300"
        />
      </div>
      <Card />
    </section>
   
   <div className="flex items-center justify-center">
       <img 
          src={S}
          width={80}
          height={80}
          className="flex items-center justify-center"
      />
   </div> 
       

   <Faq />
   
   <footer className="bg-blue-900 text-white text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} Nafisa Nailal Husna. All Rights Reserved.</p>
      <p className="text-sm text-gray-300">Built with stress, but jk</p>
   </footer>


  </div>
);

};

export default Dadplease;
