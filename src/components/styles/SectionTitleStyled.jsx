import styled from "styled-components";

const SectionTitleStyled = styled.h2`
  font-size: clamp(2rem, 3.6vw, 3rem);
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 10%;
  margin-bottom: 2.5rem;

  @media screen and (min-width: 64rem) {
    margin-bottom: 3rem;
  }
`;

export default SectionTitleStyled;
