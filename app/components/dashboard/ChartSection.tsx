import React from 'react';
import { FaFileExport } from 'react-icons/fa';

interface ChartSectionProps {
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
  children: React.ReactNode;
}

export const ChartSection: React.FC<ChartSectionProps> = ({
  selectedPeriod,
  onPeriodChange,
  children,
}) => {
  const periods = [
    { label: '12 Months', value: '12months' },
    { label: '6 Months', value: '6months' },
    { label: '30 Days', value: '30days' },
    { label: '7 Days', value: '7days' },
  ];

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm lg:p-6">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Total Cash Pickup 
          (Across Stores)
        </h3>
        <div className="flex flex-wrap gap-2 md:justify-end">
          {periods.map((period) => (
            <button
              key={period.value}
              onClick={() => onPeriodChange(period.value)}
              className={`rounded-md px-4 py-2 text-sm transition-colors ${
                selectedPeriod === period.value
                  ? 'bg-gray-900 text-white'
                  : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {period.label}
            </button>
          ))}
          <button className="ml-auto flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 md:ml-4">
            <FaFileExport />
            Export Report
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};