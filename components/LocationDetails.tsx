import React from 'react';
import { Layers, Zap, Maximize, Heart } from 'lucide-react';

export default function LocationDetails() {
  return (
    <div className="flex flex-col justify-between h-full pl-6 py-2">
      
      {/* Title */}
      <div>
        <h2 className="text-6xl font-normal leading-tight tracking-tight text-white mb-8">
          Azure Heights <br /> Penthouse
        </h2>
        
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-white/70 text-sm">
               <Layers size={16} />
               <span>Scenes</span>
            </div>
            <span className="text-xl font-medium">42 Points</span>
          </div>
          
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-white/70 text-sm">
               <Zap size={16} />
               <span>Quality</span>
            </div>
            <span className="text-xl font-medium">8K HDR</span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-white/70 text-sm">
               <Maximize size={16} />
               <span>Area</span>
            </div>
            <span className="text-xl font-medium">3,200 sqft</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed max-w-md">
          Experience the pinnacle of luxury living. This high-fidelity virtual tour features interactive hotspots, 4K panoramic views, and seamless navigation through the open-plan layout of the Azure Heights property.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-8">
        <button className="bg-[#fcdab6] text-[#5e2d24] px-8 py-3 rounded-full font-semibold text-sm hover:bg-white transition-colors shadow-lg">
          Launch Tour
        </button>
        
        <button className="bg-white/10 text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/5">
          Edit Hotspots
        </button>

        <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-red-400 hover:border-red-400/50 hover:bg-red-500/10 transition-all ml-auto md:ml-0">
          <Heart size={20} />
        </button>
      </div>
    </div>
  );
}