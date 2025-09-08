import homeIcon from "../../assets/images/icons/mobile/home.svg";
import capIcon from "../../assets/images/icons/mobile/cap.svg";
import codeIcon from "../../assets/images/icons/mobile/code.svg";
import mailIcon from "../../assets/images/icons/mobile/mail.svg";
import MenuItem from "../MenuItem";
import { ListStyled } from "./styles";

function NavMenu() {
  return (
    <nav>
      <ListStyled>
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
      </ListStyled>
    </nav>
  );
}

export default NavMenu;
