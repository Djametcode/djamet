import React, { useContext, useRef, useState } from "react";
import { ContextApp } from "../App";

const NavList = ({data}) => {
    return (
        <li className=" w-full text-center">
            <a className=" block p-3" href="#">{data}</a>
        </li>
    )
}

const Navbar = ({data}) => {
    const result = data.map((item) => <NavList key={item} data = {item}/>)
    return (
        <div className=" list-none flex justify-around">
            {result}
        </div>
    )
}

const Header = () => {
    const {title} = useContext(ContextApp);
    const [nav, toggleNav] = useState(false);
    const item = ['Beranda', 'My Project', 'Contact Me']
    const InputRef = useRef(null);

    const handleInput = () => {
        const status = InputRef.current.checked;
        status === true ? toggleNav(true) : toggleNav(false)
    }

    return (
        <div className=" bg-polygon font-jost text-white sticky top-0">
            <h1 className=" text-3xl p-4 text-center">{title}</h1>

            {nav && (
                <Navbar data = {item}/>
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