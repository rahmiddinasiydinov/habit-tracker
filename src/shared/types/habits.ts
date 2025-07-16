export type Habit = {
  id: string;
  name: string;
  description: string;
  type: 'predefined' | 'custom';
  createdAt: string;  // ISO 8601
  updatedAt: string;  // ISO 8601
};

export type HabitProgressEntry = {
  habitId: string;
  date: string; // YYYY-MM-DD
  status: 'completed' | null;
  updatedAt: string; // ISO 8601
};

export type HabitProgressState = HabitProgressEntry[];