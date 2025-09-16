import React, { useEffect } from "react";
import PixelButton from "../assets/components/PixelButton";
import PixelButtonpink from "../assets/components/Pixelbuttonpink";
import money from "../assets/images/money.png";
import glasses from "../assets/images/glasses.png";
import head from "../assets/images/headphones.png";
import watch from "../assets/images/watch.png";
import pixsong from "../assets/sounds/midnight.mp3";
import "../../Minecraft_Regular/stylesheet.css";
import PixelCarr from "../assets/components/carr";
import { useNavigate, Link } from "react-router-dom";
import "../please.css";
import "../reason.css";

const Belongs = () => {
  const fullText1 = "this is what i need to go there!";
  const fullText2 = "i have some but dont have some other";
  const images = [
  {
    src: money,
    description: `umm.. of course this is very important
    (i do not have this)`
  },
  {
    src: glasses,
    description: `my eyes hurt sometimes
(mine is broken)`
  },
  {
    src: head,
    description: `to reduce noise
(i do not have this)`
  },
  {
    src: watch,
    description: `so I will not forget time
    (i do not have this)`
  }
];

  const navigate = useNavigate();

  useEffect(() => {
      const bgAudio = new Audio(pixsong);
      bgAudio.volume = 0.3;
      bgAudio.loop = true;
      bgAudio.play().catch(() => {
      console.log("Autoplay diblokir di browser ini");
      });
  
  
      return () => {
      bgAudio.pause();
      bgAudio.currentTime = 0; 
       };
      }, []);

  return (
    <div
      className="default-bg"
    >
      <h1 className="dadplease-subsub">{fullText1}</h1>
      <h1 className="dadplease-subtitle">{fullText2}</h1>

      <PixelCarr images={images} />

     <PixelButton
            label="go back"
            onClick={() => navigate("/")}
      />  
    </div>
  );
};

export default Belongs;