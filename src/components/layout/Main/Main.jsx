import About from "../../../features/about/components/About/About.jsx";
import ProjectsGrid from "../../../features/projects/components/ProjectsGrid/ProjectsGrid.jsx";

export default function Main() {
    return (
        <main className="layout-center my-8">
            <About />
            <ProjectsGrid />
        </main>
    );
}