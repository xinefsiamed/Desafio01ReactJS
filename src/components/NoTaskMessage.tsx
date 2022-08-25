import styles from './NoTaskMessage.module.css'
import Clipboard from '../assets/Clipboard.svg'

export function NoTaskMessage() {
    return (
        <div className={styles.todoListEmptyContent}>
            <img src={Clipboard} alt="Imagem lista vazia" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}