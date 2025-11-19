import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">{label}</p>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
};