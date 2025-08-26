import React from 'react';
import { Moon, Sparkles } from 'lucide-react';

export default function DreamDisplay({ dreamText }) {
  if (!dreamText) return null;
  
  return (
    <div className="relative bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6 shadow-xl">
      <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
        <Moon className="w-4 h-4 text-white" />
      </div>
      <h3 className="text-xl font-bold text-indigo-300 mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5" />
        Your Dream
      </h3>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg blur-sm"></div>
        <p className="relative text-gray-200 leading-relaxed text-lg italic border-l-4 border-indigo-400 pl-4 bg-black/20 rounded-r-lg p-4">
          "{dreamText}"
        </p>
      </div>
    </div>
  );
}