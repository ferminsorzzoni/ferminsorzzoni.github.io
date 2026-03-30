import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import GithubIcon from "./GithubIcon.jsx";

describe("El componente GithubIcon", () => {
    it("renderiza correctamente el SVG de GitHub", () => {
        render(<GithubIcon className="w-8 h-8 block" />)

        const svg = link.querySelector("svg");

        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass("w-8", "h-8", "block");
        expect(svg).toHaveAttribute("aria-hidden", "true");
    });
});