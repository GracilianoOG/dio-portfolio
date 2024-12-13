import styled, { css } from "styled-components";

export const ButtonStyled = styled.a`
  border: 1px solid black;
  background: none;
  color: black;
  display: inline-block;
  margin-right: 0.625rem;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  ${props =>
    props.$filled &&
    css`
      background: black;
      color: white;
    `}

  ${props =>
    props.$decorated &&
    css`
      box-shadow: 8px 8px black;
      font-weight: 700;
      letter-spacing: 10%;
      text-transform: uppercase;
    `}
`;

// export const FilledButtonStyled = styled(ButtonStyled)`
//   background: black;
//   color: white;
// `;
