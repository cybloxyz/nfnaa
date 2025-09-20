import React from 'react';
import "./bentobox.css"

const BentoBox = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-transparent mt-20 mx-20 my-4">
            <div className="grid h-full w-full sm:grid-cols-6 sm:grid-rows-3 grid-cols-4 grid-rows-2 md:gap-8 gap-2 p-6
            xl:m-64 lg:m-32 md:m-16" >
                <div className="sm:col-span-4 sm:row-span-2 col-span-2 row-span-1 rounded-3xl bento-square  backdrop-blur-lg img-hover"></div>            
                <div className="col-span-2 row-span-2 rounded-3xl bento-square  backdrop-blur-lg img-hover"></div> 
            </div>         
        </div>
    );
};

export default BentoBox;