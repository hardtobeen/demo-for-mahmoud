import React from 'react';
import { Share2 } from 'lucide-react';

export default function ProfileCard() {
  return (
    <div className="w-full h-full min-h-[250px] bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 p-6 flex flex-col justify-center">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
              alt="Demian Karleo" 
              className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
            />
             <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-[#8c3a28] rounded-full"></div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white leading-tight">Demian Karleo</h3>
            <p className="text-sm text-white/60">Senior Tour Creator</p>
          </div>
        </div>
        
        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
          <Share2 size={18} className="text-white" />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
        <div className="text-center">
          <p className="text-sm text-white/60 mb-1">Tours</p>
          <p className="text-2xl font-light">42</p>
        </div>
        <div className="text-center border-l border-white/10 border-r">
          <p className="text-sm text-white/60 mb-1">Total Views</p>
          <p className="text-2xl font-light">12.5k</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-white/60 mb-1">Sold</p>
          <p className="text-2xl font-light">28</p>
        </div>
      </div>

    </div>
  );
}