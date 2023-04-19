import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ setDisplay, setTrans }) => {
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

    if (isStart) {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  const [headerBg, setBg] = useState("");
  const changeBg = () => {
    const position = window.scrollY;
    if (position >= 20) {
      setBg("slateGrey");
    } else {
      setBg("");
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <div
      style={{ backgroundColor: `${headerBg}` }}
      className=" pr-2 pl-2 font-jost text-black z-20 flex justify-between md:justify-around md:p-5"
    >
      <div className=" flex flex-col justify-center">
        <div className=" max-md:hidden flex text-2xl gap-4">
          <Link to="/">About Me</Link>
          <Link to="/">Portofolio</Link>
          <Link to="/">Cooperation</Link>
        </div>
      </div>
      <div
        onClick={changeIcon}
        className=" md:hidden flex flex-col justify-center cursor-pointer fill-current z-40"
      >
        <div>{icon[index].icons}</div>
      </div>
      <div className=" flex flex-col justify-center">
        <h1 className=" text-2xl p-4 text-center md:hidden">Djamet Coder</h1>
      </div>
      <div className=" flex flex-col justify-center text-xl">
        <a
          className=" bg-slate-600 p-2 rounded-xl text-white font-jost"
          href="#"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
