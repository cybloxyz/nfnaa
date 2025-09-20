// Navbar.jsx
import React from "react";
import "./navbar.css";
import { motion, easeOut } from "framer-motion";

const Navbar = ({theme, setTheme, language, setLanguage}) => {
  const home = {
               id: `Utama`,
               en: `Home`
  }
  const Me = {
               id: `Aku`,
               en: `Me`
  }
  const Things = {
               id: `Proyek`,
               en: `Project`
  }
  const Contact = {
               id: `Kontak`,
               en: `Contact`
  }
  const Light = {
                 en: `☀️ Light`,
                 id: `☀️ Terang`
  }

  const Dark = {
                 en: `🌙 Dark`,
                 id: `🌙 Gelap`
  }

  return (
    <nav >
      <motion.nav 
         className="navbar"
         initial={{y:-200, opacity: 0}}
         animate={{y: 0, opacity: 1}}
         exit={{y: 200, opacity: 0}}
         transition={{duration: 0.5, ease: easeOut}} >
       <div 
          className="nav-logo cursor-pointer select-none"
          onClick={() => setLanguage((prev) => (prev === "en" ? "id" : "en"))}
          title="click to change language">
            {language === "id" ? "🇮🇩 nfnaa" : "🇬🇧 nfnaa"}
          </div>
      <ul className="nav-links">
        <li><a href="#Home">{home[language]}</a></li>
        <li><a href="#Me">{Me[language]}</a></li>
        <li><a href="#Project">{Things[language]}</a></li>
        <li><a href="#Contact">{Contact[language]}</a></li>
      </ul>

       <button
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
        className="sm:px-5 sm:py-3 md:px-2 md:py-1 px-1 py-1 sm:text-lg text-sm rounded-xl bg-white/60 text-black font-bold shadow-md hover:scale-105 transition"
      >
        {theme === "dark" ? Light[language] : Dark[language]}
      </button>

      </motion.nav>
    </nav>
  );
};

export default Navbar;

