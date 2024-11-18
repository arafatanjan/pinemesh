import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import FeaturesSection from './components/FeaturesSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CoursesSection />
      <FeaturesSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;