import ThemeSwitcher from "../../components/ThemeSwitcher";
import { HeaderStyled, TitleStyled } from "./styles";
import NavMenu from "../../components/NavMenu";

function Header() {
  return (
    <HeaderStyled>
      <TitleStyled>Gabriel graciliano</TitleStyled>
      <NavMenu />
      <ThemeSwitcher />
    </HeaderStyled>
  );
}

export default Header;
