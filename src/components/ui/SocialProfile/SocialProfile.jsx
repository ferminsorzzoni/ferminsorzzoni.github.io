// GitHub and LinkedIn SVG by lawnchairlauncher - Collection: Lawnicons Line Brand Icons - License: Apache License

import { iconSizesMap } from "../../../utils/sizes.js";
import GithubIcon from "../GithubIcon/GithubIcon.jsx";
import LinkedinIcon from "../LinkedinIcon/LinkedinIcon.jsx";

const socialMap = {
    github: { 
        link: "https://github.com/fsorzzoni", 
        label: "Perfil de GitHub",
        icon: GithubIcon,
    },
    linkedin: { 
        link: "https://www.linkedin.com/in/fermin-sorzzoni-2792112b3/", 
        label: "Perfil de LinkedIn",
        icon: LinkedinIcon,
    },
};

export default function SocialProfile({ type = "github", size = "medium", ...props }) {
    const sizeClass = iconSizesMap[size] ?? iconSizesMap.medium;
    const { link, label, icon: Icon } = socialMap[type] ?? socialMap.github;

    return (
        <a href={link} aria-label={label} target="_blank" rel="noopener noreferrer" {...props}>
            <Icon className={sizeClass + " block"} />
        </a>
    );
}