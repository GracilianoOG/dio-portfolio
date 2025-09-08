import styled from "styled-components";

export const Card = styled.div`
  align-items: center;
  border: 0.125rem dashed var(--color-primary);
  border-width: thin;
  display: flex;
  flex-direction: column;
  font-size: clamp(1rem, 1.7vw, 1.5rem);
  padding: 2rem 1rem;
  text-align: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const CardCourseStyled = styled.h3`
  font-weight: 600;
`;

export const CardDateStyled = styled.p`
  color: var(--color-tertiary);
  font-weight: 300;
  font-size: clamp(0.875rem, 1.5vw, 1.25rem);
`;
