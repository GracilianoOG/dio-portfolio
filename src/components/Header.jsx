import styled from "styled-components";
import btnIcon from "../assets/images/icons/moon.svg";
import IconButton from "./IconButton";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

const HeaderStyled = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 6.25rem;
`;

const TitleStyled = styled.h1`
  font-family: var(--font-family-secondary);
  font-weight: 600;
  font-size: 1rem;
  text-transform: capitalize;
`;

function Header() {
  return (
    <HeaderStyled>
      <TitleStyled>Gabriel graciliano</TitleStyled>
      <Menu />
      <MobileMenu />
      <IconButton icon={btnIcon} />
    </HeaderStyled>
  );
}

export default Header;
