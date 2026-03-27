import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LinkedinProfile from "./LinkedinProfile.jsx";

describe("El componente LinkedinProfile", () => {
    it("renderiza correctamente el link al perfil de LinkedIn", () => {
        render(<LinkedinProfile />)

        const link = screen.getByRole("link", {
            name: /perfil de linkedin/i,
        });

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/fermin-sorzzoni-2792112b3/"
        );
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("renderiza correctamente el SVG de LinkedIn sin propiedades (32x32)", () => {
        render(<LinkedinProfile />)

        const link = screen.getByRole("link", {
            name: /perfil de linkedin/i,
        });

        const svg = link.querySelector("svg");

        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass();
        expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    it("renderiza correctamente el SVG de LinkedIn con propiedades (48x48)", () => {
        render(<LinkedinProfile width={48} height={48} />)

        const link = screen.getByRole("link", {
            name: /perfil de linkedin/i,
        });

        const svg = link.querySelector("svg");

        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass();
        expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    it("puede focusear el link", async () => {
        render(<LinkedinProfile />);

        const link = screen.getByRole("link", {
            name: /perfil de linkedin/i,
        });

        link.focus();

        expect(link).toHaveFocus();
    });
});