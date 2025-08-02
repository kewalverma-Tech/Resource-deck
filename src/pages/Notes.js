import React from 'react';
import Card from '../components/Card';
import Section from '../components/Section';

const Notes = () => {
  const notesResources = [
    {
      id: 'handwritten-notes',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📝 Handwritten Notes',
      description: 'High-quality handwritten notes from top students and professors',
      link: 'https://www.studyiq.com/'
    },
    {
      id: 'lecture-notes',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🎓 MIT OpenCourseWare',
      description: 'Free lecture notes and course materials from MIT',
      link: 'https://ocw.mit.edu/'
    },
    {
      id: 'revision-notes',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📋 Khan Academy Notes',
      description: 'Quick revision notes and summaries for exam preparation',
      link: 'https://www.khanacademy.org/'
    },
    {
      id: 'computer-science-notes',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '💻 GeeksforGeeks Notes',
      description: 'Programming, algorithms, data structures, and software engineering notes',
      link: 'https://www.geeksforgeeks.org/'
    },
    {
      id: 'mathematics-notes',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🔢 Paul\'s Online Math Notes',
      description: 'Comprehensive calculus, algebra, and differential equations notes',
      link: 'https://tutorial.math.lamar.edu/'
    },
    {
      id: 'physics-notes',
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '⚛️ Physics Classroom',
      description: 'Classical mechanics, quantum physics, and modern physics notes',
      link: 'https://www.physicsclassroom.com/'
    },
    {
      id: 'chemistry-notes',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🧪 ChemGuide',
      description: 'Organic, inorganic, and physical chemistry comprehensive notes',
      link: 'https://www.chemguide.co.uk/'
    },
    {
      id: 'biology-notes',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🧬 Biology Online',
      description: 'Cell biology, genetics, ecology, and molecular biology notes',
      link: 'https://www.biologyonline.com/'
    },
    {
      id: 'engineering-notes',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '⚙️ NPTEL Course Notes',
      description: 'Mechanical, electrical, civil, and software engineering notes',
      link: 'https://nptel.ac.in/'
    },
    {
      id: 'business-notes',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '💼 Harvard Business Review',
      description: 'MBA, finance, marketing, and business strategy case studies',
      link: 'https://hbr.org/'
    },
    {
      id: 'medical-notes',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🩺 Osmosis Medical Notes',
      description: 'Anatomy, physiology, pathology, and clinical medicine notes',
      link: 'https://www.osmosis.org/'
    },
    {
      id: 'law-notes',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '⚖️ Justia Legal Resources',
      description: 'Constitutional law, criminal law, and legal studies notes',
      link: 'https://www.justia.com/'
    }
  ];

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1>📝 Study Notes</h1>
        <p>Access comprehensive notes, summaries, and study materials from top students and educators across all academic disciplines.</p>
      </div>

      <Section 
        title="📚 Academic Notes Collection"
        subtitle="Browse through our extensive collection of study notes organized by subject"
      >
        <div className="cards-container">
          {notesResources.map((resource) => (
            <Card
              key={resource.id}
              image={resource.image}
              title={resource.title}
              description={resource.description}
              link={resource.link}
              buttonText="📖 View Notes"
              isClickable={true}
            />
          ))}
        </div>

        {/* Additional Free Resources */}
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-color)' }}>
            🆓 Additional Free Learning Resources
          </h3>
          <div className="cards-container">
            <Card
              image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              title="📚 Coursera"
              description="Free courses and lectures from top universities worldwide"
              link="https://www.coursera.org/courses?query=free"
              buttonText="🎓 Explore Courses"
              isClickable={true}
            />
            <Card
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              title="🎥 YouTube EDU"
              description="Educational content and lectures from renowned educators"
              link="https://www.youtube.com/channel/UCdxpofrI-dO6oYfsqHDHphw"
              buttonText="📺 Watch Videos"
              isClickable={true}
            />
            <Card
              image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              title="📖 Project Gutenberg"
              description="Free ebooks and classic literature for literature studies"
              link="https://www.gutenberg.org/"
              buttonText="📚 Browse Books"
              isClickable={true}
            />
          </div>
        </div>
      </Section>

      <div className="additional-info">
        <div className="info-card">
          <h3>📚 How to Use These Notes</h3>
          <ul>
            <li>Choose your subject area from the collection above</li>
            <li>Access high-quality notes from verified sources</li>
            <li>Use them as supplements to your regular study materials</li>
            <li>Perfect for revision before exams and quick reference</li>
          </ul>
        </div>
        
        <div className="info-card">
          <h3>✨ Features</h3>
          <ul>
            <li>✅ Handwritten and typed notes available</li>
            <li>✅ Notes from top universities and colleges</li>
            <li>✅ Subject-wise organization for easy navigation</li>
            <li>✅ Regular updates with new content</li>
            <li>✅ Free access to quality educational materials</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notes;
