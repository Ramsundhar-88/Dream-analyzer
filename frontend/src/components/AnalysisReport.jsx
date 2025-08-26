// Analysis Report Component
import React from 'react';
import { Eye, Target, Heart,Brain } from 'lucide-react';
function AnalysisReport({ analysis }) {
  if (!analysis) return null;
  
  return (
    <div className="relative bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 shadow-xl">
      <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
        <Brain className="w-4 h-4 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-emerald-300 mb-6 flex items-center gap-2">
        <Eye className="w-5 h-5" />
        Dream Analysis
      </h3>
      
      {/* Analysis Text */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg blur-sm"></div>
          <p className="relative text-gray-200 leading-relaxed bg-black/20 rounded-lg p-4 border-l-4 border-emerald-400">
            {analysis.analysis}
          </p>
        </div>
      </div>
      
      {/* Themes */}
      <div className="mb-4">
        <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
          <Target className="w-4 h-4" />
          Themes
        </h4>
        <div className="flex flex-wrap gap-2">
          {analysis.themes?.map((theme, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 rounded-full text-emerald-300 text-sm font-medium hover:scale-105 transition-transform cursor-default"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>
      
      {/* Mood */}
      <div className="flex items-center gap-2">
        <h4 className="text-emerald-400 font-semibold flex items-center gap-2">
          <Heart className="w-4 h-4" />
          Mood:
        </h4>
        <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide ${
          analysis.mood === 'positive' 
            ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/40' 
            : analysis.mood === 'negative'
            ? 'bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-400 border border-red-500/40'
            : 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border border-yellow-500/40'
        }`}>
          {analysis.mood}
        </span>
      </div>
    </div>
  );
}
export default AnalysisReport;