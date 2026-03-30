import yo from "../../../assets/yo.jpeg";
import { ICON_SIZES } from "../../../constants/sizes.js";

export default function ProfilePhoto({ size = "medium" }) {
        const sizeClass = ICON_SIZES[size] ?? ICON_SIZES.medium;

    return (
        <img 
            src={yo} 
            alt=""
            className={sizeClass + " rounded-full object-cover"}
        />
    );
}