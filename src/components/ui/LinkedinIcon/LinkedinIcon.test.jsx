import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import LinkedinIcon from "./LinkedinIcon.jsx";

describe("El componente LinkedinIcon", () => {
    it("renderiza correctamente el SVG de LinkedIn", () => {
        render(<LinkedinIcon className="w-8 h-8 block" />)

        const svg = link.querySelector("svg");

        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass("w-8", "h-8", "block");
        expect(svg).toHaveAttribute("aria-hidden", "true");
    });
});