'use client';

import React, { useMemo, useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineCursorClick, HiUsers, HiChartBar } from 'react-icons/hi';
import { PiGearSix, PiShieldCheck, PiTicketBold } from 'react-icons/pi';
import { Search, SlidersHorizontal, X } from 'lucide-react';

type Location = {
  id: string;
  name: string;
  region: string;
  manager: string;
  openingBalance: string;
  remainingBalance: string;
  amountMopped: string;
  feeStatus: 'Daily Fee' | 'Weekend Fee' | string;
  selected?: boolean;
};

const stats = [
  { label: 'Total Active Locations', value: 66 },
  { label: 'Total Deactivated Locations', value: 10 },
  { label: 'Locations with Cash', value: 10 },
  { label: 'Locations without Cash', value: 10 },
];

const activeFilters = ['All stores', 'Surulere, Ojodu'];

const initialLocations: Location[] = [
  {
    id: '1',
    name: 'Bokku - Lekki',
    region: 'Bokku - Region 1',
    manager: 'Cynthia Ofori',
    openingBalance: '₦8,570,000',
    remainingBalance: '₦570,000',
    amountMopped: '₦8,000,000',
    feeStatus: 'Daily Fee',
    selected: true,
  },
  {
    id: '2',
    name: 'Bokku - Egbeda',
    region: 'Bokku - Region 2',
    manager: 'Adetola Makinde',
    openingBalance: '₦3,900,000',
    remainingBalance: '₦1,000,000',
    amountMopped: '₦2,900,000',
    feeStatus: 'Weekend Fee',
    selected: true,
  },
  {
    id: '3',
    name: 'Bokku - Egbeda',
    region: 'Bokku - Region 2',
    manager: 'Adetola Makinde',
    openingBalance: '₦3,900,000',
    remainingBalance: '₦1,000,000',
    amountMopped: '₦2,900,000',
    feeStatus: 'Weekend Fee',
    selected: true,
  },
  {
    id: '4',
    name: 'Bokku - Egbeda',
    region: 'Bokku - Region 2',
    manager: 'Adetola Makinde',
    openingBalance: '₦3,900,000',
    remainingBalance: '₦1,000,000',
    amountMopped: '₦2,900,000',
    feeStatus: 'Weekend Fee',
    selected: true,
  },
  {
    id: '5',
    name: 'Bokku - Egbeda',
    region: 'Bokku - Region 2',
    manager: 'Adetola Makinde',
    openingBalance: '₦3,900,000',
    remainingBalance: '₦1,000,000',
    amountMopped: '₦2,900,000',
    feeStatus: 'Weekend Fee',
    selected: true,
  },
];

export default function LocationPage() {
  const [locations, setLocations] = useState<Location[]>(initialLocations);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLocationToggle = (id: string) => {
    setLocations((prev) =>
      prev.map((location) =>
        location.id === id ? { ...location, selected: !location.selected } : location
      )
    );
  };

  const filteredLocations = useMemo(() => {
    if (!searchTerm.trim()) return locations;
    const query = searchTerm.toLowerCase();
    return locations.filter(
      (location) =>
        location.name.toLowerCase().includes(query) ||
        location.region.toLowerCase().includes(query) ||
        location.manager.toLowerCase().includes(query)
    );
  }, [locations, searchTerm]);

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: <RxDashboard /> },
    { name: 'Managers', href: '/dashboard/managers', icon: <HiUsers /> },
    { name: 'Locations', href: '/dashboard/locations', icon: <HiOutlineCursorClick /> },
    { name: 'Billing & Invoices', href: '/dashboard/billing', icon: <HiChartBar /> },
  ];

  const supportItems = [
    { name: 'Settings', href: '/dashboard/settings', icon: <PiGearSix /> },
    { name: 'What is new?', href: '/dashboard/what-is-new', icon: <PiShieldCheck /> },
    { name: 'Custom Request', href: '/dashboard/request', icon: <PiTicketBold /> },
  ];

  const userName = 'Adebowale Paul-George';

  return (
    <DashboardLayout navItems={navItems} supportItems={supportItems} userName={userName}>
      <section className="space-y-6">
        <header className="space-y-1">
          <h1 className="text-2xl font-semibold text-gray-900">Today&apos;s Trending Locations</h1>
          <p className="text-gray-500">Overview of all the cash activities at your store</p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                {stat.label}
              </p>
              <p className="mt-3 text-3xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-transparent p-4  md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {activeFilters.map((filter) => (
              <button
                key={filter}
                className="inline-flex items-center gap-2 rounded-full bg-[#EFE7FF] px-4 py-2 text-sm font-medium text-[#242440]"
              >
                {filter} <X size={14} />
              </button>
            ))}
            <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 bg-white">
              <SlidersHorizontal size={16} /> More filters
            </button>
          </div>
          <div className="w-full max-w-xs">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full rounded-xl bg-white border border-gray-200 py-2.5 pl-10 pr-3 text-sm text-gray-900 focus:border-[#242440] focus:outline-none focus:ring-1 focus:ring-[#242440]"
                placeholder="Search"
              />
            </label>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="bg-[#242440] text-left text-xs uppercase tracking-wide text-white">
                  <th className="px-6 py-4 font-medium">
                    
                      Location Name <span className="text-base">↓</span>
                    
                  </th>
                  <th className="px-6 py-4 font-medium">Region</th>
                  <th className="px-6 py-4 font-medium">Manager</th>
                  <th className="px-6 py-4 font-medium">Opening Balance</th>
                  <th className="px-6 py-4 font-medium">Remaining Balance</th>
                  <th className="px-6 py-4 font-medium">Amount Mopped</th>
                  <th className="px-6 py-4 font-medium">Fee Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {filteredLocations.map((location) => (
                  <tr key={location.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={location.selected}
                          onChange={() => handleLocationToggle(location.id)}
                          className="h-4 w-4 rounded border-gray-300 text-[#242440] focus:ring-[#242440]"
                        />
                        <span className="font-medium text-gray-900">{location.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{location.region}</td>
                    <td className="px-6 py-4 text-gray-600">{location.manager}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {location.openingBalance}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {location.remainingBalance}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {location.amountMopped}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold ${location.feeStatus === 'Daily Fee'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-purple-100 text-purple-700'
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
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 px-6 py-4 text-sm text-gray-600">
            <button className="rounded-xl border border-gray-200 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <p>
              Page <span className="font-semibold text-gray-900">1</span> of{' '}
              <span className="font-semibold text-gray-900">10</span>
            </p>
            <div className="flex items-center gap-3">

              <button className="rounded-xl border border-gray-200 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
