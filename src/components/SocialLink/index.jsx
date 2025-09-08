import PropTypes from "prop-types";
import IconStyled from "../../styles/IconStyled";
import { LinkWrapperStyled } from "./styles";

function SocialLink({ imageSrc, text, href, showText = false }) {
  return (
    <LinkWrapperStyled href={href} aria-label={!showText ? text : null}>
      <IconStyled src={imageSrc} alt="" />
      {showText && <span>{text}</span>}
    </LinkWrapperStyled>
  );
}

SocialLink.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  showText: PropTypes.bool,
};

export default SocialLink;
