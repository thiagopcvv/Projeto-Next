import styles from '../src/styles/Componens.module.css';
export default function Navbar() {
    return (
        <a href='/objetos' className={styles.navbar}>
        <div>
            <ul>
                <p>
                     Visitar Página
                </p>
            </ul>
        </div>
        </a>
    )
}
