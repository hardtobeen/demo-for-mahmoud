import React from 'react';
import { MoreHorizontal, Star, Mail, Phone, CheckCircle2 } from 'lucide-react';

const clients = [
  {
    id: 1,
    name: 'Esther Howard',
    company: 'Modern Living Realty',
    role: 'Real Estate Agent',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    status: 'Active',
    plan: 'Premium',
    projects: 12
  },
  {
    id: 2,
    name: 'Cameron Williamson',
    company: 'Urban Spaces',
    role: 'Property Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    status: 'Active',
    plan: 'Standard',
    projects: 5
  },
  {
    id: 3,
    name: 'Robert Fox',
    company: 'Fox Developments',
    role: 'Architect',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    status: 'Pending',
    plan: 'Basic',
    projects: 1
  },
  {
    id: 4,
    name: 'Jenny Wilson',
    company: 'Skyline Properties',
    role: 'Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    status: 'Active',
    plan: 'Premium',
    projects: 24
  },
  {
    id: 5,
    name: 'Marvin McKinney',
    company: 'Luxury Estates',
    role: 'Sales Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    status: 'Inactive',
    plan: 'Standard',
    projects: 8
  }
];

export default function ClientsView() {
  return (
    <div className="flex-1 animate-in fade-in duration-500">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden">
        
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 p-6 border-b border-white/10 text-white/60 text-sm font-medium uppercase tracking-wider">
          <div className="col-span-4">Client</div>
          <div className="col-span-3">Contact</div>
          <div className="col-span-2">Plan</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        {/* List */}
        <div className="flex flex-col">
          {clients.map((client) => (
            <div key={client.id} className="grid grid-cols-12 gap-4 p-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors group">
              
              {/* Client Info */}
              <div className="col-span-4 flex items-center gap-4">
                <img src={client.image} alt={client.name} className="w-12 h-12 rounded-full object-cover border border-white/20" />
                <div>
                  <h3 className="font-medium text-white">{client.name}</h3>
                  <p className="text-sm text-white/60">{client.company}</p>
                </div>
              </div>

              {/* Contact Icons */}
              <div className="col-span-3 flex items-center gap-4 text-white/40">
                <button className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                  <Mail size={18} />
                </button>
                <button className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                  <Phone size={18} />
                </button>
              </div>

              {/* Plan Badge */}
              <div className="col-span-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border
                  ${client.plan === 'Premium' ? 'bg-amber-500/20 text-amber-200 border-amber-500/30' : 
                    client.plan === 'Standard' ? 'bg-blue-500/20 text-blue-200 border-blue-500/30' : 
                    'bg-white/10 text-white/60 border-white/10'}
                `}>
                  {client.plan}
                </span>
              </div>

              {/* Status */}
              <div className="col-span-2 flex items-center gap-2">
                 {client.status === 'Active' && <CheckCircle2 size={16} className="text-green-400" />}
                 <span className={`text-sm ${client.status === 'Active' ? 'text-white' : 'text-white/50'}`}>
                   {client.status}
                 </span>
              </div>

              {/* Actions */}
              <div className="col-span-1 flex justify-end">
                <button className="text-white/40 hover:text-white transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}