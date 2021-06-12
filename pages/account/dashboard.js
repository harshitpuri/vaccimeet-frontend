import { parseCookies } from '@/helpers/index'
import Layout from '@/components/Layout'
import DashboardMeet from '@/components/DashboardMeet'
import { API_URL } from '@/config/'
import styles from '@/styles/Dashboard.module.css'

export default function DashboardPage({meets}) {
    const deleteMeet = (id) => {
        
    }

    return (
        <Layout title='User Dashboard'>
            <div className={styles.dash}>
                <h1>Dashboard</h1>
                <h3>My Meets</h3>

                {meets.map((evt) => (
                    <DashboardMeet key={evt.id} evt={evt} handleDelete={deleteMeet} />
                ))}
            </div>
        </Layout>
    )
}

export async function getServerSideProps({req}) {
    const {token} = parseCookies(req)

    const res = await fetch(`${API_URL}/meets/me`, {
        method: 'POST'
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const meets = await res.json()

    return {
        props: {
            events
        }
    }
}