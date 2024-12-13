import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  :root {
    --color-background: #F6F6F6;
    --color-primary: #1C1C1C;
    --color-secondary: #FFFFFF;
    --color-tertiary: #363636;
    --font-family-primary: "Raleway", sans-serif;
    --font-family-secondary: "Inter", sans-serif;
    --gap-base: 6.25rem;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: var(--font-family-primary);
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyled;
