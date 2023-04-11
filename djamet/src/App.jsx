import React, { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Sidebar from "./component/sidebar";
import Introduce from "./component/introduce";
import Skills from "./component/skills";
import LatestProject from "./component/latestproject";
import Footer from "./component/footer";

const MyPortofolio = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className=" bg-slate-200 w-screen relative pt-20">
        {toggle && <Sidebar setToggle={setToggle} />}
        <div className=" fixed z-30 top-0 w-screen transition-opacity">
          <Header setToggle={setToggle} />
        </div>
        <div className=" bg-bgcover bg-no-repeat bg-center flex justify-center">
          {/* <img
            className=" rounded-full bg-red-400 w-40 h-40"
            src="./src/image/5f17e435-4aa1-46ac-b6f0-6e77e687a41c-removebg-preview.png"
          /> */}
          <div className=" w-52 h-52 rounded-full bg-intro bg-no-repeat bg-center"></div>
        </div>
      </div>
      <div className=" p-3 bg-slate-200 flex flex-col gap-3 relative z-0">
        <div>
          <p className=" font-quick text-xl">My Name</p>
          <p className=" font-quick text-xl">
            is &nbsp;
            <span className=" font-quick underline text-3xl font-extrabold">
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
      </div>
      <div className=" bg-slate-300 p-3">
        <Skills />
      </div>
      <div>
        <LatestProject />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

const App = () => {
  return <MyPortofolio />;
};

export default App;
