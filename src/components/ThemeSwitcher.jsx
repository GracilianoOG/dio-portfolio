import PropTypes from "prop-types";
import styled from "styled-components";
import IconStyled from "./styles/IconStyled";
import darkIcon from "../assets/images/icons/moon.svg";
import lightIcon from "../assets/images/icons/sun.svg";

const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 50%;
  padding: 0.5rem;
  transition: transform 0.5s, filter 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    filter: drop-shadow(0 0 0.625rem var(--color-primary)) brightness(1.5);
  }
`;

const LocalIconStyled = styled(IconStyled)`
  display: block;
`;

function ThemeSwitcher({ darkState, setDarkState }) {
  return (
    <ButtonStyled onClick={() => setDarkState(prevDarkState => !prevDarkState)}>
      <LocalIconStyled src={darkState ? darkIcon : lightIcon} alt="" />
    </ButtonStyled>
  );
}

ThemeSwitcher.propTypes = {
  setDarkState: PropTypes.func.isRequired,
  darkState: PropTypes.bool.isRequired,
};

export default ThemeSwitcher;
