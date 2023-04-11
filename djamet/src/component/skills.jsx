const Skills = () => {
  return (
    <div className=" flex flex-col gap-2 h-36 justify-center">
      <div className=" flex justify-start gap-2">
        <p className=" bg-yellow-400 p-2 font-comic rounded-lg text-base">
          Javascript
        </p>
        <p className=" bg-cyan-500 p-2 font-comic text-base rounded-lg text-white">
          ReactJS
        </p>
        <p className=" bg-cyan-600 p-2 font-comic text-base rounded-lg text-white">
          Tailwind CSS
        </p>
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
        <p className=" bg-orange-400 p-2 font-comic rounded-lg text-base">
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
