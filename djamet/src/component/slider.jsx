import React, { useEffect, useState } from "react";

const Slider = () => {
  const content = [
    {
      content: (
        <div className=" bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 w-screen m-3 hover:bg-black/40 hover:text-white/70">
          <p className=" text-5xl">Hello ... </p>
          <p className=" text-l">I am {name} Front End Developer</p>
        </div>
      ),
    },
    {
      content: (
        <div className=" bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 w-screen m-3 hover:bg-black/40 hover:text-white/70">
          <p className=" text-5xl">Design</p>
          <p className=" text-l">
            <q>I will design website by your request</q>
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className=" bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 w-screen m-3 hover:bg-black/40 hover:text-white/70">
          <p className=" text-5xl">HTML</p>
          <p className=" text-l">
            <q>I can code using HTML</q>
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className=" bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 w-screen m-3 hover:bg-black/40 hover:text-white/70">
          <p className=" text-5xl">CSS</p>
          <p className=" text-l">
            <q>This portofolio built using Tailwind css</q>
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className=" bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 w-screen m-3 hover:bg-black/40 hover:text-white/70">
          <p className=" text-5xl">Javascript</p>
          <p className=" text-l">
            <q>Also i know about javscript</q>
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className=" bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 m-3 w-screen hover:bg-black/40 hover:text-white/70">
          <p className=" text-5xl">React Js</p>
          <p className=" text-l">
            <q>Fully built with React Js also Vite FrameWork</q>
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className=" bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 m-3 w-screen hover:bg-black/40 hover:text-white/70">
          <p className=" text-5xl">React Js</p>
          <p className=" text-l">
            <q>Fully built with React Js also Vite FrameWork</q>
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className=" bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 m-3 w-screen hover:bg-black/40 hover:text-white/70">
          <p className=" text-5xl">API</p>
          <p className=" text-l">
            <q>
              I know how to consume API from backend, usually i use axios, you
              can see my spotipeq project
            </q>
          </p>
        </div>
      ),
    },
  ];

  const [index, setIndex] = useState(0);
  const nextIndex = () => {
    const isStart = index === content.length - 1;
    const newIndex = isStart ? 0 : index + 1;
    setIndex(newIndex);
  };

  const autoplay = true;
  useEffect(() => {
    if (autoplay) {
      const autoplay = setInterval(nextIndex, 3000);
      return () => clearInterval(autoplay);
    }
  });
  return (
    <div className=" bg-polygon font-jost text-slate-300 flex gap-3 h-64 w-screen">
      {content[index].content}
    </div>
  );
};

export default Slider;
