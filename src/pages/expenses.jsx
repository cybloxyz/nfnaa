import React, {useEffect} from "react";
import pixsong from "../assets/sounds/pixsong.mp3";
import { useNavigate } from "react-router-dom";
import "../reason.css";
import PixelButton from "../assets/components/PixelButton";
import "../reason.css";


const Expenses = () => {
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
        <div className="default-bg"
        >
           <h1 className="reason-title">"i will give you look to the expenses soon!"</h1>  
           <PixelButton
            label="look other"
            onClick={() => navigate("/")}
          />  
        </div>
    );
};

export default Expenses;