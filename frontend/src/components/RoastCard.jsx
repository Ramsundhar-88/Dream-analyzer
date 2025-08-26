// Roast Card Component
import React from 'react';
import { Flame, Zap, Star, Target } from 'lucide-react';
function RoastCard({ roast }) {
  if (!roast) return null;
  
  return (
    <div className="relative bg-gradient-to-br from-red-900/20 via-pink-900/20 to-orange-900/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 shadow-xl">
      <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
        <Flame className="w-4 h-4 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-red-300 mb-6 flex items-center gap-2">
        <Zap className="w-5 h-5" />
        Reality Check
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Dream Version */}
        <div className="space-y-3">
          <h4 className="text-red-400 font-semibold flex items-center gap-2">
            <Star className="w-4 h-4" />
            Dream Self
          </h4>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-lg blur-sm"></div>
            <p className="relative text-gray-200 leading-relaxed bg-black/20 rounded-lg p-4 border-l-4 border-red-400">
              {roast.dreamLine}
            </p>
          </div>
        </div>
        
        {/* Reality Version */}
        <div className="space-y-3">
          <h4 className="text-orange-400 font-semibold flex items-center gap-2">
            <Target className="w-4 h-4" />
            Reality Check
          </h4>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg blur-sm"></div>
            <p className="relative text-gray-200 leading-relaxed bg-black/20 rounded-lg p-4 border-l-4 border-orange-400">
              {roast.realityLine}
            </p>
          </div>
        </div>
      </div>
      
      {/* Full Roast */}
      {roast.fullRoast && (
        <div className="mt-6 pt-6 border-t border-red-500/20">
          <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
            <Flame className="w-4 h-4" />
            The Full Roast
          </h4>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg blur-sm"></div>
            <p className="relative text-gray-200 leading-relaxed bg-black/20 rounded-lg p-4 border-l-4 border-red-400">
              {roast.fullRoast}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoastCard;