import { Envelope, FacebookLogo, LinkedinLogo, RedditLogo, TwitchLogo, TwitterLogo, WhatsappLogo } from 'phosphor-react'
import styles from './Share.module.css'

export function Share() {
    return(
        <div id={styles['post-container']} className={styles.share}>
            <span className={styles['share-title']}>
                Compartilhar em:
            </span>

        <div className={styles.social}>
            <a href="#"><TwitterLogo color='black' size={27} /></a>
            <a href="#"><LinkedinLogo color='black' size={27} /></a>
            <a href="#"><Envelope color='black' size={27} /></a>
            <a href="#"><FacebookLogo color='black' size={27} /></a>
            <a href="#"><RedditLogo color='black' size={27} /></a>
            <a href="#"><TwitchLogo color='black' size={27} /></a>
            <a href="#"><WhatsappLogo color='black' size={27} /></a>
        </div>
    </div>
    )
}