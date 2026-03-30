import ProjectCard from "../ProjectCard/ProjectCard.jsx";

export default function ProjectsGrid() {
    return (
        <div className="grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            <ProjectCard projectId="unitracker" />
            <ProjectCard projectId="portfolio" />
            <ProjectCard projectId="ssoo" />
            <ProjectCard projectId="seju" />
        </div>
    );
}