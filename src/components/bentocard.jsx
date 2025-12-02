import React from 'react';
import "./bentobox.css"
import "../index.css"

const Bento = ({language, setLanguage}) => {
    const sec1 = {en: `Website Maker Machine!`, id: `Mesin Pembuat Website!`}
    const sec2 = {en: `Customize your Games for someone?`, id: `buat game custom untuk seseorang?`}
    const sec3 = {en: `Website Maker Machine!`, id: `Mesin Pembuat Website!`}

    return (
        
        <div className="h-full w-full flex items-center justify-center bg-transparent sm:m-12 m-0">
            
            <div className="grid lg:h-items md:h-[700px] sm:h-[500px] h-[600px] lg:w-[900px] md:w-[700px] sm:w-[500px] w-[300px] bg-white/70 backdrop-blur-lg drop-shadow-lg rounded-3xl
                            sm:grid-cols-6 sm:grid-rows-10 
                            grid-cols-2 grid-rows-5 
                            lg:gap-4 lg:p-4 md:gap-4 gap-2 p-4 m-0 mt-0
                            xl:mb-48 lg:mb-16 md:mb-2
                            " >
                <button className="sm:col-span-2 sm:row-span-4 
                                col-span-1 row-span-1 
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover
                                flex items-center justify-center">
                 <h1 className='sm:text-4xl text-sm flex items-center justify-center'>
                    
                 </h1>
                </button>             
                <button className="sm:col-span-4 sm:row-span-4 
                                col-span-2 row-span-2 
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover  flex items-center justify-center">
                 <h1 className='sm:text-4xl text-sm'>
                    
                 </h1>
                </button> 
                <button className="sm:col-span-1 sm:row-span-3 
                                col-span-1 row-span-3 
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover flex justify-center items-center">
                 <h1 className='sm:text-4xl text-sm'>
                    
                 </h1>
                </button> 
                <button className="sm:col-span-3 sm:row-span-3 
                                col-span-2 row-span-1
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover"></button>
                <button className="sm:col-span-2 sm:row-span-3 
                                col-span-2 row-span-1
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover"></button>
                <button className="sm:col-span-6 sm:row-span-3
                                col-span-3 row-span-1 
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover"></button> 
          
            </div>         
        </div>
    );
};

export default Bento;