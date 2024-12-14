import PropTypes from "prop-types";
import styled from "styled-components";

const WrapperStyled = styled.div`
  margin: 1rem;

  @media screen and (min-width: 48rem) {
    margin: 4rem;
  }
`;

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
