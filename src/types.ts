export interface NoteI {
  id: string;
  createdAt: string;
  editedAt?: string;
  content: string;
  category: string;
  name: string;
  dates: string;
  isArchived: boolean;
}

export interface AddNoteI {
  content: string;
  category: string;
  name: string;
}

export interface FormI {
    type: string;
    showForm: boolean;
}

export interface InitialState {
  notes: NoteI[];
  form: FormI;
}

export type summaryNoteType = {
  category: string;
  active: number;
  archived: number;
}

type AddNoteAction = {
  type: "ADD_NOTE";
  payload: NoteI;
};

type EditNoteAction = {
  type: "EDIT_NOTE";
  payload: {
    id: string;
  };
};

type DeleteNoteAction = {
  type: "DELETE_NOTE";
  payload: string;
};

type ArchiveNoteAction = {
  type: "ARCHIVE_NOTE";
  payload: string;
};

type TypeFormAction = {
  payload: FormI;
  type: "TYPE_FORM";
};

type CloseFormAction = {
  payload: FormI;
  type: "CLOSE_FORM";
};


export type ActionTypes =
  | AddNoteAction
  | EditNoteAction
  | DeleteNoteAction
  | ArchiveNoteAction
  | TypeFormAction
  | CloseFormAction