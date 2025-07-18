import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import { TelephonyPage } from './pages/TelephonyPage';
import { SoftwarePage } from './pages/SoftwarePage';
import { HardwarePage } from './pages/HardwarePage';
import { AboutPage } from './pages/AboutPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/telephony" element={<TelephonyPage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/hardware" element={<HardwarePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
