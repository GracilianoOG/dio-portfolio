import styled from "styled-components";
import { devices } from "../utils/breakpoints";

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

function Menu() {
  return (
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
  );
}

export default Menu;
