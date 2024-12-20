import styled from "styled-components";
import homeIcon from "../assets/images/icons/mobile/home.svg";
import capIcon from "../assets/images/icons/mobile/cap.svg";
import codeIcon from "../assets/images/icons/mobile/code.svg";
import mailIcon from "../assets/images/icons/mobile/mail.svg";
import MenuItem from "./MenuItem";

const MobileListStyled = styled.ul`
  background-color: var(--color-background);
  border-top: 1px solid var(--color-mobile-line);
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  left: 0;
  list-style: none;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

function MobileMenu() {
  return (
    <nav>
      <MobileListStyled>
        <MenuItem href="#top" imageSrc={homeIcon}>
          Home
        </MenuItem>
        <MenuItem href="#education" imageSrc={capIcon}>
          Formação
        </MenuItem>
        <MenuItem href="#projects" imageSrc={codeIcon}>
          Projetos
        </MenuItem>
        <MenuItem href="#contact" imageSrc={mailIcon}>
          Contato
        </MenuItem>
      </MobileListStyled>
    </nav>
  );
}

export default MobileMenu;
