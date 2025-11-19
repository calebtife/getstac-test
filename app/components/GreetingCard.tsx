import React from 'react';
import { HiSun, HiCloud, HiMoon, HiStar } from 'react-icons/hi';

interface Greeting {
  line1: string;       
  line2: string;        
  icon: React.ComponentType<{ className?: string }>;
}

const getGreeting = (userName: string = 'there'): Greeting => {
  const hour = new Date().getHours();
  const name = userName.split(' ')[0]; 

  if (hour >= 5 && hour < 12) {
    return {
      line1: `Good morning, ${name}!`,
      line2: 'Ready to spark some greatness today?',
      icon: HiSun,
    };
  } else if (hour >= 12 && hour < 17) {
    return {
      line1: `How's your afternoon going, ${name}?`,
      line2: 'Hope you are having a productive and wonderful day!',
      icon: HiCloud,
    };
  } else if (hour >= 17 && hour < 22) {
    return {
      line1: `Good evening, ${name}!`,
      line2: 'Time to unwind or power through — you’ve got this!',
      icon: HiStar,
    };
  } else {
    return {
      line1: `Hey ${name}, still up?`,
      line2: 'The night is young — or maybe it’s time for some rest?',
      icon: HiMoon,
    };
  }
};

interface GreetingCardProps {
  userName?: string;
  description?: string;
  className?: string;
}

export const GreetingCard: React.FC<GreetingCardProps> = ({
  userName = 'there',
  className = '',
}) => {
  const { line1, line2, icon: Icon } = getGreeting(userName);

  return (
    <section
      className={`w-full rounded-2xl border border-gray-100 p-4 sm:p-6 ${className}`}
      aria-label="Personal greeting"
    >
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-start gap-3 sm:gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 sm:h-14 sm:w-14">
            <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div className="space-y-1">
            <p className="text-lg font-semibold text-gray-900 sm:text-2xl">{line1}</p>
            <p className="text-sm text-gray-600 sm:text-base">{line2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};