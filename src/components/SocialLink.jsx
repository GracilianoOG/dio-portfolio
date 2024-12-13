import styled from "styled-components";
import PropTypes from "prop-types";

const LinkWrapperStyled = styled.a`
  align-items: center;
  color: var(--color-primary);
  display: flex;
  gap: 0.375rem;
  padding: 0.5rem;
  text-decoration: none;
`;

function SocialLink({ imageSrc, text, href }) {
  return (
    <LinkWrapperStyled href={href}>
      <img src={imageSrc} alt="" />
      {text && <span>{text}</span>}
    </LinkWrapperStyled>
  );
}

SocialLink.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string,
  href: PropTypes.string.isRequired,
};

export default SocialLink;
