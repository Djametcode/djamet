import ProjectList from "./projectlist";
import Slider from "./slider";

export default function MainContent({name}) {
    return (
        <div>
            <Slider />
            <div className=" bg-polygon bg-cover font-jost p-3 text-xl text-white/30 text-center">
                <h2>My Project</h2>
            </div>
            <ProjectList />
        </div>
    )
}