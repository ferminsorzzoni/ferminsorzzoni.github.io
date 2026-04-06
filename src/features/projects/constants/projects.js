import unitrackerImg from "../../../assets/unitracker.png";
import portfolioImg from "../../../assets/portfolio.png";
import ssooImg from "../../../assets/ssoo.png";
import sejuImg from "../../../assets/seju.png";

export const PROJECTS = {
    unitracker: {
        title: "Unitracker",
        description: "Aplicación para realizar un seguimiento y obtener estadísticas de tu carrera universitaria.",
        techDescription: "En desarrollo utilizando Next.js, Express y auth a través de JWT en el backend, y React y TailwindCSS en el frontend.",
        image: unitrackerImg,
        githubUrl: "https://github.com/fsorzzoni/unitracker",
    },
    portfolio: {
        title: "Portfolio",
        description: "La página que estás viendo.",
        techDescription: "Desarrollado utilizando React y TailwindCSS.",
        image: portfolioImg,
        githubUrl: "https://github.com/fsorzzoni/fsorzzoni.github.io",
        liveUrl: "https://fsorzzoni.github.io/",
    },
    ssoo: {
        title: "TP Sistemas Operativos",
        description: "Simulación de un sistema operativo, incluyendo el kernel, CPU, I/O y memoria.",
        techDescription: "Desarrollado con Go, aplicando conceptos de sistemas operativos y algoritmos.",
        image: ssooImg,
        githubUrl: "https://github.com/fsorzzoni/TP-UTNSO-1c2025",
    },
    seju: {
        title: "Inscripciones SeJu",
        description: "Software para gestionar inscripciones para la organización \"SeJu\"",
        techDescription: "Desarrollado en Go.",
        image: sejuImg,
    }
}