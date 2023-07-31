import express from 'express'

import dataNotes from '../dataNotes';
import { separateAndCountByCategory } from '../separateAndCountByCategory';

const router = express.Router();

router.get("/", (req, res) => {
  const allNotes = dataNotes.notes;
  res.status(200).json(allNotes);
});

router.post("/", (req, res) => {
  const { content, category, name } = req.body;
  if (!content || !category || !name) {
    return res.status(400).json({ error: "Please provide all the required fields (Name, Date, Category, Content)." });
  }

  const newNote = {
    content,
    category,
    name,
  };

  dataNotes.notes.push(newNote);

  res.status(201).json(newNote);
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    const noteIdx = dataNotes.notes.findIndex((note) => note.id === id);
    
    if (noteIdx === -1) {
        return res.status(400).json({ error: "Note not found" });
    };
    const deletedNote = dataNotes.notes[noteIdx];
    dataNotes.notes.splice(noteIdx, 1);
    res.status(200).json(deletedNote);
});

router.patch("/:id", (req, res) => {
    const id = req.params.id;
    const { content, category, name, isArchived } = req.body;

    const noteIdx = dataNotes.notes.findIndex((note) => note.id === id);
    
    if (noteIdx === -1) {
        return res.status(400).json({ error: "Note not found" });
    };

    const editedNote = {...dataNotes.notes[noteIdx], content, category, name, isArchived};

    dataNotes.notes.splice(noteIdx, 1, editedNote);
    res.status(201).json(editedNote);
});

router.get("/stats", (req, res) => {
    const stats = separateAndCountByCategory(dataNotes.notes);

    if (!stats) {
        return res.status(400).json({ error: "No stats found." });
    }
    res.status(200).json(stats);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    const noteIdx = dataNotes.notes.findIndex((note) => note.id === id);
    // res.send(noteIdx);
    
    if (noteIdx === -1) {
        return res.status(400).json({ error: "Note not found" });
    };

    res.status(200).json(dataNotes.notes[noteIdx]);
});

export { router as notesRouter };