import React from 'react';
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";

import Link from 'next/link';


interface Location {
    id: string;
    name: string;
    region: string;
    manager: string;
    openingBalance: string;
    remainingBalance: string;
    amountMopped: string;
    feeStatus: string;
    selected?: boolean;
  }
  
  interface LocationsTableProps {
    locations: Location[];
    onLocationToggle?: (id: string) => void;
  }
  
  export const LocationsTable: React.FC<LocationsTableProps> = ({
    locations,
    onLocationToggle,
  }) => {
    return (
      <div className=" rounded-lg shadow-sm">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-transparent">
          <h3 className="text-xl font-semibold text-gray-900">Today's Trending Locations</h3>
          <Link href="/dashboard/locations" className="text-gray-900 underline hover:text-gray-700">
            Monitor Location Activities
          </Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px]">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <MdOutlineIndeterminateCheckBox />
                    <span>Location Name</span>
                    <span>↓</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium">Region</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Manager</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Opening Balance</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Remaining Balance</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Amount Mopped</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Fee Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-[12px]">
              {locations.map((location) => (
                <tr key={location.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={location.selected}
                        onChange={() => onLocationToggle?.(location.id)}
                        className="w-5 h-5 rounded border-gray-300"
                      />
                      <span className="text-gray-900">{location.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{location.region}</td>
                  <td className="px-6 py-4 text-gray-700">{location.manager}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">{location.openingBalance}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">{location.remainingBalance}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">{location.amountMopped}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        location.feeStatus === 'Daily Fee'
                          ? 'bg-green-100 text-green-800'
                          : location.feeStatus === 'Weekend Fee'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {location.feeStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };