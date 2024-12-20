import styled from "styled-components";
import MenuItem from "./MenuItem";

const ListStyled = styled.ul`
  display: flex;
  list-style: none;
`;

function DesktopMenu() {
  return (
    <nav>
      <ListStyled>
        <MenuItem href="#top">Home</MenuItem>
        <MenuItem href="#education">Formação</MenuItem>
        <MenuItem href="#projects">Projetos</MenuItem>
        <MenuItem href="#contact">Contato</MenuItem>
      </ListStyled>
    </nav>
  );
}

export default DesktopMenu;
