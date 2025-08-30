import ProjectCard from "./ProjectCard";
import SectionTitleStyled from "./styles/SectionTitleStyled";
import styled from "styled-components";
import { ButtonStyled } from "./styles/ButtonStyled";
import { devices } from "../utils/breakpoints";
import { projects } from "../data/projects";

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
        {projects.map((project, index) => {
          const { imageUrl, title, description, features, links } = project;
          return (
            <ProjectCard
              key={index}
              image={imageUrl}
              projectName={title}
              description={description}
              featureList={features}
              previewLink={links.preview}
              repoLink={links.source}
            />
          );
        })}

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
