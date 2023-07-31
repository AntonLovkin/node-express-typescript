import { v4 as uuidv4 } from 'uuid';
import { InitialState } from "./types";

const dataNotes: InitialState = {
    notes: [
        {
            id: "first",
            createdAt: new Date().toString(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023",
            category: 'Idea',
            name: 'Books',
            dates: '3/5/2023',
            isArchived: true,
        },
        {
            id: "second",
            createdAt: new Date().toString(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023',
            isArchived: false,
        },
        {
            id: uuidv4(),
            createdAt: new Date().toString(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023',
            isArchived: false,
        },
        {
            id: uuidv4(),
            createdAt: new Date().toString(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023, I moved it from 5/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023, 5/5/2023',
            isArchived: false,
        },
        {
            id: uuidv4(),
            createdAt: new Date().toString(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023, I moved it from 5/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023, 5/5/2023',
            isArchived: false,
        },
        {
            id: uuidv4(),
            createdAt: new Date().toString(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023, I moved it from 5/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023, 5/5/2023',
            isArchived: false,
        },
        {
            id: uuidv4(),
            createdAt: new Date().toString(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023, I moved it from 5/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023, 5/5/2023',
            isArchived: false,
        },
    ],
    form: {
        type: "",
        showForm: false,
    }
};

export default dataNotes;