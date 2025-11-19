import { HiSun, HiCloud, HiMoon, HiStar } from 'react-icons/hi';

interface Greeting {
  line1: string;        // e.g. "How’s your afternoon going, Adebowale?"
  line2: string;        // e.g. "Hope you're having a productive and wonderful day!"
  icon: React.ComponentType<{ className?: string }>;
}

const getGreeting = (userName: string = 'there'): Greeting => {
  const hour = new Date().getHours();
  const name = userName.split(' ')[0]; // Use first name only for natural feel

  if (hour >= 5 && hour < 12) {
    return {
      line1: `Good morning, ${name}!`,
      line2: 'Ready to spark some greatness today?',
      icon: HiSun,
    };
  } else if (hour >= 12 && hour < 17) {
    return {
      line1: `How’s your afternoon going, ${name}?`,
      line2: 'Hope you’re having a productive and wonderful day!',
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