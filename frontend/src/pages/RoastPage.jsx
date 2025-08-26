// pages/RoastPage.js
import React, { useState } from 'react';
import ModeSwitcher from '../components/ModeSwitcher';
import DreamForm from '../components/DreamForm';
import RoastCard from '../components/RoastCard';
import AnalysisReport from '../components/AnalysisReport';
import DreamDisplay from '../components/Dreamdisplay';
import { Flame } from 'lucide-react';


export default function RoastPage() {
  const [mode, setMode] = useState('roast');
  const [result, setResult] = useState({});

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent flex items-center gap-3">
            <Flame className="w-10 h-10 text-red-400" />
            Dream Roast Studio
          </h2>
          <ModeSwitcher mode={mode} setMode={setMode} />
        </div>

        {/* Dream Form */}
        <DreamForm mode={mode} onResult={setResult} />

        {/* Results */}
        <div className="space-y-6">
          <DreamDisplay dreamText={result.dreamText} />
          <RoastCard roast={result.roast} />
          <AnalysisReport analysis={result.analysis} dreamText={result.dreamText} />
        </div>
      </div>
    </div>
  );
}