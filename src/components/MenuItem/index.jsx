import IconStyled from "../styles/IconStyled";
import PropTypes from "prop-types";
import { LinkStyled } from "./styles";

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
