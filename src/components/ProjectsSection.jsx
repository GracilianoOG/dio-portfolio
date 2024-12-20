import ProjectCard from "./ProjectCard";
import SectionTitleStyled from "./styles/SectionTitleStyled";
import projectOne from "../assets/images/projects/project-1.jpg";
import projectTwo from "../assets/images/projects/project-2.jpg";
import projectThree from "../assets/images/projects/project-3.jpg";
import styled from "styled-components";
import { ButtonStyled } from "./styles/ButtonStyled";
import { devices } from "../utils/breakpoints";

const ProjectsWrapperStyled = styled.div`
  display: grid;
  gap: 2.5rem;

  @media screen and ${devices.lg} {
    gap: 4rem;
  }
`;

function ProjectsSection() {
  return (
    <section id="projects">
      <SectionTitleStyled>Projetos</SectionTitleStyled>
      <ProjectsWrapperStyled>
        <ProjectCard
          image={projectOne}
          projectName="3-Column preview"
          description="Component com três colunas desenvovido em React."
          featureList={[
            "Design responsivo",
            "Mobile-first",
            "Desenvolvido com React e Vite",
          ]}
          repoLink="https://github.com/GracilianoOG/fementor-column-preview"
          previewLink="https://fementor-column-preview.vercel.app/"
        />
        <ProjectCard
          image={projectTwo}
          projectName="mundo invertido"
          description="Página inspirada na série “Stranger Things”."
          featureList={[
            "HTML Semântico",
            "Desenvolvido com Sass",
            "Botão de tema light e dark",
          ]}
          repoLink="https://github.com/GracilianoOG/dio-mundo-invertido"
          previewLink="https://gracilianoog.github.io/dio-mundo-invertido/"
        />
        <ProjectCard
          image={projectThree}
          projectName="Dio landing page"
          description="Landing Page sobre a trilha de CSS da Digital Innovation One."
          featureList={[
            "HTML Semântico",
            "Layout responsivo",
            "Design elegante",
          ]}
          repoLink="https://github.com/GracilianoOG/dio-desafio-css-landing-page"
          previewLink="https://gracilianoog.github.io/dio-desafio-css-landing-page/"
        />
        <ButtonStyled
          $decorated
          href="https://github.com/GracilianoOG?tab=repositories"
        >
          Mais projetos
        </ButtonStyled>
      </ProjectsWrapperStyled>
    </section>
  );
}

export default ProjectsSection;
