import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from "cors";

import { notesRouter } from './src/routes/notesRoutes';

type ConnectionConfig = {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
};

dotenv.config();

// export const connection: ConnectionConfig = {
//   user: process.env.PGUSER || '',
//   host: process.env.PGHOST || '',
//   database: process.env.PGDATABASE || '',
//   password: process.env.PGPASSWORD || '',
//   port: parseInt(process.env.PGPORT || '5432', 10),
// };

export const connection: ConnectionConfig = {
  user:'postgres',
  host:'postgres-db',
  database:'sequelize_db',
  password:'password',
  port:5432,
};

const app: Express = express();
const port = process.env.PORT;
console.log(port)
app.use(cors());
app.use(express.json());

app.use(express.static('dist'));
app.use('/notes', notesRouter);

app.listen(port || 8000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export { app };