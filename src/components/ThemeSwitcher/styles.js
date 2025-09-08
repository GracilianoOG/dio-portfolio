import styled from "styled-components";
import IconStyled from "../styles/IconStyled";

export const LocalIconStyled = styled(IconStyled)`
  display: block;
  transition: transform 0.5s;
`;

export const ThemeSwitcherStyled = styled.button`
  border: 0.125rem solid var(--color-background);
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
