import styled from "styled-components";
import homeIcon from "../assets/images/icons/mobile/home.svg";
import capIcon from "../assets/images/icons/mobile/cap.svg";
import codeIcon from "../assets/images/icons/mobile/code.svg";
import mailIcon from "../assets/images/icons/mobile/mail.svg";
import { devices } from "../utils/breakpoints";
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

  @media screen and ${devices.lg} {
    display: none;
  }
`;

function MobileMenu() {
  return (
    <NavStyled>
      <MobileLink href="#" imageSrc={homeIcon}>
        Home
      </MobileLink>
      <MobileLink href="#" imageSrc={capIcon}>
        Formação
      </MobileLink>
      <MobileLink href="#" imageSrc={codeIcon}>
        Projetos
      </MobileLink>
      <MobileLink href="#" imageSrc={mailIcon}>
        Contato
      </MobileLink>
    </NavStyled>
  );
}

export default MobileMenu;
