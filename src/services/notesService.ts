import notesRepository from './../repositories/notesRepository';
import { noteSchema, NoteSchemaType } from '../helpers/note'
import { EditNoteI } from "../types";

const getAllNotes = async () => {
    return await notesRepository.getAllNotes();
};

const addNote = async (data: NoteSchemaType) => {
    const newNote = await notesRepository.createNote(data);
    await noteSchema.validate(newNote);
    const result = await notesRepository.addNote(newNote)

    return {result, newNote};
}

const deleteNote = async(id: string) => {
    const message = await notesRepository.deleteNote(id);
    
    return message;
}

const editNote = async (id: string, reqBody: EditNoteI) => {
    const updatedFields = await notesRepository.updateNote(reqBody);
    const result = await notesRepository.editNote(id, updatedFields);

    return result;
}

const getStats = async () => {
    const notes = await notesRepository.getAllNotes();
    if (!notes) {
        return null;
    }

    return notesRepository.getStatsByCategories(notes);
};

const getOneNote = async(id: string) => {
    const note = await notesRepository.getOneNoteById(id);   
    return note;
}

export default {
    getAllNotes,
    addNote,
    deleteNote,
    editNote,
    getStats,
    getOneNote,
}