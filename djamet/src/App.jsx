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
      <div className=" bg-bgcover bg-no-repeat bg-center md:translate-x-56 md:translate-y-32 flex justify-center relative z-10">
        <div className=" w-72 h-72 md:h-96 md:w-96 md:scale-150 rounded-full bg-intro bg-no-repeat bg-center"></div>
      </div>
      <div className=" p-3 bg-slate-200 flex md:pl-60 md:-translate-y-56 md:translate-x-72 flex-col gap-3 relative z-0">
        <div>
          <p className=" font-quick text-xl md:text-7xl">My Name</p>
          <p className=" font-quick text-xl md:text-7xl">
            is &nbsp;
            <span className=" font-quick underline text-3xl md:text-6xl font-extrabold">
              Tofik
            </span>
          </p>
        </div>
        <div className=" font-mono text-base">
          <p>I am fullstack developer</p>
        </div>
        <div>
          <button className=" animate-pulse text-white bg-orange-500 font-jost p-2 rounded-xl">
            Hire Me
          </button>
        </div>
        <div className=" rounded-lg md:-translate-y-60 md:translate-x-72 md:pl-7 md:bg-slate-200 bg-slate-300 p-3">
          <Skills />
        </div>
        <div className=" md:-translate-y-56">
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
