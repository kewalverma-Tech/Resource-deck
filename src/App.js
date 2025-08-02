import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import ComputerScience from './pages/ComputerScience';
import PhysicsMathematics from './pages/PhysicsMathematics';
import ChemistryBiology from './pages/ChemistryBiology';
import LiteraturePhilosophy from './pages/LiteraturePhilosophy';
import HistorySocialSciences from './pages/HistorySocialSciences';
import Engineering from './pages/Engineering';
import ScienceNews from './pages/ScienceNews';
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
        <div className="loading-spinner">
          <h1>📚 ScholarVault</h1>
          <p>Loading amazing resources...</p>
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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
