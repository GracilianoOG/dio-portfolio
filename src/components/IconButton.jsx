import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "./Icon";

const ButtonStyled = styled.button`
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

function IconButton({ icon }) {
  return (
    <ButtonStyled>
      <Icon iconImage={icon} />
    </ButtonStyled>
  );
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default IconButton;
