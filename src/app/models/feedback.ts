import { User } from './user';

export interface Feedback {
  id?: string;
  title?: string;
  category?: string;
  description?: string;
  status?: 'suggestion' | 'planned' | 'in-progress' | 'live';
  votes?: number;
  comments?: Comments[];
}

export interface Comments {
  id?: string;
  content?: string;
  replies?: string[] | null; // if null it will referred to original post
  replyTo?: string | null;
  userInfo?: User;
  items?: any;
}
