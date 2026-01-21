import React from 'react';
import { ResponsiveContainer, LineChart, Line, Tooltip, XAxis } from 'recharts';

const data = [
  { time: '10am', views: 45 },
  { time: '11am', views: 80 },
  { time: '12pm', views: 150 }, // Lunch peak
  { time: '1pm', views: 120 },
  { time: '2pm', views: 180 },
  { time: '3pm', views: 250 }, // Afternoon peak
  { time: '4pm', views: 220 },
  { time: '5pm', views: 300 },
  { time: '6pm', views: 280 },
  { time: '7pm', views: 260 },
  { time: '8pm', views: 190 },
  { time: '9pm', views: 140 },
];

export default function RouteStatsCard() {
  return (
    <div className="relative w-full h-full min-h-[250px] bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 p-6 flex flex-col justify-between overflow-hidden">
      {/* Labels */}
      <div className="flex justify-between items-start z-10">
        <div className="flex items-center gap-3">
          <span className="text-xl font-light text-white/90">Engagement Score</span>
          <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 text-sm font-medium">9.8</span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-xl font-light text-white/90">Avg. Session</span>
          <span className="flex items-center justify-center px-4 py-1.5 rounded-full border border-white/30 text-sm font-medium bg-white/5">12m</span>
        </div>
      </div>

      {/* Floating Labels simulating room hotspots in the graph */}
      <div className="absolute top-[45%] left-[20%] text-xs font-medium text-white/80 z-10 bg-black/20 px-2 py-1 rounded backdrop-blur-sm">
        Living Room
      </div>
      <div className="absolute top-[25%] left-[50%] text-xs font-medium text-white/80 z-10 bg-black/20 px-2 py-1 rounded backdrop-blur-sm">
        Kitchen
      </div>
      <div className="absolute bottom-[40%] right-[15%] text-xs font-medium text-white/80 z-10 bg-black/20 px-2 py-1 rounded backdrop-blur-sm">
        Master Suite
      </div>

      {/* Chart Area */}
      <div className="absolute inset-0 top-20 bottom-0 left-0 right-0">
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={data}>
            <Line 
              type="monotone" 
              dataKey="views" 
              stroke="#ffffff" 
              strokeWidth={2}
              dot={{ r: 4, fill: "white", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#fcdab6" }}
            />
             <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: '8px', border: 'none', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
                cursor={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 2 }}
                formatter={(value: number) => [`${value} Views`, 'Traffic']}
             />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}