import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

const Home = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Handle internal navigation
  const handleCardClick = (link) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      navigate(link);
    }
  };

  // Featured section data
  const featuredCards = [
    {
      id: 'trending',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📈 Trending Research',
      description: 'Most cited papers and trending academic topics this month',
      link: 'https://scholar.google.com/scholar?q=trending+research+2024'
    },
    {
      id: 'professors',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '👨‍🏫 Professor\'s Choice',
      description: 'Hand-picked resources by leading academics worldwide',
      link: 'https://www.edx.org/'
    },
    {
      id: 'publications',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🆕 New Publications',
      description: 'Latest peer-reviewed articles and research publications',
      link: 'https://arxiv.org/'
    },
    {
      id: 'rated',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '⭐ Best Rated',
      description: 'Top-rated academic content by students and faculty',
      link: 'https://www.coursera.org/courses?query=top%20rated'
    },
    {
      id: 'notes',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📝 Study Notes',
      description: 'Comprehensive notes and summaries from top students and educators',
      link: '/notes'
    },
    {
      id: 'competitive-exams',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🎯 Competitive Exams',
      description: 'Preparation resources for entrance exams and government jobs',
      link: '/competitive-exams'
    }
  ];

  // Books section data
  const booksCards = [
    {
      id: 'computer-science',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '💻 Computer Science',
      description: 'Data structures, algorithms, AI, and programming language guides',
      link: '/computer-science',
      buttonText: '📖 View Resources'
    },
    {
      id: 'physics-math',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📐 Physics & Mathematics',
      description: 'Advanced calculus, quantum mechanics, and theoretical physics textbooks',
      link: '/physics-mathematics',
      buttonText: '📖 View Resources'
    },
    {
      id: 'chemistry',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '⚗️ Chemistry & Biology',
      description: 'Organic chemistry, molecular biology, and biochemistry resources',
      link: '/chemistry-biology',
      buttonText: '📖 View Resources'
    },
    {
      id: 'literature',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📖 Literature & Philosophy',
      description: 'Classic literature, modern philosophy, and critical theory',
      link: '/literature-philosophy',
      buttonText: '📖 View Resources'
    },
    {
      id: 'history',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🏛️ History & Social Sciences',
      description: 'World history, sociology, political science, and anthropology',
      link: '/history-social-sciences',
      buttonText: '📖 View Resources'
    },
    {
      id: 'engineering',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '⚙️ Engineering',
      description: 'Mechanical, electrical, civil, and software engineering handbooks',
      link: '/engineering',
      buttonText: '📖 View Resources'
    }
  ];

  // Free Technical Books section data
  const technicalBooksCards = [
    {
      id: 'programming-books',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '💻 Programming Books',
      description: 'Free technical programming books, tutorials, and coding guides',
      link: 'https://github.com/EbookFoundation/free-programming-books',
      buttonText: '🔗 Free Books'
    },
    {
      id: 'algorithms-books',
      image: 'https://images.unsplash.com/photo-1509048191080-d2e2a703810a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🔬 Algorithms & Data Structures',
      description: 'Comprehensive guides on algorithms, data structures, and computer science theory',
      link: 'https://algs4.cs.princeton.edu/home/',
      buttonText: '🔗 Free Books'
    },
    {
      id: 'open-textbooks',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📖 OpenStax Textbooks',
      description: 'Free, peer-reviewed textbooks for mathematics, science, and engineering',
      link: 'https://openstax.org/',
      buttonText: '🔗 Free Books'
    },
    {
      id: 'mit-books',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🎓 MIT OpenCourseWare Books',
      description: 'Free lecture notes, textbooks, and course materials from MIT',
      link: 'https://ocw.mit.edu/index.htm',
      buttonText: '🔗 Free Books'
    },
    {
      id: 'oreilly-books',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📚 Tech Reference Books',
      description: 'Free technical reference books and documentation',
      link: 'https://www.freetechbooks.com/',
      buttonText: '🔗 Free Books'
    },
    {
      id: 'springer-books',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🔬 Springer Free Books',
      description: 'Free academic and research books from Springer Nature',
      link: 'https://link.springer.com/search/page/1?facet-content-type="Book"&package=openaccess',
      buttonText: '🔗 Free Books'
    }
  ];

  // Technical Articles section data
  const technicalArticlesCards = [
    {
      id: 'arxiv-papers',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📄 arXiv Research Papers',
      description: 'Free access to research papers in physics, mathematics, computer science, and more',
      link: 'https://arxiv.org/',
      buttonText: '🔗 Free Articles'
    },
    {
      id: 'ieee-open',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '⚡ IEEE Xplore Open Access',
      description: 'Open access engineering and technology research articles',
      link: 'https://ieeexplore.ieee.org/Xplore/home.jsp',
      buttonText: '🔗 Free Articles'
    },
    {
      id: 'plos-articles',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🧬 PLOS Open Science',
      description: 'Open access scientific articles in biology, medicine, and related fields',
      link: 'https://plos.org/',
      buttonText: '🔗 Free Articles'
    },
    {
      id: 'pubmed-articles',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🏥 PubMed Central',
      description: 'Free access to biomedical and life sciences literature',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/',
      buttonText: '🔗 Free Articles'
    },
    {
      id: 'doaj-articles',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📖 Directory of Open Access Journals',
      description: 'High-quality, open access, peer-reviewed journals across all disciplines',
      link: 'https://doaj.org/',
      buttonText: '🔗 Free Articles'
    },
    {
      id: 'google-scholar',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🔍 Google Scholar',
      description: 'Search for scholarly literature across disciplines and sources',
      link: 'https://scholar.google.com/',
      buttonText: '🔗 Search Articles'
    }
  ];

  // News section data
  const newsCards = [
    {
      id: 'science-news',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🔬 Science Breakthroughs',
      description: 'Latest discoveries in physics, chemistry, and life sciences',
      link: '/science-news',
      buttonText: '📖 View News'
    },
    {
      id: 'tech-news',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '💡 Technology Innovation',
      description: 'AI breakthroughs, quantum computing, and tech industry updates',
      link: 'https://www.technologyreview.com/',
      buttonText: '🔗 External Link'
    },
    {
      id: 'education-news',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🎓 Education Policy',
      description: 'Higher education trends, funding news, and policy changes',
      link: 'https://www.insidehighered.com/',
      buttonText: '🔗 External Link'
    },
    {
      id: 'research-funding',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '📊 Research Funding',
      description: 'Grant opportunities, research awards, and funding announcements',
      link: 'https://www.nsf.gov/funding/',
      buttonText: '🔗 External Link'
    },
    {
      id: 'conferences',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: '🏛️ Academic Conferences',
      description: 'Upcoming conferences, symposiums, and academic events',
      link: 'https://academicconferences.org/',
      buttonText: '🔗 External Link'
    }
  ];

  // Handle search functionality
  const handleSearch = (searchTerm) => {
    console.log('Search called with:', searchTerm); // Debug log
    setIsSearching(!!searchTerm);
    if (searchTerm) {
      // Additional Notes and Competitive Exams resources for search
      const notesResources = [
        { id: 'notes-page', title: '📝 Study Notes', description: 'Comprehensive notes and summaries from top students and educators', link: '/notes', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
        { id: 'mit-notes', title: '🎓 MIT OpenCourseWare', description: 'Free lecture notes and course materials from MIT', link: 'https://ocw.mit.edu/', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
        { id: 'khan-notes', title: '📋 Khan Academy Notes', description: 'Quick revision notes and summaries for exam preparation', link: 'https://www.khanacademy.org/', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
      ];
      
      const examResources = [
        { id: 'exams-page', title: '🎯 Competitive Exams', description: 'Preparation resources for entrance exams and government jobs', link: '/competitive-exams', image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
        { id: 'jee-neet', title: '🎯 JEE & NEET Preparation', description: 'Engineering and medical entrance exam preparation materials', link: 'https://www.nta.ac.in/', image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
        { id: 'gate-prep', title: '🔧 GATE Preparation', description: 'Graduate Aptitude Test in Engineering preparation resources', link: 'https://gate.iisc.ac.in/', image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
        { id: 'upsc-prep', title: '🏛️ UPSC Civil Services', description: 'Civil services examination and government job preparation', link: 'https://www.upsc.gov.in/', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
      ];

      // Simple search simulation - filters through cards
      const allResources = [
        ...featuredCards,
        ...booksCards,
        ...technicalBooksCards,
        ...technicalArticlesCards,
        ...newsCards,
        ...notesResources,
        ...examResources
      ];
      
      const filtered = allResources.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      console.log('Filtered results:', filtered); // Debug log
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">📚 ScholarVault</h1>
          <p className="hero-subtitle">Your Gateway to Academic Excellence</p>
          <p className="hero-description">
            Discover comprehensive resources for students and professors across all academic disciplines
          </p>
          
          {/* Search Bar */}
          <div className="hero-search">
            <SearchBar 
              onSearch={handleSearch}
              placeholder="🔍 Search thousands of academic resources..."
            />
          </div>
          
          {/* Quick Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Resources</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15</span>
              <span className="stat-label">Subjects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="section">
        <div className="section-container">
          <h2 className="section-title">🌟 Featured Academic Resources</h2>
          <div className="cards-container">
            {featuredCards.map((card) => (
              <div key={card.id} className="card">
                <div className="card-image">
                  <img src={card.image} alt={card.title} loading="lazy" />
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="section">
        <div className="section-container">
          <h2 className="section-title">📚 Academic Books & Textbooks</h2>
          <div className="cards-container">
            {booksCards.map((card) => (
              <div key={card.id} className="card card-clickable" onClick={() => handleCardClick(card.link)}>
                <div className="card-image">
                  <img src={card.image} alt={card.title} loading="lazy" />
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <button className="card-button">{card.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Technical Books Section */}
      <section id="technical-books" className="section">
        <div className="section-container">
          <h2 className="section-title">📖 Free Technical Books</h2>
          <p className="section-description">
            Access thousands of free programming books, technical manuals, and open-source educational materials
          </p>
          <div className="cards-container">
            {technicalBooksCards.map((card) => (
              <div key={card.id} className="card card-clickable" onClick={() => handleCardClick(card.link)}>
                <div className="card-image">
                  <img src={card.image} alt={card.title} loading="lazy" />
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <button className="card-button">{card.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Articles Section */}
      <section id="technical-articles" className="section">
        <div className="section-container">
          <h2 className="section-title">📄 Free Technical Articles</h2>
          <p className="section-description">
            Explore research papers, open access journals, and scholarly articles from top institutions worldwide
          </p>
          <div className="cards-container">
            {technicalArticlesCards.map((card) => (
              <div key={card.id} className="card card-clickable" onClick={() => handleCardClick(card.link)}>
                <div className="card-image">
                  <img src={card.image} alt={card.title} loading="lazy" />
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <button className="card-button">{card.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="section">
        <div className="section-container">
          <h2 className="section-title">📰 Latest News</h2>
          <div className="cards-container">
            {newsCards.map((card) => (
              <div key={card.id} className="card card-clickable" onClick={() => handleCardClick(card.link)}>
                <div className="card-image">
                  <img src={card.image} alt={card.title} loading="lazy" />
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <button className="card-button">{card.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section id="additional-resources" className="section">
        <div className="section-container">
          <h2 className="section-title">🎯 Additional Learning Resources</h2>
          <p className="section-description">
            Expand your learning with our specialized collections of study materials and exam preparation resources
          </p>
          <div className="cards-container">
            <div className="card card-clickable" onClick={() => handleCardClick('/notes')}>
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Study Notes" loading="lazy" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">📝 Study Notes</h3>
                <p className="card-description">Comprehensive handwritten and typed notes from top students and educators across all academic disciplines</p>
                <button className="card-button">📖 Browse Notes</button>
              </div>
            </div>
            <div className="card card-clickable" onClick={() => handleCardClick('/competitive-exams')}>
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Competitive Exams" loading="lazy" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">🎯 Competitive Exams</h3>
                <p className="card-description">Complete preparation resources for JEE, NEET, GATE, UPSC, CAT, and other major competitive examinations</p>
                <button className="card-button">🚀 Start Preparation</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results Section */}
      {isSearching && (
        <section className="search-results section">
          <div className="section-container">
            <h2 className="section-title">
              🔍 Search Results ({searchResults.length} found)
            </h2>
            {searchResults.length > 0 ? (
              <div className="cards-container">
                {searchResults.map((result, index) => (
                  <Card
                    key={`search-${result.id || index}`}
                    image={result.image}
                    title={result.title}
                    description={result.description}
                    link={result.link}
                    buttonText="🔗 Access Resource"
                    isClickable={true}
                  />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <span className="no-results-icon">🔍</span>
                <h3 className="no-results-title">No results found</h3>
                <p className="no-results-text">Try different keywords or browse our categories above!</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="section section-contact">
        <div className="section-container">
          <h2 className="section-title">📞 Contact Us</h2>
          <p className="section-description">
            Get in touch with us for any questions or suggestions about our academic resources.
          </p>
          <div className="contact-info">
            <p>📧 Email: info@scholarvault.com</p>
            <p>📱 Phone: +1 (555) 123-4567</p>
            <p>🌐 Website: www.scholarvault.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
