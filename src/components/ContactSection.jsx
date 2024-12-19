import styled from "styled-components";
import { ButtonStyled } from "./styles/ButtonStyled";
import SectionTitleStyled from "./styles/SectionTitleStyled";
import SocialLink from "./SocialLink";
import iconGithub from "../assets/images/icons/github.svg";
import iconLinkedin from "../assets/images/icons/linkedin.svg";
import { devices } from "../utils/breakpoints";

const ContactWrapperStyled = styled.section`
  --border: 0.063rem dashed var(--color-primary);
  border-top: var(--border);
  border-bottom: var(--border);
  padding: 2rem 10px;
  text-align: center;

  @media screen and ${devices.md} {
    padding: 4rem 0;
  }
`;

const ContactDescription = styled.p`
  margin-bottom: 1.25rem;
`;

const LinksWrapperStyled = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

function ContactSection() {
  return (
    <ContactWrapperStyled id="contact">
      <SectionTitleStyled>Contato</SectionTitleStyled>
      <ContactDescription>
        Contate-me por e-mail ou pelas minhas redes sociais. Vamos conversar? =)
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
      <ButtonStyled $filled href="mailto:gabriel.gracilianomb@gmail.com">
        gabriel.gracilianomb@gmail.com
      </ButtonStyled>
    </ContactWrapperStyled>
  );
}

export default ContactSection;
