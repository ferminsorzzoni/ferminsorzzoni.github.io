import { PROJECTS } from "../../constants/projects.js";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";

export default function ProjectsGrid() {
    return (
        <section className="mt-8">
            <h2 className="section-header">Mis proyectos</h2>
            <div className="grid grid-cols-1 min-[650px]:grid-cols-2 gap-16">
                <ProjectCard project={PROJECTS.unitracker} />
                <ProjectCard project={PROJECTS.portfolio} />
                <ProjectCard project={PROJECTS.ssoo} />
                <ProjectCard project={PROJECTS.seju} />
            </div>
        </section>
    );
}