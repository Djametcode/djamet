import React, { useState } from "react";

const Main = () => {
    const [name, setName] = useState('Tofik Hidayat')
    return (
        <div>
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
            <div className=" bg-polygon bg-cover font-jost p-3 text-xl text-white text-center">
                <h2>My Project</h2>
            </div>
            <div className=" bg-scatter p-3 h-full bg-cover flex flex-col gap-4">
                <div className=" bg-slate-300/60 text-black/40 p-3 rounded-xl text-center font-jost text-xl">
                    <h3>Books Manager With Local storage</h3>
                </div>
                <div className=" bg-slate-300/60 rounded-lg text-black/40 p-4 h-full font-jost text-lg text-center">
                   <div className=" bg-books opacity-80 h-80 bg-cover rounded-xl">

                   </div><br />
                   <p>This project made with HTML, CSS and Javascipt, while i am learning on Dicoding</p><br />
                   <a href="https://b0oksmanager.netlify.app/" className=" text-left text-white flex justify-center bg-slate-200/30 rounded-lg">Link Click Me</a>
                </div>
                <div className=" bg-slate-300/60 text-black/40 p-3 rounded-xl text-center font-jost text-xl">
                    <h3>Whatsapp Clone</h3>
                </div>
                <div className=" bg-slate-300/60 rounded-lg text-black/40 p-4 h-full font-jost text-lg text-center">
                   <div className=" bg-wa opacity-80 h-80 bg-cover rounded-xl relative z-10">

                    </div><br />
                    <p>Just a simple whatsapp clone, using HTML and css only, probably gonna rework it later</p><br />
                   <a href="https://wacl0ne.netlify.app/" className=" text-left text-white flex justify-center bg-slate-200/30 rounded-lg">Link Click Me</a>
                </div>
                <div className=" bg-slate-300/60 text-black/40 p-3 rounded-xl text-center font-jost text-xl">
                    <h3>SpotipeQ</h3>
                </div>
                <div className=" bg-slate-300/60 rounded-lg text-black/40 p-4 h-full font-jost text-lg text-center">
                   <div className=" bg-spotipeq opacity-80 h-80 bg-cover rounded-xl">

                    </div><br />
                    <p>Build with napster ApI using React JS and Vite, probably have some bug because i am still newbie</p><br />
                   <a href="https://spotipeq.netlify.app/" className=" text-left text-white flex justify-center bg-slate-200/30 rounded-lg">Link Click Me</a>
                </div>
                <div className=" bg-slate-300/60 text-black/40 p-3 rounded-xl text-center font-jost text-xl">
                    <h3>Todo Apps</h3>
                </div>
                <div className=" bg-slate-300/60 rounded-lg text-black/40 p-4 h-full font-jost text-lg text-center">
                   <div className=" bg-todo opacity-80 h-80 bg-cover rounded-xl">

                    </div><br />
                    <p>Made with React JS and Vite, simple app tho</p><br />
                   <a href="https://todosheros.netlify.app/" className=" text-left text-white flex justify-center bg-slate-200/30 rounded-lg">Link Click Me</a>
                </div>
            </div>
        </div>
            
    )
}

export default Main;