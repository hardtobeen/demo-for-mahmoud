import React from 'react';

export default function LocationImageCard() {
  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden group">
      {/* Image */}
      <img 
        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
        alt="Modern Interior" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      {/* Status Badge */}
      <div className="absolute top-6 right-6 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/20 text-xs font-medium text-white">
        Live Tour
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <button className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"></button>
        <button className="w-2 h-2 rounded-full bg-white/40 hover:bg-white/60 transition-colors"></button>
        <button className="w-2 h-2 rounded-full bg-white/40 hover:bg-white/60 transition-colors"></button>
        <button className="w-2 h-2 rounded-full bg-white/40 hover:bg-white/60 transition-colors"></button>
      </div>
    </div>
  );
}