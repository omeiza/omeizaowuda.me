import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Omeiza's personal website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.description}>
            Coming soon...
          </div>
      </main>
    </>
  )
}
