
export enum ActivityType {
  RUN = 'RUN',
  CYCLE = 'CYCLE',
  WALK = 'WALK',
  GYM = 'GYM'
}

export interface UserPreferences {
  isPublicProfile: boolean;
  isAnonymousMode: boolean;
  useMetricSystem: boolean;
  hideLocationData: boolean;
  shareTelemetry: boolean;
}

export interface UserProfile {
  name: string;
  email?: string;
  photoUrl?: string;
  currentWeight: number;
  targetWeight: number;
  goalType: 'LOSE' | 'MAINTAIN' | 'GAIN';
  isLoggedIn: boolean;
  hasSeenOnboarding?: boolean;
  hasSeenTutorial?: boolean;
  preferences?: UserPreferences;
}

export interface ExerciseDefinition {
  id: string;
  name: string;
  category: 'Peito' | 'Costas' | 'Pernas' | 'Ombros' | 'Braços' | 'Core' | 'Cardio' | 'Alongamento' | 'Mobilidade' | 'Funcional';
  secondaryMuscles?: string[];
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  equipment: 'Pesos Livres' | 'Máquinas' | 'Cabos' | 'Peso Corporal' | 'Elásticos' | 'Kettlebell' | 'Bola';
  imageUrl: string;
  description: string;
  steps: string[];
  commonErrors: string[];
  tips: string[];
  variations?: string[];
}

export interface GPSPoint {
  lat: number;
  lng: number;
  timestamp: number;
}

export interface Activity {
  id: string;
  type: ActivityType;
  distance?: number; // meters
  duration: number; // seconds
  date: string;
  perceivedExertion: number;
  photoUrl?: string;
  gymSets?: GymLogEntry[];
  caloriesBurned?: number;
  path?: GPSPoint[];
}

export interface GymLogEntry {
  exerciseId: string;
  exerciseName: string;
  sets: GymSet[];
  photoUrl?: string;
}

export interface GymSet {
  reps: number;
  weight: number;
  photoUrl?: string;
  postureFeedback?: string;
}

export interface FoodLog {
  id: string;
  description: string;
  timestamp: string;
  calories: number;
  isOffPlan: boolean;
  photoUrl?: string;
}

export interface Workout {
  day: number;
  title: string;
  description: string;
  type: string;
  intensity: string;
  durationMinutes: number;
}

export interface TrainingPlan {
  id: string;
  goal: string;
  workouts: Workout[];
  startDate: string;
  endDate: string;
}

export interface PerformanceStats {
  fatigue: number;
  fitness: number;
  recovery: number;
  dietScore: number;
  predictedTimes: {
    '5k': string;
    '10k': string;
    'HalfMarathon': string;
  };
}

export type Tab = 'dashboard' | 'training' | 'tracker' | 'nutrition' | 'insights' | 'library' | 'history' | 'profile';
