import styled from "styled-components";

export const ButtonStyled = styled.a`
  border: 1px solid black;
  background: none;
  color: black;
  display: inline-block;
  margin-right: 0.625rem;
  padding: 1rem 2rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const FilledButtonStyled = styled(ButtonStyled)`
  background: black;
  color: white;
`;
