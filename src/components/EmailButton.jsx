import PropTypes from "prop-types";
import { ButtonStyled } from "./styles/ButtonStyled";

function EmailButton({ email }) {
  return (
    <ButtonStyled $filled href={`mailto:${email}`}>
      {email}
    </ButtonStyled>
  );
}

EmailButton.propTypes = {
  email: PropTypes.string.isRequired,
};

export default EmailButton;
