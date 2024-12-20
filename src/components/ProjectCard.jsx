import PropTypes from "prop-types";
import styled from "styled-components";
import { ButtonStyled } from "./styles/ButtonStyled";
import { devices } from "../utils/breakpoints";

const ProjectImage = styled.img`
  max-height: 57vw;
  object-fit: cover;
  width: 100%;

  @media screen and ${devices.lg} {
    max-height: 36vw;
  }
`;

const ProjectCardContent = styled.div`
  display: grid;
  gap: clamp(1rem, 3.5vw, 3rem);
  font-size: clamp(1rem, 1.5vw, 1.5rem);

  @media screen and ${devices.lg} {
    align-items: center;
    grid-template-columns: 2fr 1fr;

    &:nth-child(even) {
      grid-template-columns: 1fr 2fr;

      & > ${ProjectImage} {
        order: 1;
      }
    }
  }
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
      <ProjectImage
        src={image}
        alt={description}
        aria-hidden="true"
        loading="lazy"
      />
      <ProjectContent>
        <ProjectTitle>{projectName}</ProjectTitle>
        <p>{description}</p>
        <ProjectFeatures>
          {featureList.map((feat, index, arr) => (
            <li key={index}>{`${feat}${
              arr.length - 1 !== index ? ";" : "."
            }`}</li>
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
