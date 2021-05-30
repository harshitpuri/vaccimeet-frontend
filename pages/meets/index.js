import Layout from '@/components/Layout'
import MeetItem from '@/components/MeetItem'
import { API_URL } from '@/config/index'

export default function MeetsPage({ meets }) {
  return (
    <Layout>
      <h1>Meets</h1>
      {meets.length === 0 && <h3>No Meets to show</h3>}

      {meets.map((evt) => (
        <MeetItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/meets?_sort=date:ASC`)
  const meets = await res.json()

  return {
    props: { meets },
    revalidate: 1
  }

} 