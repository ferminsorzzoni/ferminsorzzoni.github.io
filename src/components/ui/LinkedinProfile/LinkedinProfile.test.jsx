import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import LinkedinProfile from "./LinkedinProfile.jsx";

describe("LinkedinProfile component", () => {
    beforeEach(() => {
        render(<LinkedinProfile />)
    });

    it("correctly renders link to LinkedIn profile.", () => {
        const link = screen.getByRole("link", {
            name: /perfil de linkedin/i,
        });

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/fermin-sorzzoni-2792112b3/"
        );
    });

    it("correctly renders LinkedIn SVG.", () => {
        const link = screen.getByRole("link", {
            name: /perfil de linkedin/i,
        });

        const svg = link.querySelector("svg");

        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute("width", "32");
        expect(svg).toHaveAttribute("height", "32");
    });
});