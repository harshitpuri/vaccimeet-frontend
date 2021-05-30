import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/MeetItem.module.css'

export default function MeetItem({ evt }) {
    return (
        <div className={styles.meet}>
            <div className={styles.img}>
                <Image src={evt.image ? evt.image.formats.thumbnail.url : '/images/meet-default.png'} width={170} height={100} />
            </div>
            <div className={styles.info}>
                <span>
                    {new Date(evt.date).toLocaleDateString('en-GB')} at {evt.time}
                </span>
                <h3>{evt.name}</h3>
                <span>{evt.vaccine} || {evt.minlevel}</span>
            </div>
            <div className={styles.link}>
                <Link href={`/meets/${evt.slug}`}>
                    <a className='btn'>Details</a>
                </Link>
            </div>
        </div>    
    )
}
