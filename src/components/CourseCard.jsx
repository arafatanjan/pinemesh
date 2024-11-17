
// import React from 'react';
// import './CourseCard.css'

// const CourseCard = ({ title, instructor, price, level, duration, lessons, rating }) => {
//   return (
//     <div className="course-card">
//       <img src="course-image.jpg" alt={title} />
//       <div className="course-info">
//         <p>{level}</p>
//         <h3>{title}</h3>
//         <p>{instructor}</p>
//         <p>{rating}</p>
//         <p>{duration} • {lessons} Lessons</p>
//         <p>${price}</p>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;


import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, instructor, price, level, category, duration, lessons, rating, isEnrolled, image }) => {
  return (
    <div className={`course-card ${isEnrolled ? 'enrolled' : ''}`}>
      <img src={image} alt={title} />
      <div className="course-info">
        <div className="labels">
          <span className={`label ${level.toLowerCase()}`}>{level}</span>
          <span className="label category">{category}</span>
        </div>
        <h3>{title}</h3>
        <div className="rating">
          <i className="fas fa-star"></i>
          <span>{rating}</span>
        </div>
        <div className="details">
          <span>{duration}</span>
          <span>{lessons} Lessons</span>
        </div>
        <div className="instructor">
          {/* <img src={image} alt={instructor} className="instructor-avatar" /> */}
          <span>{instructor}</span>
        </div>
        {isEnrolled ? (
          <span className="enrolled-badge">Enrolled</span>
        ) : (
          <div className="price">${price}</div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;


