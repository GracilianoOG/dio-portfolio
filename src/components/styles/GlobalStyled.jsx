import { createGlobalStyle, css } from "styled-components";
import { devices } from "../../utils/breakpoints";

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
`;

const variablesCSS = css`
  :root {
    --color-background: #f6f6f6;
    --color-primary: #1c1c1c;
    --color-secondary: #ffffff;
    --color-tertiary: #363636;
    --color-mobile-line: #b6b6b6;
    --icon-filter: none;

    ${props =>
      props.$isDarkMode &&
      css`
        --color-background: #1c1c1c;
        --color-primary: #ffffff;
        --color-secondary: #1c1c1c;
        --color-tertiary: #9a9a9c;
        --color-mobile-line: #b6b6b6;
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
