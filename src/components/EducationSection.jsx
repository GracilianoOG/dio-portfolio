import styled from "styled-components";
import EducationCard from "./EducationCard";
import SectionTitleStyled from "./styles/SectionTitleStyled";
import { devices } from "../utils/breakpoints";

const SectionContent = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and ${devices.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function EducationSection() {
  return (
    <section>
      <SectionTitleStyled>Formação</SectionTitleStyled>
      <SectionContent>
        <EducationCard
          course="Análise e Desenvolvimento de Sistemas"
          location="FAETERJ Paracambi"
          date="março 2024 - cursando"
        />
        <EducationCard
          course="Técnico em Informática"
          location="ETE Paracambi"
          date="fev. 2021 - dez. 2021"
        />
        <EducationCard
          course="Técnico em Informática para Internet"
          location="IFRJ Paulo de Frontin"
          date="fev. 2018 - dez. 2018"
        />
      </SectionContent>
    </section>
  );
}

export default EducationSection;
