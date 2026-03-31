import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard.jsx";

describe("El componente ProjectCard", () => {
    it("renderiza correctamente la info del proyecto", () => {
        const mock = {
            title: "test title",
            description: "test desc",
            techDescription: "test tech desc",
            image: "test image",
            githubUrl: "test githuburl",
            liveUrl: "test liveurl",
        };

        render(<ProjectCard project={mock} />);

        expect(screen.getByAltText("")).toBeInTheDocument();
        expect(screen.getByText(mock.title)).toBeInTheDocument();
        expect(screen.getByText(mock.description)).toBeInTheDocument();
        expect(screen.getByText(mock.techDescription)).toBeInTheDocument();

        expect(screen.getByText(/ir a la app/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/repositorio de github/i)).toBeInTheDocument();
    });

    it("no renderiza nada si el project no existe", () => {
        const mock = null;

        const { container } = render(<ProjectCard project={mock} />);
        expect(container.firstChild).toBeNull();
    });

    it("no renderiza el link a la app si no hay liveUrl", () => {
        const mock = {
            title: "test title",
            description: "test desc",
            techDescription: "test tech desc",
            image: "test image",
            githubUrl: "test githuburl",
        };

        render(<ProjectCard project={mock} />);
        expect(screen.queryByText(/ir a la app/i)).not.toBeInTheDocument();
    });

    it("no renderiza el link al repositorio si no hay githubUrl", () => {
        const mock = {
            title: "test title",
            description: "test desc",
            techDescription: "test tech desc",
            image: "test image",
            liveUrl: "test liveurl",
        };

        render(<ProjectCard project={mock} />);
        expect(screen.queryByLabelText(/repositorio de github/i)).not.toBeInTheDocument();
    });
});