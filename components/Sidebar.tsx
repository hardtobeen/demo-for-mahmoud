import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  FileQuestion, 
  Image as ImageIcon, 
  Bot, 
  MessageSquare,
  LogOut, 
  MountainSnow 
} from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  active?: boolean;
  onClick: () => void;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, active, onClick, label }) => {
  return (
    <button 
      onClick={onClick}
      title={label}
      className={`
        p-3 rounded-xl transition-all duration-300 flex items-center justify-center relative group
        ${active 
          ? 'bg-[#fcdab6] text-[#8c3a28] shadow-lg scale-110' 
          : 'text-white/60 hover:text-white hover:bg-white/10'}
      `}
    >
      {icon}
      
      {/* Tooltip on hover */}
      <span className="absolute left-full ml-4 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
        {label}
      </span>
    </button>
  );
};

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', icon: <LayoutDashboard size={22} />, label: 'Dashboard' },
    { id: 'clients', icon: <Users size={22} />, label: 'Clients' },
    { id: 'projects', icon: <Briefcase size={22} />, label: 'Projects' },
    { id: 'requests', icon: <FileQuestion size={22} />, label: 'Requests' },
    { id: 'media', icon: <ImageIcon size={22} />, label: 'Media' },
    { id: 'assistant', icon: <Bot size={22} />, label: 'Assistant' },
    { id: 'messages', icon: <MessageSquare size={22} />, label: 'Messages' },
  ];

  return (
    <aside className="w-24 h-full flex flex-col items-center justify-between py-8 z-10">
      {/* Logo */}
      <div className="mb-8">
        <MountainSnow className="w-10 h-10 text-white" strokeWidth={2} />
      </div>

      {/* Navigation Icons */}
      <nav className="flex-1 flex flex-col items-center gap-6 w-full px-4 overflow-y-auto no-scrollbar">
        {navItems.map((item) => (
          <NavItem 
            key={item.id}
            icon={item.icon} 
            active={activeSection === item.id} 
            onClick={() => setActiveSection(item.id)}
            label={item.label}
          />
        ))}
      </nav>

      {/* Footer Icons */}
      <div className="flex flex-col items-center gap-6 mt-auto pt-4 border-t border-white/5 w-full">
        <img 
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
          alt="User" 
          className="w-10 h-10 rounded-full border-2 border-white/20 opacity-80 hover:opacity-100 cursor-pointer transition-opacity"
        />
        <button className="text-white/60 hover:text-white transition-colors" title="Logout">
          <LogOut size={22} />
        </button>
      </div>
    </aside>
  );
}