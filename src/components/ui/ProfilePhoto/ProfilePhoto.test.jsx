import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ProfilePhoto from "./ProfilePhoto.jsx";

describe("El componente ProfilePhoto", () => {
    it("renderiza correctamente sin atributos (medium)", () => {
        const { container } = render(<ProfilePhoto />)

        const img = container.querySelector("img");

        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("alt", "");
        expect(img).toHaveClass("w-8", "h-8", "rounded-full", "object-cover");
    });

    it("renderiza correctamente con atributos (large)", () => {
        const { container } = render(<ProfilePhoto size="large" />)

        const img = container.querySelector("img");

        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("alt", "");
        expect(img).toHaveClass("w-12", "h-12", "rounded-full", "object-cover");
    });

    it("renderiza correctamente con atributos inválidos (extralarge)", () => {
        const { container } = render(<ProfilePhoto size="extralarge" />)

        const img = container.querySelector("img");

        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("alt", "");
        expect(img).toHaveClass("w-8", "h-8", "rounded-full", "object-cover");
    });
});