
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Navbar />
      <main>
        <div className="about-hero">
          <div className="texture-overlay"></div>
          <div className="about-hero-content">
            <h1 className="about-title">
              ABOUT <span className="highlight">US</span>
            </h1>
            <p className="about-description">
              Learn about E-Summit, our mission, vision, and the team behind this flagship entrepreneurship event.
            </p>
          </div>
        </div>
        
        <AboutSection />
        
        <div className="about-mission">
          <div className="mission-content">
            <h2 className="mission-title">OUR MISSION</h2>
            <p className="mission-text">
              Our mission is to foster entrepreneurship and innovation among students and professionals by providing a platform to learn, network, and grow. We believe in the power of entrepreneurship to drive positive change in society and create sustainable solutions for global challenges.
            </p>
            <p className="mission-text">
              Through E-Summit, we aim to inspire the next generation of entrepreneurs and leaders who will shape the future of business and technology.
            </p>
          </div>
        </div>
        
        <div className="about-team">
          <h2 className="team-title">OUR TEAM</h2>
          <div className="team-grid">
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <div key={member} className="team-member">
                <div className="member-image" style={{ backgroundImage: `url(https://source.unsplash.com/random/300x300/?person,portrait&sig=${member})` }}></div>
                <h3 className="member-name">Team Member {member}</h3>
                <p className="member-role">Position {member}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
