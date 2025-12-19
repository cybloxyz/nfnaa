import React, { useState, useEffect } from "react";
import pixsong from "../assets/sounds/midnight.mp3";
import dream from "../assets/sounds/dreams.mp3";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import "../../Minecraft_Regular/stylesheet.css";
import "../please.css";
import "../reason.css";

import Plane from "../assets/images/plane.webp";
import Piano from "../assets/images/piano.webp";
import zew from "../assets/images/zew.webp";
import Me from "../assets/images/mee.png";
import Pr from "../assets/images/proj.webp";
import Bb from "../assets/images/bb.webp";
import S from "../assets/images/sp.webp";
import c from "../assets/images/cucum.webp";
import rice from "../assets/images/rice.webp";
import shrimp from "../assets/images/shrimp.webp";
import snack from "../assets/images/snack.webp";
import tomato from "../assets/images/tomato.webp";
import empty from "../assets/images/emptybox.webp";

import Navbar from "../assets/components/navbar";
import Music from "../assets/components/music"; 
import Faq from "../assets/components/faq";
import Card from "../components/bentocard";
import Carr from "../assets/components/carrousel";
import ThemeNotif from "@/assets/components/notif";
import LogoLoop from "../assets/components/minelogoloop";
import boy from "../assets/images/1.webp";

const images = [

  { src: Plane, description: 
                           {en: `dadiwantthis

                                  i am not forcing it is just
                                  a presentation`,
                            id: `dadiwantthis

                                 bukan memaksa, cuman presentasi`}, 
                            path: "https://dadiwantthis.vercel.app" },
  { src: zew, description: {en:`Trashformers - 0 waste

                                [still in progress]`, id:`Trashformers-0 sampah
                                
                                                          [masih dalam proses]`}, path: "https://zerowastehero.vercel.app" },
  { src: boy, description: {en:`Confess Coercion
    
                                make him say yes! no matter what`, id:`Confess Coercion
                                                                   
                                                                        buat dia bilang iya, apapun itu!`}, path: "https://github.com/cybloxyz/ConfessCoercion"},
  { src: Piano, description: {en:`Piano on-Cam
                                play piano without piano`, id:`Piano on-Cam
                                                               main piano tanpa piano`}, path: "https://github.com/cybloxyz/itsboo"},
];

