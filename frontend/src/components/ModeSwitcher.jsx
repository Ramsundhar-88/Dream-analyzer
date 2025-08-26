// Mode Switcher Component
import { Flame, Brain, Sparkles, } from "lucide-react";
import React from 'react';  

function ModeSwitcher({ mode, setMode }) {
  const modes = [
    { id: 'roast', label: 'Roast', icon: Flame, color: 'from-red-500 to-pink-500' },
    { id: 'analysis', label: 'Analyze', icon: Brain, color: 'from-emerald-500 to-teal-500' },
    { id: 'both', label: 'Both', icon: Sparkles, color: 'from-purple-500 to-indigo-500' }
  ];
  
  return (
    <div className="flex gap-2 p-1 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50">
      {modes.map(({ id, label, icon: Icon, color }) => (
        <button
          key={id}
          onClick={() => setMode(id)}
          className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
            mode === id
              ? `bg-gradient-to-r ${color} text-white shadow-lg transform scale-105`
              : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
          }`}
        >
          <Icon className="w-4 h-4" />
          {label}
          {mode === id && (
            <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-lg opacity-20 animate-pulse`}></div>
          )}
        </button>
      ))}
    </div>
  );
}

export default ModeSwitcher;