import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {ITodo} from './Todo'
import './App.css';

import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

interface IProps {
    tasks: ITodo

    editTask(id: string): void;

    statusUp(id: string): void;

    deleteTask(id: string): void;

    statusDown(id: string): void;

    saveNewTask(value: string, id: string): void;

}


export default function Task(props: IProps) {
    const [editTask, setEditTask] = useState(props.tasks.title)
    const [upPr, setUpPr] = useState(+props.tasks.priority)
    return (

        <CardDeck>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{props.tasks.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Priority: {upPr} <Button color="info" onClick={()=>{setUpPr(upPr+1)}}>up</Button>
                        <Button color="success" onClick={()=>{setUpPr(upPr-1)}}>down</Button></CardSubtitle>
                    <CardText>Goal: {props.tasks.goal} </CardText>
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <button type="button" className="btn btn-primary" disabled={props.tasks.status === 'Todo'} onClick={() => {
                        props.statusDown(props.tasks.id)
                    }}>⇐
                    </button>
                    <button type="button" className="btn btn-primary" disabled={props.tasks.status === 'Done'} onClick={() => {
                        props.statusUp(props.tasks.id)
                    }}>⇒
                    </button>
                    </div>
                    {props.tasks.show &&
                    <input type="text" value={editTask} onChange={event => setEditTask(event.target.value)}/>}
                    {!props.tasks.show ? <Button onClick={() => {
                            props.editTask(props.tasks.id)
                        }}>edit</Button> :
                        <>
                            <button onClick={() => {
                                props.saveNewTask(editTask, props.tasks.id)
                            }}>save
                            </button>
                            <button onClick={() => {
                                props.editTask(props.tasks.id)
                            }}>cancel
                            </button>
                        </>}
                    <Button color="danger" onClick={() => {
                        props.deleteTask(props.tasks.id)
                    }}>delete
                    </Button>
                </CardBody>
            </Card>
        </CardDeck>
    );
};











// <div className="App">
//             {props.tasks.title}
//             {props.tasks.priority}

//         </div>
//     );
// }

