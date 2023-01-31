import React from "react";

const ProjectList = () => {
    return (
    <div className=" bg-polygon bg-fixed top-0 p-3 h-full bg-cover flex flex-col gap-4 m-0">
        <div className=" bg-slate-300/30 text-white/40 p-3 rounded-xl text-center font-jost text-xl">
            <h3>Books Manager With Local storage</h3>
        </div>
        <div className=" bg-slate-300/30 rounded-lg text-white/40 p-4 h-full font-jost text-lg text-center">
           <div className=" bg-books opacity-80 h-80 bg-cover rounded-xl">

           </div><br />
           <p>This project made with HTML, CSS and Javascipt, while i am learning on Dicoding</p><br />
           <a href="https://b0oksmanager.netlify.app/" className=" text-left text-white flex justify-center bg-slate-200/30 rounded-lg">Link Click Me</a>
        </div>
        <div className=" bg-slate-300/30 text-white/40 p-3 rounded-xl text-center font-jost text-xl">
            <h3>Whatsapp Clone</h3>
        </div>
        <div className=" bg-slate-300/30 rounded-lg text-white/40 p-4 h-full font-jost text-lg text-center">
           <div className=" bg-wa opacity-80 h-80 bg-cover rounded-xl relative z-10">

            </div><br />
            <p>Just a simple whatsapp clone, using HTML and css only, probably gonna rework it later</p><br />
           <a href="https://wacl0ne.netlify.app/" className=" text-left text-white flex justify-center bg-slate-200/30 rounded-lg">Link Click Me</a>
        </div>
        <div className=" bg-slate-300/30 text-white/40 p-3 rounded-xl text-center font-jost text-xl">
            <h3>SpotipeQ</h3>
        </div>
        <div className=" bg-slate-300/30 rounded-lg text-white/40 p-4 h-full font-jost text-lg text-center">
           <div className=" bg-spotipeq opacity-80 h-80 bg-cover rounded-xl">

            </div><br />
            <p>Build with napster ApI using React JS and Vite, probably have some bug because i am still newbie</p><br />
           <a href="https://spotipeq.netlify.app/" className=" text-left text-white flex justify-center bg-slate-200/30 rounded-lg">Link Click Me</a>
        </div>
        <div className=" bg-slate-300/30 text-white/40 p-3 rounded-xl text-center font-jost text-xl">
            <h3>Todo Apps</h3>
        </div>
        <div className=" bg-slate-300/30 rounded-lg text-white/40 p-4 h-full font-jost text-lg text-center">
           <div className=" bg-todo opacity-80 h-80 bg-cover rounded-xl">

            </div><br />
            <p>Made with React JS and Vite, simple app tho</p><br />
           <a href="https://todosheros.netlify.app/" className=" text-left text-white flex justify-center bg-slate-200/30 rounded-lg">Link Click Me</a>
        </div>
    </div>
    )
}

export default ProjectList