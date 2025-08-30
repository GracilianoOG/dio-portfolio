import styled from "styled-components";
import photo from "../assets/images/photo.jpg";
import githubIcon from "../assets/images/icons/github.svg";
import linkedin from "../assets/images/icons/linkedin.svg";
import SocialLink from "./SocialLink";
import { devices } from "../utils/breakpoints";

const AboutSectionStyled = styled.section`
  align-items: center;
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
  text-align: center;

  @media screen and ${devices.lg} {
    flex-direction: row;
  }
`;

const PhotoStyled = styled.img`
  max-width: 25rem;
  width: 100%;

  @media screen and ${devices.lg} {
    max-width: min(31.25rem, 38.11%);
  }
`;

const AboutTitleStyled = styled.h2`
  font-family: var(--font-family-secondary);
  font-size: clamp(1rem, 2.5vw, 2rem);
  font-weight: 400;
  margin-bottom: 0.75rem;
`;

const AboutTextStyled = styled.p`
  font-size: clamp(0.75rem, 1.75vw, 1.5rem);
  margin-bottom: 1.5rem;
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
      <ContentWrapperStyled>
        <AboutTitleStyled>
          Olá, eu sou o Gabriel, muito prazer!
        </AboutTitleStyled>
        <AboutTextStyled>Apaixonado por tecnologia e inovação.</AboutTextStyled>
        <ButtonWrapper>
          <SocialLink
            imageSrc={githubIcon}
            href="https://github.com/GracilianoOG"
            text="GitHub"
          />
          <SocialLink
            imageSrc={linkedin}
            href="https://www.linkedin.com/in/gabrielgmbarros"
            text="LinkedIn"
          />
        </ButtonWrapper>
      </ContentWrapperStyled>
      <PhotoStyled
        src={photo}
        alt="Jovem branco na casa dos 20 anos, desenvolvedor do site, sorrindo para a câmera enquanto está em uma praia."
      />
    </AboutSectionStyled>
  );
}

export default AboutSection;
