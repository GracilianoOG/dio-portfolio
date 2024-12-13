import styled from "styled-components";
import PropTypes from "prop-types";

const LinkWrapperStyled = styled.a`
  align-items: center;
  color: black;
  display: flex;
  gap: 0.375rem;
  padding: 0.5rem;
  text-decoration: none;
`;

function SocialLink({ imageSrc, text, href }) {
  return (
    <LinkWrapperStyled href={href}>
      <img src={imageSrc} alt="" />
      <span>{text}</span>
    </LinkWrapperStyled>
  );
}

SocialLink.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default SocialLink;
