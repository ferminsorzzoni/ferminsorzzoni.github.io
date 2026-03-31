import { PROJECTS } from "../../constants/projects.js";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";

export default function ProjectsGrid() {
    return (
        <section>
            <h2>Mis proyectos</h2>
            <div className="grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                <ProjectCard project={PROJECTS.unitracker} />
                <ProjectCard project={PROJECTS.portfolio} />
                <ProjectCard project={PROJECTS.ssoo} />
                <ProjectCard project={PROJECTS.seju} />
            </div>
        </section>
    );
}