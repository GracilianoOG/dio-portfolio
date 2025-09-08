import ThemeSwitcher from "../ThemeSwitcher";
import PropTypes from "prop-types";
import { HeaderStyled, TitleStyled } from "./styles";
import NavMenu from "../NavMenu";

function Header(props) {
  return (
    <HeaderStyled>
      <TitleStyled>Gabriel graciliano</TitleStyled>
      <NavMenu />
      <ThemeSwitcher {...props} />
    </HeaderStyled>
  );
}

Header.propTypes = {
  setDarkState: PropTypes.func.isRequired,
  darkState: PropTypes.bool.isRequired,
};

export default Header;
