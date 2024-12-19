import PropTypes from "prop-types";
import styled from "styled-components";
import IconStyled from "./styles/IconStyled";
import darkIcon from "../assets/images/icons/moon.svg";
import lightIcon from "../assets/images/icons/sun.svg";

const LocalIconStyled = styled(IconStyled)`
  display: block;
  transition: transform 0.5s;
`;

const ButtonStyled = styled.button`
  border: 0.125rem solid transparent;
  background-color: transparent;
  border-radius: 50%;
  padding: 0.5rem;
  transition: border-color 0.5s;

  &:hover {
    border-color: var(--color-primary);
    cursor: pointer;
  }

  &:hover ${LocalIconStyled} {
    transform: scale(0.85);
  }
`;

function ThemeSwitcher({ darkState, setDarkState }) {
  return (
    <ButtonStyled
      onClick={() => setDarkState(prevDarkState => !prevDarkState)}
      aria-label="Tema dark"
      aria-pressed={darkState}
    >
      <LocalIconStyled src={darkState ? darkIcon : lightIcon} alt="" />
    </ButtonStyled>
  );
}

ThemeSwitcher.propTypes = {
  setDarkState: PropTypes.func.isRequired,
  darkState: PropTypes.bool.isRequired,
};

export default ThemeSwitcher;
