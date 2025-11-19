'use client';
import DashboardLayout from '../components/layout/DashboardLayout';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineCursorClick, HiUsers, HiChartBar } from 'react-icons/hi';
import { PiGearSix, PiShieldCheck, PiTicketBold } from 'react-icons/pi';
import React, { useState } from 'react';
import {
  StatCard,
  QuickActionButton,
  ChartSection,
  LocationsTable,
  SimpleLineChart,
} from '../components/dashboard';
import { GreetingCard } from '../components/GreetingCard';

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('12months');
  const [locations, setLocations] = useState([
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
  ]);

  const handleLocationToggle = (id: string) => {
    setLocations((prev) =>
      prev.map((loc) =>
        loc.id === id ? { ...loc, selected: !loc.selected } : loc
      )
    );
  };

  const userName = 'Adebowale Paul-George';

  return (
    <DashboardLayout
      userName={userName}
      logo={<span className="text-2xl font-bold text-indigo-600">GETSTAC</span>}
      navItems={[
        { name: 'Dashboard', href: '/dashboard', icon: <RxDashboard />  },
        { name: 'Managers', href: '/dashboard/managers', icon: <HiUsers /> },
        { name: 'Locations', href: '/dashboard/locations', icon: <HiOutlineCursorClick /> },
        { name: 'Billing & Invoices', href: '/dashboard/billing', icon: <HiChartBar /> },
      ]}
      supportItems={[
        { name: 'Settings', href: '/dashboard/settings', icon: <PiGearSix /> },
        { name: 'What is new?', href: '/dashboard/what-is-new', icon: <PiShieldCheck /> },
        { name: 'Custom Request', href: '/dashboard/request', icon: <PiTicketBold /> },
      ]}
    >
      <section className="space-y-8">
        <GreetingCard
          userName={userName}
          description="How are you feeling this fine afternoon?"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Balance Across Stores" value="₦50,000,000" />
          <StatCard label="Today's Transactions" value="200" />
          <StatCard label="Total Locations" value="78" />
          <StatCard label="Total Managers" value="78" />
        </div>

        {/* Chart and Quick Actions */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ChartSection
              selectedPeriod={selectedPeriod}
              onPeriodChange={setSelectedPeriod}
            >
              <SimpleLineChart />
            </ChartSection>
          </div>
          
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <QuickActionButton label="Create a new location" />
              <QuickActionButton label="Create a new Manager" />
              <QuickActionButton label="Create a new Region" />
            </div>
          </div>
        </div>

        {/* Locations Table */}
        <LocationsTable
          locations={locations}
          onLocationToggle={handleLocationToggle}
        />
      </section>
    </DashboardLayout>
  );
}