import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import RoastPage from './pages/RoastPage';
import AnalysisPage from './pages/AnalysisPage';

export default function App() {
  return (
    <div className="min-h-screen p-6">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Dream vs Reality</h1>
        {/* <nav className="space-x-4">
          <Link to="/" className="underline">Roast</Link>
          <Link to="/analysis" className="underline">Analyze</Link>center
        </nav> */}
      </header>

      <main>
        <Routes>
          <Route path="/" element={<RoastPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </main>
    </div>
  );
}