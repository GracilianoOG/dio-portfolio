import PropTypes from "prop-types";
import { WrapperStyled } from "./styles";

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
