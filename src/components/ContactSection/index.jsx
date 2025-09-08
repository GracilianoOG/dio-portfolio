import SocialLink from "../SocialLink";
import iconGithub from "../../assets/images/icons/github.svg";
import iconLinkedin from "../../assets/images/icons/linkedin.svg";
import EmailButton from "../EmailButton";
import {
  ContactDescription,
  ContactWrapperStyled,
  LinksWrapperStyled,
} from "./styles";
import SectionTitleStyled from "../../styles/SectionTitleStyled";

function ContactSection() {
  return (
    <ContactWrapperStyled id="contact">
      <SectionTitleStyled>Contato</SectionTitleStyled>
      <ContactDescription>
        Contate-me por e-mail ou pelas minhas redes sociais. Vamos conversar? =D
      </ContactDescription>
      <LinksWrapperStyled>
        <SocialLink
          imageSrc={iconGithub}
          text="GitHub"
          href="https://github.com/GracilianoOG"
          showText={true}
        />
        <SocialLink
          imageSrc={iconLinkedin}
          text="LinkedIn"
          href="https://www.linkedin.com/in/gabrielgmbarros"
          showText={true}
        />
      </LinksWrapperStyled>
      <EmailButton email="gabriel.gracilianomb@gmail.com" />
    </ContactWrapperStyled>
  );
}

export default ContactSection;
