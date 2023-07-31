import dataNotes from '../dataNotes';
import { v4 as uuidv4 } from "uuid";
import getDatesFromNote from "../helpers/getDatesFromNote";
import { separateAndCountByCategory } from '../helpers/separateAndCountByCategory';
import { NoteI, AddNoteI, EditNoteI } from "../types";

async function getAllNotes() {
    return dataNotes.notes;
}

async function createNote(data: AddNoteI) {
    const { content, category, name } = data;
    return {
        id: uuidv4(),
        createdAt: new Date(),
        content,
        category,
        name,
        dates: getDatesFromNote(content) || "no dates",
        isArchived: false,
    }
}

async function editNote(data: EditNoteI, index: number) {
    const { content, category, name, isArchived } = data;
    if (isArchived !== undefined) {
        return {
            ...dataNotes.notes[index],
            isArchived,
            editedAt: new Date(),
        };
    }
    return {
        ...dataNotes.notes[index],
        content,
        category,
        name,
        dates: getDatesFromNote(data.content) || "no dates",
        editedAt: new Date(),
    }
}

async function deleteNote(index: number) {
    dataNotes.notes.splice(index, 1);
}

async function findIndexById(id:string) {
    return dataNotes.notes.findIndex((note) => note.id === id);
}

async function updateNoteById(index: number, editedNote: NoteI) {
    dataNotes.notes.splice(index, 1, editedNote);
}

async function getStatsByCategories(notes: NoteI[]) {
    return separateAndCountByCategory(notes)
}

async function getOneNoteById(id: string) {
    return dataNotes.notes.find(note => note.id === id);
}

export default {
    getAllNotes,
    createNote,
    deleteNote,
    editNote,
    findIndexById,
    updateNoteById,
    getStatsByCategories,
    getOneNoteById
};
