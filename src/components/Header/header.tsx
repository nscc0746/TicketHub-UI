import { Link } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
    return(
        <>
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.brand}>TicketHUB</h1>
                <nav className={styles.nav}>
                    <ul>
                        <li key="home">
                            <Link to="/">Concerts</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Header;