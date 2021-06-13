import Link from 'next/link'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import styles from '@/styles/DashboardMeet.module.css'

export default function DashboardMeet({ evt, handleDelete} ) {
    return (
        <div className={styles.meet}>
            <h4>
                <Link href={`/meets/${evt.slug}`}>
                    <a>{evt.name}</a>
                </Link>
            </h4>
            <Link href={`/meets/edit/${evt.id}`}>
                <a className={styles.edit}>
                    <FaPencilAlt /> <span>Edit Meet</span>
                </a>
            </Link>
            <a href="#" className={styles.delete} onClick={() => handleDelete(evt.id)}>
                <FaTimes /> <span>Delete</span>
            </a>
        </div>
    )
}
