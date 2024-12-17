import styled, { css } from "styled-components";

export const ButtonStyled = styled.a`
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  display: inline-block;
  overflow: hidden;
  padding: 1rem 2rem;
  position: relative;
  transition: color 0.2s;
  text-align: center;

  &:hover {
    color: var(--color-secondary);
  }

  &::before {
    --scale-value: 0;
    background-color: var(--color-primary);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: transform 0.4s;
    transform: skewX(-30deg) translateX(-10%) scaleX(var(--scale-value));
    transform-origin: right;
    width: 140%;
    z-index: -1;
  }

  &:hover::before {
    --scale-value: 1;
    cursor: pointer;
    transform-origin: left;
  }

  ${props =>
    props.$filled &&
    css`
      color: var(--color-secondary);

      &:hover {
        color: var(--color-primary);
      }

      &::before {
        background-color: var(--color-secondary);
      }

      &::after {
        background-color: var(--color-primary);
        content: "";
        inset: 0;
        position: absolute;
        z-index: -2;
      }
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
