import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ContextApp } from "../App";

const Beranda = () => {
    return (
        <div className=" w-full m-0 bg-slate-600/30 rounded-lg">
            <Link className=" block p-3" to={'/'}>Beranda </Link>
        </div>
    )
}

const Project = () => {
    return (
        <div className=" w-full m-0 bg-slate-600/30 rounded-lg">
            <Link className=" block p-3" to={'/project'}>Project </Link>
        </div> 
    )
}

const Contact = () => {
    return (
        <div className=" w-full m-0 bg-slate-600/30 rounded-lg">
            <Link className=" block p-3" to={'/contact'}>Contact Me </Link>
        </div>
    )
}

export const Navbar = () => {
    return (
        <div className="ml-2 mr-2 flex flex-row gap-2 justify-center text-center font-jost pb-2">
            <Beranda />
            <Project />
            <Contact />
        </div>
    )
}

const Header = () => {
    const {title} = useContext(ContextApp);
    const [nav, toggleNav] = useState(false);
    const InputRef = useRef(null);

    const handleInput = () => {
        const status = InputRef.current.checked;
        status === true ? toggleNav(true) : toggleNav(false)
    }

    return (
        <div className=" bg-polygon font-jost text-white/30 sticky top-0 z-20">
            <h1 className=" text-3xl p-4 text-center">{title}</h1>

            {nav && (
                <Navbar />
            )}
            <div>
                <input 
                    type="checkbox"
                    ref={InputRef}
                    onChange={handleInput}
                    id="input"
                    className=" hidden"
                />
                <label htmlFor="input"><span className=" absolute left-3 top-4 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg></span></label>
            </div>
            
        </div>
    )
}

export default Header