import styled from "styled-components";
import photo from "../assets/images/photo.jpg";
import githubIcon from "../assets/images/icons/github.svg";
import linkedin from "../assets/images/icons/linkedin.svg";
import SocialLink from "./SocialLink";

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
  margin-bottom: 1.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function AboutSection() {
  return (
    <AboutSectionStyled id="about">
      <PhotoStyled src={photo} alt="" />
      <AboutTitleStyled>Olá, eu sou o Gabriel, muito prazer!</AboutTitleStyled>
      <AboutTextStyled>Apaixonado por tecnologia e inovação.</AboutTextStyled>
      <ButtonWrapper>
        <SocialLink imageSrc={githubIcon} href="#" />
        <SocialLink imageSrc={linkedin} href="#" />
      </ButtonWrapper>
    </AboutSectionStyled>
  );
}

export default AboutSection;
