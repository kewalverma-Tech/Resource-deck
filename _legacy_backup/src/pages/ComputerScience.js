import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const ComputerScience = () => {
  const programmingCards = [
    {
      id: 'geeksforgeeks',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '💻 GeeksforGeeks',
      description: 'Comprehensive programming tutorials, data structures, and algorithms',
      isClickable: true,
      external: true,
      link: 'https://www.geeksforgeeks.org/'
    },
    {
      id: 'leetcode',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🧩 LeetCode',
      description: 'Practice coding problems and prepare for technical interviews',
      isClickable: true,
      external: true,
      link: 'https://leetcode.com/'
    },
    {
      id: 'hackerrank',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🏆 HackerRank',
      description: 'Coding challenges and skill certification in multiple languages',
      isClickable: true,
      external: true,
      link: 'https://www.hackerrank.com/'
    },
    {
      id: 'stackoverflow',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '❓ Stack Overflow',
      description: 'The largest community for developers to learn and share knowledge',
      isClickable: true,
      external: true,
      link: 'https://stackoverflow.com/'
    }
  ];

  const webDevCards = [
    {
      id: 'mdn-docs',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📚 MDN Web Docs',
      description: 'Mozilla\'s comprehensive web development documentation',
      isClickable: true,
      external: true,
      link: 'https://developer.mozilla.org'
    },
    {
      id: 'freecodecamp',
      image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🎓 freeCodeCamp',
      description: 'Free coding bootcamp with interactive lessons and projects',
      isClickable: true,
      external: true,
      link: 'https://www.freecodecamp.org'
    },
    {
      id: 'react-docs',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '⚛️ React Documentation',
      description: 'Official React.js documentation and learning resources',
      isClickable: true,
      external: true,
      link: 'https://react.dev'
    },
    {
      id: 'css-tricks',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🎨 CSS-Tricks',
      description: 'Advanced CSS techniques, tips, and modern web design',
      isClickable: true,
      external: true,
      link: 'https://css-tricks.com'
    }
  ];

  const aiMLCards = [
    {
      id: 'coursera-ml',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🤖 Coursera ML Course',
      description: 'Andrew Ng\'s famous Machine Learning course',
      isClickable: true,
      external: true,
      link: 'https://www.coursera.org/learn/machine-learning'
    },
    {
      id: 'tensorflow',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🧠 TensorFlow',
      description: 'Google\'s open-source machine learning platform',
      isClickable: true,
      external: true,
      link: 'https://www.tensorflow.org'
    },
    {
      id: 'pytorch',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🔥 PyTorch',
      description: 'Facebook\'s deep learning framework for research and production',
      isClickable: true,
      external: true,
      link: 'https://pytorch.org'
    },
    {
      id: 'kaggle',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📊 Kaggle',
      description: 'Data science competitions and datasets for machine learning',
      isClickable: true,
      external: true,
      link: 'https://www.kaggle.com'
    }
  ];

  return (
    <div className="computer-science">
      {/* Hero Section */}
      <section className="cs-hero">
        <div className="cs-hero__container">
          <h1 className="cs-hero__title">💻 Computer Science Resources</h1>
          <p className="cs-hero__description">
            Comprehensive collection of programming tutorials, algorithms, data structures, 
            web development, and artificial intelligence resources for students and professionals.
          </p>
          <Link to="/" className="cs-hero__back-btn">
            🏠 Back to Home
          </Link>
        </div>
      </section>

      <Section
        id="programming"
        title="⌨️ Programming & Algorithms"
        cards={programmingCards}
        className="section--programming"
      />

      <Section
        id="web-development"
        title="🌐 Web Development"
        cards={webDevCards}
        className="section--web-dev"
      />

      <Section
        id="ai-ml"
        title="🤖 AI & Machine Learning"
        cards={aiMLCards}
        className="section--ai-ml"
      />

      {/* Additional Resources */}
      <section className="additional-resources">
        <div className="additional-resources__container">
          <h2 className="additional-resources__title">📖 Additional Learning Resources</h2>
          <div className="resources-grid">
            <div className="resource-item">
              <h3>📚 Books</h3>
              <ul>
                <li>Clean Code by Robert C. Martin</li>
                <li>Introduction to Algorithms (CLRS)</li>
                <li>Design Patterns by Gang of Four</li>
                <li>System Design Interview by Alex Xu</li>
              </ul>
            </div>
            <div className="resource-item">
              <h3>🎓 Online Courses</h3>
              <ul>
                <li>MIT 6.006 Introduction to Algorithms</li>
                <li>Stanford CS229 Machine Learning</li>
                <li>Berkeley CS61A Structure and Interpretation</li>
                <li>Harvard CS50 Introduction to Computer Science</li>
              </ul>
            </div>
            <div className="resource-item">
              <h3>🔧 Tools & Platforms</h3>
              <ul>
                <li>GitHub for version control</li>
                <li>Visual Studio Code</li>
                <li>Docker for containerization</li>
                <li>AWS for cloud computing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComputerScience;
