import PropTypes from "prop-types";
import styled from "styled-components";
import IconStyled from "./styles/IconStyled";

const LinkStyled = styled.a`
  color: var(--color-primary);
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.625rem 0;
  text-align: center;
  text-transform: uppercase;

  & img {
    margin-bottom: 0.188rem;
  }
`;

function MobileLink({ imageSrc, children, href }) {
  return (
    <li>
      <LinkStyled href={href}>
        <IconStyled src={imageSrc} alt="" />
        <p>{children}</p>
      </LinkStyled>
    </li>
  );
}

MobileLink.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default MobileLink;
