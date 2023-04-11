const Skills = () => {
  return (
    <div className=" flex flex-col gap-2 h-40 justify-center">
      <div className=" flex justify-start gap-2">
        <p className=" bg-orange-400 p-2 font-comic rounded-lg text-lg">
          Javascript
        </p>
        <p className=" bg-orange-600 p-2 font-comic text-lg rounded-lg text-white">
          ReactJS
        </p>
      </div>
      <div className=" flex justify-start gap-2">
        <p className=" bg-black/80 text-white font-comic rounded-lg p-2">
          ExpressJS
        </p>
        <p className=" bg-slate-400 text-white font-comic rounded-lg p-2">
          MongoDB
        </p>
      </div>
    </div>
  );
};

export default Skills;
