import { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [skill, setSkill] = useState();
  const skillsShow = () => {
    const position = window.scrollY;
    if (position >= 20) {
      setSkill(0);
    }
  };
  window.addEventListener("scroll", skillsShow);
  return (
    <div className=" flex justify-center transition-all gap-3 max-sm:flex-col">
      <div className=" flex justify-start gap-2">
        <motion.div whileTap={{ scale: 1.2 }}>
          <p className=" bg-yellow-400 p-2 font-comic rounded-lg text-white">
            Javascript
          </p>
        </motion.div>
        <motion.div whileTap={{ scale: 1.2 }}>
          <p className=" bg-cyan-500 p-2 font-comic rounded-lg text-white">
            React
          </p>
        </motion.div>
        <motion.div whileTap={{ scale: 1.2 }}>
          <p className=" bg-cyan-600 p-2 font-comic rounded-lg text-white">
            TailwindCSS
          </p>
        </motion.div>
      </div>
      <div className=" flex justify-start gap-2">
        <p className=" bg-black/80 text-white font-comic rounded-lg p-2">
          ExpressJS
        </p>
        <p className=" bg-green-500 text-white font-comic rounded-lg p-2">
          MongoDB
        </p>
        <p className=" bg-black/80 text-white font-comic rounded-lg p-2">
          Restfull API
        </p>
      </div>
      <div className=" flex justify-start gap-2">
        <p className=" bg-orange-400 p-2 font-comic rounded-lg text-white">
          GIT
        </p>
        <p className=" bg-indigo-400 p-2 font-comic text-base rounded-lg text-white">
          ViteJS
        </p>
        <p className=" bg-black/80 p-2 font-comic text-base rounded-lg text-white">
          NextJS
        </p>
      </div>
    </div>
  );
};

export default Skills;
