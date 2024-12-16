import PropTypes from "prop-types";
import styled from "styled-components";
import IconStyled from "./styles/IconStyled";

const LinkWrapperStyled = styled.a`
  color: var(--color-primary);
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
    <LinkWrapperStyled href={href}>
      <IconStyled src={imageSrc} alt="" />
      <p>{children}</p>
    </LinkWrapperStyled>
  );
}

MobileLink.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default MobileLink;
