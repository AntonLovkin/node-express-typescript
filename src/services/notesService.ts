import dataNotes from "../dataNotes"
import notesRepository from './../repositories/notesRepository';
import { noteSchema, NoteSchemaType } from '../helpers/note'
import { AddNoteI } from "../types";

const getAllNotes = async () => {
    return await notesRepository.getAllNotes();
};

const addNote = async (data: NoteSchemaType) => {
    const newNote = await notesRepository.createNote(data);

    await noteSchema.validate(newNote);
   
    dataNotes.notes.push(newNote);
    return newNote;
}

const deleteNote = async(id: string) => {
    const noteIdx = await notesRepository.findIndexById(id);
    
    if (noteIdx === -1) { 
        return null;
    }

    await notesRepository.deleteNote(noteIdx);
}

const editNote = async (id: string, reqBody: AddNoteI) => {
    const noteIdx = await notesRepository.findIndexById(id);

    if (noteIdx === -1) {
        return null;
    }

    const editedNote = await notesRepository.editNote(reqBody, noteIdx);
    
    await noteSchema.validate(editedNote);
    await notesRepository.updateNoteById(noteIdx, editedNote);
    return editedNote;
}

const getStats = async () => {
    const notes = await notesRepository.getAllNotes();
    if (!notes) {
        return null;
    }
    return notesRepository.getStatsByCategories(notes);
};

const getOneNote = async(id: string) => {
    // const note = await notesRepository.getOneNoteById(id);
    
    // if (!note) { 
    //     return null;
    // }

    // return note;
    //----------------
    const noteIdx = await notesRepository.findIndexById(id);
    const notes = await notesRepository.getAllNotes();
    if (noteIdx === -1 || !notes) {
        return null
    }
    return notes[noteIdx]
}

export default {
    getAllNotes,
    addNote,
    deleteNote,
    editNote,
    getStats,
    getOneNote,
}