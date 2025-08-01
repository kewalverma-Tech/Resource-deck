import React from 'react';import { Link } from 'react-router-dom';import Section from '../components/Section';const ScienceNews = () => {  const scienceNewsCards = [    {      id: 'nature-news',      image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',      title: '🌿 Nature News',      description: 'Breaking science news and research updates from Nature Publishing',      isClickable: true,      external: true,      link: 'https://www.nature.com/news'    },    {      id: 'science-magazine',      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',      title: '🔬 Science Magazine News',      description: 'Latest scientific discoveries and research from AAAS',      isClickable: true,      external: true,      link: 'https://www.science.org/news'    },    {      id: 'sciencedaily',      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',      title: '📰 ScienceDaily',      description: 'Daily science news and research summaries across all disciplines',      isClickable: true,      external: true,      link: 'https://www.sciencedaily.com/'    },    {      id: 'phys-org',      image: 'https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',      title: '⚛️ Phys.org',      description: 'Science, technology, and medical research news',      isClickable: true,      external: true,      link: 'https://phys.org/'    }  ];  const researchJournalsCards = [    {      id: 'cell-press-news',      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',      title: '🧫 Cell Press',      description: 'Life science research news and journal publications',      isClickable: true,      external: true,      link: 'https://www.cell.com/'    },    {      id: 'plos-one',      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',      title: '📖 PLOS ONE',      description: 'Open access scientific journal with broad scope',      isClickable: true,      external: true,      link: 'https://journals.plos.org/plosone/'    },    {      id: 'scientific-reports',      image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',      title: '📊 Scientific Reports',      description: 'Nature\'s open access journal for natural sciences',      isClickable: true,      external: true,      link: 'https://www.nature.com/srep/'    },    {      id: 'proceedings-nas',      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',      title: '🎓 PNAS',      description: 'Proceedings of the National Academy of Sciences',      isClickable: true,      external: true,      link: 'https://www.pnas.org/'    }  ];  const technologyNewsCards = [    {      id: 'mit-technology-review',      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',      title: '🤖 MIT Technology Review',      description: 'Emerging technology trends and innovation news',      isClickable: true,      external: true,      link: 'https://www.technologyreview.com/'    },    {      id: 'ieee-spectrum',      image: 'https://images.unsplash.com/photo-1581092918484-8313f1e24d3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',      title: '⚡ IEEE Spectrum',      description: 'Engineering and technology news from IEEE',      isClickable: true,      external: true,      link: 'https://spectrum.ieee.org/'    },    {      id: 'new-scientist',      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',      title: '🔬 New Scientist',      description: 'Science and technology news for the curious mind',      isClickable: true,      external: true,      link: 'https://www.newscientist.com/'    },    {      id: 'ars-technica',      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250e2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',      title: '💻 Ars Technica Science',      description: 'In-depth technology and science analysis',      isClickable: true,      external: true,      link: 'https://arstechnica.com/science/'    }  ];  return (    <div className="science-news">      {/* Hero Section */}      <section className="sn-hero">        <div className="sn-hero__container">          <h1 className="sn-hero__title">📰 Science News & Research</h1>          <p className="sn-hero__description">            Stay updated with the latest scientific discoveries, research breakthroughs, and technology innovations             from leading science publications and research institutions worldwide.          </p>          <Link to="/" className="sn-hero__back-btn">            🏠 Back to Home          </Link>        </div>      </section>      <Section        id="science-news"        title="📰 Science News Sources"        cards={scienceNewsCards}        className="section--science-news"      />      <Section        id="research-journals"        title="📚 Research Journals"        cards={researchJournalsCards}        className="section--research-journals"      />      <Section        id="technology-news"        title="💻 Technology News"
        cards={technologyNewsCards}
        className="section--technology-news"
      />

      {/* Additional Resources */}
      <section className="additional-resources">
        <div className="additional-resources__container">
          <h2 className="additional-resources__title">📚 Additional News & Research Resources</h2>
          <div className="resources-grid">
            <div className="resource-item">
              <h3>🔬 Research Networks</h3>
              <ul>
                <li>ResearchGate Academic Network</li>
                <li>Academia.edu Research Platform</li>
                <li>Google Scholar Citations</li>
                <li>ORCID Researcher Profiles</li>
              </ul>
            </div>
            <div className="resource-item">
              <h3>📊 Data & Statistics</h3>
              <ul>
                <li>World Health Organization Data</li>
                <li>Climate Change Statistics</li>
                <li>Scientific Publication Metrics</li>
                <li>Research Funding Databases</li>
              </ul>
            </div>
            <div className="resource-item">
              <h3>🎥 Science Communication</h3>
              <ul>
                <li>TED Science Talks</li>
                <li>Science YouTube Channels</li>
                <li>Scientific Podcasts</li>
                <li>Science Documentary Collections</li>
              </ul>
            </div>
            <div className="resource-item">
              <h3>🌍 Global Science</h3>
              <ul>
                <li>UNESCO Science Reports</li>
                <li>European Science Foundation</li>
                <li>National Science Foundations</li>
                <li>International Research Collaborations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScienceNews;
