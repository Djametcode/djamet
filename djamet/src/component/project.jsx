import React, { useState } from "react";
import HeaderProject from "./headerProject";
import ProjectList from "./projectlist";
import Header from "./Header";
import Sidebar from "./sidebar";
import LatestProject from "./latestproject";

const List = () => {
  return <LatestProject />;
};

const Project = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" sm:hidden">
      {toggle && <Sidebar setToggle={setToggle} />}
      <div className=" sticky top-0 z-40 bg-slate-200">
        <Header setToggle={setToggle} />
      </div>
      <List />
    </div>
  );
};

export default Project;
