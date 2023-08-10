import dataNotes from '../dataNotes';
import { v4 as uuidv4 } from "uuid";
import getDatesFromNote from "../helpers/getDatesFromNote";
import { separateAndCountByCategory } from '../helpers/separateAndCountByCategory';
import { NoteI, AddNoteI, EditNoteI } from "../types";
import { Client } from 'pg';
import { connection } from '../../index';

async function getAllNotes() {
    const client = new Client(connection)
    try {
    await client.connect();

    const query = 'SELECT * FROM notes';
    const result = await client.query(query);

    return result.rows;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  } finally {
    await client.end();
  }
}

async function createNote(data: AddNoteI) {
    const { content, category, name } = data;
    return {
        id: uuidv4(),
        created_at: new Date(),
        edited_at: new Date(),
        content,
        category,
        name,
        dates: getDatesFromNote(content) || "no dates",
        is_archived: false,
    }
}

async function addNote(note: NoteI) {
    const client = new Client(connection)
  try {
    await client.connect();

    const query = 'INSERT INTO notes (id, created_at, edited_at, content, category, name, dates, is_archived) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    const values = [
      note.id,
      note.created_at,
      note.edited_at,
      note.content,
      note.category,
      note.name,
      note.dates,
      note.is_archived
    ];

    await client.query(query, values);

    return 'Note created successfully';

  } catch (error) {
    console.error('Error creating note:', error);
    throw error;
  } finally {
    await client.end();
  }
}


async function updateNote(data: EditNoteI) {
    return {
            ...data,
            edited_at: new Date(),
        };

}

async function editNote(id: string, updatedFields: EditNoteI) {
    const client = new Client(connection)
  try {
    await client.connect();

    const columnsToUpdate = Object.keys(updatedFields);
    const values = columnsToUpdate.map((column) => updatedFields[column as keyof EditNoteI]);

    const query = `UPDATE notes SET ${columnsToUpdate.map((col, index) => `${col} = $${index + 2}`).join(', ')} WHERE id = $1`;
    await client.query(query, [id, ...values]);

    console.log('Note updated successfully');
    return 'Note updated successfully';
  } catch (error) {
    console.error('Error updating note:', error);
    throw error;
  } finally {
    await client.end();
  }
}


async function deleteNote(id: string) {
    const client = new Client(connection)
  try {
    await client.connect();

    const query = 'DELETE FROM notes WHERE id = $1';
    await client.query(query, [id]);

      console.log('Note deleted successfully');
      return 'Note deleted successfully'

  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  } finally {
    await client.end();
  }
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
    const client = new Client(connection)
    try {
        await client.connect();

        const query = 'SELECT * FROM notes WHERE id = $1';
        const result = await client.query(query, [id]);

        if (result.rows.length === 0) {
            throw new Error('Note not found');
        }

        return result.rows[0];
    } catch (error) {
        console.error('Error fetching note:', error);
        throw error;
    } finally {
        await client.end();
    }
}

export default {
    getAllNotes,
    createNote,
    deleteNote,
    editNote,
    findIndexById,
    updateNoteById,
    getStatsByCategories,
    getOneNoteById,
    addNote,
    updateNote,
};
