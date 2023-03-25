import { Envelope, FacebookLogo, LinkedinLogo, RedditLogo, TwitchLogo, TwitterLogo, WhatsappLogo } from 'phosphor-react'
import styles from './Share.module.css'

export function Share() {
    return(
        <div id={styles['post-container']} className={styles.share}>
            <span className={styles['share-title']}>
                Compartilhar em:
            </span>

        <div className={styles.social}>
            <TwitterLogo size={27} />
            <LinkedinLogo size={27} />
            <Envelope size={27} />
            <FacebookLogo size={27} />
            <RedditLogo size={27} />
            <TwitchLogo size={27} />
            <WhatsappLogo size={27} />
        </div>
    </div>
    )
}