import React from 'react';
import Image from 'next/image';
import { HiX } from 'react-icons/hi';
import profileImage from '../../Assets/profileImage.jpg';

interface AccountManagerCardProps {
  onClose: () => void;
  className?: string;
}

const ACCOUNT_MANAGER = {
  name: 'Candice Ademide',
  email: 'candice.ademide@getstac.com',
  phone: '+2349087254489',
};

export const AccountManagerCard: React.FC<AccountManagerCardProps> = ({
  onClose,
  className = '',
}) => {
  const whatsappNumber = ACCOUNT_MANAGER.phone.replace(/\D/g, '');

  return (
    <section
      className={`w-80 max-w-xs rounded-2xl bg-white p-5 text-sm text-gray-600 shadow-2xl ring-1 ring-gray-100 ${className}`}
      aria-label="Account manager contact card"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-base font-semibold text-gray-900">
            {ACCOUNT_MANAGER.name} is your Account Manager
          </p>
          <p className="mt-2 text-xs text-gray-500">
            The fastest way to resolve issues is to reach out to your account manager ASAP. Find their details below.
          </p>
        </div>
        <button
          onClick={onClose}
          className="rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          aria-label="Close account manager card"
        >
          <HiX className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
        <Image
          src={profileImage}
          alt="Account manager profile picture"
          className="h-12 w-12 rounded-full object-cover"
          width={48}
          height={48}
        />
        <div className="text-sm">
          <p className="font-semibold text-gray-900">{ACCOUNT_MANAGER.name}</p>
          <a
            href={`mailto:${ACCOUNT_MANAGER.email}`}
            className="block text-indigo-600 hover:underline"
          >
            {ACCOUNT_MANAGER.email}
          </a>
          <a
            href={`tel:${ACCOUNT_MANAGER.phone}`}
            className="text-gray-700 hover:text-gray-900"
          >
            {ACCOUNT_MANAGER.phone}
          </a>
        </div>
      </div>

      <div className="mt-5 space-y-3 text-center">
        <a
          href={`mailto:${ACCOUNT_MANAGER.email}`}
          className="block w-full rounded-lg bg-[#242440] py-3 text-sm font-semibold text-white transition hover:bg-indigo-900"
        >
          Send an email
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-lg border border-gray-200 py-3 text-sm font-semibold text-[#242440] transition hover:border-[#242440]"
        >
          Send a message on WhatsApp
        </a>
      </div>
    </section>
  );
};

