import EducationCard from "./EducationCard";
import SectionTitleStyled from "./styles/SectionTitleStyled";

function EducationSection() {
  return (
    <section>
      <SectionTitleStyled>Formação</SectionTitleStyled>
      <EducationCard
        course="Análise e Desenvolvimento de Sistemas"
        location="FAETERJ Paracambi"
        date="março 2024 - cursando"
      />
    </section>
  );
}

export default EducationSection;
