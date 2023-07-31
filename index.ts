import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";

import { notesRouter } from './src/routes/notesRoutes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(express.static('dist'));
app.use('/notes', notesRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export { app };