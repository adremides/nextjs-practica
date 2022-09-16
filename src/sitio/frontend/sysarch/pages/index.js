import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import PageLayout from "../components/PageLayout";

export default function Home() {
  const router = useRouter();

  return (
    <PageLayout title="Welcome">
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
      </div>
    </PageLayout>
  );
}
