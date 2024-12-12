import Icon from "./Icon";
import capIcon from "../assets/images/icons/cap.svg";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  align-items: center;
  border: 0.125rem dashed black;
  border-width: thin;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  text-align: center;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const CardCourseStyled = styled.h3`
  font-weight: 600;
  font-size: 1rem;
`;

const CardDateStyled = styled.p`
  font-weight: 300;
  font-size: 0.875rem;
`;

function EducationCard({ course, location, date }) {
  return (
    <Card>
      <Icon iconImage={capIcon} />
      <CardContent>
        <CardCourseStyled>{course}</CardCourseStyled>
        <p>{location}</p>
        <CardDateStyled>{date}</CardDateStyled>
      </CardContent>
    </Card>
  );
}

EducationCard.propTypes = {
  course: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default EducationCard;