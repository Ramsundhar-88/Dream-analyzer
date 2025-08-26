import React, { useState } from 'react';
import axios from 'axios';
import { Sparkles } from 'lucide-react';

export default function DreamForm({ mode='roast', onResult }) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [intensity, setIntensity] = useState('mild');

  async function submit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    try {
      let result = {};
      if (mode === 'roast' || mode === 'both') {
        const res = await axios.post('http://localhost:5000/api/roast', { text, intensity, save: false });
        result.roast = res.data.roast;
      }
      if (mode === 'analysis' || mode === 'both') {
        const res = await axios.post('http://localhost:5000/api/analysis', { text, save: false });
        result.analysis = res.data.analysis;
      }
      onResult && onResult(result);
    } catch (err) {
      console.error(err);
      alert('Error: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Describe your dream in vivid detail..."
          className="w-full p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300 resize-none"
          rows={6}
        />
        <div className="absolute bottom-3 right-3 text-xs text-gray-500">
          {text.length}
        </div>
      </div>
      
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-300">Intensity</label>
            <select
              value={intensity}
              onChange={e => setIntensity(e.target.value)}
              className="bg-gray-800/50 border border-gray-700/50 text-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 backdrop-blur-sm"
            >
              <option value="mild">Mild</option>
              <option value="savage">Savage</option>
            </select>
          </div>
        </div>
        
        <button
          onClick={submit}
          disabled={loading || !text.trim()}
          className="relative px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Analyze Dream
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
}
