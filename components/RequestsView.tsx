import React from 'react';
import { FileText, AlertCircle, Check, X, Clock } from 'lucide-react';

const requests = [
  {
    id: 1,
    title: "New Tour Request: Villa Sunrise",
    sender: "Elena Fisher",
    type: "New Order",
    date: "2 mins ago",
    priority: "High",
    status: "Pending"
  },
  {
    id: 2,
    title: "Update Hotspot Links",
    sender: "John Doe",
    type: "Correction",
    date: "1 hour ago",
    priority: "Medium",
    status: "Review"
  },
  {
    id: 3,
    title: "Export 4K Stills",
    sender: "Sarah Connor",
    type: "Export",
    date: "Yesterday",
    priority: "Low",
    status: "Approved"
  },
  {
    id: 4,
    title: "Retake Living Room Scene",
    sender: "Mike Ross",
    type: "Correction",
    date: "2 days ago",
    priority: "High",
    status: "Rejected"
  }
];

export default function RequestsView() {
  return (
    <div className="animate-in fade-in duration-500 max-w-5xl">
       <div className="mb-6 flex items-center justify-between">
         <h2 className="text-2xl font-light text-white">Pending Requests</h2>
         <div className="text-sm text-white/60">
           <span className="font-medium text-white">4</span> active tasks
         </div>
       </div>

       <div className="space-y-4">
         {requests.map((req) => (
           <div key={req.id} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 p-5 flex items-center gap-6 hover:bg-white/15 transition-colors">
             
             {/* Icon */}
             <div className={`w-12 h-12 rounded-full flex items-center justify-center border
               ${req.type === 'New Order' ? 'bg-green-500/20 border-green-500/30 text-green-300' :
                 req.type === 'Correction' ? 'bg-orange-500/20 border-orange-500/30 text-orange-300' :
                 'bg-blue-500/20 border-blue-500/30 text-blue-300'}
             `}>
               <FileText size={20} />
             </div>

             {/* Content */}
             <div className="flex-1">
               <div className="flex items-center gap-3 mb-1">
                 <h3 className="font-medium text-white text-lg">{req.title}</h3>
                 {req.priority === 'High' && (
                   <span className="bg-red-500/20 text-red-200 text-[10px] px-2 py-0.5 rounded border border-red-500/30 uppercase tracking-wide">High Priority</span>
                 )}
               </div>
               <div className="flex items-center gap-4 text-sm text-white/60">
                 <span>{req.sender}</span>
                 <span className="w-1 h-1 rounded-full bg-white/30"></span>
                 <span className="flex items-center gap-1">
                   <Clock size={12} /> {req.date}
                 </span>
               </div>
             </div>

             {/* Actions */}
             <div className="flex items-center gap-2">
               {req.status === 'Pending' ? (
                 <>
                   <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium transition-colors">
                     <X size={16} />
                     Reject
                   </button>
                   <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#fcdab6] text-[#8c3a28] font-medium text-sm hover:bg-white hover:text-[#8c3a28] transition-colors shadow-lg">
                     <Check size={16} />
                     Approve
                   </button>
                 </>
               ) : (
                 <span className={`px-4 py-2 rounded-xl text-sm font-medium border
                   ${req.status === 'Approved' ? 'border-green-500/30 text-green-300' : 
                     req.status === 'Rejected' ? 'border-red-500/30 text-red-300' : 
                     'border-white/20 text-white/50'}
                 `}>
                   {req.status}
                 </span>
               )}
             </div>

           </div>
         ))}
       </div>
    </div>
  );
}