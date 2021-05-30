import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/MeetItem.module.css'

export default function MeetItem({ evt }) {
    return (
        <div className={styles.meet}>
            <div className={styles.img}>
                <Image src={evt.image ? evt.image : '/images/meet-default.png'} width={170} height={100} />
            </div>
            <div className={styles.info}>
                <span>
                    {evt.date} at {evt.time}
                </span>
                <h3>{evt.name}</h3>
            </div>
            <div className={styles.link}>
                <Link href={`/meets/${evt.slug}`}>
                    <a className='btn'>Details</a>
                </Link>
            </div>
        </div>    
    )
}
