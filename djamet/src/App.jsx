import React, { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Sidebar from "./component/sidebar";
import Introduce from "./component/introduce";
import Skills from "./component/skills";
import LatestProject from "./component/latestproject";
import Footer from "./component/footer";

const MyPortofolio = () => {
  const [display, setDisplay] = useState("none");
  return (
    <div className=" bg-slate-200 w-screen transition-all">
      <div className=" sticky z-30 top-0 w-screen transition-opacity">
        <Header setDisplay={setDisplay} />
      </div>
      <div className=" fixed top-0 z-40" style={{ display: `${display}` }}>
        <Sidebar setDisplay={setDisplay} />
      </div>

      <div className=" bg-slate-200 flex flex-col gap-3 relative z-0">
        <div className=" max-sm:flex-col flex p-3 justify-center h-[500px] max-sm:pt-28 max-sm:pb-36">
          <div
            className=" bg-bgcover bg-center bg-no-repeat flex flex-col justify-center
          "
          >
            <div className=" flex justify-center">
              <img
                className=" w-96 h-96 rounded-full"
                src="./public/bg1.png"
                alt=""
              />
            </div>
          </div>
          <div className=" flex flex-col justify-center pl-10 max-sm:pl-0">
            <p className=" font-quick text-xl md:text-7xl">My Name</p>
            <p className=" font-quick text-xl md:text-7xl">
              is &nbsp;
              <span className=" font-quick underline text-3xl md:text-6xl font-extrabold">
                Tofik
              </span>
            </p>
            <div className=" font-mono text-base pt-3">
              <p>I am fullstack developer</p>
            </div>
            <div className=" p-3">
              <button className=" animate-pulse text-white bg-orange-500 font-jost p-2 rounded-xl">
                Hire Me
              </button>
            </div>
          </div>
        </div>
        <div className=" rounded-lg md:bg-slate-200 bg-slate-300 p-3 m-3">
          <Skills />
        </div>
        <div>
          <LatestProject />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <MyPortofolio />;
};

export default App;
