import React from 'react';
import styles from '../src/styles/Componens.module.css';

export default function Topo() {
    return (
        <div className={styles.topo}>
            <a href='/'>
            <img alt='logo' src='/home.png'/>
            </a>
            <h1>
                Fala-Fut
            </h1>
        </div>
    )

}