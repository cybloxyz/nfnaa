import React from 'react';
import "./bentobox.css"
import "../index.css"

import Plane from "../assets/images/plane.webp";

const Bento = ({language, setLanguage}) => {
    const text1 = {en: `Website Maker Machine!`, id: `Mesin Pembuat Website!`}
    const sec2 = {en: `Customize your Games for someone?`, id: `buat game custom untuk seseorang?`}
    const sec3 = {en: `Cute T-Shirt?let's see!`, id: `Kaos lucu? coba sini!`}

    return (
        
        <div className="h-full w-full flex items-center justify-center bg-transparent sm:m-12 m-0">
            
            <div className="grid lg:h-[850px] md:h-[650px] sm:h-[500px] h-[600px] lg:w-[1000px] md:w-[700px] sm:w-[600px] w-[300px] bg-white/70 backdrop-blur-lg drop-shadow-lg rounded-3xl
                            sm:grid-cols-6 sm:grid-rows-10
                            md:grid-cols-6 md:grid-rows-10
                            lg:grid-cols-6 lg:grid-rows-10
                            xs:grid-cols-2 xs:grid-rows-4 
                            grid-cols-2 grid-rows-4 
                            lg:gap-4 lg:p-4 md:gap-4 gap-2 p-4 m-0 mt-0
                            xl:mb-48 lg:mb-16 md:mb-2 
                            " >
                <button className="sm:col-span-2 sm:row-span-4 
                                col-span-1 row-span-1 
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover
                                flex items-center justify-center">
                 <h1 className='text-auto lg:text-xl text-blue-900 text-sm flex items-center justify-center lg:mb-4'>
                
                 </h1>
                 
                </button>      

                <button className="sm:col-span-4 sm:row-span-4 
                                col-span-2 row-span-2 
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover  flex items-center justify-center">
                 <h1 className='sm:text-4xl text-sm'>
                    
                 </h1>

                 <img src={Plane} className="absolute w-16 h-16 lg:w-48 lg:h-48 animate-bounce mt-12 pixelated"/>

                </button> 
             
                <button className="sm:col-span-4 sm:row-span-3 
                                md:col-span-4 md:row-span-3 
                                lg:col-span-4 lg:row-span-3 
                                xs:col-span-3 xs:row-span-1
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover"></button>

                <button className="sm:col-span-2 sm:row-span-3 
                                col-span-3 row-span-1
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover"></button>

                <button className="sm:col-span-6 sm:row-span-3
                                md:col-span-6 md:row-span-3
                                lg:col-span-6 lg:row-span-3
                                col-span-3 row-span-1 
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover"></button> 
          
            </div>         
        </div>
    );
};

export default Bento;