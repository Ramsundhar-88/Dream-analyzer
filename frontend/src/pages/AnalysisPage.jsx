// pages/AnalysisPage.js
import React, { useState } from 'react';
import DreamForm from '../components/DreamForm';
import AnalysisReport from '../components/AnalysisReport';
import { Brain } from 'lucide-react';

export default function AnalysisPage() {
  const [analysis, setAnalysis] = useState(null);
  const [dreamText, setDreamText] = useState('');

  const handleResult = (result) => {
    setAnalysis(result.analysis);
    setDreamText(result.dreamText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <Brain className="w-10 h-10 text-emerald-400" />
            Dream Pattern Analyzer
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uncover the hidden meanings and psychological insights within your dreams
          </p>
        </div>

        {/* Dream Form */}
        <DreamForm mode="analysis" onResult={handleResult} />

        {/* Analysis Results */}
        <AnalysisReport analysis={analysis} dreamText={dreamText} />
      </div>
    </div>
  );
}
