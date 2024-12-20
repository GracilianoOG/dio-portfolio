import styled from "styled-components";
import homeIcon from "../assets/images/icons/mobile/home.svg";
import capIcon from "../assets/images/icons/mobile/cap.svg";
import codeIcon from "../assets/images/icons/mobile/code.svg";
import mailIcon from "../assets/images/icons/mobile/mail.svg";
import MobileLink from "./MobileLink";

const NavStyled = styled.nav`
  background-color: var(--color-background);
  border-top: 1px solid var(--color-mobile-line);
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

function MobileMenu() {
  return (
    <NavStyled>
      <MobileLink href="#top" imageSrc={homeIcon}>
        Home
      </MobileLink>
      <MobileLink href="#education" imageSrc={capIcon}>
        Formação
      </MobileLink>
      <MobileLink href="#projects" imageSrc={codeIcon}>
        Projetos
      </MobileLink>
      <MobileLink href="#contact" imageSrc={mailIcon}>
        Contato
      </MobileLink>
    </NavStyled>
  );
}

export default MobileMenu;
