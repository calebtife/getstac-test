import React from 'react';

export const SimpleLineChart: React.FC = () => {
    return (
      <div className="relative h-64">
        
        
        <svg className="w-full h-full" viewBox="0 0 700 250" preserveAspectRatio="none">
          {/* Grid lines */}
          <line x1="0" y1="50" x2="700" y2="50" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="100" x2="700" y2="100" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="150" x2="700" y2="150" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="200" x2="700" y2="200" stroke="#e5e7eb" strokeWidth="1" />
          
          {/* Chart lines */}
          <path
            d="M 0 120 Q 50 110, 100 115 T 200 105 T 300 95 T 400 90 T 500 85 T 600 75 T 700 70"
            fill="none"
            stroke="#818cf8"
            strokeWidth="2"
          />
          <path
            d="M 0 140 Q 50 135, 100 138 T 200 130 T 300 135 T 400 125 T 500 130 T 600 120 T 700 115"
            fill="none"
            stroke="#1e293b"
            strokeWidth="2"
          />
          
          {/* Data point */}
          <circle cx="300" cy="95" r="5" fill="#1e293b" />
        </svg>
        
        {/* X-axis labels */}
        <div className="flex justify-between px-4 mt-0 text-xs text-gray-500">
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
          <span>Jan</span>
        </div>
      </div>
    );
  };