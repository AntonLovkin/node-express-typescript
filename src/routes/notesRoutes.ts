import express from 'express'
import notesService from '../services/notesService';

interface ErrorResponse {
  error: string;
}

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const notes = await notesService.getAllNotes();

    res.status(200).json(notes);
     
  } catch (error) {
    const errorMessage: string = error instanceof Error ? error.message : "Unknown error";
    const errorResponse: ErrorResponse = { error: errorMessage };
    res.status(500).json(errorResponse);
  }
});

router.post("/", async (req, res) => {
  try {
    const newNote = await notesService.addNote(req.body);

    res.status(201).json(newNote);
     
  } catch (error) {
    const errorMessage: string = error instanceof Error ? error.message : "Unknown error";
    const errorResponse: ErrorResponse = { error: errorMessage };
    res.status(400).json(errorResponse);
  }
});

router.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;
    const result = notesService.deleteNote(id);

    res.status(200).json(result);
     
  } catch (error) {
    const errorMessage: string = error instanceof Error ? error.message : "Unknown error";
    const errorResponse: ErrorResponse = { error: errorMessage };
    res.status(400).json(errorResponse);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const editedNote = await notesService.editNote(id, req.body);

    if (!editedNote) { throw Error };
    res.status(201).json(editedNote);
     
  } catch (error) {
    const errorMessage: string = error instanceof Error ? error.message : "Unknown error";
    const errorResponse: ErrorResponse = { error: errorMessage };
    res.status(400).json(errorResponse);
  }
});

router.get("/stats", async (req, res) => {
  try {
    const stats = await notesService.getStats();

    res.status(200).json(stats);
    
  } catch (error) {
    const errorMessage: string = error instanceof Error ? error.message : "Unknown error";
    const errorResponse: ErrorResponse = { error: errorMessage };
    res.status(500).json(errorResponse);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const note = await notesService.getOneNote(id);
    if (!note) {
      throw Error
    }
    res.status(200).json(note);
     
  } catch (error) {
    const errorMessage: string = error instanceof Error ? error.message : "Unknown error";
    const errorResponse: ErrorResponse = { error: errorMessage };
    res.status(400).json(errorResponse);
  }
});

export { router as notesRouter };