import yo from "../../../assets/yo.jpeg";

export default function ProfilePhoto({ width = 32, height = 32 }) {

    return (
        <img 
            src={yo} 
            alt=""
            width={width}
            height={height}
            className="rounded-full object-cover"
        />
    );
}