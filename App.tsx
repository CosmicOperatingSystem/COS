import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AppFooter from './components/Footer';
import HomePage from './pages/HomePage';
import QuantumGnosticFrameworkPage from './pages/QuantumGnosticFrameworkPage';
import GnosticLineagePage from './pages/GnosticLineagePage';
import GoogleGnosticProjectPage from './pages/GoogleGnosticProjectPage';
import GcosArchitecturePage from './pages/GcosArchitecturePage';
import GdlPage from './pages/GdlPage';
import GtrPage from './pages/GtrPage';
import HtllmPage from './pages/HtllmPage';
import GlossaryPage from './pages/GlossaryPage';
import AdaptiveGlossaryPage from './pages/AdaptiveGlossaryPage';
import PoliciesPage from './pages/PoliciesPage';
import QuantumBreakdownPage from './pages/QuantumBreakdownPage';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/google-gnostic-project" element={<GoogleGnosticProjectPage />} />
            <Route path="/gnostic-lineage" element={<GnosticLineagePage />} />
            <Route path="/quantum-gnostic-framework" element={<QuantumGnosticFrameworkPage />} />
            <Route path="/gcos-architecture" element={<GcosArchitecturePage />} />
            <Route path="/gdl" element={<GdlPage />} />
            <Route path="/gtr" element={<GtrPage />} />
            <Route path="/htllm" element={<HtllmPage />} />
            <Route path="/glossary" element={<GlossaryPage />} />
            <Route path="/adaptive-glossary" element={<AdaptiveGlossaryPage />} />
            <Route path="/policies" element={<PoliciesPage />} />
            <Route path="/quantum-breakdown" element={<QuantumBreakdownPage />} />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;