import React from 'react';
import "./bentobox.css"
import "../index.css"

const Bento = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-transparent m-20">
            <div className="grid h-full w-full grid-cols-6 grid-rows-10 md:gap-8 gap-2 p-6
            xl:m-64 lg:m-32 md:m-16" >
                <div className="col-span-2 row-span-4 rounded-3xl bento-square  backdrop-blur-lg img-hover"></div>             
                <div className="col-span-4 row-span-4 rounded-3xl bento-square  backdrop-blur-lg img-hover"></div> 
                <div className="col-span-1 row-span-3 rounded-3xl bento-square  backdrop-blur-lg img-hover"></div> 
                <div className="col-span-3 row-span-3 rounded-3xl bento-square  backdrop-blur-lg img-hover"></div>
                <div className="col-span-2 row-span-3 rounded-3xl bento-square  backdrop-blur-lg img-hover"></div>
                <div className="col-span-6 row-span-2 rounded-3xl bento-square  backdrop-blur-lg img-hover"></div> 
            </div>         
        </div>
    );
};

export default Bento;