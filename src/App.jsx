import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ComputerScience from './pages/ComputerScience';
import PhysicsMathematics from './pages/PhysicsMathematics';
import Engineering from './pages/Engineering';
import About from './pages/About';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/computer-science" element={<ComputerScience />} />
                    <Route path="/physics-mathematics" element={<PhysicsMathematics />} />
                    <Route path="/engineering" element={<Engineering />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
