import React from 'react';
import { Search, PlusCircle, BarChart2, Bell, RefreshCw } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

export default function Header({ title = "Routes" }: HeaderProps) {
  return (
    <header className="flex items-center justify-between w-full h-16 px-2">
      <h1 className="text-4xl font-light tracking-wide text-white transition-all duration-300">{title}</h1>

      <div className="flex items-center gap-8">
        {/* Search Bar */}
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-black/20 text-sm text-white placeholder-white/60 pl-10 pr-4 py-2.5 rounded-full w-64 outline-none border border-transparent focus:border-white/20 focus:bg-black/30 transition-all"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 text-sm font-medium text-white/90">
          <button className="flex items-center gap-2 hover:text-white transition-colors">
            <PlusCircle size={18} />
            <span>Add</span>
          </button>
          
          <button className="flex items-center gap-2 hover:text-white transition-colors">
            <BarChart2 size={18} />
            <span>Indicators</span>
          </button>
          
          <button className="flex items-center gap-2 hover:text-white transition-colors">
            <Bell size={18} />
            <span>Alert</span>
          </button>
          
          <button className="flex items-center gap-2 hover:text-white transition-colors">
            <RefreshCw size={16} />
            <span>Replay</span>
          </button>
        </div>
      </div>
    </header>
  );
}