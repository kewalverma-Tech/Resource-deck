import React from 'react';
import Section from '../components/Section';

const About = () => {
  const whyUsCards = [
    {
      id: 'stress-free-studying',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '😌 Stress-Free Studying',
      description: 'No more wasting hours searching for reliable sources. Everything you need is organized and ready to use!'
    },
    {
      id: 'save-money',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '💰 Save Money',
      description: 'Access thousands of free textbooks, research papers, and study materials. No more expensive textbook bills!'
    },
    {
      id: 'better-grades',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📈 Better Grades',
      description: 'Quality resources from top universities and experts to help you excel in your coursework and exams.'
    }
  ];

  const studyToolsCards = [
    {
      id: 'research-papers',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📝 Research Papers',
      description: 'Access to academic journals and research papers for your assignments and projects.'
    },
    {
      id: 'study-guides',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '� Study Guides',
      description: 'Comprehensive study materials and guides to help you prepare for exams and understand complex topics.'
    },
    {
      id: 'coding-resources',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '💻 Coding Resources',
      description: 'Programming tutorials, coding challenges, and technical documentation for CS students.'
    },
    {
      id: 'latest-news',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📰 Latest Science News',
      description: 'Stay updated with the latest discoveries and breakthroughs in your field of study.'
    }
  ];

  const studentLifeCards = [
    {
      id: 'time-management',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '⏰ Save Time',
      description: 'Spend less time searching and more time actually studying. We\'ve done the hard work for you!'
    },
    {
      id: 'mobile-friendly',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '� Study Anywhere',
      description: 'Access resources on your phone, tablet, or laptop. Perfect for studying between classes or on the go.'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__container">
          <h1 className="about-hero__title">🎓 ScholarVault - Made by Students, for Students</h1>
          <p className="about-hero__description">
            Tired of spending hours searching for reliable study materials? We get it! 
            As fellow college students, we created ScholarVault to make your academic life easier. 
            Find everything you need in one place - from free textbooks to the latest research papers.
          </p>
        </div>
      </section>

      <Section
        id="why-us"
        title="🚀 Why Students Love Us"
        cards={whyUsCards}
        className="section--why-us"
      />

      <Section
        id="study-tools"
        title="🛠️ Your Study Arsenal"
        cards={studyToolsCards}
        className="section--study-tools"
      />

      <Section
        id="student-life"
        title="� Perfect for Student Life"
        cards={studentLifeCards}
        className="section--student-life"
      />

      {/* Stats Section */}
      <section className="about-stats">
        <div className="about-stats__container">
          <h2 className="about-stats__title">📊 Student Success Stories</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-item__number">25,000+</span>
              <span className="stat-item__label">Happy Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">500+</span>
              <span className="stat-item__label">Universities Worldwide</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">$2M+</span>
              <span className="stat-item__label">Saved on Textbooks</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">95%</span>
              <span className="stat-item__label">Improved Grades</span>
            </div>
          </div>
          
          {/* Student Testimonials */}
          <div className="testimonials">
            <h3 className="testimonials__title">💬 What Students Say</h3>
            <div className="testimonials-grid">
              <div className="testimonial">
                <p className="testimonial__text">
                  "This saved me so much money on textbooks! Found everything I needed for my Computer Science degree."
                </p>
                <span className="testimonial__author">- Sarah, CS Major</span>
              </div>
              <div className="testimonial">
                <p className="testimonial__text">
                  "Perfect for research projects. The organized layout makes finding sources super easy."
                </p>
                <span className="testimonial__author">- Marcus, History Major</span>
              </div>
              <div className="testimonial">
                <p className="testimonial__text">
                  "As a pre-med student, having all these biology and chemistry resources in one place is amazing!"
                </p>
                <span className="testimonial__author">- Emma, Pre-Med</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
