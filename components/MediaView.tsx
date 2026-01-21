import React from 'react';
import { Folder, Image as ImageIcon, Film, MoreVertical, HardDrive } from 'lucide-react';

const folders = [
  { name: 'Recent Uploads', count: 124, size: '2.4 GB' },
  { name: 'Raw Panoramas', count: 45, size: '15.2 GB' },
  { name: 'Processed HDR', count: 89, size: '8.1 GB' },
  { name: 'Client Deliverables', count: 12, size: '1.2 GB' },
];

const files = [
  { name: 'Living_Room_01.jpg', type: 'image', size: '24 MB', date: 'Just now' },
  { name: 'Kitchen_360.mp4', type: 'video', size: '145 MB', date: '2 hrs ago' },
  { name: 'Exterior_Front.jpg', type: 'image', size: '18 MB', date: 'Yesterday' },
  { name: 'Master_Bed_02.jpg', type: 'image', size: '22 MB', date: 'Yesterday' },
  { name: 'Walkthrough.mp4', type: 'video', size: '450 MB', date: 'Oct 24' },
  { name: 'Balcony_View.jpg', type: 'image', size: '15 MB', date: 'Oct 23' },
];

export default function MediaView() {
  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      
      {/* Storage Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <HardDrive size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-medium text-white">Cloud Storage</h3>
              <p className="text-xs text-white/60">240GB used of 1TB</p>
            </div>
          </div>
          <button className="text-sm text-[#fcdab6] hover:text-white transition-colors">Upgrade Plan</button>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#fcdab6] to-[#d68a68] w-[24%] rounded-full"></div>
        </div>
      </div>

      {/* Folders */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {folders.map((folder, i) => (
          <div key={i} className="bg-white/5 hover:bg-white/10 transition-colors border border-white/5 rounded-2xl p-4 cursor-pointer group">
             <Folder className="text-[#fcdab6] mb-3 w-8 h-8 group-hover:scale-110 transition-transform" fill="#fcdab6" fillOpacity={0.2} />
             <h4 className="text-white font-medium text-sm truncate">{folder.name}</h4>
             <p className="text-white/40 text-xs">{folder.count} files • {folder.size}</p>
          </div>
        ))}
      </div>

      {/* Files Grid */}
      <h3 className="text-white/80 font-medium mb-4">Recent Files</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {files.map((file, i) => (
          <div key={i} className="group relative aspect-square bg-white/5 rounded-2xl border border-white/5 overflow-hidden hover:border-white/20 transition-all">
             <img 
               src={`https://source.unsplash.com/random/400x400?interior,${i}`} 
               alt={file.name}
               className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <div className="flex items-center justify-between">
                   <span className="text-white text-xs font-medium truncate pr-2">{file.name}</span>
                   {file.type === 'video' ? <Film size={12} className="text-white/70" /> : <ImageIcon size={12} className="text-white/70" />}
                </div>
                <p className="text-[10px] text-white/50">{file.size}</p>
             </div>
             
             <button className="absolute top-2 right-2 p-1 rounded-full bg-black/40 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60">
               <MoreVertical size={14} />
             </button>
          </div>
        ))}
      </div>
    </div>
  );
}