const Space = () => {
  const [language, setLanguage] = useState("en");
  const greet = {
                en: `Helloo!! ✮ ⋆ ˚｡𖦹 ⋆｡°✩`,
                id: `Halooo!!✮ ⋆ ˚｡𖦹 ⋆｡°✩`
  }
  const here = {
               en: `click to see each project!`,
               id: `klik untuk lihat proyek!`
  }
  const [theme, setTheme] = useState("dark"); // light / dark
  const [ttext] = useTypewriter({
    words: ['Developer', 'Designer', 'Student', 'Chemist', 'Challenger'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  const bio = {
           en:  `
              Hi, I’m Nafisa Nailal Husna, 
              11th grade student who loves code and chem!

              click the music note beside to play my CV

              `,
          id: `
              hai! saya nafisa nailal husna, siswi kelas 11 yang
              sangat menyukai kimia dan kode

              klik not musik di sebelah untuk memutar CV saya

              `};
  const footer ={
                en: ` ⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖ Built with stress, but jk ⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖`,
                id: ` ⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖ dibuat dengan hati,  serius ⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖`
  }
  const rights = {
                 en: `🛸 Nafisa Nailal Husna. All Rights
          Reserved.`,
                 id: `🛸 Nafisa Nailal Husna. Hak Dilindungi Undang-Undang`
  }
  const disc = {en: "click each food for more!", id: "klik makanan untuk lebih lanjut!"}

  // ====== Background Music berubah sesuai theme ======
  useEffect(() => {
    let bgAudio;

    if (theme === "dark") {
      bgAudio = new Audio(dream);
    } else {
      bgAudio = new Audio(pixsong);
    } 

    bgAudio.volume = 0.5;
    bgAudio.loop = true;
    bgAudio.play().catch(() => {
      console.log("Autoplay diblokir browser");
    });

    return () => {
      bgAudio.pause();
    };
  }, [theme]);

  // ====== Typing effect ======

  return (
    <div
      className={`${
        theme === "dark" ? "default-bg" : "default-bg1"
      } relative transition-colors duration-500 ease-in-out`}
    >
     
     
      {/* ====== Baris 1 ====== */}
      <section id="Home">
<div className="w-screen lg:px-16 md:px-4 px-4 mt-72 mx-8">
  <h1 className={`mt-16 leading-relaxed whitespace-normal lg:text-6xl md:text-5xl sm:text-4xl text-3xl col-span-1 ${theme === "dark" ? "text-white" : "text-blue-900"}`}>
    Hey! I'm a{" "}
    <span className="font-bold text-sky-400">{ttext}</span>
    <span className="text-blue-500">
      <Cursor cursorStyle="★" />
    </span>
  </h1>

      

</div>

      <Navbar language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />

      <div className="lg:mx-12 md:mx-2 mx-8">
      <Music theme={theme} setTheme={setTheme} />
      </div>

      <ThemeNotif language={language} setLanguage={setLanguage} />

      <div className="mt-96 w-24 flex justify-center">
        <section>
          <LogoLoop />
        </section>
      </div>
      </section>
      


      <section id="Me" className="h-400 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center lg:mt-24 md:mt-24 sm:mb-64 mt-16 mb-32 relative group">
          {/* Gambar + efek hover */}
          
          <img
            src={Me}
            height="1000px"
            width="1200px"
            className="transition-transform duration-300 group-hover:scale-110 drop-shadow-xl mb-6 w-[350px] sm:w-[700px] md:w-[860px] lg:w-[1000px]"
          />

          {/* Teks di atas gambar */}
          <div className="absolute sm:top-36 sm:left-36 md:top-36 md:left-36 top-14 left-10 transition-transform duration-300 group-hover:scale-110">
            <h1 className={`sm:text-3xl md:text-5xl lg:text-6xl text-xl font-bold drop-shadow-lg ${theme === "dark" ? "text-white" : "text-blue-900" }`}>
              {greet[language]}
            </h1>

            <p className={`whitespace-pre-line md:mt-1 lg:mt-2 mt-0 sm:text-xl md:text-xl lg:text-3xl text-sm text-[8px] max-w-xl ${theme === "dark" ? "text-gray-200" : "text-blue-900"}`}>
              {bio[language]}
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center">
        <a href="https://www.animatedimages.org/cat-dividing-lines-134.htm">
          <img
            src="https://www.animatedimages.org/data/media/134/animated-dividing-line-image-0098.gif"
            border="0"
            alt="animated-dividing-line-image-star"
            height={32}
            width="full"
          />
        </a>
      </section>

      <section id="Project" className="h-120 flex flex-col justify-center items-center mt-64 pb-64 mb-16">
        <img
          src={Pr}
          alt="project"
          className="transform hover:scale-110 transition-transform duration-300 mb-6 w-[400px] md:w-[500px] lg:w-[800px]"
        />
        <p className={`sm:text-2xl text-sm text-white mb-12 ${theme === "dark" ? "text-white" : "text-blue-600"}`}>
          {here[language]}
        </p>
        <Carr images={images} language={language} setLanguage={setLanguage} />
      </section>

      <section className="flex justify-center items-center">
        <a href="https://www.animatedimages.org/cat-dividing-lines-134.htm">
          <img
            src="https://www.animatedimages.org/data/media/134/animated-dividing-line-image-0098.gif"
            border="0"
            alt="animated-dividing-line-image-0098"
          />
        </a>
      </section>

      <section id="BentoBox" className="h-500 flex flex-col justify-center items-center">
        <div className="items-start justify-center mx-1 sm:mt-48 mt-32 sm:mb-1 mb-0">
          <img
            src={Bb}
            className="transform hover:scale-110 transition-transform duration-300 mb-6 w-[400px] md:w-[860px] lg:w-[800px]"
          />
        </div>
        <h1 className="text-xl text-white drop-shadow-lg">{disc[language]}</h1>

  <div className="flex justify-center items-center lg:mt-12 md:mt-12 mt-2 mb-22 relative group">

  {/* bento box */}
  <img
    src={empty}
    className="pic md:w-[650px] md:h-[700px] lg:w-[750px] lg:h-[800px] sm:w-[550px] sm:h-[600px] w-[350px] h-[400px]"
  />

  {/* tomat (kiri atas) */}
  <button onClick={() => alert("apparels? come here!")} 
          className="overflow-hidden absolute top-[0.5px] lg:left-[2px] md:left-[2px] left-[0.5px] p-0 m-0 bg-transparent border-none">
    <img
      src={tomato}
      className="w-[170px] sm:w-[250px] md:w-[300px] lg:w-[350px] hover:scale-105 transition-transform duration-200"
    />
  </button>
  {/* nasi (tengah) */}
  <button onClick={() => alert("website maker machine!")} className="overflow-hidden absolute lg:top-[0.5px] md:top-[0.5px] top-[2px] right-[1px] p-0 m-0 bg-transparent border-none">
    <img
      src={rice}
      className="w-[245px] sm:w-[380px] md:w-[450px] lg:w-[520px] hover:scale-105 transition-transform duration-200"
    />
  </button>

   {/* udang (kanan atas) */}
  <button onClick={() => alert("game maker machine!")} className="overflow-hidden absolute lg:top-[220px] md:top-[190px] sm:top-[160px] top-[120px] lg:left-[6px] sm:left-[0.5px] left-[4px] p-0 m-0 bg-transparent border-none">
    <img
      src={shrimp}
      className="w-[200px] sm:w-[325px] md:w-[390px] lg:w-[440px] hover:scale-105 transition-transform duration-200"
    />
  </button>

  {/* snack (kiri bawah) */}
  <button onClick={() => alert("need help for stuffs or gifts? ")} className="overflow-hidden absolute lg:top-[450px] md:top-[400px] top-[235px] sm:top-[345px] lg:left-[6px] left-[3px] p-0 m-0 bg-transparent border-none">
    <img
      src={snack}
      className="w-[345px] sm:w-[600px] md:w-[700px] lg:w-[750px] hover:scale-105 transition-transform duration-200"
    />
  </button>

  {/* timun (kanan bawah) */}
  <button onClick={() => alert("hardware omg! ")} className="overflow-hidden absolute lg:top-[243px] md:top-[220px] sm:top-[190px] top-[125px] lg:right-[4px] sm:right-[8px] right-[1px] p-0 m-0 bg-transparent border-none">
    <img
      src={c}
      className="w-[160px] sm:w-[250px] md:w-[300px] lg:w-[350px] hover:scale-105 transition-transform duration-200"
    />
  </button>

</div>

                 
       
               
      </section>

 

      <div className="flex items-center justify-center mt-16">
        <img
          src={S}
          width={80}
          height={80}
          className="flex items-center justify-center"
        />
      </div>
     
    <section id="Contact">
      <Faq language={language} setLanguage={setLanguage} />
    </section> 


      <footer className={`text-white text-center py-6 mt-10 lg:text-lg md:text-lg text-sm ${theme === "dark" ? "bg-blue-900" : "bg-purple-700"}`}>
        <p>
          © {new Date().getFullYear()} {rights[language]}
        </p>
        <p className="lg:text-sm md:text-sm text-xs text-gray-300">
         {footer[language]}
        </p>
      </footer>
    </div>
  );
};

export default Space;
