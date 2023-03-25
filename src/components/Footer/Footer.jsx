import styles from './Footer.module.css'
import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'

export function Footer() {
    return(
        <div className={styles.footer} id={styles.container}>
            <p>&#169; Lorem Blog Todos os direitos reservados</p>
            <div className={styles.social}>
                <TwitterLogo size={27} />
                <FacebookLogo size={27} />
                <InstagramLogo size={27} />
                <LinkedinLogo size={27} />
            </div>
        </div>
    )
}