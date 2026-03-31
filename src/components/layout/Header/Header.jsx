import ProfilePhoto from "../../ui/ProfilePhoto/ProfilePhoto.jsx";
import SocialProfile from "../../ui/SocialProfile/SocialProfile.jsx";

export default function Header() {
    return (
        <header className="layout-center flex justify-between items-center mt-16 pb-8 border-b-2">
            <div className="flex items-center gap-4 font-semibold">
                <ProfilePhoto size="xxxl" />
                <h1 className="text-3xl">Fermin Sorzzoni</h1>
            </div>

            <div className="flex items-center gap-2">
                <SocialProfile type="github" size="large" />
                <SocialProfile type="linkedin" size="large" />
            </div>
        </header>
    );
}