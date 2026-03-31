import SocialProfile from "../../ui/SocialProfile/SocialProfile.jsx";

export default function Footer() {
    return (
        <footer className="layout-center mb-16 pt-8 border-t-2">
            <section>
                <h2 className="text-center text-xl">Contacto</h2>
                <p className="text-center text-primary">ferminsorzzoni@gmail.com</p>
                <div className="flex justify-center gap-4">
                    <SocialProfile type="linkedin" />
                    <SocialProfile type="github" />
                </div>
            </section>

            <section className="mt-8">
                <p className="text-center text-primary">Copyright Fermin Sorzzoni - 2026</p>
            </section>
        </footer>
    );
}