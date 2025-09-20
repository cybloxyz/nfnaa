import React from 'react';
import "./bentobox.css"
import "../index.css"

const Bento = ({language, setLanguage}) => {
    const sec1 = {en: `Website Maker Machine!`, id: `Mesin Pembuat Website!`}
    const sec2 = {en: `Customize your Games for someone?`, id: `buat game custom untuk seseorang?`}
    const sec3 = {en: `Website Maker Machine!`, id: `Mesin Pembuat Website!`}

    return (
        <div className="h-screen w-full flex items-center justify-center bg-transparent sm:m-20 m-2">
            <div className="grid h-full w-full 
                            sm:grid-cols-6 sm:grid-rows-10 
                            grid-cols-3 grid-rows-7 
                            md:gap-8 gap-2 p-6 m-0
                            xl:m-64 lg:m-16 md:m-2" >
                <div className="sm:col-span-2 sm:row-span-4 
                                col-span-1 row-span-1 
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover
                                flex items-center justify-center">
                 <h1 className='sm:text-4xl text-sm flex items-center justify-center'>
                    {sec1[language]}
                 </h1>
                </div>             
                <div className="sm:col-span-4 sm:row-span-4 
                                col-span-2 row-span-2 
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover  flex items-center justify-center">
                 <h1 className='sm:text-4xl text-sm'>
                    {sec2[language]}
                 </h1>
                </div> 
                <div className="sm:col-span-1 sm:row-span-3 
                                col-span-1 row-span-3 
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover flex justify-center items-center">
                 <h1 className='sm:text-4xl text-sm'>
                    {sec3[language]}
                 </h1>
                </div> 
                <div className="sm:col-span-3 sm:row-span-3 
                                col-span-2 row-span-1
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover"></div>
                <div className="sm:col-span-2 sm:row-span-3 
                                col-span-2 row-span-1
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover"></div>
                <div className="sm:col-span-6 sm:row-span-2
                                col-span-3 row-span-1 
                                sm:rounded-3xl rounded-2xl bento-square  backdrop-blur-lg img-hover"></div> 
            </div>         
        </div>
    );
};

export default Bento;