import styled from "styled-components";
import photo from "../assets/images/photo.jpg";

const Photo = styled.img`
  width: 100%;
`;

function Content() {
  return (
    <main>
      <section id="about">
        <Photo src={photo} alt="" />
      </section>
    </main>
  );
}

export default Content;
