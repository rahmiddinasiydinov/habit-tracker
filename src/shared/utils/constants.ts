import type { Habit } from "../types/habits";

export const RESPONSIVE_DESIGN_CHANGE = 768;
export const SIDEBAR_ANIMATION_TRANSITION_TIME = 500;
export const SIDEBAR_WIDTH = 150;
export const SIDEBAR_WIDTH_MD = 300;
export const WINDOW_WIDTH = window.innerWidth 

export const dummyHabits: Habit[] = [
  {
    id: '1',
    name: 'Morning Exercise',
    description: 'Do 15 minutes of stretching and cardio.',
    type: 'predefined',
    createdAt: '2025-07-01T08:00:00Z',
    updatedAt: '2025-07-01T08:00:00Z',
  },
  {
    id: '2',
    name: 'Read a Book',
    description: 'Read at least 10 pages of any book.',
    type: 'predefined',
    createdAt: '2025-07-02T10:15:00Z',
    updatedAt: '2025-07-02T10:15:00Z',
  },
  {
    id: '3',
    name: 'Meditate',
    description: 'Spend 10 minutes meditating in a quiet space.',
    type: 'predefined',
    createdAt: '2025-07-03T06:30:00Z',
    updatedAt: '2025-07-03T06:30:00Z',
  },
  {
    id: '4',
    name: 'Drink Water',
    description: 'Drink 8 glasses of water throughout the day.',
    type: 'predefined',
    createdAt: '2025-07-04T09:00:00Z',
    updatedAt: '2025-07-04T09:00:00Z',
  },
  {
    id: '5',
    name: 'Learn Programming',
    description: 'Practice coding challenges for 30 minutes.',
    type: 'predefined',
    createdAt: '2025-07-05T14:45:00Z',
    updatedAt: '2025-07-05T14:45:00Z',
  },
];
