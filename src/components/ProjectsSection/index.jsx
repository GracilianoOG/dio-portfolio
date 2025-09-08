import ProjectCard from "../ProjectCard";
import SectionTitleStyled from "../../styles/SectionTitleStyled";
import { ButtonStyled } from "../../styles/ButtonStyled";
import { projects } from "../../data/projects";
import { ProjectsWrapperStyled } from "./styles";

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
