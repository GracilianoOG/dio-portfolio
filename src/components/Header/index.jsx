import ThemeSwitcher from "../ThemeSwitcher";
import { HeaderStyled, TitleStyled } from "./styles";
import NavMenu from "../NavMenu";

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
