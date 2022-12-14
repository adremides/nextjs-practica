import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import Link from 'next/link'


const Home: NextPage = () => {
  const router = useRouter();
  return (

    <PageLayout title="welcome">
      <div className={styles.container}>
        <Head>
          <meta name="description" content="Home page" />
        </Head>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <button>
          <Link href="/mas">mas</Link> <br />
        </button>
        <Link href="/about">noticias</Link>
        <button onClick={() => router.push("/about")}>Ir a about</button>
      </div>
    </PageLayout>
  )
}

export default Home
