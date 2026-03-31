import { PROJECTS } from "../../constants/projects.js";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";

export default function ProjectsGrid() {
    return (
        <div className="grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            <ProjectCard project={PROJECTS.unitracker} />
            <ProjectCard project={PROJECTS.portfolio} />
            <ProjectCard project={PROJECTS.ssoo} />
            <ProjectCard project={PROJECTS.seju} />
        </div>
    );
}