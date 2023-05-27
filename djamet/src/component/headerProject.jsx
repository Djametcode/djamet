import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Beranda = () => {
  return (
    <div className=" w-full m-0 bg-slate-600/30 rounded-lg">
      <Link className=" block p-3" to={"/"}>
        Beranda{" "}
      </Link>
    </div>
  );
};

const Project = () => {
  return (
    <div className=" w-full m-0 bg-slate-600/30 rounded-lg">
      <Link className=" block p-3" to={"/project"}>
        Project{" "}
      </Link>
    </div>
  );
};

const Contact = () => {
  return (
    <div className=" w-full m-0 bg-slate-600/30 rounded-lg">
      <Link className=" block p-3" to={"/contact"}>
        Contact Me{" "}
      </Link>
    </div>
  );
};

export const Navbar = () => {
  return (
    <div className="ml-2 mr-2 flex flex-row gap-2 justify-center text-center font-jost pb-2">
      <Beranda />
      <Project />
      <Contact />
    </div>
  );
};

const HeaderProject = ({ setToggle }) => {
  const icon = [
    {
      icons: (
        <svg
          className=" w-9 h-9"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
          />
        </svg>
      ),
    },
    {
      icons: (
        <svg
          className=" w-9 h-9"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 10z"
          />
        </svg>
      ),
    },
  ];
  const [index, setIndex] = useState(0);

  const changeIcon = () => {
    const isStart = index === 0;
    const newIndex = isStart ? index + 1 : 0;
    setIndex(newIndex);
    setToggle(true);
  };

  return (
    <div className=" bg-polygon font-jost text-white/30 sticky p-1 top-0 z-20 flex justify-between">
      <div className=" flex flex-col justify-center">
        <h1 className=" text-3xl p-4 text-center">Djamet Coder</h1>
      </div>
      <div
        onClick={changeIcon}
        className=" flex flex-col justify-center cursor-pointer fill-current"
      >
        <div>{icon[index].icons}</div>
      </div>
    </div>
  );
};

export default HeaderProject;
