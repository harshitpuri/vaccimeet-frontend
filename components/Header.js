import Link from 'next/link'
import Search from './Search'
import styles from '@/styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>VacciMeets</a>
                </Link>
            </div>

        <Search />

            <nav>
                <ul>
                    <li>
                        <Link href='/meets'>
                        <a>Meets</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}
