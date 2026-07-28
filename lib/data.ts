import { GREEN, GREEN_SOFT, GREEN_TEXT, ORANGE, ORANGE_SOFT, ORANGE_TEXT, TEAL, TRACK } from './colors';

// Everything in this file is placeholder data standing in for the backend.
// Swap each function/constant for a real fetch once the API exists —
// the component props are already shaped to make that a drop-in change.

export const NAV_ITEMS = [
  { key: 'dashboard', label: 'Dashboard', href: '/dashboard' },
  { key: 'workouts', label: 'Workouts', href: '/workouts' },
  { key: 'meals', label: 'Meals', href: '/meals' },
  { key: 'progress', label: 'Progress', href: '/progress' },
  { key: 'goals', label: 'Goals', href: '/goals' },
  { key: 'settings', label: 'Settings', href: '/settings' },
];

export const PAGE_COPY: Record<string, { title: string; sub: string }> = {
  dashboard: { title: 'Good morning, Alex', sub: 'Tuesday, July 28 · Day 12 of your streak' },
  workouts: { title: 'Workouts', sub: 'Plan your week and log today\u2019s session' },
  meals: { title: 'Meals', sub: 'Today\u2019s food log and macro breakdown' },
  progress: { title: 'Progress', sub: 'Trends across weight, training, and consistency' },
  goals: { title: 'Goals', sub: 'What you\u2019re working toward, and how close you are' },
  settings: { title: 'Settings', sub: 'Units, notifications, and connected accounts' },
};

export const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const weekPlanLabels = ['Push', 'Pull', 'Legs', 'Rest', 'Push', 'Cardio', 'Rest'];
export const ACTIVE_DAY = 1;

export const todaysProgram = [
  { name: 'Barbell Back Squat', target: '4 \u00d7 8', weight: '185 lbs', rest: '90s rest' },
  { name: 'Romanian Deadlift', target: '3 \u00d7 10', weight: '135 lbs', rest: '75s rest' },
  { name: 'Walking Lunges', target: '3 \u00d7 12', weight: '40 lb DB', rest: '60s rest' },
  { name: 'Leg Press', target: '4 \u00d7 10', weight: '270 lbs', rest: '90s rest' },
];

export const workoutLibrary = (accent: string) => [
  { name: 'Barbell Back Squat', sets: 4, reps: '8 reps', difficulty: 'Intermediate', tagBg: 'oklch(93% 0.04 255)', tagColor: 'oklch(42% 0.12 255)', c1: accent, c2: GREEN, pr: true },
  { name: 'Push-Up Pyramid', sets: 5, reps: '12 reps', difficulty: 'Beginner', tagBg: GREEN_SOFT, tagColor: GREEN_TEXT, c1: TEAL, c2: accent, pr: false },
  { name: 'Deadlift', sets: 3, reps: '5 reps', difficulty: 'Advanced', tagBg: ORANGE_SOFT, tagColor: ORANGE_TEXT, c1: 'oklch(45% 0.02 255)', c2: accent, pr: true },
  { name: 'Plank Hold', sets: 3, reps: '60 sec', difficulty: 'Beginner', tagBg: GREEN_SOFT, tagColor: GREEN_TEXT, c1: GREEN, c2: TEAL, pr: false },
];

export const muscleVolume = (accent: string) => [
  { label: 'Push', pct: 88, value: '9.2k', color: accent },
  { label: 'Pull', pct: 76, value: '7.8k', color: GREEN },
  { label: 'Legs', pct: 48, value: '4.6k', color: ORANGE },
  { label: 'Core', pct: 62, value: '3.1k', color: TEAL },
];

export const meals = (accent: string) => [
  { slot: 'Breakfast', name: 'Greek Yogurt Power Bowl', kcal: 420, protein: 32, c1: 'oklch(80% 0.1 90)', c2: ORANGE },
  { slot: 'Lunch', name: 'Grilled Chicken & Quinoa', kcal: 560, protein: 45, c1: ORANGE, c2: 'oklch(80% 0.1 80)' },
  { slot: 'Dinner', name: 'Salmon & Roasted Veg', kcal: 610, protein: 40, c1: 'oklch(66% 0.14 25)', c2: GREEN },
  { slot: 'Snack', name: 'Almond Protein Shake', kcal: 250, protein: 20, c1: accent, c2: 'oklch(78% 0.08 255)' },
];

export const macros = (accent: string) => [
  { label: 'Protein', value: '132g / 160g', pct: 82, color: accent },
  { label: 'Carbs', value: '168g / 220g', pct: 76, color: GREEN },
  { label: 'Fat', value: '52g / 70g', pct: 74, color: ORANGE },
];

export const workoutBars = [55, 72, 90, 72, 90, 80].map((h, i) => ({ label: 'W' + (i + 1), height: h, active: i === 5 }));
export const heatColors = [TRACK, 'oklch(88% 0.05 155 / 0.5)', 'oklch(75% 0.12 155 / 0.7)', 'oklch(60% 0.15 155)'];
export const heatIntensity = [1, 2, 3, 0, 2, 3, 2, 2, 3, 3, 1, 2, 3, 0, 3, 2, 3, 2, 1, 3, 3, 2, 3, 0, 2, 3, 2, 3, 3, 2, 3, 3, 2, 1, 3];

export const personalRecords = [
  { ex: 'Back Squat', value: '225 lbs \u00d7 3', date: 'Jul 21' },
  { ex: 'Deadlift', value: '275 lbs \u00d7 1', date: 'Jul 14' },
  { ex: 'Bench Press', value: '165 lbs \u00d7 5', date: 'Jul 9' },
];

export const progressPhotos = (accent: string) => [
  { label: 'Front \u00b7 Jul 1', c1: accent, c2: 'oklch(80% 0.03 250)' },
  { label: 'Side \u00b7 Jul 1', c1: GREEN, c2: 'oklch(85% 0.05 155)' },
  { label: 'Back \u00b7 Jul 1', c1: ORANGE, c2: 'oklch(85% 0.06 55)' },
];

export const goalMilestones = [
  { label: 'Completed first 4-week program', date: 'Jun 2' },
  { label: 'Hit a 10-day workout streak', date: 'Jun 20' },
  { label: 'Logged 100 meals', date: 'Jul 5' },
];

export type Integration = { name: string; connected: boolean };

export const defaultIntegrations: Integration[] = [
  { name: 'Apple Health', connected: true },
  { name: 'Google Fit', connected: true },
  { name: 'Garmin', connected: false },
  { name: 'Whoop', connected: false },
  { name: 'Strava', connected: true },
];
