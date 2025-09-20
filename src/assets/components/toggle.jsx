import { motion } from "framer-motion";

import "../../reason.css";

import { useState } from "react";

import { FiMoon, FiSun } from "react-icons/fi";


const TOGGLE_CLASSES =

  "text-sm font-medium flex items-center gap-2 px-6 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";


const Example = () => {

  const [selected, setSelected] = useState("light");

  return (

    <div

      className={`grid h-[300px] place-content-center px-4 transition-colors ${

        selected === "light" ? "default-bg1" : "default-bg"

      }`}

    >

      <SliderToggle selected={selected} setSelected={setSelected} />

    </div>

  );

};


const SliderToggle = ({ selected, setSelected }) => {

  return (

    <div className="relative flex w-fit items-center rounded-full">

      <button

        className={`${TOGGLE_CLASSES} ${

          selected === "light" ? "text-yellow-900" : "text-yellow-300"

        }`}

        onClick={() => {

          setSelected("light");

        }}

      >

        <FiMoon className="relative z-10 text-lg md:text-sm" />

        <span className="relative z-10">Light</span>

      </button>

      <button

        className={`${TOGGLE_CLASSES} ${

          selected === "dark" ? "text-black" : "text-slate-800"

        }`}

        onClick={() => {

          setSelected("dark");

        }}

      >

        <FiSun className="relative z-10 text-lg md:text-sm" />

        <span className="relative z-10">Dark</span>

      </button>

      <div

        className={`absolute inset-0 z-0 flex ${

          selected === "dark" ? "justify-end" : "justify-start"

        }`}

      >

        <motion.span

          layout

          transition={{ type: "spring", damping: 12, stiffness: 220 }}

          className="h-full w-1/2 rounded-full bg-gradient-to-r from-yellow-300 to-blue-800"

        />

      </div>

    </div>

  );

};


export default Example;