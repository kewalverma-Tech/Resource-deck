import React from 'react';
import Card from '../components/Card';
import Section from '../components/Section';

const CompetitiveExams = () => {
  const examCategories = [
    {
      id: 'jee-neet',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🎯 JEE & NEET',
      description: 'Engineering and medical entrance exam preparation materials',
      link: 'https://www.nta.ac.in/'
    },
    {
      id: 'gate-exam',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🔧 GATE',
      description: 'Graduate Aptitude Test in Engineering preparation resources',
      link: 'https://gate.iisc.ac.in/'
    },
    {
      id: 'cat-mba',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '💼 CAT & MBA Exams',
      description: 'Common Admission Test and other MBA entrance exam materials',
      link: 'https://iimcat.ac.in/'
    },
    {
      id: 'upsc-civil',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🏛️ UPSC & Civil Services',
      description: 'Civil services examination and government job preparation',
      link: 'https://www.upsc.gov.in/'
    },
    {
      id: 'gre-gmat',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🌍 GRE & GMAT',
      description: 'Graduate Record Examination and business school admission tests',
      link: 'https://www.ets.org/gre'
    },
    {
      id: 'ielts-toefl',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🗣️ IELTS & TOEFL',
      description: 'English proficiency tests for international education',
      link: 'https://www.ielts.org/'
    },
    {
      id: 'bank-ssc',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🏦 Banking & SSC',
      description: 'Banking sector and Staff Selection Commission exam preparation',
      link: 'https://ssc.gov.in/'
    },
    {
      id: 'ca-cs-cma',
      image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📊 CA, CS & CMA',
      description: 'Chartered Accountant, Company Secretary, and Cost Management Accountant',
      link: 'https://www.icai.org/'
    },
    {
      id: 'net-jrf',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '👨‍🏫 UGC NET & JRF',
      description: 'National Eligibility Test for lectureship and research fellowship',
      link: 'https://ugcnet.nta.ac.in/'
    },
    {
      id: 'clat-law',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '⚖️ CLAT & Law Exams',
      description: 'Common Law Admission Test and other law entrance examinations',
      link: 'https://consortiumofnlus.ac.in/'
    },
    {
      id: 'sat-act',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📚 SAT & ACT',
      description: 'Standardized tests for US college admissions',
      link: 'https://www.collegeboard.org/'
    },
    {
      id: 'defence-exams',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🪖 Defence Exams',
      description: 'NDA, CDS, AFCAT and other defence service examinations',
      link: 'https://www.joinindianarmy.nic.in/'
    }
  ];

  const studyTips = [
    {
      id: 'time-management',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '⏰ Unacademy',
      description: 'Online learning platform with mock tests and preparation courses',
      link: 'https://unacademy.com/'
    },
    {
      id: 'mock-tests',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📝 Testbook',
      description: 'Mock tests and previous year question papers for all exams',
      link: 'https://testbook.com/'
    },
    {
      id: 'study-plans',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📋 BYJU\'S Exam Prep',
      description: 'Structured study plans and preparation strategies for various exams',
      link: 'https://byjusexamprep.com/'
    },
    {
      id: 'online-courses',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '💻 Vedantu',
      description: 'Live online classes and preparation courses for competitive exams',
      link: 'https://www.vedantu.com/'
    }
  ];

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1>🎯 Competitive Exams</h1>
        <p>Comprehensive preparation resources for all major competitive examinations. From entrance tests to government jobs, find everything you need to succeed.</p>
      </div>

      <Section 
        title="📚 Exam Categories"
        subtitle="Choose your target exam and access specialized preparation materials"
      >
        <div className="cards-container">
          {examCategories.map((exam) => (
            <Card
              key={exam.id}
              image={exam.image}
              title={exam.title}
              description={exam.description}
              link={exam.link}
              buttonText="🎯 Start Preparation"
              isClickable={true}
            />
          ))}
        </div>
      </Section>

      <Section 
        title="💡 Study Resources & Tips"
        subtitle="Essential tools and strategies for competitive exam success"
      >
        <div className="cards-container">
          {studyTips.map((tip) => (
            <Card
              key={tip.id}
              image={tip.image}
              title={tip.title}
              description={tip.description}
              link={tip.link}
              buttonText="📖 Learn More"
              isClickable={true}
            />
          ))}
        </div>

        {/* Additional Preparation Platforms */}
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-color)' }}>
            🚀 Popular Preparation Platforms
          </h3>
          <div className="cards-container">
            <Card
              image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              title="📱 Embibe"
              description="AI-powered personalized learning for JEE, NEET, and other exams"
              link="https://www.embibe.com/"
              buttonText="🎯 Start Learning"
              isClickable={true}
            />
            <Card
              image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              title="📚 Gradeup"
              description="Comprehensive test preparation for government job exams"
              link="https://gradeup.co/"
              buttonText="📖 Explore Tests"
              isClickable={true}
            />
            <Card
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              title="🎓 Adda247"
              description="Banking, SSC, Railway, and other government exam preparation"
              link="https://www.adda247.com/"
              buttonText="📝 Practice Tests"
              isClickable={true}
            />
          </div>
        </div>
      </Section>

      <div className="additional-info">
        <div className="info-card">
          <h3>🎯 Exam Preparation Strategy</h3>
          <ul>
            <li>📅 Create a realistic study schedule</li>
            <li>📚 Focus on syllabus-based preparation</li>
            <li>📝 Take regular mock tests and practice papers</li>
            <li>🔍 Analyze your performance and improve weak areas</li>
            <li>💪 Stay motivated and maintain consistency</li>
          </ul>
        </div>
        
        <div className="info-card">
          <h3>✨ Success Tips</h3>
          <ul>
            <li>✅ Start preparation early and stay consistent</li>
            <li>✅ Use authentic study materials and trusted sources</li>
            <li>✅ Join study groups or online communities</li>
            <li>✅ Take care of your physical and mental health</li>
            <li>✅ Stay updated with exam patterns and notifications</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveExams;
