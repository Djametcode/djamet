import React, { useState } from "react";
import MainContent from "./mains";

const Main = () => {
    const [name, setName] = useState('Tofik Hidayat')
    return (
        <MainContent name = {name}/>
    )
}

export default Main;