import styled from "styled-components";
import darkIcon from "../assets/images/icons/moon.svg";
import lightIcon from "../assets/images/icons/sun.svg";
import IconButton from "./IconButton";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import PropTypes from "prop-types";

const HeaderStyled = styled.header`
  align-items: center;
  background-color: var(--color-background);
  display: flex;
  justify-content: space-between;
  margin-bottom: 4.25rem;
  padding: 2rem 0;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const TitleStyled = styled.h1`
  font-family: var(--font-family-secondary);
  font-weight: 600;
  font-size: 1rem;
  text-transform: capitalize;
`;

function Header({ darkState, setDarkState }) {
  return (
    <HeaderStyled>
      <TitleStyled>Gabriel graciliano</TitleStyled>
      <Menu />
      <MobileMenu />
      <IconButton
        icon={darkState ? darkIcon : lightIcon}
        onClick={() => setDarkState(prevDarkState => !prevDarkState)}
      />
    </HeaderStyled>
  );
}

Header.propTypes = {
  setDarkState: PropTypes.func.isRequired,
  darkState: PropTypes.bool.isRequired,
};

export default Header;
