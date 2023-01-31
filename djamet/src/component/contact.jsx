import React, { useRef, useState } from "react";
import ContactCard from "./contactCard";
import { Navbar } from "./Header";

const Contact = () => {
    const [nav, toggleNav] = useState(false);
    const InputRef = useRef(null);
    const handleInput = () => {
        const status = InputRef.current.checked;
        status === true ? toggleNav(true) : toggleNav(false)
    }
    return (
        <div className=" bg-polygon h-max text-white/30 font-jost p-4">
            <h1 className=" text-center text-4xl mb-3">My Contact Card</h1>
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
            <ContactCard />
        </div>
    )
}

export default Contact;