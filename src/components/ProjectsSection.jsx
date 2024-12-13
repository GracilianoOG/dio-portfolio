import ProjectCard from "./ProjectCard";
import SectionTitleStyled from "./styles/SectionTitleStyled";
import projectOne from "../assets/images/projects/project-1.jpg";
import projectTwo from "../assets/images/projects/project-2.jpg";
import projectThree from "../assets/images/projects/project-3.jpg";
import styled from "styled-components";
import { ButtonStyled } from "./styles/ButtonStyled";

const ProjectsWrapperStyled = styled.div`
  display: grid;
  gap: 2.5rem;
`;

function ProjectsSection() {
  return (
    <section>
      <SectionTitleStyled>Projetos</SectionTitleStyled>
      <ProjectsWrapperStyled>
        <ProjectCard
          image={projectOne}
          projectName="3-Column preview"
          description="Component com três colunas desenvovido em React."
          featureList={[
            "Design responsivo;",
            "Mobile-first;",
            "Desenvolvido com React e Vite.",
          ]}
        />
        <ProjectCard
          image={projectTwo}
          projectName="mundo invertido"
          description="Página inspirada na série “Stranger Things”."
          featureList={[
            "HTML Semântico;",
            "Desenvolvido com Sass;",
            "Botão de tema light e dark.",
          ]}
        />
        <ProjectCard
          image={projectThree}
          projectName="Dio landing page"
          description="Landing Page sobre a trilha de CSS da Digital Innovation One."
          featureList={[
            "HTML Semântico;",
            "Layout responsivo;",
            "Design elegante.",
          ]}
        />
        <ButtonStyled $decorated href="#">
          Mais projetos
        </ButtonStyled>
      </ProjectsWrapperStyled>
    </section>
  );
}

export default ProjectsSection;
