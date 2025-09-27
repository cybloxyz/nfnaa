import React, { useState, useEffect } from "react";
import typingSound from "../assets/sounds/typingcut.mp3";
import pixsong from "../assets/sounds/midnight.mp3";
import dream from "../assets/sounds/dreams.mp3";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import "../../Minecraft_Regular/stylesheet.css";
import "../please.css";
import "../reason.css";

import Plane from "../assets/images/plane.png";
import Humf from "../assets/images/humf.png";
import Tob from "../assets/images/tob.png";
import zew from "../assets/images/zew.png";
import Me from "../assets/images/mee.png";
import Pr from "../assets/images/proj.png";
import Bb from "../assets/images/bb.png";
import R from "../assets/images/run.png";
import S from "../assets/images/sp.png";
import H from "../assets/images/headphones.png";
import Navbar from "../assets/components/navbar";
import Music from "../assets/components/music";
import Faq from "../assets/components/faq";
import Bento from "../components/bentobox";
import Card from "../components/bentocard";
import Carr from "../assets/components/carrousel";
import ThemeNotif from "@/assets/components/notif";
import LogoLoop from "../assets/components/minelogoloop";
import Blk from "../assets/images/block.jpeg";
import boy from "../assets/images/1.png";

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
  { src: Blk, description: {en:`none`, id:`belum ada`}},
];

const Space = () => {
  const [text, setText] = useState("");
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

              I’m a passionate learner and aspiring innovator 
              with a deep interest in technology, design, and problem-solving.
              I enjoy building creative projects that combine coding, design, 
              and real-world impact
              `,
          id: `
              hai! saya nafisa nailal husna, siswi kelas 11 yang
              sangat menyukai kimia dan kode

              passion saya terletak pada desain, kreatifitas, 
              teknologi dan penyelesaian masalah
              menciptakan inovasi dan solusi menghadapi
              tantangan digital adalah apa yang saya usahakan!
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
  const disc = {en: "this part is still in progress...", id: "bagian ini masih dalam proses..."}

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
      <ThemeNotif language={language} setLanguage={setLanguage} />
      <Music theme={theme} setTheme={setTheme}/>
      <Navbar theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage}/>
      

      {/* ====== Baris 1 ====== */}
<h1 className="text-white ml-[5%] my-6 leading-relaxed break-words whitespace-normal mt-72">
  Hey! I'm a{" "}
  <span className="font-bold text-sky-400">{ttext}</span>
  <span className="text-blue-500">
    <Cursor cursorStyle="★" />
  </span>
</h1>




      <section className="mt-80">
          <LogoLoop />
      </section>
      


      <section id="Me" className="h-400 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mt-24 sm:mb-64 mb-32 relative group">
          {/* Gambar + efek hover */}
          <img
            src={Me}
            height="1000px"
            width="1200px"
            className="transition-transform duration-300 group-hover:scale-110 drop-shadow-xl"
          />

          {/* Teks di atas gambar */}
          <div className="absolute sm:top-48 sm:left-48 md:top-36 md:left-36 top-16 left-16 transition-transform duration-300 group-hover:scale-110">
            <h1 className={`sm:text-6xl text-2xl font-bold drop-shadow-lg ${theme === "dark" ? "text-white" : "text-blue-900" }`}>
              {greet[language]}
            </h1>

            <p className={`whitespace-pre-line mt-2 sm:text-2xl text-[8px] max-w-xl ${theme === "dark" ? "text-gray-200" : "text-blue-900"}`}>
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
          className="hover:scale-110 transition-transform duration-300 mb-6"
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
            className="hover:scale-110 transition-transform duration-300 mb-18"
          />

        </div>
                 <h1 className="text-xl text-white drop-shadow-lg">{disc[language]}</h1>
       
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


      <footer className={`text-white text-center py-6 mt-10 ${theme === "dark" ? "bg-blue-900" : "bg-purple-700"}`}>
        <p>
          © {new Date().getFullYear()} {rights[language]}
        </p>
        <p className="text-sm text-gray-300">
         {footer[language]}
        </p>
      </footer>
    </div>
  );
};

export default Space;
