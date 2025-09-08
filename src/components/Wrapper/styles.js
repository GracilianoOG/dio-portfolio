import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

export const WrapperStyled = styled.div`
  margin: 1rem 1rem 7.5rem 1rem;
  max-width: 90rem;

  @media screen and ${devices.md} {
    margin: 2.5rem 2.5rem 8rem 2.5rem;
  }

  @media screen and ${devices.lg} {
    margin: 4rem;
  }
`;
