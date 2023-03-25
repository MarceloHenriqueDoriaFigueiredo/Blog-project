import { CirclesThreePlus } from 'phosphor-react'
import styles from './Header.module.css'

export function Header() {
    return(
    <header className={styles.header}>
        <div className={styles['header-container']}>
            <a href="/">
                <CirclesThreePlus size={28} />
                <h1 className={styles.logo}>Lorem blog</h1>
            </a>
        
            <nav>
                <input type="checkbox" id="menu-hamburger" />
                
                <label for="menu-hamburger">
                    <div className={styles.menu}>
                        <span className={styles.hamburger}></span>
                    </div>
                </label>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Contatos</a></li>
                    </ul>
            </nav>
        </div>
    </header>
    )
}