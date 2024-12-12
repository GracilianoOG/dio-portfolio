import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyled;
