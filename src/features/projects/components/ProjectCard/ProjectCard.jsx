import ExternalLink from "../../../../components/ui/ExternalLink/ExternalLink.jsx";
import { ICONS } from "../../../../constants/icons.js";
import { ICON_SIZES } from "../../../../constants/sizes.js";
import { PROJECTS_ICONS } from "../../constants/icons.js";
import ProjectImg from "../ProjectImg/ProjectImg.jsx";

export default function ProjectCard({ project }) {
    if(!project) return null;
    const { title, description, techDescription, image, githubUrl, liveUrl } = project;
    return (
        <div className="flex flex-col bg-background-600 rounded-lg shadow-lg shadow-background-900 overflow-hidden">
            <ProjectImg imgSrc={image} />
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl mb-3">{title}</h3>
                <p className="mb-2">{description}</p>
                <p className="mb-3">{techDescription}</p>
                <div className="flex gap-1 mt-auto">
                    {liveUrl && <ExternalLink href={liveUrl} label="Ir a la App" icon={PROJECTS_ICONS.redirect} iconClassName={ICON_SIZES.medium} />}
                    {githubUrl && <ExternalLink href={githubUrl} label="Repositorio de GitHub" icon={ICONS.github} iconClassName={ICON_SIZES.medium} />}
                </div>
            </div>
        </div>
    );
}