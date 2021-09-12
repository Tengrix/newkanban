import React from 'react';
import Task from './Task'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {ITodo} from './Todo'

interface IProps {
    status: string;

    statusDown(id: string): void;

    statusUp(idx: string): void;

    deleteTask(id: string): void;

    editTask(id: string): void;

    saveNewTask(newTitle: string, id: string): void;

    tasks: ITodo[];


}


export default function Board(props: IProps) {

    return (
        <div className="col-sm">
            <div className={'statuses'}>
                <h3>{props.status}</h3>
            </div>
            <ul>
                {
                    props.tasks.filter(el => props.status === el.status).sort((a,b)=>+a.priority- +b.priority).map(el => <li key={el.id}><Task tasks={el}
                                                                                                         statusUp={props.statusUp}
                                                                                                         statusDown={props.statusDown}
                                                                                                         deleteTask={props.deleteTask}
                                                                                                         editTask={props.editTask}
                                                                                                         saveNewTask={props.saveNewTask}/>
                    </li>)
                }
            </ul>
        </div>
    );
}

