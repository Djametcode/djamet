import React, { useState } from "react";
import HeaderProject from "./headerProject";
import ProjectList from "./projectlist";
import Header from "./Header";
import Sidebar from "./sidebar";

const List = () => {
  return <ProjectList />;
};

const Project = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" sm:hidden">
      {toggle && <Sidebar setToggle={setToggle} />}
      <Header setToggle={setToggle} />
      <List />
    </div>
  );
};

export default Project;
