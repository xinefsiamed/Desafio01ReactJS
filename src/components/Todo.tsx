import styles from './Todo.module.css'
import { PlusCircle } from 'phosphor-react'

import { Task } from './Task'
import { FormEvent, useState } from 'react'
import { NoTaskMessage } from './NoTaskMessage';


export interface Task {
    id: number;
    description: string;
    completed: boolean
}

export function Todo() {

    const [tasks, setTasks] = useState<Task[]>([])
    const [taskDescription, setTaskDescription] = useState('')

    const tasksCounter = tasks.length
    const tasksCompleted = tasks.filter(task => task.completed === true).length


    function handleSubmitTask(event: FormEvent) {
        event.preventDefault()

        const newTask = {
            id: tasks.length + 1,
            description: taskDescription,
            completed: false
        }

        setTasks([...tasks, newTask])
        setTaskDescription('')
    }

    function deleteTask(taskToDeleteId: number) {
        const taskWithDeletedTask = tasks.filter(task => task.id !== taskToDeleteId)

        setTasks(taskWithDeletedTask)
    }

    function setTaskStatus(id: number, completed: boolean) {
        const taskIndex = tasks.findIndex(task => task.id === id)
        const tasksToFindIndex = [...tasks]

        tasksToFindIndex[taskIndex].completed = !completed

        setTasks(tasksToFindIndex)
    }
    return (
        <div className={styles.container}>

            <div className={styles.todoForm}>
                <form onSubmit={handleSubmitTask}>
                    <textarea name="tarefa" value={taskDescription} onChange={e => setTaskDescription(e.target.value)} placeholder='Adicione uma nova tarefa'></textarea>

                    <button type='submit'>
                        Criar
                        <PlusCircle size={16} weight='bold' />
                    </button>
                </form>
            </div>

            <div className={styles.todoList}>

                <header className={styles.todoListHeader}>
                    <div className={styles.todoListTotalCounter}>
                        Tarefas Criadas <span>{tasksCounter}</span>
                    </div>

                    <div className={styles.todoListCompletedCounter}>
                        Concluídas <span>{tasksCounter === 0 ? tasksCounter : `${tasksCompleted} de ${tasksCounter}`}</span>
                    </div>
                </header>

                <div className={styles.todoListContent}>

                    {tasksCounter === 0 ? <NoTaskMessage /> : null}

                    {tasks.map((task, index) => <Task key={index} id={task.id} content={task.description} completed={task.completed} onDeleteTask={deleteTask} setTaskCompleted={setTaskStatus} />)}
                </div>

            </div>


        </div>
    )
}