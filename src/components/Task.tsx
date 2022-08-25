import { Trash } from 'phosphor-react';
import styles from './Task.module.css'


interface ITaskProps {
    id: number,
    completed: boolean;
    content: string;
    onDeleteTask: Function
    setTaskCompleted: Function
}


export function Task({ content, completed, onDeleteTask, setTaskCompleted, id }: ITaskProps) {

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleCheckBox() {
        setTaskCompleted(id, completed)
    }

    return (
        <div className={styles.taskContainer}>
            <input type="checkbox" name="checkboxTask" checked={completed} onClick={handleCheckBox} />
            <p className={completed ? styles.taskCompleted : styles.taskIncompleted}>{content}</p>
            <button onClick={handleDeleteTask}>
                <Trash size={20} />
            </button>
        </div >
    )
}