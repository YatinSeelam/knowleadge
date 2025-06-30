import React from 'react';

const BoltBadge: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        {/* Main badge with shadow effect */}
        <div className="w-30 h-30 bg-white rounded-full border-2 border-gray-800 shadow-[4px_4px_0_0_rgb(17,24,39)] hover:shadow-[6px_6px_0_0_rgb(17,24,39)] transition-all duration-200 flex items-center justify-center transform hover:-translate-y-1">
          {/* Bolt logo */}
          <div className="relative">
            {/* Black 'b' */}
            <div className="text-2xl font-black text-gray-900">b</div>
            
            {/* Circular text around the badge */}
            <div className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <svg className="w-full h-full animate-spin" style={{ animationDuration: '20s' }} viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circle"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  />
                </defs>
                <text className="text-xs font-bold fill-gray-700">
                  <textPath href="#circle" startOffset="0%">
                    POWERED BY BOLT • NEW • MADE IN BOLT • NEW • 
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoltBadge;