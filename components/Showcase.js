import styles from '@/styles/Showcase.module.css'

export default function Showcase() {
    return (
        <div>
            <div className={styles.showcase}>
                <h1>Welcome to VacciMeet!</h1>
                <h2>Find all the Vaccinated and COVID-free Meetups happening around you</h2>
            </div>
        </div>
    )
}
