import PropTypes from "prop-types";
import darkIcon from "../../assets/images/icons/moon.svg";
import lightIcon from "../../assets/images/icons/sun.svg";
import { LocalIconStyled, ThemeSwitcherStyled } from "./styles";

function ThemeSwitcher({ darkState, setDarkState }) {
  return (
    <ThemeSwitcherStyled
      onClick={setDarkState}
      aria-label="Tema escuro"
      aria-pressed={darkState}
    >
      <LocalIconStyled src={darkState ? darkIcon : lightIcon} alt="" />
    </ThemeSwitcherStyled>
  );
}

ThemeSwitcher.propTypes = {
  setDarkState: PropTypes.func.isRequired,
  darkState: PropTypes.bool.isRequired,
};

export default ThemeSwitcher;
