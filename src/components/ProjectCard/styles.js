import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

export const ProjectImage = styled.img`
  max-height: 57vw;
  object-fit: cover;
  width: 100%;

  @media screen and ${devices.lg} {
    max-height: 36vw;
  }
`;

export const ProjectCardContent = styled.div`
  display: grid;
  gap: clamp(1rem, 3.5vw, 3rem);
  font-size: clamp(1rem, 1.5vw, 1.5rem);

  @media screen and ${devices.lg} {
    align-items: center;
    grid-template-columns: 2fr 1fr;

    &:nth-child(even) {
      grid-template-columns: 1fr 2fr;

      & > ${ProjectImage} {
        order: 1;
      }
    }
  }
`;

export const ProjectTitle = styled.h3`
  font-weight: 300;
  font-size: clamp(1.5rem, 3.5vw, 3rem);
  letter-spacing: 5%;
  text-transform: uppercase;
`;

export const ProjectFeatures = styled.ul`
  list-style-position: inside;
  margin-left: 0.35rem;
`;

export const ButtonWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  gap: 0.625rem;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 1.8vw, 2rem);
`;
