import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import GithubProfile from "./GithubProfile.jsx";

describe("El componente GithubProfile", () => {
    it("renderiza correctamente el link al perfil de GitHub", () => {
        render(<GithubProfile />)

        const link = screen.getByRole("link", {
            name: /perfil de github/i,
        });

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute(
            "href",
            "https://github.com/fsorzzoni"
        );
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("renderiza correctamente el SVG de GitHub sin propiedades (32x32)", () => {
        render(<GithubProfile />)

        const link = screen.getByRole("link", {
            name: /perfil de github/i,
        });

        const svg = link.querySelector("svg");

        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute("width", "32");
        expect(svg).toHaveAttribute("height", "32");
        expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    it("renderiza correctamente el SVG de GitHub con propiedades (48x48)", () => {
        render(<GithubProfile width={48} height={48} />)

        const link = screen.getByRole("link", {
            name: /perfil de github/i,
        });

        const svg = link.querySelector("svg");

        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute("width", "48");
        expect(svg).toHaveAttribute("height", "48");
        expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    it("puede focusear el link", async () => {
        render(<GithubProfile />);

        const link = screen.getByRole("link", {
            name: /perfil de github/i,
        });

        link.focus();

        expect(link).toHaveFocus();
    });
});