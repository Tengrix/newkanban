import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';


interface IProps {
    addTask(value: string, value1: string, value2: string): void
}

export default function NewTask(props: IProps) {

    const [task, setTask] = useState('')
    const [newPriority, setNewPriority] = useState('')
    const [newGoal, setNewGoal] = useState('')
    const clear = () => {
        props.addTask(task, newPriority, newGoal)
        setTask('')
        setNewPriority('')
        setNewGoal('')
    }
    return (
        <div className="App">
            <input type="text" placeholder={'task'} value={task} onChange={event => setTask(event.target.value)}/>
            <div>
                <input type="text" placeholder={'goal'} value={newGoal}
                       onChange={event => setNewGoal(event.target.value)}/>
            </div>
            <div>
                <input className={'priority'} type="text" placeholder={'priority'} value={newPriority}
                       onChange={event => setNewPriority(event.target.value)}/>
                <button onClick={() => {
                    clear()
                }}>add new task
                </button>

            </div>

        </div>
    );
}

