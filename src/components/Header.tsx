import styles from './Header.module.css'
import rocket from '../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={rocket} alt="Logo do Todo" />
                to<span>do</span>
            </div>
        </header>
    )
}