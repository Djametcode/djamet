import React, { useContext, useRef, useState } from "react";
import { ContextApp } from "../App";

const Beranda = () => {
    return (
        <a className=" p-2 w-full" href="#">Beranda</a>
    )
}

const Project = () => {
    return (
        <a className=" p-2 w-full" href="#">MyProject</a>
    )
}

const Contact = () => {
    return (
        <a className=" p-2" href="#">Contact Me</a>
    )
}

const NavList = ({data}) => {
    return (
        <li className=" text-center">
            {data}
        </li>
    )
}

const Navbar = ({data, id}) => {
    const result = data.map((item) => <NavList key={item} data = {item} id = {id}/>)
    return (
        <ul className=" list-none flex justify-around">
            {result}
        </ul>
    )
}

const Header = () => {
    const {title} = useContext(ContextApp);
    const [nav, toggleNav] = useState(false);
    const item = [<Beranda />, <Project />, <Contact />]
    const InputRef = useRef(null);

    const handleInput = () => {
        const status = InputRef.current.checked;
        status === true ? toggleNav(true) : toggleNav(false)
    }

    const data = [
        {
            id: 0
        },
        {
            id: 1
        },
        {
            id: 2
        },
    ]

    return (
        <div className=" bg-polygon font-jost text-white sticky top-0 z-20">
            <h1 className=" text-3xl p-4 text-center">{title}</h1>

            {nav && (
                <Navbar data = {item} id = {data}/>
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