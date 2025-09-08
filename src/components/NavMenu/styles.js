import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

export const ListStyled = styled.ul`
  @media screen and ${devices.mobileOnly} {
    background-color: var(--color-background);
    border-top: 1px solid var(--color-mobile-line);
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    left: 0;
    list-style: none;
    position: fixed;
    width: 100%;
    z-index: 1;
  }

  @media screen and ${devices.lg} {
    display: flex;
    list-style: none;
  }
`;
