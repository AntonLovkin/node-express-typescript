export interface NoteI {
  id: string;
  created_at: string | Date;
  edited_at?: string | Date | null;
  content: string;
  category: string;
  name: string;
  dates: string | undefined;
  is_archived: boolean | undefined;
}

export interface AddNoteI {
  content: string;
  category: string;
  name: string;
}

export interface EditNoteI {
  id?: string;
  created_at?: string | Date;
  edited_at?: string | Date;
  content?: string;
  category?: "Task" | "Idea" | "Random Thoughts";
  name?: string;
  dates?: string;
  is_archived?: boolean;
}

export interface InitialState {
  notes: NoteI[];
}

export type summaryNoteType = {
  category: string;
  active: number;
  archived: number;
}