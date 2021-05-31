import qs from 'qs'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '@/components/Layout'
import MeetItem from '@/components/MeetItem'
import { API_URL } from '@/config/index'

export default function MeetsPage({ meets }) {
  const router = useRouter()

  return (
    <Layout title='Search Results'>
      <Link href='/meets'>Go Back</Link>
      <h1>Search Results for {router.query.term}</h1>
      {meets.length === 0 && <h3>No Meets to show</h3>}

      {meets.map((evt) => (
        <MeetItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  )
}

export async function getServerSideProps({query: {term}}) {
  const query = qs.stringify({
      _where: {
          _or: [
              {name_contains: term},
              {host_contains: term},
              {venue_contains: term},
              {address_contains: term},
              {vaccine_contains: term},
              {minlevel_contains: term}
          ]
      }
  })
  
    const res = await fetch(`${API_URL}/meets?${query}`)
    const meets = await res.json()

    return {
        props: { meets },
    }

} 