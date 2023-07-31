import { object, string, date, boolean, InferType  } from "yup";

type NoteSchemaType = InferType<typeof noteSchema>;

const noteSchema = object({
  id: string().uuid().required(),
  createdAt: date().required(),
  editedAt: date(),
  content: string().required(),
  category: string().required(),
  name: string().required(),
  dates: string().required(),
  isArchived: boolean().required(),
}).strict();

export { noteSchema, NoteSchemaType };