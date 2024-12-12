import styled from "styled-components";
import photo from "../assets/images/photo.jpg";

const AboutSectionStyled = styled.section`
  text-align: center;
`;

const PhotoStyled = styled.img`
  margin-bottom: 1.25rem;
  width: 100%;
`;

const AboutTitleStyled = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.75rem;
`;

const AboutTextStyled = styled.p`
  font-size: 0.75rem;
`;

function AboutSection() {
  return (
    <AboutSectionStyled id="about">
      <PhotoStyled src={photo} alt="" />
      <AboutTitleStyled>Olá, eu sou o Gabriel, muito prazer!</AboutTitleStyled>
      <AboutTextStyled>Apaixonado por tecnologia e inovação.</AboutTextStyled>
    </AboutSectionStyled>
  );
}

export default AboutSection;
