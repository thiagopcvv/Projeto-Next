
import styles from '../../styles/Home.module.css';
import Topo from '../../../components/Topo';
import Footer from '../../../components/Footer';
function Profile({ object = {} }) {
    return (
        <div>
            <Topo />
            <div className={styles.item}>
                <h2 className={styles.titulo}>Time: {object.nome}</h2>
                <h3>Autor: {object.usuario}</h3>
                <p>{object.descricao}</p>
            </div>
            <Footer />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const object = await repo[context.params.id];
    return {
        props: { object }
    }
})

export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const objects = await repo;
    const paths = objects.map((object, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}
export default Profile;