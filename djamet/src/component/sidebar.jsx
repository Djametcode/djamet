import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setToggle }) => {
  const closeSideBar = () => {
    setToggle(false);
  };
  return (
    <div className=" bg-slate-100 bg-scroll fixed top-0 w-72 p-3 rounded-tr-3xl rounded-br-3xl h-screen z-50">
      {/* <div className=" flex justify-start p-2">
        <div className=" bg-profile w-16 h-16 rounded-full bg-cover"></div>
      </div> */}
      <div className=" flex justify-start text-lg">
        <div className=" flex font-jost flex-col gap-2 text-white/80 p-3">
          <Link className=" bg-slate-600 rounded-xl text-center p-2" to="/">
            Beranda
          </Link>
          <Link
            to="/project"
            className=" bg-slate-600 rounded-xl text-center p-2"
          >
            My Project
          </Link>
          <Link
            className=" bg-slate-600 rounded-xl text-center p-2"
            to="/contact"
          >
            Contact Me
          </Link>
        </div>
        <div className=" font-comic text-black absolute bottom-2">
          <p>Copyright &copy: 2023</p>
          <p className=" text-sm">Made By DjametCoder</p>
        </div>
      </div>
      <div
        onClick={closeSideBar}
        className=" absolute top-2 right-2 cursor-pointer"
      >
        <svg
          className=" w-8 h-8"
          fill="black"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
