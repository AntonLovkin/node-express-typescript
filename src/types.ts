export interface NoteI {
  id: string;
  createdAt: string | Date;
  editedAt?: string | Date;
  content: string;
  category: string;
  name: string;
  dates: string | undefined;
  isArchived: boolean | undefined;
}

export interface AddNoteI {
  content: string;
  category: string;
  name: string;
}

export interface EditNoteI {
  id?: string;
  createdAt?: string;
  content: string;
  category: string;
  name: string;
  dates?: string | undefined;
  isArchived?: boolean;
}

export interface InitialState {
  notes: NoteI[];
}

export type summaryNoteType = {
  category: string;
  active: number;
  archived: number;
}