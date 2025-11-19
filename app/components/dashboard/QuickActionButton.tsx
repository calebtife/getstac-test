import React from 'react';

interface QuickActionButtonProps {
    label: string;
    onClick?: () => void;
  }
  
  export const QuickActionButton: React.FC<QuickActionButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="w-full flex items-center gap-3 px-6 py-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left"
      >
        <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
        <span className="text-gray-900 font-medium">{label}</span>
      </button>
    );
  };