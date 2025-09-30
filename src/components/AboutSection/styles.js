import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

export const AboutSectionStyled = styled.section`
  align-items: center;
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and ${devices.lg} {
    flex-direction: row;
  }
`;

export const PhotoStyled = styled.img`
  align-self: start;
  border-radius: 50%;
  max-width: max(35vw, 12.5rem);
  order: -1;
  width: 100%;

  @media screen and ${devices.md} {
    max-width: max(40vw, 18.75rem);
  }

  @media screen and ${devices.lg} {
    align-self: unset;
    max-width: min(31.25rem, 38.11%);
    order: 0;
  }
`;

export const AboutTitleStyled = styled.h2`
  font-family: var(--font-family-secondary);
  font-size: clamp(1rem, 5vw, 5rem);
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const AboutTextStyled = styled.p`
  font-size: clamp(0.75rem, 1.75vw, 1.25rem);
  line-height: 1.4;
  margin-bottom: 1.5rem;
  max-width: max(25em, 44vw);

  @media screen and ${devices.lg} {
    max-width: 37.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const UnderlineStyled = styled.span`
  text-decoration: underline;
`;
