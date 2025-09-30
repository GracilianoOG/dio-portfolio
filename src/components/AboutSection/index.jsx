import photo from "../../assets/images/photo.jpg";
import githubIcon from "../../assets/images/icons/github.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import SocialLink from "../SocialLink";
import {
  AboutSectionStyled,
  AboutTextStyled,
  AboutTitleStyled,
  ButtonWrapper,
  PhotoStyled,
} from "./styles";

function AboutSection() {
  return (
    <AboutSectionStyled id="about">
      <div>
        <AboutTitleStyled>
          Olá, eu sou o Gabriel, muito prazer!
        </AboutTitleStyled>
        <AboutTextStyled>
          Formado como técnico em informática pela ETE Paracambi e técnico em
          informática para a internet pelo IFRJ de Paulo de Frontin. Atualmente
          cursando Análise e Desenvolvimento de Sistemas pela Faeterj Paracambi.
        </AboutTextStyled>
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
      </div>
      <PhotoStyled
        src={photo}
        alt="Jovem branco na casa dos 20 anos, desenvolvedor do site, sorrindo para a câmera enquanto está em uma praia."
      />
    </AboutSectionStyled>
  );
}

export default AboutSection;
