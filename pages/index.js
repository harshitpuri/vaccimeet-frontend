import Link from 'next/link'
import Layout from '@/components/Layout'
import MeetItem from '@/components/MeetItem'
import { API_URL } from '@/config/index'

export default function MeetsHome({ meets }) {
  return (
    <Layout>
      <h1>Upcoming Meets</h1>
      {meets.length === 0 && <h3>No Meets to show</h3>}

      {meets.map((evt) => (
        <MeetItem key={evt.id} evt={evt} />
      ))}

      {meets.length > 0 && (
        <Link href='/meets'>
          <a className='btn-secondary'>View All Meets</a>
        </Link>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/meets`)
  const meets = await res.json()

  return {
    props: { meets:meets.slice(0, 3) },
    revalidate: 1
  }

} 