import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

export const ContactWrapperStyled = styled.section`
  --border: 0.063rem dashed var(--color-primary);
  border-top: var(--border);
  border-bottom: var(--border);
  padding: 2rem 10px;
  text-align: center;

  @media screen and ${devices.md} {
    padding: 4rem 0;
  }
`;

export const ContactDescription = styled.p`
  margin-bottom: 1.25rem;
`;

export const LinksWrapperStyled = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  margin-bottom: 2.5rem;
`;
