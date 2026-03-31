import ExternalLink from "../../../../components/ui/ExternalLink/ExternalLink.jsx";
import { ICONS } from "../../../../constants/icons.js";
import { ICON_SIZES } from "../../../../constants/sizes.js";
import { PROJECTS_ICONS } from "../../constants/icons.js";
import ProjectImg from "../ProjectImg/ProjectImg.jsx";

export default function ProjectCard({ project }) {
    if(!project) return null;
    const { title, description, techDescription, image, githubUrl, liveUrl } = project;
    return (
        <div>
            <ProjectImg imgSrc={image} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{techDescription}</p>
            {liveUrl && <ExternalLink href={liveUrl} text="Ir a la App" icon={PROJECTS_ICONS.redirect} iconClassName={ICON_SIZES.medium} />}
            {githubUrl && <ExternalLink href={githubUrl} label={"Repositorio de GitHub"} icon={ICONS.github} iconClassName={ICON_SIZES.medium} />}
        </div>
    );
}