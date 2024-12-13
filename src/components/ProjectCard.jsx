import PropTypes from "prop-types";
import projectOne from "../assets/images/projects/project-1.jpg";
import styled from "styled-components";

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

const ButtonStyled = styled.a`
  border: 1px solid black;
  background: none;
  color: black;
  display: inline-block;
  margin-right: 0.625rem;
  padding: 1rem 2rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const FilledButtonStyled = styled(ButtonStyled)`
  background: black;
  color: white;
`;

function ProjectCard({
  projectName,
  description,
  featureList,
  previewLink,
  repoLink,
}) {
  return (
    <ProjectContent>
      <ProjectImage src={projectOne} alt="" />
      <ProjectTitle>{projectName}</ProjectTitle>
      <p>{description}</p>
      <ProjectFeatures>
        {featureList.map((feat, index) => (
          <li key={index}>{feat}</li>
        ))}
      </ProjectFeatures>
      <div>
        <ButtonStyled href={previewLink}>Preview</ButtonStyled>
        <FilledButtonStyled href={repoLink}>Repositório</FilledButtonStyled>
      </div>
    </ProjectContent>
  );
}

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  featureList: PropTypes.array.isRequired,
  previewLink: PropTypes.string,
  repoLink: PropTypes.string,
};

export default ProjectCard;
