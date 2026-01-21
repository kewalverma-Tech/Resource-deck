import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BackToTop from './components/BackToTop';
import ToastContainer from './components/ToastContainer';
import Home from './pages/Home';
import About from './pages/About';
import ComputerScience from './pages/ComputerScience';
import PhysicsMathematics from './pages/PhysicsMathematics';
import ChemistryBiology from './pages/ChemistryBiology';
import LiteraturePhilosophy from './pages/LiteraturePhilosophy';
import HistorySocialSciences from './pages/HistorySocialSciences';
import Engineering from './pages/Engineering';
import ScienceNews from './pages/ScienceNews';
import Notes from './pages/Notes';
import CompetitiveExams from './pages/CompetitiveExams';
import './styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">📚</div>
          <h1 className="loading-title">ScholarVault</h1>
          <p className="loading-subtitle">Loading amazing resources...</p>
          <div className="loading-progress">
            <div className="loading-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router basename="/scholarvault">
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/computer-science" element={<ComputerScience />} />
            <Route path="/physics-mathematics" element={<PhysicsMathematics />} />
            <Route path="/chemistry-biology" element={<ChemistryBiology />} />
            <Route path="/literature-philosophy" element={<LiteraturePhilosophy />} />
            <Route path="/history-social-sciences" element={<HistorySocialSciences />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/science-news" element={<ScienceNews />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/competitive-exams" element={<CompetitiveExams />} />
          </Routes>
        </main>
        <BackToTop />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
