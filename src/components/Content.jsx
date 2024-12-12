import styled from "styled-components";
import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";

const MainContentStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
`;

function Content() {
  return (
    <MainContentStyled>
      <AboutSection />
      <EducationSection />
    </MainContentStyled>
  );
}

export default Content;
