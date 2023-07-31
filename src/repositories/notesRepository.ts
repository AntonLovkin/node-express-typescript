import dataNotes from '../dataNotes';
import { v4 as uuidv4 } from "uuid";
import getDatesFromNote from "../helpers/getDatesFromNote";
import { separateAndCountByCategory } from '../helpers/separateAndCountByCategory';

async function getAllNotes() {
    return dataNotes.notes;
}

async function createNote(data) {
    const { content, category, name } = data;
    return {
        id: uuidv4(),
        createdAt: new Date(),
        content,
        category,
        name,
        dates: getDatesFromNote(content),
        isArchived: false,
    }
}

async function editNote(data, index) {
    return {
        ...dataNotes.notes[index],
        ...data,
        dates: getDatesFromNote(data.content) || "",
        editedAt: new Date()
    };
}

async function deleteNote(index) {
    dataNotes.notes.splice(index, 1);
}

async function findIndexById(id) {
    return dataNotes.notes.findIndex((note) => note.id === id);
}

async function updateNoteById(index, editedNote) {
    dataNotes.notes.splice(index, 1, editedNote);
}

async function getStatsByCategories(notes) {
    return separateAndCountByCategory(notes)
}

async function getOneNoteById(id) {
    return dataNotes.notes.find(note => note.id === id);
}

export default {
    getAllNotes,
    createNote,
    deleteNote,
    editNote
    findIndexById,
    updateNoteById,
    getStatsByCategories,
    getOneNoteById
};
