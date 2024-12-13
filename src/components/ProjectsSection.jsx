import ProjectCard from "./ProjectCard";
import SectionTitleStyled from "./styles/SectionTitleStyled";

function ProjectsSection() {
  return (
    <section>
      <SectionTitleStyled>Projetos</SectionTitleStyled>
      <div>
        <ProjectCard
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
