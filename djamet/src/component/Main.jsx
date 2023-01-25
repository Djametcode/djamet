import React, { useState } from "react";

const Main = () => {
    const [name, setName] = useState('Tofik Hidayat')
    return (
        <div>
            <div className=" bg-polygon bg-cover bg-no-repeat font-jost text-slate-300 flex overflow-auto gap-3 h-72">
                <div className=" ml-4 mt-4 mb-6 bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4 w-full">
                    <p className=" text-5xl w-80">Hello ... </p>
                    <p className=" text-l">I am {name} Front End Developer</p>
                </div>
                <div className=" ml-4 mt-4 mb-6 bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4">
                    <p className=" text-5xl w-72">Design</p>
                    <p className=" text-l"><q>I will design website by your request</q></p>
                </div>
                <div className=" ml-4 mt-4 mb-6 bg-slate-300/60 rounded-lg text-black/40 pl-4 pt-4">
                    <p className=" text-5xl w-72">React Js</p>
                    <p className=" text-l">Fully built with React Js also Vite FrameWork</p>
                </div>
            </div>
            <div className=" bg-polygon bg-cover font-jost p-3 text-xl text-white text-center">
                <h2>My Project</h2>
            </div>
            <div className=" bg-scatter p-4 h-full bg-cover flex flex-col gap-4">
                <div className=" bg-slate-300/60 text-black/40 p-3 rounded-xl text-center font-jost text-xl">
                    <h3>Books Manager With Local storage</h3>
                </div>
                <div className=" bg-slate-300/60 rounded-lg text-black/40 p-2 h-full font-jost text-lg text-center">
                   <div className=" bg-books h-80 bg-cover rounded-xl">

                   </div><br />
                   <p>This project made with HTML, CSS and Javascipt, while i am learning on Dicoding</p><br />
                   <a href="https://b0oksmanager.netlify.app/" className=" text-left text-blue-600 flex justify-center">Link Click Me</a>
                </div>
                <div className=" bg-slate-300/60 text-black/40 p-3 rounded-xl text-center font-jost text-xl">
                    <h3>Whatsapp Clone</h3>
                </div>
                <div className=" bg-slate-300/60 rounded-lg text-black/40 p-2 h-full font-jost text-lg text-center">
                   <div className=" bg-wa backdrop-grayscale h-80 bg-cover rounded-xl">

                    </div><br />
                    <p>Just a simple whatsapp clone, using HTML and css only, probably gonna rework it later</p><br />
                   <a href="https://wacl0ne.netlify.app/" className=" text-left text-blue-600 flex justify-center">Link Click Me</a>
                </div>
                <div className=" bg-slate-300/60 text-black/40 p-3 rounded-xl text-center font-jost text-xl">
                    <h3>SpotipeQ</h3>
                </div>
                <div className=" bg-slate-300/60 rounded-lg text-black/40 p-2 h-full font-jost text-lg text-center">
                   <div className=" bg-spotipeq h-80 bg-cover rounded-xl">

                    </div><br />
                    <p>Build with napster ApI using React JS and Vite, probably have some bug because i am still newbie</p><br />
                   <a href="https://spotipeq.netlify.app/" className=" text-left text-blue-600 flex justify-center">Link Click Me</a>
                </div>
                <div className=" bg-slate-300/60 text-black/40 p-3 rounded-xl text-center font-jost text-xl">
                    <h3>Todo Apps</h3>
                </div>
                <div className=" bg-slate-300/60 rounded-lg text-black/40 p-2 h-full font-jost text-lg text-center">
                   <div className=" bg-todo h-80 bg-cover rounded-xl">

                    </div><br />
                    <p>Made with React JS and Vite, simple app tho</p><br />
                   <a href="https://todosheros.netlify.app/" className=" text-left text-blue-600 flex justify-center">Link Click Me</a>
                </div>
            </div>
        </div>
            
    )
}

export default Main;