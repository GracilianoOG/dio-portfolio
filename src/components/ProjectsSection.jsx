import ProjectCard from "./ProjectCard";
import SectionTitleStyled from "./styles/SectionTitleStyled";
import projectOne from "../assets/images/projects/project-1.jpg";

function ProjectsSection() {
  return (
    <section>
      <SectionTitleStyled>Projetos</SectionTitleStyled>
      <div>
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
      </div>
    </section>
  );
}

export default ProjectsSection;
