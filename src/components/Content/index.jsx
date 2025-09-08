import AboutSection from "../AboutSection";
import EducationSection from "../EducationSection";
import ProjectsSection from "../ProjectsSection";
import ContactSection from "../ContactSection";
import { MainContentStyled } from "./styles";

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
