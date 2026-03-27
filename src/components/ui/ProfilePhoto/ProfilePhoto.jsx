import yo from "../../../assets/yo.jpeg";
import { iconSizesMap } from "../../../utils/sizes.js";

export default function ProfilePhoto({ size = "medium" }) {

    return (
        <img 
            src={yo} 
            alt=""
            className={iconSizesMap[size] + " rounded-full object-cover"}
        />
    );
}