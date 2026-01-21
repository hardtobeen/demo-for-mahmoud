import React from 'react';
import { ArrowRight, Users, Clock, CheckSquare } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Skyline Lofts VR",
    client: "Apex Realty",
    progress: 75,
    deadline: "2 Days left",
    team: [
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    ],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Grand Hotel 360",
    client: "Marriott Group",
    progress: 30,
    deadline: "2 Weeks left",
    team: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Mountain Retreat",
    client: "Nature Stays",
    progress: 90,
    deadline: "Tomorrow",
    team: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    ],
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Urban Office Space",
    client: "WeWork",
    progress: 10,
    deadline: "1 Month left",
    team: [
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function ProjectsView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
      {projects.map((project) => (
        <div key={project.id} className="group bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all hover:translate-y-[-4px]">
          
          {/* Card Image */}
          <div className="h-48 relative overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-white/10">
              {project.progress}% Complete
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-medium text-white mb-1">{project.title}</h3>
            <p className="text-sm text-white/60 mb-6">{project.client}</p>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-white/10 rounded-full mb-6 overflow-hidden">
              <div 
                className="h-full bg-[#fcdab6] rounded-full" 
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {project.team.map((member, i) => (
                  <img key={i} src={member} className="w-8 h-8 rounded-full border border-white/20" alt="Team" />
                ))}
                <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-[10px] text-white">
                  <Users size={12} />
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/60">
                <Clock size={14} />
                <span>{project.deadline}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Add New Project Card */}
      <button className="flex flex-col items-center justify-center h-full min-h-[350px] bg-white/5 border border-dashed border-white/20 rounded-3xl hover:bg-white/10 transition-colors group">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <ArrowRight size={24} className="text-white/60" />
        </div>
        <p className="text-lg font-medium text-white/80">New Project</p>
        <p className="text-sm text-white/40">Start a new draft</p>
      </button>
    </div>
  );
}