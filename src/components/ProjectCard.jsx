import PropTypes from "prop-types";
import styled from "styled-components";
import { ButtonStyled } from "./styles/ButtonStyled";

const ProjectCardContent = styled.div`
  display: grid;
  gap: 1rem;
  font-size: clamp(1rem, 1.5vw, 1.5rem);

  @media screen and (min-width: 64rem) {
    align-items: center;
    gap: 3rem;
    grid-template-columns: 1.6fr 1fr;
  }
`;

const ProjectImage = styled.img`
  max-height: 57vw;
  object-fit: cover;
  width: 100%;
`;

const ProjectTitle = styled.h3`
  font-weight: 300;
  font-size: clamp(1.5rem, 3.5vw, 3rem);
  letter-spacing: 5%;
  text-transform: uppercase;
`;

const ProjectFeatures = styled.ul`
  list-style-position: inside;
  margin-left: 0.35rem;
`;

const ButtonWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  gap: 0.625rem;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 1.8vw, 2rem);
`;

function ProjectCard({
  image,
  projectName,
  description,
  featureList,
  previewLink,
  repoLink,
}) {
  return (
    <ProjectCardContent>
      <ProjectImage src={image} alt="" />
      <ProjectContent>
        <ProjectTitle>{projectName}</ProjectTitle>
        <p>{description}</p>
        <ProjectFeatures>
          {featureList.map((feat, index) => (
            <li key={index}>{feat}</li>
          ))}
        </ProjectFeatures>
        <ButtonWrapperStyled>
          <ButtonStyled href={previewLink}>Preview</ButtonStyled>
          <ButtonStyled $filled href={repoLink}>
            Repositório
          </ButtonStyled>
        </ButtonWrapperStyled>
      </ProjectContent>
    </ProjectCardContent>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  featureList: PropTypes.array.isRequired,
  previewLink: PropTypes.string,
  repoLink: PropTypes.string,
};

export default ProjectCard;
