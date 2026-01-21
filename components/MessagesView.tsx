import React from 'react';
import { Search, Phone, Video, Info, Send, Paperclip } from 'lucide-react';

const contacts = [
  { id: 1, name: 'Alice Freeman', msg: 'The photos look great! When can we...', time: '10:42 AM', unread: 2, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
  { id: 2, name: 'Mark Taylor', msg: 'Sent the contract details.', time: 'Yesterday', unread: 0, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
  { id: 3, name: 'Sarah Jenkins', msg: 'Can we reschedule the shoot?', time: 'Tue', unread: 0, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
  { id: 4, name: 'David Ross', msg: 'Thanks for the update.', time: 'Mon', unread: 0, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
];

export default function MessagesView() {
  return (
    <div className="flex h-full bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden animate-in fade-in duration-500">
      
      {/* Sidebar - Contacts */}
      <div className="w-1/3 border-r border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search messages" 
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-white/20 transition-all"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {contacts.map((contact) => (
            <div key={contact.id} className={`p-4 flex gap-3 cursor-pointer transition-colors ${contact.id === 1 ? 'bg-white/10' : 'hover:bg-white/5'}`}>
              <div className="relative">
                <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full object-cover" />
                {contact.id === 1 && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#5e2d24] rounded-full"></div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-medium text-white truncate">{contact.name}</h4>
                  <span className="text-xs text-white/40">{contact.time}</span>
                </div>
                <p className={`text-sm truncate ${contact.unread > 0 ? 'text-white font-medium' : 'text-white/50'}`}>
                  {contact.msg}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-black/10">
        
        {/* Chat Header */}
        <div className="h-20 border-b border-white/10 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
             <img src={contacts[0].avatar} alt="User" className="w-10 h-10 rounded-full object-cover" />
             <div>
               <h3 className="font-medium text-white">Alice Freeman</h3>
               <span className="flex items-center gap-1 text-xs text-green-400">
                 <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online
               </span>
             </div>
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <button className="hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"><Phone size={20} /></button>
            <button className="hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"><Video size={20} /></button>
            <button className="hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"><Info size={20} /></button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6">
          <div className="flex justify-center">
            <span className="text-xs text-white/30 bg-black/20 px-3 py-1 rounded-full">Today, 10:23 AM</span>
          </div>
          
          <div className="flex gap-3 max-w-[80%]">
            <img src={contacts[0].avatar} className="w-8 h-8 rounded-full self-end mb-1" alt="Other" />
            <div className="bg-white/10 border border-white/5 p-4 rounded-2xl rounded-bl-none text-white text-sm leading-relaxed">
              <p>Hi! I just reviewed the latest panoramic stitches for the Azure project.</p>
            </div>
          </div>

          <div className="flex gap-3 max-w-[80%]">
             <img src={contacts[0].avatar} className="w-8 h-8 rounded-full self-end mb-1" alt="Other" />
             <div className="bg-white/10 border border-white/5 p-4 rounded-2xl rounded-bl-none text-white text-sm leading-relaxed">
               <p>They look fantastic, but I think the lighting in the Master Bedroom is a bit too warm. Can we adjust that?</p>
             </div>
          </div>

          <div className="flex gap-3 max-w-[80%] self-end flex-row-reverse">
             <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" className="w-8 h-8 rounded-full self-end mb-1" alt="Me" />
             <div className="bg-[#fcdab6] text-[#5e2d24] p-4 rounded-2xl rounded-br-none text-sm leading-relaxed shadow-lg">
               <p>Hey Alice! Glad you like them. Yes, absolutely. I can cool down the temperature in post-processing. I'll send you a preview in an hour.</p>
             </div>
          </div>
          
           <div className="flex gap-3 max-w-[80%]">
            <img src={contacts[0].avatar} className="w-8 h-8 rounded-full self-end mb-1" alt="Other" />
            <div className="bg-white/10 border border-white/5 p-4 rounded-2xl rounded-bl-none text-white text-sm leading-relaxed">
              <p>Perfect, thank you! Also, when can we schedule the exterior drone shots?</p>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 rounded-2xl flex items-center p-2 gap-2">
            <button className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-xl transition-all">
              <Paperclip size={20} />
            </button>
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/30 text-sm h-10"
            />
            <button className="p-2.5 bg-[#fcdab6] text-[#8c3a28] rounded-xl hover:bg-white transition-colors shadow-lg">
              <Send size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}