import Link from 'next/link'
import { useContext } from 'react'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import Search from './Search'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/Header.module.css'

export default function Header() {
    const {user, logout} = useContext(AuthContext)

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
                    {user ? <>
                        // If logged in
                        <li>
                            <Link href='/meets/add'>
                                <a>Add Meet</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/account/dashboard'>
                                <a>Dashboard</a>
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => logout()} className="btn-secondary btn-icon">
                                <FaSignOutAlt />Logout
                            </button>
                        </li>
                    </> : <>
                        // If logged out
                        <li>
                            <Link href='/account/login'>
                                <a className='btn-secondary btn-icon'><FaSignInAlt /> Login</a>
                            </Link>
                        </li>
                    </>}

                </ul>
            </nav>
            
        </header>
    )
}
