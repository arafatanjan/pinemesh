import React, { useState } from "react";
import CourseCard from "./CourseCard";
import "./CoursesSection.css";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import mask from '../assets/mask.png';
import mask2 from '../assets/mask2.png';
import mask3 from '../assets/mask3.png';
import mask4 from '../assets/mask4.png';

const initialCourses = [
  {
    title: "Foundation of Sleep: Sleep Science and Sleep Disorders",
    instructor: "Kilian Murphe",
    price: 40,
    level: "Beginner",
    category: "Nutrition and Diet",
    duration: "6h 34m",
    lessons: "3",
    rating: "4.9 (566)",
    isEnrolled: false,
    image: image2,
    avatar: mask
  },
  {
    title: "Parenting in the Digital Age: Navigating Screen Time",
    instructor: "Sarah Hopkins",
    price: 50,
    level: "Intermediate",
    category: "Health and Wellness",
    duration: "6h 34m",
    lessons: "3",
    rating: "4.9 (456)",
    isEnrolled: false,
    image: image3,
    avatar: mask2
  },
  {
    title: "Holistic Health: Integrating Mind, Body, and Spirit",
    instructor: "Luna Karim",
    price: null,
    level: "Beginner",
    category: "Nutrition and Diet",
    duration: "6h 34m",
    lessons: "3",
    rating: "4.9 (389)",
    isEnrolled: true,
    image: image4,
    avatar: mask3
  },
  {
    title: "Introduction to Healthy Diet and Nutrition",
    instructor: "Kate Winslate",
    price: 40,
    level: "Beginner",
    category: "Nutrition and Diet",
    duration: "6h 34m",
    lessons: "3",
    rating: "4.9 (566)",
    isEnrolled: false,
    image: image5,
    avatar: mask4
  },
];

const CoursesSection = () => {
  // const [courses, setCourses] = useState();
  const [courses, setCourses] = useState(initialCourses);

  const handlePrevClick = () => {
    // Move the first course to the end
    const newCourses = [courses[courses.length - 1], ...courses.slice(0, -1)];
    setCourses(newCourses);
  };

  const handleNextClick = () => {
    // Move the last course to the beginning
    const newCourses = [...courses.slice(1), courses[0]];
    setCourses(newCourses);
  };

  return (
    <section className="courses-section">
      <div className="courses-section-header">
        <div className="courses-section-header-left">
          <h2>Our popular courses</h2>
          <p>
            By taking proactive steps to nurture mental health, we can enhance
            our quality of life,{" "}
          </p>
          <p>
            build resilience, and foster a sense of inner peace and balance.
          </p>
        </div>

        <div className="navigation-buttons">
          <button onClick={handlePrevClick} className="nav-button">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={handleNextClick} className="nav-button">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="courses-carousel">
        {courses?.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            instructor={course.instructor}
            price={course.price}
            level={course.level}
            category={course.category}
            duration={course.duration}
            lessons={course.lessons}
            rating={course.rating}
             isEnrolled={course.isEnrolled}
            image={course.image}
            avatar={course.avatar}
          />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
