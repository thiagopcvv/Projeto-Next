import Head from 'next/head';
import Topo from '../../components/Topo';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from '.././styles/Home.module.css'
function Objetos({ objects }) {
    return (
        <div>
            <Head />
            <Topo />
            <h1 className={styles.lista}> Lista de Times </h1>
            <div className={styles.times}>
            {objects.map((object, index) => (
            <Link href='/profile/[id]' as={`/profile/${index}`}>
                <div className={styles.teste} key={object.id}>
                    <p> {object.nome} </p>
                </div>
            </Link>
            ))}
            </div>
            <Footer />
        </div>

    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch(' https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const objects = await repo;
    return {
        props: { objects }
    }
})

export default Objetos;