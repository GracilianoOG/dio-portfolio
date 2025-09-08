import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

export const SectionContent = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and ${devices.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
