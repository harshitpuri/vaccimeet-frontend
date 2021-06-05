import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Link from 'next/link'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import Layout from '@/components/Layout'
import {API_URL} from '@/config/index'
import styles from '@/styles/Meet.module.css'
import {useRouter} from 'next/router';

export default function MeetPage({evt}) {
    const router = useRouter()

    const deleteMeet = async (e) => {
        if(confirm('Are you sure?')) {
            const res = await fetch(`${API_URL}/meets/${evt.id}`, {
                method: 'DELETE'
            })
        }

        const data = await res.json()

        if(!res.ok) {
            toast.error(data.message)
        } else {
            router.push('/meets')
        }

    }
    return (
        <Layout>
            <div className={styles.meet}>
                <div className={styles.controls}>
                    <Link href={`/meets/edit/${evt.id}`}>
                        <a>
                            <FaPencilAlt /> Edit Meet
                        </a>
                    </Link>
                    <a href="#" className={styles.delete} onClick={deleteMeet}><FaTimes /> Delete Meet</a>
                </div>

                <span>
                {new Date(evt.date).toLocaleDateString('en-GB')} at {evt.time}
                </span>
                <h1>{evt.name}</h1>
                <ToastContainer />
                    {evt.image && (
                        <div className={styles.image}>
                            <Image src={evt.image.formats.medium.url} width={960} height={600} />
                        </div>
                    )}

                <h3>Host:</h3>
                    <p>{evt.host}</p>
                <h3>Vaccine:</h3>
                    <p>{evt.vaccine}</p>
                <h3>Level of Vaccination:</h3>
                    <p>{evt.minlevel}</p>
                <h3>Description</h3>
                    <p>{evt.description}</p>
                <h3>Venue: {evt.venue}</h3>
                    <p>{evt.address}</p>

                <Link href='/meets'>
                    <a className={styles.back}>{'<'}Go Back</a>
                </Link>
            </div>
        </Layout>
    )
}


export async function getServerSideProps({query: {slug}}) {

    const res = await fetch(`${API_URL}/meets?slug=${slug}`)
    const meets = await res.json()

    return {
        props: {
            evt: meets[0],
        },
    }
}