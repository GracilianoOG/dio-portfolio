import { createGlobalStyle } from "styled-components";
import { devices } from "../../utils/breakpoints";

const GlobalStyled = createGlobalStyle`
  :root {
    --color-background: #F6F6F6;
    --color-primary: #1C1C1C;
    --color-secondary: #FFFFFF;
    --color-tertiary: #363636;
    --color-mobile-line: #b6b6b6;
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

  body {
    background-color: var(--color-background);
    color: var(--color-primary);
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyled;
