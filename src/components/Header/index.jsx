import ThemeSwitcher from "../ThemeSwitcher";
import MobileMenu from "../MobileMenu";
import DesktopMenu from "../DesktopMenu";
import PropTypes from "prop-types";
import useScreenChange from "../../hooks/useScreenChange";
import { HeaderStyled, TitleStyled } from "./styles";

function Header(props) {
  return (
    <HeaderStyled>
      <TitleStyled>Gabriel graciliano</TitleStyled>
      {useScreenChange() ? <MobileMenu /> : <DesktopMenu />}
      <ThemeSwitcher {...props} />
    </HeaderStyled>
  );
}

Header.propTypes = {
  setDarkState: PropTypes.func.isRequired,
  darkState: PropTypes.bool.isRequired,
};

export default Header;
