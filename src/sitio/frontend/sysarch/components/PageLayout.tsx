import Head from "next/head"
import { useRouter } from "next/router";



export default function PageLayout( {children, title='Sitio'}) {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="descipcion" content="Descripción del sitio"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      😎 React Rules!
    </header>
    <main>
      {children}
    </main>
    </>
  )
}
