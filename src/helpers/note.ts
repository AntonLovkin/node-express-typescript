import { object, string, date, boolean, InferType  } from "yup";

type NoteSchemaType = InferType<typeof noteSchema>;

const noteSchema = object({
  id: string().uuid().required(),
  created_at: date().required(),
  edited_at: date(),
  content: string().required(),
  category: string().required(),
  name: string().required(),
  dates: string().required(),
  is_archived: boolean().required(),
})

export { noteSchema, NoteSchemaType };