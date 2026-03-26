import yo from "../../../assets/yo.jpeg";

export default function ProfilePhoto({ width, height }) {

    return (
        <img 
            src={yo} 
            alt="" 
            className={"w-"+ width + " h-" + height + " rounded-full object-cover"}
        />
    );
}