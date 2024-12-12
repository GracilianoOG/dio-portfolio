import PropTypes from "prop-types";
import styled from "styled-components";

const IconStyled = styled.img`
  display: block;

  &:hover {
    cursor: pointer;
  }
`;

function Icon({ iconImage }) {
  return <IconStyled src={iconImage} alt="" />;
}

Icon.propTypes = {
  iconImage: PropTypes.string.isRequired,
};

export default Icon;
