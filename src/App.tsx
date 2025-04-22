import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components//Layout';
import HomePage from './pages/HomePage';
import ProblemSolverPage from './pages/ProblemSolverPage';
import FormulaReferencePage from './pages/FormulaReferencePage';
import PracticeModePage from './pages/PracticeModePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solver" element={<ProblemSolverPage />} />
          <Route path="/formulas" element={<FormulaReferencePage />} />
          <Route path="/practice" element={<PracticeModePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;