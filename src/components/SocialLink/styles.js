import styled from "styled-components";

export const LinkWrapperStyled = styled.a`
  align-items: center;
  color: var(--color-primary);
  display: flex;
  gap: 0.375rem;
  padding: 0.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
