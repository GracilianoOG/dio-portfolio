import styled from "styled-components";
import photo from "../assets/images/photo.jpg";
import githubIcon from "../assets/images/icons/github.svg";
import linkedin from "../assets/images/icons/linkedin.svg";
import SocialLink from "./SocialLink";

const AboutSectionStyled = styled.section`
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 64rem) {
    flex-direction: row;
    align-items: center;
  }
`;

const PhotoStyled = styled.img`
  width: 100%;

  @media screen and (min-width: 64rem) {
    max-width: 31.25rem;
  }
`;

const AboutTitleStyled = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.75rem;

  @media screen and (min-width: 48rem) {
    font-size: 2rem;
  }
`;

const AboutTextStyled = styled.p`
  font-size: 0.75rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 48rem) {
    font-size: 1.5rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentWrapperStyled = styled.div`
  flex: 1;
`;

function AboutSection() {
  return (
    <AboutSectionStyled id="about">
      <PhotoStyled src={photo} alt="" />
      <ContentWrapperStyled>
        <AboutTitleStyled>
          Olá, eu sou o Gabriel, muito prazer!
        </AboutTitleStyled>
        <AboutTextStyled>Apaixonado por tecnologia e inovação.</AboutTextStyled>
        <ButtonWrapper>
          <SocialLink imageSrc={githubIcon} href="#" />
          <SocialLink imageSrc={linkedin} href="#" />
        </ButtonWrapper>
      </ContentWrapperStyled>
    </AboutSectionStyled>
  );
}

export default AboutSection;
