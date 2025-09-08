import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

export const ProjectsWrapperStyled = styled.div`
  display: grid;
  gap: 2.5rem;

  @media screen and ${devices.lg} {
    gap: 4rem;
  }
`;
