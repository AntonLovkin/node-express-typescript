import { v4 as uuidv4 } from 'uuid';
import { InitialState } from "./types";

const dataNotes: InitialState = {
    notes: [
        {
            id: "81906728-a186-42aa-83ec-2a07dc945cc7",
            created_at: new Date(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023",
            category: 'Idea',
            name: 'Books',
            dates: '3/5/2023',
            is_archived: true,
        },
        {
            id: "81906728-a186-42aa-83ec-2a07dc945cc8",
            created_at: new Date(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023',
            is_archived: false,
        },
        {
            id: uuidv4(),
            created_at: new Date(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023',
            is_archived: false,
        },
        {
            id: uuidv4(),
            created_at: new Date(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023, I moved it from 5/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023, 5/5/2023',
            is_archived: false,
        },
        {
            id: uuidv4(),
            created_at: new Date(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023, I moved it from 5/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023, 5/5/2023',
            is_archived: false,
        },
        {
            id: uuidv4(),
            created_at: new Date(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023, I moved it from 5/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023, 5/5/2023',
            is_archived: false,
        },
        {
            id: uuidv4(),
            created_at: new Date(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023, I moved it from 5/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023, 5/5/2023',
            is_archived: false,
        },
    ]
};

export default dataNotes;