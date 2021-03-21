import Head from '../components/layout/Head';
import Link from 'next/link'
import Layout from '../components/layout/Layout';
import Heading from '../components/layout/Heading';


export default function Index() {

  return (
    <Layout>
      <Head title="Homepage" />

      <Heading content="Homepage" />
      <Link href="/results">
        <a>Results</a>
      </Link>

    </Layout >
  )
}



