import styles from "./integracao2.module.css"

export default function integracao2() {
    return (
        <div id={styles.integracao2}>
            <div className={styles.vermelha}><h1>Texto #01</h1></div>
            <div className={styles.azul}>Texto #02</div>            
            <div className={styles.branco}><h2>Texto #03</h2></div>
        </div>
    )
}