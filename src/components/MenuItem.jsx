import styled from "styled-components";
import IconStyled from "./styles/IconStyled";
import PropTypes from "prop-types";
import { devices } from "../utils/breakpoints";

const LinkStyled = styled.a`
  color: var(--color-primary);
  padding: 0.625rem 0;
  text-align: center;
  text-transform: uppercase;

  @media screen and ${devices.mobileOnly} {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;

    & ${IconStyled} {
      margin-bottom: 0.188rem;
    }

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
      left: 0;
      position: absolute;
      transition: transform 0.4s;
      transform: scaleX(var(--line-scale));
      transform-origin: center;
      width: 100%;
    }

    &:hover::before {
      --line-scale: 1;
    }
  }
`;

function MenuItem({ imageSrc, children, href }) {
  return (
    <li>
      <LinkStyled href={href}>
        {imageSrc && <IconStyled src={imageSrc} alt="" />}
        <span>{children}</span>
      </LinkStyled>
    </li>
  );
}

MenuItem.propTypes = {
  imageSrc: PropTypes.string,
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default MenuItem;
