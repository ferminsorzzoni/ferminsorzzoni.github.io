import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SocialProfile from "./SocialProfile.jsx";

describe("El componente SocialProfile", () => {
    it("renderiza correctamente sin atributos (GitHub, medium)", () => {
        render(<SocialProfile />)

        const link = screen.getByRole("link", {
            name: /perfil de github/i,
        });

        const svg = link.querySelector("svg");

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute(
            "href",
            "https://github.com/fsorzzoni"
        );
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass("w-8", "h-8", "block");
    });

    it("renderiza correctamente con atributos (LinkedIn, large, title=hola)", () => {
        render(<SocialProfile type="linkedin" size="large" title="hola" />)

        const link = screen.getByRole("link", {
            name: /perfil de linkedin/i,
        });

        const svg = link.querySelector("svg");

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/fermin-sorzzoni-2792112b3/"
        );
        expect(link).toHaveAttribute("title", "hola");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass("w-12", "h-12", "block");
    });

    it("renderiza correctamente con atributos inválidos (facebook, extralarge)", () => {
        render(<SocialProfile type="facebook" size="extralarge" />)

        const link = screen.getByRole("link", {
            name: /perfil de github/i,
        });

        const svg = link.querySelector("svg");

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute(
            "href",
            "https://github.com/fsorzzoni"
        );
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass("w-8", "h-8", "block");
    });

    it("puede focusear el link", () => {
        render(<SocialProfile />);

        const link = screen.getByRole("link", {
            name: /perfil de github/i,
        });

        link.focus();

        expect(link).toHaveFocus();
    });
});