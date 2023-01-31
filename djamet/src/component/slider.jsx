import React from "react";

const Slider = () => {
    return (
        <div className=" bg-polygon bg-cover bg-no-repeat font-jost text-slate-300 flex gap-3 h-64 overflow-auto snap-x snap-mandatory">
            <div className=" ml-4 mt-4 mb-6 bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 w-full snap-center snap-always hover:bg-black/40 hover:text-white/70">
                <p className=" text-5xl w-80">Hello ... </p>
                <p className=" text-l">I am {name} Front End Developer</p>
            </div>
            <div className=" ml-4 mt-4 mb-6 bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 snap-center snap-always hover:bg-black/40 hover:text-white/70">
                <p className=" text-5xl w-72">Design</p>
                <p className=" text-l"><q>I will design website by your request</q></p>
            </div>
            <div className=" ml-4 mt-4 mb-6 bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 snap-center snap-always hover:bg-black/40 hover:text-white/70">
                <p className=" text-5xl w-72">HTML</p>
                <p className=" text-l"><q>I can code using HTML</q></p>
            </div>
            <div className=" ml-4 mt-4 mb-6 bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 snap-center snap-always hover:bg-black/40 hover:text-white/70">
                <p className=" text-5xl w-72">CSS</p>
                <p className=" text-l"><q>This portofolio built using Tailwind css</q></p>
            </div>
            <div className=" ml-4 mt-4 mb-6 bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 snap-center snap-always hover:bg-black/40 hover:text-white/70">
                <p className=" text-5xl w-72">Javascript</p>
                <p className=" text-l"><q>Also i know about javscript</q></p>
            </div>
            <div className=" ml-4 mt-4 mb-6 bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 snap-center snap-always hover:bg-black/40 hover:text-white/70">
                <p className=" text-5xl w-72">React Js</p>
                <p className=" text-l"><q>Fully built with React Js also Vite FrameWork</q></p>
            </div>
            <div className=" ml-4 mt-4 mb-6 bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 snap-center snap-always hover:bg-black/40 hover:text-white/70">
                <p className=" text-5xl w-72">GIT</p>
                <p className=" text-l"><q>I know how to use GIT</q></p>
            </div>
            <div className=" ml-4 mt-4 mb-6 bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 snap-center snap-always hover:bg-black/40 hover:text-white/70">
                <p className=" text-5xl w-72">API</p>
                <p className=" text-l"><q>I know how to consume API from backend, usually i use axios, you can see my spotipeq project</q></p>
            </div>
        </div>
    )
}

export default Slider