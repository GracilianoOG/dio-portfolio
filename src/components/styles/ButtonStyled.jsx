import styled, { css } from "styled-components";

export const ButtonStyled = styled.a`
  border: 1px solid var(--color-primary);
  background: none;
  color: var(--color-primary);
  display: inline-block;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  ${props =>
    props.$filled &&
    css`
      background: var(--color-primary);
      color: var(--color-secondary);
    `}

  ${props =>
    props.$decorated &&
    css`
      box-shadow: 8px 8px var(--color-primary);
      font-weight: 700;
      letter-spacing: 10%;
      margin: 0 auto;
      text-transform: uppercase;
      width: 21.438rem;
    `}
`;

// export const FilledButtonStyled = styled(ButtonStyled)`
//   background: black;
//   color: white;
// `;
