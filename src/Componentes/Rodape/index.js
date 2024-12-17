import styles from './Rodape.module.css';
import {ReactComponent as MarcaREgistrada} from 'assets/marca_registrada.svg'

export default function (){
    return(
        <footer className={styles.rodape}>
            <MarcaREgistrada/>
            Desenvolvido por Alura
        </footer>
    )
}