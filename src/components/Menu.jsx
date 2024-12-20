import styled from "styled-components";

const ListStyled = styled.ul`
  display: flex;
  list-style: none;
  text-transform: uppercase;
`;

const LinkStyled = styled.a`
  color: var(--color-primary);
  padding: 0.313rem;
  position: relative;

  &::before {
    --line-scale: 0;
    background-color: var(--color-primary);
    bottom: 0;
    content: "";
    position: absolute;
    left: 0;
    height: 0.125rem;
    transition: transform 0.4s;
    transform: scaleX(var(--line-scale));
    transform-origin: center;
    width: 100%;
  }

  &:hover::before {
    --line-scale: 1;
  }
`;

function Menu() {
  return (
    <nav>
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
    </nav>
  );
}

export default Menu;
