import styled from "styled-components";
import { devices } from "../../utils/breakpoints";
import IconStyled from "../../styles/IconStyled";

export const ItemIconStyled = styled(IconStyled)`
  @media screen and ${devices.mobileOnly} {
    margin-bottom: 0.188rem;
  }

  @media screen and ${devices.lg} {
    display: none;
  }
`;

export const LinkStyled = styled.a`
  color: var(--color-primary);
  padding: 0.625rem 0;
  text-align: center;
  text-transform: uppercase;

  @media screen and ${devices.mobileOnly} {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;

    & span {
      display: block;
    }
  }

  @media screen and ${devices.lg} {
    padding: 0.313rem;
    position: relative;

    &::before {
      --line-scale: 0;
      background-color: var(--color-primary);
      bottom: 0;
      content: "";
      height: 0.125rem;
      left: 50%;
      position: absolute;
      transition: transform 0.4s;
      transform: translateX(-50%) scaleX(var(--line-scale));
      transform-origin: center;
      width: min(100%, 2.1875rem);
    }

    &:hover::before {
      --line-scale: 1;
    }
  }
`;
