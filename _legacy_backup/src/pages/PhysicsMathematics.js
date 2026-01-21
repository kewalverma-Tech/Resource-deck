import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const PhysicsMathematics = () => {
  const mathematicsCards = [
    {
      id: 'khan-academy',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📚 Khan Academy',
      description: 'Free world-class education in mathematics from basic arithmetic to advanced calculus',
      isClickable: true,
      external: true,
      link: 'https://www.khanacademy.org/math'
    },
    {
      id: 'wolfram-alpha',
      image: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🔢 Wolfram Alpha',
      description: 'Computational intelligence for mathematical calculations and problem solving',
      isClickable: true,
      external: true,
      link: 'https://www.wolframalpha.com'
    },
    {
      id: 'brilliant',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '💡 Brilliant',
      description: 'Interactive problem-solving platform for mathematics and science',
      isClickable: true,
      external: true,
      link: 'https://brilliant.org'
    },
    {
      id: 'mit-opencourseware',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🎓 MIT OpenCourseWare',
      description: 'Free MIT mathematics courses and lecture materials',
      isClickable: true,
      external: true,
      link: 'https://ocw.mit.edu/courses/mathematics/'
    }
  ];

  const physicsCards = [
    {
      id: 'physics-classroom',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '⚛️ The Physics Classroom',
      description: 'Comprehensive physics tutorials and interactive simulations',
      isClickable: true,
      external: true,
      link: 'https://www.physicsclassroom.com'
    },
    {
      id: 'phet-simulations',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🧪 PhET Simulations',
      description: 'Interactive physics simulations from University of Colorado Boulder',
      isClickable: true,
      external: true,
      link: 'https://phet.colorado.edu'
    },
    {
      id: 'hyperphysics',
      image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🌌 HyperPhysics',
      description: 'Extensive physics concepts exploration from Georgia State University',
      isClickable: true,
      external: true,
      link: 'http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html'
    },
    {
      id: 'feynman-lectures',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📖 Feynman Lectures',
      description: 'Richard Feynman\'s famous physics lectures available online',
      isClickable: true,
      external: true,
      link: 'https://www.feynmanlectures.caltech.edu'
    }
  ];

  const calculusCards = [
    {
      id: 'paul-online-notes',
      image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📝 Paul\'s Online Math Notes',
      description: 'Comprehensive calculus notes and tutorials from Lamar University',
      isClickable: true,
      external: true,
      link: 'https://tutorial.math.lamar.edu'
    },
    {
      id: 'professor-leonard',
      image: 'https://images.unsplash.com/photo-1574631170011-78ad8c05ba07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🎥 Professor Leonard',
      description: 'Clear and detailed calculus video lectures on YouTube',
      isClickable: true,
      external: true,
      link: 'https://www.youtube.com/user/professorleonard57'
    },
    {
      id: 'symbolab',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '∫ Symbolab',
      description: 'Step-by-step calculator for calculus and algebra problems',
      isClickable: true,
      external: true,
      link: 'https://www.symbolab.com'
    },
    {
      id: 'integral-calculator',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '∫ Integral Calculator',
      description: 'Advanced integral calculator with step-by-step solutions',
      isClickable: true,
      external: true,
      link: 'https://www.integral-calculator.com'
    }
  ];

  const problemSolvingCards = [
    {
      id: 'art-problem-solving',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🎯 Art of Problem Solving',
      description: 'Advanced mathematics problem-solving resources and competitions',
      isClickable: true,
      external: true,
      link: 'https://artofproblemsolving.com'
    },
    {
      id: 'mathcounts',
      image: 'https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🏆 MATHCOUNTS',
      description: 'Mathematics competition problems and training materials',
      isClickable: true,
      external: true,
      link: 'https://www.mathcounts.org'
    },
    {
      id: 'project-euler',
      image: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🧮 Project Euler',
      description: 'Mathematical programming challenges requiring problem-solving skills',
      isClickable: true,
      external: true,
      link: 'https://projecteuler.net'
    },
    {
      id: 'cut-the-knot',
      image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '✂️ Cut the Knot',
      description: 'Interactive mathematics puzzles and problem-solving techniques',
      isClickable: true,
      external: true,
      link: 'https://www.cut-the-knot.org'
    }
  ];

  return (
    <div className="physics-mathematics">
      {/* Hero Section */}
      <section className="pm-hero">
        <div className="pm-hero__container">
          <h1 className="pm-hero__title">📐 Physics & Mathematics Resources</h1>
          <p className="pm-hero__description">
            Explore comprehensive resources for mathematics and physics learning, from basic concepts 
            to advanced research materials including calculus, quantum mechanics, and problem-solving techniques.
          </p>
          <Link to="/" className="pm-hero__back-btn">
            🏠 Back to Home
          </Link>
        </div>
      </section>

      <Section
        id="mathematics"
        title="🔢 Mathematics"
        cards={mathematicsCards}
        className="section--mathematics"
      />

      <Section
        id="physics"
        title="⚛️ Physics"
        cards={physicsCards}
        className="section--physics"
      />

      <Section
        id="calculus"
        title="∫ Calculus"
        cards={calculusCards}
        className="section--calculus"
      />

      <Section
        id="problem-solving"
        title="🧩 Problem Solving"
        cards={problemSolvingCards}
        className="section--problem-solving"
      />

      {/* Research Resources */}
      <section className="research-resources">
        <div className="research-resources__container">
          <h2 className="research-resources__title">🔬 Research & Advanced Resources</h2>
          <div className="research-grid">
            <div className="research-item">
              <h3>📚 Academic Journals</h3>
              <ul>
                <li>Physical Review Letters</li>
                <li>Nature Physics</li>
                <li>Journal of Mathematical Physics</li>
                <li>American Mathematical Monthly</li>
              </ul>
            </div>
            <div className="research-item">
              <h3>🌐 Research Databases</h3>
              <ul>
                <li>arXiv.org - Physics preprints</li>
                <li>MathSciNet - Mathematics database</li>
                <li>Zentralblatt MATH</li>
                <li>Google Scholar</li>
              </ul>
            </div>
            <div className="research-item">
              <h3>🔧 Mathematical Software</h3>
              <ul>
                <li>Mathematica</li>
                <li>MATLAB</li>
                <li>SageMath (free)</li>
                <li>GeoGebra</li>
              </ul>
            </div>
            <div className="research-item">
              <h3>🎓 Graduate Resources</h3>
              <ul>
                <li>Graduate Record Examinations (GRE)</li>
                <li>Putnam Mathematical Competition</li>
                <li>International Physics Olympiad</li>
                <li>REU Programs (Research Experience)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhysicsMathematics;
