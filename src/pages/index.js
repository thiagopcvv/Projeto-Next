import Head from 'next/head';
import Topo from '../../components/Topo';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title> Fala-Fut </title>
      </Head>
      <Topo />
      <div className={styles.home}>
        <h1> Fala-Fut</h1>
        <main>
          <p>Fala-Fut é um site onde você pode ver um teste de como usar next</p>
        </main>
      </div>
      <div className={styles.visitar}>
        <Navbar />
      </div>
      <Footer />
    </div>
  )
}