import styled from "styled-components";
import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

const MainContentStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 6.25rem;
  margin-bottom: 6.25rem;
`;

function Content() {
  return (
    <MainContentStyled>
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </MainContentStyled>
  );
}

export default Content;
