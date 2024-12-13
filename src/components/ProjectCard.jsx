import PropTypes from "prop-types";
import styled from "styled-components";
import { ButtonStyled } from "./styles/ButtonStyled";

const ProjectContent = styled.div`
  display: grid;
  gap: 1rem;
`;

const ProjectImage = styled.img`
  max-height: 12.5rem;
  object-fit: cover;
  width: 100%;
`;

const ProjectTitle = styled.h3`
  font-weight: 300;
  font-size: 1.5rem;
  letter-spacing: 5%;
  text-transform: uppercase;
`;

const ProjectFeatures = styled.ul`
  list-style-position: inside;
  margin-left: 0.35rem;
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
    <ProjectContent>
      <ProjectImage src={image} alt="" />
      <ProjectTitle>{projectName}</ProjectTitle>
      <p>{description}</p>
      <ProjectFeatures>
        {featureList.map((feat, index) => (
          <li key={index}>{feat}</li>
        ))}
      </ProjectFeatures>
      <div>
        <ButtonStyled href={previewLink}>Preview</ButtonStyled>
        <ButtonStyled $filled href={repoLink}>
          Repositório
        </ButtonStyled>
      </div>
    </ProjectContent>
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
