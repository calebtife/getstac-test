"use client";

import React, { ReactNode, useState, useEffect, isValidElement, cloneElement, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  HiMenu,
  HiX,
  HiOutlineLightningBolt,
  HiOutlineBell,
} from 'react-icons/hi';
import logo from '../../../Assets/Logo.png';
import { Search } from 'lucide-react';
import profileImage from '../../../Assets/profileImage.jpg';
import { AccountManagerCard } from '../AccountManagerCard';


interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode | React.ComponentType<{ className?: string }>;
  current?: boolean;
}
interface SupportItem {
  name: string;
  href: string;
  icon: React.ReactNode | React.ComponentType<{ className?: string }>;
  current?: boolean;
}

interface DashboardLayoutProps {
  children: ReactNode;  
  navItems?: NavItem[];
  logo?: ReactNode;
  userName?: string;
  supportItems?: SupportItem[];


}



export default function DashboardLayout({
  children,
  navItems,
  supportItems,
  userName = 'User',

}: DashboardLayoutProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showAccountManager, setShowAccountManager] = useState(false);
  const accountCardRef = useRef<HTMLDivElement | null>(null);
  const escalateButtonRef = useRef<HTMLButtonElement | null>(null);


  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(false);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!showAccountManager) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        accountCardRef.current?.contains(target) ||
        escalateButtonRef.current?.contains(target)
      ) {
        return;
      }
      setShowAccountManager(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showAccountManager]);


  const supportNavigation = supportItems?.map(item => ({
    ...item,
    current: pathname === item.href || pathname.startsWith(item.href + '/'),
  }));

  const navigation = navItems?.map(item => ({
    ...item,
    current: pathname === item.href || pathname.startsWith(item.href + '/'),
  }));

  const renderIcon = (icon: NavItem['icon']) => {
    if (!icon) return null;


    if (typeof icon === 'function') {
      const Icon = icon as React.ComponentType<{ className?: string }>;
      return <Icon className="w-5 h-5 mr-3 shrink-0" />;
    }


    if (isValidElement(icon)) {
      const element = icon as React.ReactElement<any>;
      const existing = (element.props as any).className ?? '';
      return cloneElement(element, { className: `${existing} w-5 h-5 mr-3 shrink-0` } as any);
    }

    return null;
  };

  const closeSidebar = () => setSidebarOpen(false);
  const toggleAccountManager = () => setShowAccountManager((prev) => !prev);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
          ${isMobile && !sidebarOpen ? '-translate-x-full' : 'translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 ">
            <div className='flex items-center gap-2'>
              <img src={logo?.src} className='w-5 h-5' />
              <h1 className="text-xl font-bold text-[#101010] animate-pulse">GETSTAC</h1>
            </div>
            {isMobile && (
              <button onClick={closeSidebar} className="p-2 text-gray-500 hover:text-gray-700">
                <HiX className="w-6 h-6" />
              </button>
            )}
          </div>

          <div className="relative">
            <Search className="absolute left-5 top-9 transform -translate-y-1/2 text-neutral-400" size={18} />
            <input
              type="text"
              placeholder="Search"

              className="max-w-[280px]  px-8 py-3 m-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white shadow-soft"
            />
          </div>

          {/* Navigation */}
          <nav className="px-4 py-6 space-y-1 overflow-y-auto">
            {navigation?.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeSidebar}
                className={`
                  flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${item.current
                    ? 'bg-[#242440] text-white border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
              >
                {renderIcon(item.icon)}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* support navigation */}
          <div className='flex flex-col gap-2 px-2 items-start'>
            <h2 className='text-lg font-bold text-black'>Support</h2>
            <nav className="px-4 py-2 space-y-1 overflow-y-auto">
              {supportNavigation?.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeSidebar}
                  className={`
                  flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${item.current
                      ? 'bg-[#242440] text-white border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }
                `}
                >
                  {renderIcon(item.icon)}
                  {item.name}
                </Link>
              ))}
            </nav>

          </div>



        </div>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${!isMobile ? 'pl-64' : ''}`}>
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
            <div className="flex flex-1 items-center gap-3 min-w-[220px]">
              {isMobile && (
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <HiMenu className="w-6 h-6" />
                </button>
              )}
              <div className="flex items-center gap-2">
                <div className="relative h-12 w-12">
                  {/* Profile Image */}
                  <img
                    src={profileImage.src}
                    alt="profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                  <span className="absolute bottom-1 right-0.5 block w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <div>
                  <h2 className='text-lg'>{userName}</h2>
                  <p className='text-sm'>Welcome back to Bokku HQ</p>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-end gap-3 sm:w-auto">
              <div className="relative w-full sm:w-auto">
                <button
                  ref={escalateButtonRef}
                  onClick={toggleAccountManager}
                  aria-expanded={showAccountManager}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#242440] py-2 px-4 text-sm font-medium text-white transition hover:bg-indigo-900 sm:w-auto"
                >
                  <HiOutlineLightningBolt /> Escalate an Issue
                </button>
                {showAccountManager && (
                  <div
                    ref={accountCardRef}
                    className="absolute right-0 top-14 z-40 drop-shadow-xl"
                  >
                    <AccountManagerCard onClose={() => setShowAccountManager(false)} />
                  </div>
                )}
              </div>
              <button
                className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100"
                aria-label="Notifications"
              >
                <HiOutlineBell className="text-2xl" />
              </button>
            </div>

          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-screen p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}