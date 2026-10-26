export interface SubjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  festiveHighlight: string;
  keyTopics: string[];
  learningOutcomes: string[];
}

export interface TimetableSlot {
  time: string;
  subject: string;
  room: string;
  notes: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  dateLabel: string;
  timeLabel: string;
  locationLabel: string;
  description: string;
  category: 'celebration' | 'academic' | 'creative' | 'community';
  isPlaceholder: boolean;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  details: string;
  category: 'Curriculum' | 'Festive Event' | 'Community' | 'Notice';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
