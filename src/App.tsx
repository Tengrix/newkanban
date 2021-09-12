import React, {useState} from 'react';
import './App.css';
import Board from "./Board";
import NewTask from "./NewTask";
import 'bootstrap/dist/css/bootstrap.css'
import {v4 as uuidv4} from 'uuid';
import {ITodo} from './Todo'

const initialTasks = [
    {
        title: 'Learn React',
        status: 'Todo',
        id: uuidv4(),
        show: false,
        priority: '5',
        goal: 'create an App'
    },
    {
        title: 'Learn JS',
        status: 'In progress',
        id: uuidv4(),
        show: false,
        priority: '3',
        goal: 'finish JS practice'
    },
    {
        title: 'Learn CSS',
        status: 'Review',
        id: uuidv4(),
        show: false,
        priority: '1',
        goal: 'practice more bootstrap'
    },
    {
        title: 'Learn Python',
        status: 'Done',
        id: uuidv4(),
        show: false,
        priority: '2',
        goal: 'start machine learning'
    }
];


function App() {
    const [tasks, setTasks] = useState<ITodo[]>(initialTasks)
    const allStatuses = ['Todo', 'In progress', 'Review', 'Done']

    const prevStatus = (status: string) =>
        allStatuses[allStatuses.indexOf(status) - 1]

    const nextStatus = (status: string) =>
        allStatuses[allStatuses.indexOf(status) + 1]

    const statusUp = (id: string) => {
        const next = tasks.map(el => el.id === id ? {...el, status: nextStatus(el.status)} : el)
        setTasks(next)
    }
    const statusDown = (id: string) => {
        const next = tasks.map(el => el.id === id ? {...el, status: prevStatus(el.status)} : el)
        setTasks(next)
    }
    const addTask = (newTitle: string, newPriority:string, newGoal: string) => {
        const newTask = [...tasks, {
            title: newTitle,
            status: 'Todo',
            id: uuidv4(),
            show: false,
            priority: newPriority,
            goal:newGoal
        }]
        setTasks(newTask)
    }

    const deleteTask = (id: string) => {
        const newTasks = tasks.filter(el => el.id !== id)
        setTasks(newTasks)
    }

    const editTask = (id: string) => {
        const newTask = tasks.map(el => {
            if (el.id === id) el.show = !el.show
            return el
        })
        setTasks(newTask)
    }

    const saveNewTask = (newTitle: string, id: string) => {
        const newTask = tasks.map(el => el.id === id ? {...el, title: newTitle} : el)
        setTasks(newTask)
    }

    return (
        <div className="container">
            <div className="row">
                {allStatuses.map(el => <Board
                    tasks={tasks}
                    statusUp={statusUp}
                    statusDown={statusDown}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    saveNewTask={saveNewTask}
                    status={el}/>)}
            </div>
            <NewTask addTask={addTask} />
        </div>
    );
}

export default App;
