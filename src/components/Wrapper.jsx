/* eslint-disable react/prop-types */

import styled from "styled-components";

const WrapperStyled = styled.div`
  margin: 1rem;
`;

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

export default Wrapper;
