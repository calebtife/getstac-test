import React from 'react';

interface ChartSectionProps {
    title: string;
    selectedPeriod: string;
    onPeriodChange: (period: string) => void;
    children: React.ReactNode;
  }
  
  export const ChartSection: React.FC<ChartSectionProps> = ({
    title,
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
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center gap-2">
            {periods.map((period) => (
              <button
                key={period.value}
                onClick={() => onPeriodChange(period.value)}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  selectedPeriod === period.value
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {period.label}
              </button>
            ))}
            <button className="ml-4 px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export Report
            </button>
          </div>
        </div>
        {children}
      </div>
    );
  };