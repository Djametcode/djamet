import React from "react"
import HeaderProject from "./headerProject"
import ProjectList from "./projectlist"

const List = () => {
    return (
        <ProjectList />
    )
}

const Project = () => {
    return (
        <div className=" sm:hidden">
            <HeaderProject />
            <List />
        </div>   
    )
}

export default Project