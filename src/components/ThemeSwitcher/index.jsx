import darkIcon from "../../assets/images/icons/moon.svg";
import lightIcon from "../../assets/images/icons/sun.svg";
import { LocalIconStyled, ThemeSwitcherStyled } from "./styles";
import { ThemeContext, useTheme } from "styled-components";

function ThemeSwitcher() {
  const { isDark, toggleTheme } = useTheme(ThemeContext);

  return (
    <ThemeSwitcherStyled
      onClick={toggleTheme}
      aria-label="Tema escuro"
      aria-pressed={isDark}
    >
      <LocalIconStyled src={isDark ? darkIcon : lightIcon} alt="" />
    </ThemeSwitcherStyled>
  );
}

export default ThemeSwitcher;
