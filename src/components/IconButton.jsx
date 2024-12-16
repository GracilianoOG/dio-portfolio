import PropTypes from "prop-types";
import styled from "styled-components";
import IconStyled from "./styles/IconStyled";

const ButtonStyled = styled.button`
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

const LocalIconStyled = styled(IconStyled)`
  display: block;
`;

function IconButton({ icon, onClick }) {
  return (
    <ButtonStyled onClick={onClick}>
      <LocalIconStyled src={icon} alt="" />
    </ButtonStyled>
  );
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
