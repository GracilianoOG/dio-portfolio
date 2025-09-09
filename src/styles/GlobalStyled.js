import { createGlobalStyle, css } from "styled-components";
import { devices } from "../utils/breakpoints";

const resetCSS = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: var(--font-family-primary);
    margin: 0;
    padding: 0;
  }
`;

const globalCSS = css`
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 7.5rem;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-primary);
  }

  a {
    text-decoration: none;
  }

  #root {
    display: flex;
    justify-content: center;
  }
`;

const variablesCSS = css`
  :root {
    --color-white: #ffffff;
    --color-almost-black: #1c1c1c;
    --color-very-light-gray: #f6f6f6;
    --color-very-dark-gray: #363636;
    --color-dark-gray: #9a9a9c;
    --color-gray: #b6b6b6;

    --color-background: var(--color-very-light-gray);
    --color-primary: var(--color-almost-black);
    --color-secondary: var(--color-white);
    --color-tertiary: var(--color-very-dark-gray);
    --color-mobile-line: var(--color-gray);
    --icon-filter: none;

    ${({ theme }) =>
      theme.isDark &&
      css`
        --color-background: var(--color-almost-black);
        --color-primary: var(--color-white);
        --color-secondary: var(--color-almost-black);
        --color-tertiary: var(--color-dark-gray);
        --color-mobile-line: var(--color-gray);
        --icon-filter: invert(1);
      `}

    --font-family-primary: "Raleway", sans-serif;
    --font-family-secondary: "Inter", sans-serif;
    --gap-base: 6.25rem;

    @media screen and ${devices.md} {
      --gap-base: 12.5rem;
    }
  }
`;

const GlobalStyled = createGlobalStyle`
  ${variablesCSS}
  ${resetCSS}
  ${globalCSS}
`;

export default GlobalStyled;
