import PropTypes from "prop-types";
import { ButtonStyled } from "../styles/ButtonStyled";
import {
  ButtonWrapperStyled,
  ProjectCardContent,
  ProjectContent,
  ProjectFeatures,
  ProjectImage,
  ProjectTitle,
} from "./styles";

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
