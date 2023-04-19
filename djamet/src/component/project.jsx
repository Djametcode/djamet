import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar";
import LatestProject from "./latestproject";

const List = () => {
  return <LatestProject />;
};

const Project = () => {
  const [display, setDisplay] = useState("none");
  return (
    <div className=" sm:hidden">
      <div className=" sticky top-0 z-40 bg-slate-200">
        <Header setDisplay={setDisplay} />
      </div>
      <div style={{ display: `${display}` }} className=" fixed top-0 z-40">
        <Sidebar setDisplay={setDisplay} />
      </div>
      <List />
    </div>
  );
};

export default Project;
