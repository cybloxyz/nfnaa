import React, {useEffect} from "react";
import pixsong from "../assets/sounds/dreams.mp3";
import { useNavigate } from "react-router-dom";
import "../reason.css";
import PixelButton from "../assets/components/PixelButton";
import Secret from "../assets/images/secret.png"
import "../please.css";
import "../reason.css";

const Reason = () => {
    const navigate = useNavigate();
    const text1 = "i'll tell you my reason, but keep it secret!!";
    const paragraph = `
                       I want to join Daydream because I believe it will be an inspiring and transformative experience. 
                       It offers me a chance to learn, meet new people, and grow both personally and creatively. 

                       Besides that, I also hope to get a new pair of headphones to improve my focus when studying and working, 
                       and blue light glasses to protect my eyes from long hours in front of the screen. 

                       These things will really help me stay healthy, productive, and motivated while preparing for the future.
                     `;

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
        <img 
           src={Secret}
           alt="padlock"
           width={130}
           height={130}
           className="wiggle"
        />
            
        <h1 className="reason-title">{text1}</h1>
        <p className="reason-paragraph">{paragraph}</p>
         <PixelButton
            label="lemme think"
            onClick={() => navigate("/")}
         />
      </div>
    );
};

export default Reason;
