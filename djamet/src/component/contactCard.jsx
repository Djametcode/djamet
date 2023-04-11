import React, { useState } from "react";

const ContactCard = () => {
  const [email, setEmail] = useState("Djametcoder@gmail.com");
  const skill = [
    "HTML",
    "CSS",
    "javascript",
    "ReactJS",
    "Python",
    "Postman",
    "TailwindCSS",
    "HapiServer",
    "GIT",
    "Restfull API",
  ];

  const ListSkill = ({ data }) => {
    return (
      <li className=" list-none bg-teal-400/80 p-2 rounded-md text-white/80 hover:bg-slate-600/30">
        {data}
      </li>
    );
  };
  const Skills = ({ data }) => {
    const result = data.map((item) => <ListSkill key={item} data={item} />);
    return <ul className=" flex flex-row flex-wrap gap-2 w-full">{result}</ul>;
  };
  return (
    <div className=" flex flex-col gap-4 m-2">
      <div className=" flex justify-center flex-row">
        <div className=" bg-profile w-24 h-24 bg-cover rounded-full mt-5"></div>
      </div>
      <div className=" flex flex-col gap-2 text-black font-jost">
        <h2 className=" bg-slate-600/30 p-2 rounded-lg">Tofik Hidayat</h2>
        <q className=" bg-slate-600/30 p-2 rounded-lg">FullStack Developer</q>
        <h3 className=" bg-slate-600/30 p-2 rounded-lg">Indonesia</h3>
        <h3 className=" bg-slate-600/30 p-2 rounded-lg">Email : {email}</h3>
      </div>
      <div className=" bg-slate-600/30 p-4 w-full text-2xl text-center rounded-lg">
        <h1 className=" text-black font-jost">Skills</h1>
      </div>
      <div>
        <Skills data={skill} />
      </div>
      <div className=" bg-slate-600/30 p-4 w-full text-2xl text-center rounded-lg">
        <h1 className=" text-black font-jost">About Me</h1>
      </div>
      <div className=" bg-slate-600/30 p-2 rounded-lg text-black">
        <p>
          Hello My Name is Tofik Hidayat, I am Fullstack Developer, kindly visit
          project tab to see my project thanks!
        </p>
      </div>
    </div>
  );
};
export default ContactCard;
