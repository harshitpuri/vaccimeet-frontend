import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <Header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>VacciMeets</a>
                </Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href='/meets'>
                        <a>Meets</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </Header>
    )
}