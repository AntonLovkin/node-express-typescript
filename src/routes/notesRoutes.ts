import express from 'express'

import notesService from '../services/notesService';
import { noteSchema } from '../note'

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const notes = await notesService.getAllNotes();

    res.status(200).json(notes);
    next();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newNote = await notesService.addNote(req.body);

    res.status(201).json(newNote);
    next();
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
    next();
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    notesService.deleteNote(id);

    res.status(200).json("Success");
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
    next();
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const editedNote = await notesService.editNote(id, req.body);

    res.status(201).json(editedNote);
    next();
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
    next();
  }
});

router.get("/stats", async (req, res, next) => {
  try {
    const stats = await notesService.getStats();

    res.status(200).json(stats);
    
    next();
  } catch (error) {
    res.status(400).json({ error: "Stats not found" })
    next();
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const note = await notesService.getOneNote(id);
    res.status(200).json(note);
    next();
  } catch (error) {
    res.status(400).json({ error: "Note not found" });
    next(error);
  }
});


export { router as notesRouter };