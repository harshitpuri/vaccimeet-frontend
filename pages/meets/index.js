import Layout from '@/components/Layout'
import MeetItem from '@/components/MeetItem'
import Pagination from '@/components/Pagination'
import { API_URL, PER_PAGE } from '@/config/index'

export default function MeetsPage({ meets, page, total }) {
  
  
  return (
    <Layout>
      <h1>Meets</h1>
      {meets.length === 0 && <h3>No Meets to show</h3>}

      {meets.map((evt) => (
        <MeetItem key={evt.id} evt={evt} />
      ))}

      <Pagination page={page} total={total} />
    </Layout>
  )
}

export async function getServerSideProps({query: {page = 1}}) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page -1) * PER_PAGE

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/meets/count`)
  const total = await totalRes.json()

  // Fetch meets
  const meetRes = await fetch(`${API_URL}/meets?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`)
  const meets = await meetRes.json()

  return {
    props: { meets, page: +page, total},
  }

} 