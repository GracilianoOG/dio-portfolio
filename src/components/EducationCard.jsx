import capIcon from "../assets/images/icons/cap.svg";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  align-items: center;
  border: 0.125rem dashed var(--color-primary);
  border-width: thin;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  padding: 2rem 1rem;
  text-align: center;

  @media screen and (min-width: 64rem) {
    font-size: 1.5rem;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const CardCourseStyled = styled.h3`
  font-weight: 600;
`;

const CardDateStyled = styled.p`
  color: var(--color-tertiary);
  font-weight: 300;
  font-size: 0.875rem;

  @media screen and (min-width: 64rem) {
    font-size: 1.25rem;
  }
`;

function EducationCard({ course, location, date }) {
  return (
    <Card>
      <img src={capIcon} alt="" />
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
