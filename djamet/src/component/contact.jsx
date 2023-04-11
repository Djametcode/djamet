import React, { useRef, useState } from "react";
import ContactCard from "./contactCard";
import Header, { Navbar } from "./Header";
import Sidebar from "./sidebar";

const Contact = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" bg-slate-200 text-white/30 font-jost sm:hidden h-screen">
      <div className=" sticky top-0">
        <Header setToggle={setToggle} />
      </div>
      {toggle && <Sidebar setToggle={setToggle} />}
      <ContactCard />
    </div>
  );
};

export default Contact;
