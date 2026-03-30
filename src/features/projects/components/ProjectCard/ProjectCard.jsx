import SocialProfile from "../../../../components/ui/SocialProfile/SocialProfile.jsx";
import { PROJECTS } from "../../constants/projects";
import ProjectImg from "../ProjectImg/ProjectImg.jsx";

export default function ProjectCard({ projectId = "unitracker" }) {
    const { title, description, techDescription, image, githubUrl, liveUrl } = PROJECTS[projectId] ?? PROJECTS.unitracker;
    return (
        <div>
            <ProjectImg imgSrc={image} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{techDescription}</p>
            <SocialProfile type="github" link={githubUrl} />
            // redirect to project
        </div>
    );
}