import capIcon from "../../assets/images/icons/cap.svg";
import PropTypes from "prop-types";
import IconStyled from "../styles/IconStyled";
import { Card, CardContent, CardCourseStyled, CardDateStyled } from "./styles";

function EducationCard({ course, location, date }) {
  return (
    <Card>
      <IconStyled src={capIcon} alt="" />
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
