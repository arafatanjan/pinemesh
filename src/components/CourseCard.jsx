import React from "react";
import "./CourseCard.css";
import star from "/assets/starcard.png";
import mask from "/assets/Mask.png";
import clock from "/assets/clock.png";
import book from "/assets/book.png";

const CourseCard = ({
  title,
  instructor,
  price,
  level,
  category,
  duration,
  lessons,
  rating,
  isEnrolled,
  image,
  avatar,
}) => {
  return (
    // <div className={`course-card ${isEnrolled ? "enrolled" : ""}`}>
    <div className='course-card' >
      <img src={image} alt={title} />
      <div className="course-info">
        <div className="labels">
          <span className={`label ${level.toLowerCase()}`}>{level}</span>
          <span className="label category">{category}</span>
        </div>
        <h3>{title}</h3>
        <div className="rating">
          <img src={star} alt="star" />
          <span>{rating}</span>
        </div>

        <div className="details">
          <div className="details-inner">
        <img src={clock} alt={instructor} />
        <span>{duration}</span>
        </div >
        <div className="details-inner">
        <img src={book} alt={instructor} />
        <span>{lessons} Lessons</span>
        </div>
        </div>
      </div>

      
      <div className="instructor-price-section">
          <div className="instructor">
            <img src={avatar} alt={instructor} />
            <span>{instructor}</span>
          </div>
          {isEnrolled ? (
            <div className="enrolled-badge">Enrolled</div>
          ) : (
            <div className="price">${price}</div>
          )}
        </div>

    </div>
  );
};

export default CourseCard;
