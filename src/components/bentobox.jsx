import React from 'react';
import "./bentobox.css"

const BentoBox = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-transparent m-20">
            <div className="grid h-full w-full grid-cols-6 grid-rows-3 md:gap-8 gap-2 p-6
            xl:m-64 lg:m-32 md:m-16" >
                <div className="col-span-4 row-span-2 rounded-3xl bento-square border backdrop-blur-lg img-hover"></div>            
                <div className="col-span-2 row-span-2 rounded-3xl bento-square border backdrop-blur-lg img-hover"></div> 
            </div>         
        </div>
    );
};

export default BentoBox;