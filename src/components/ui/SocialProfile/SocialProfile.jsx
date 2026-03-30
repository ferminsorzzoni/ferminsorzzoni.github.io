// GitHub and LinkedIn SVG by lawnchairlauncher - Collection: Lawnicons Line Brand Icons - License: Apache License

import { ICONS } from "../../../constants/icons.js";
import { ICON_SIZES } from "../../../constants/sizes.js";
import { SOCIALS } from "../../../constants/socials.js";

export default function SocialProfile({ type = "github", size = "medium", link = null, ...props }) {
    const sizeClass = ICON_SIZES[size] ?? ICON_SIZES.medium;
    const { link: mapLink, label, icon } = SOCIALS[type] ?? SOCIALS.github;
    const realLink = link ?? mapLink;
    const Icon = ICONS[icon];

    return (
        <a href={realLink} aria-label={label} target="_blank" rel="noopener noreferrer" {...props}>
            <Icon className={sizeClass + " block"} />
        </a>
    );
}