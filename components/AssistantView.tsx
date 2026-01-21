import React from 'react';
import { Bot, Sparkles, Send, Mic, ArrowRight } from 'lucide-react';

export default function AssistantView() {
  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500 max-w-4xl mx-auto w-full">
      
      {/* Header Area */}
      <div className="flex-1 flex flex-col items-center justify-center text-center pb-12">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#fcdab6] to-[#8c3a28] flex items-center justify-center mb-6 shadow-2xl shadow-orange-900/40">
           <Bot size={40} className="text-white" />
        </div>
        <h2 className="text-4xl font-light text-white mb-3">How can I help you today?</h2>
        <p className="text-white/60 text-lg max-w-lg">
          I can analyze your tour traffic, generate listing descriptions, or help you schedule your next shoot.
        </p>
      </div>

      {/* Suggested Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button className="bg-white/10 hover:bg-white/20 border border-white/10 p-5 rounded-2xl text-left transition-all group">
          <div className="bg-purple-500/20 w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
             <Sparkles size={20} className="text-purple-300" />
          </div>
          <h3 className="text-white font-medium mb-1">Generate Description</h3>
          <p className="text-white/50 text-xs">Create a catchy listing for the Azure Penthouse.</p>
        </button>

        <button className="bg-white/10 hover:bg-white/20 border border-white/10 p-5 rounded-2xl text-left transition-all group">
          <div className="bg-blue-500/20 w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
             <Sparkles size={20} className="text-blue-300" />
          </div>
          <h3 className="text-white font-medium mb-1">Analyze Hotspots</h3>
          <p className="text-white/50 text-xs">Find which rooms get the most engagement.</p>
        </button>

        <button className="bg-white/10 hover:bg-white/20 border border-white/10 p-5 rounded-2xl text-left transition-all group">
          <div className="bg-green-500/20 w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
             <Sparkles size={20} className="text-green-300" />
          </div>
          <h3 className="text-white font-medium mb-1">Schedule Maintenance</h3>
          <p className="text-white/50 text-xs">Check for broken links in active tours.</p>
        </button>
      </div>

      {/* Input Area */}
      <div className="bg-black/20 backdrop-blur-md rounded-full p-2 pl-6 flex items-center border border-white/10 shadow-lg">
        <input 
          type="text" 
          placeholder="Ask anything..." 
          className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/40 h-12"
        />
        <div className="flex items-center gap-2">
          <button className="p-3 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors">
            <Mic size={20} />
          </button>
          <button className="p-3 rounded-full bg-[#fcdab6] text-[#8c3a28] hover:bg-white transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
}