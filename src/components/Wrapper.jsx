import PropTypes from "prop-types";
import styled from "styled-components";

const WrapperStyled = styled.div`
  margin: 1rem;
`;

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
