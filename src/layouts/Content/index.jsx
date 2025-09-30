import AboutSection from "../../components/AboutSection";
import EducationSection from "../../components/EducationSection";
import ProjectsSection from "../../components/ProjectsSection";
import ContactSection from "../../components/ContactSection";
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
