import { ICONS } from "../../../constants/icons.js";
import { ICON_SIZES } from "../../../constants/sizes.js";
import { SOCIALS } from "../../../constants/socials.js";
import ExternalLink from "../ExternalLink/ExternalLink.jsx";

export default function SocialProfile({ type = "github", size = "medium" }) {
    const sizeClass = ICON_SIZES[size] ?? ICON_SIZES.medium;
    const { link, label, icon } = SOCIALS[type] ?? SOCIALS.github;
    const Icon = ICONS[icon];

    return (
        <ExternalLink href={link} aria-label={label} icon={Icon} iconClassName={sizeClass + " block"} />
    );
}