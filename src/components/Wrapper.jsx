import PropTypes from "prop-types";
import styled from "styled-components";
import { devices } from "../utils/breakpoints";

const WrapperStyled = styled.div`
  margin: 1rem;

  @media screen and ${devices.md} {
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
