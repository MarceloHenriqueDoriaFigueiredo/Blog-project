import styles from './Footer.module.css'
import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'

export function Footer() {
    return(
        <div className={styles.footer} id={styles.container}>
            <p>&#169; Lorem Blog Todos os direitos reservados</p>
            <div className={styles.social}>
                <a href=""><TwitterLogo color='black' size={27} /></a>
                <a href=""><FacebookLogo color='black' size={27} /></a>
                <a href=""><InstagramLogo color='black' size={27} /></a>
                <a href=""><LinkedinLogo color='black' size={27} /></a>
            </div>
        </div>
    )
}