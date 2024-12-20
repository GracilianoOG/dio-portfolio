import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import PropTypes from "prop-types";
import { devices } from "../utils/breakpoints";
import { useEffect, useState } from "react";

const HeaderStyled = styled.header`
  align-items: center;
  background-color: var(--color-background);
  display: flex;
  justify-content: space-between;
  margin-bottom: 4.25rem;
  padding: 2rem 0;
  z-index: 1;

  @media screen and ${devices.lg} {
    position: sticky;
    top: 0;
  }
`;

const TitleStyled = styled.h1`
  font-family: var(--font-family-secondary);
  font-weight: 600;
  font-size: 1rem;
  text-transform: capitalize;
`;

function Header(props) {
  const [isMobile, setIsMobile] = useState(
    !window.matchMedia(devices.lg).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(devices.lg);
    const handleScreenChange = () => setIsMobile(!mediaQueryList.matches);
    mediaQueryList.addEventListener("change", handleScreenChange);

    return () =>
      mediaQueryList.removeEventListener("change", handleScreenChange);
  }, []);

  return (
    <HeaderStyled>
      <TitleStyled>Gabriel graciliano</TitleStyled>
      {isMobile ? <MobileMenu /> : <Menu />}
      <ThemeSwitcher {...props} />
    </HeaderStyled>
  );
}

Header.propTypes = {
  setDarkState: PropTypes.func.isRequired,
  darkState: PropTypes.bool.isRequired,
};

export default Header;
