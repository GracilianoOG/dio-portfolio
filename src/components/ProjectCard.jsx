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

function ProjectCard({ projectName, description, featureList }) {
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
    </ProjectContent>
  );
}

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  featureList: PropTypes.array.isRequired,
};

export default ProjectCard;
