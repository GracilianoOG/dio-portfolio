import projectOne from "../assets/images/projects/project-1.jpg";
import projectTwo from "../assets/images/projects/project-2.jpg";
import projectThree from "../assets/images/projects/project-3.jpg";

export const projects = [
  {
    imageUrl: projectOne,
    title: "3-Column preview",
    description: "Component com três colunas desenvovido em React.",
    features: [
      "Design responsivo",
      "Mobile-first",
      "Desenvolvido com React e Vite",
    ],
    links: {
      source: "https://github.com/GracilianoOG/fementor-column-preview",
      preview: "https://fementor-column-preview.vercel.app/",
    },
  },
  {
    imageUrl: projectTwo,
    title: "mundo invertido",
    description: "Página inspirada na série “Stranger Things”.",
    features: [
      "HTML Semântico",
      "Desenvolvido com Sass",
      "Botão de tema light e dark",
    ],
    links: {
      source: "https://github.com/GracilianoOG/dio-mundo-invertido",
      preview: "https://gracilianoog.github.io/dio-mundo-invertido/",
    },
  },
  {
    imageUrl: projectThree,
    title: "Dio landing page",
    description:
      "Landing Page sobre a trilha de CSS da Digital Innovation One.",
    features: ["HTML Semântico", "Layout responsivo", "Design elegante"],
    links: {
      source: "https://github.com/GracilianoOG/dio-desafio-css-landing-page",
      preview: "https://gracilianoog.github.io/dio-desafio-css-landing-page/",
    },
  },
];
