import styled from "styled-components";

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-transform: capitalize;
`;

function Header() {
  return (
    <header>
      <Title>Gabriel graciliano</Title>
    </header>
  );
}

export default Header;
