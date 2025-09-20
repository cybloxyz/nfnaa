import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";

const ThemeNotif = ({language, setLanguage}) => {
  const [show, setShow] = useState(false);
  const notif = {
                id: `🌙 Ganti tema untuk 
                     mengganti background music 🎵`,
                en: `🌙 Change theme to change 
                    music background 🎵`}
  const notif2 = {
                id: `klik 'nfnaa' untuk mengubah bahasa`,
                en: `click 'nfnaa' to change language`}

  useEffect(() => {
    // munculkan notif pas pertama kali load
    setShow(true);

    // auto hilang setelah 4 detik
    const timer = setTimeout(() => {
      setShow(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed right-10 z-50">
        <motion.div 
           className="fixed top-36 right-10 z-50 text-white text-bold sm:text-lg md:text-sm text-sm whitespace-pre-line"
           initial={{x: 200, opacity: 0}}
           animate={{x:0, opacity: 1}}
           exit={{x: 200, opacity: 0}}
           transition={{duration: 0.5, ease: easeInOut}}
        >
          {notif[language]}  
        </motion.div>
        <motion.div 
           className="fixed top-56 right-10 z-50 text-white text-bold sm:text-lg md:text-sm text-sm whitespace-pre-line"
           initial={{x: 200, opacity: 0}}
           animate={{x:0, opacity: 1}}
           exit={{x: 200, opacity: 0}}
           transition={{duration: 0.5, ease: easeInOut}}
        >
          {notif2[language]}  
        </motion.div>
    </div>
  );
};

export default ThemeNotif;
