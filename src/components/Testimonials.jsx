
import React from 'react';
import './Testimonials.css';
import pic from '../../public/assets/Mask.png'

const testimonials = [
  {
    name: "Kilian Murphe",
    avatar: pic,
    text: "I love the interactive elements and community forums where I can connect with other learners."
  },
  {
    name: "Kilian Murphe",
    avatar: pic,
    text: "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life."
  },
  {
    name: "Kilian Murphe",
    avatar: pic,
    text: "A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch, and the content is very engaging."
  },
  {
    name: "Kilian Murphe",
    avatar: pic,
    text: "It's not just about physical health but mental and emotional well-being too."
  },
  {
    name: "Kilian Murphe",
    avatar: pic,
    text: "I love the flexibility of the courses. I can learn at my own pace and revisit the material whenever I need to."
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>Learners love EduPath. See why they rate us 4.9 out of 5</h2>
      <div className="scrolling-container">
      <div className="testimonials-carousel">
  {[...testimonials,...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
    <div key={index} className="testimonial-card">
      <div className="testimonial-header">
        <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
        <div>
          <h3>{testimonial.name}</h3>
        </div>
        <i className="fas fa-quote-right quote-icon"></i>
      </div>
      <p className="testimonial-text">"{testimonial.text}"</p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Testimonials;

