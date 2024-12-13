import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

const IconStyled = styled.img`
  display: block;
`;

function IconButton({ icon }) {
  return (
    <ButtonStyled>
      <IconStyled src={icon} alt="" />
    </ButtonStyled>
  );
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default IconButton;
