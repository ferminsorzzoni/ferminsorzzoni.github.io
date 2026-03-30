export default function ExternalLink({ href, label, text, icon: Icon, iconSize = "medium" }) {
    return (
        <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
            {Icon && <Icon size={iconSize} />}
            {text && <span>{text}</span>}
        </a>
    );
}