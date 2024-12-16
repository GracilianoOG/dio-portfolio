import { createGlobalStyle, css } from "styled-components";
import { devices } from "../../utils/breakpoints";

const GlobalStyled = createGlobalStyle`
  :root {
    --color-background: #F6F6F6;
    --color-primary: #1C1C1C;
    --color-secondary: #FFFFFF;
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

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: var(--font-family-primary);
    margin: 0;
    padding: 0;
  }

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

export default GlobalStyled;
