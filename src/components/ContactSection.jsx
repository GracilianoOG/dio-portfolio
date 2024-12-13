import styled from "styled-components";
import { ButtonStyled } from "./styles/ButtonStyled";
import SectionTitleStyled from "./styles/SectionTitleStyled";
import SocialLink from "./SocialLink";
import iconGithub from "../assets/images/icons/github.svg";
import iconLinkedin from "../assets/images/icons/linkedin.svg";

const ContactWrapperStyled = styled.section`
  --border: 1px dashed black;
  border-top: var(--border);
  border-bottom: var(--border);
  padding: 2rem 10px;
  text-align: center;
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
    <ContactWrapperStyled>
      <SectionTitleStyled>Contato</SectionTitleStyled>
      <ContactDescription>
        Contate-me por e-mail ou pelas minhas redes sociais. Vamos conversar? =)
      </ContactDescription>
      <LinksWrapperStyled>
        <SocialLink imageSrc={iconGithub} text="GitHub" href="#" />
        <SocialLink imageSrc={iconLinkedin} text="LinkedIn" href="#" />
      </LinksWrapperStyled>
      <ButtonStyled $filled href="mailto:gabriel.gracilianomb@gmail.com">
        gabriel.gracilianomb@gmail.com
      </ButtonStyled>
    </ContactWrapperStyled>
  );
}

export default ContactSection;
