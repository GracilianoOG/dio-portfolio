import styled from "styled-components";
import btnIcon from "../assets/images/icons/moon.svg";
import IconButton from "./IconButton";
import { devices } from "../utils/breakpoints";

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

const NavStyled = styled.nav`
  display: none;

  @media screen and ${devices.md} {
    display: initial;
  }
`;

const ListStyled = styled.ul`
  display: flex;
  list-style: none;
  text-transform: uppercase;
`;

const LinkStyled = styled.a`
  color: var(--color-primary);
  padding: 0.313rem;
`;

function Header() {
  return (
    <HeaderStyled>
      <TitleStyled>Gabriel graciliano</TitleStyled>
      <NavStyled>
        <ListStyled>
          <li>
            <LinkStyled href="#top">Home</LinkStyled>
          </li>
          <li>
            <LinkStyled href="#education">Formação</LinkStyled>
          </li>
          <li>
            <LinkStyled href="#projects">Projetos</LinkStyled>
          </li>
          <li>
            <LinkStyled href="#contact">Contato</LinkStyled>
          </li>
        </ListStyled>
      </NavStyled>
      <IconButton icon={btnIcon} />
    </HeaderStyled>
  );
}

export default Header;
