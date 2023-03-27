import { NavLink } from 'react-router-dom'
import CardPost from '../../assets/img/post-blog.jpg'
import styles from './Card.module.css'
import { Footer } from '../../components/Footer/Footer'

export function Card() {
    return(
        <section id={styles.blog}>
        <div className={styles['blog-heading']}>
            <span>Meus posts recentes</span>
            <h3>Lorem blog</h3>
        </div>

        <div className={styles['blog-container']}>
            <div className={styles['blog-box']}>
                <div className={styles['blog-img']}>
                    <img src={CardPost} alt="Imagem blog"/>
                </div>

                <div className={styles['blog-text']}>
                    <span>24 mar 2023 / Software Eginner</span>
                    <a href="#" className={styles['blog-title']}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eaque animi consequatur!</a>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatum, suscipit recusandae debitis id sed voluptates.</p>
                    <NavLink to="/Post" className={styles.content}>
                        Leia mais
                    </NavLink>
                </div>
            </div>

            <div className={styles['blog-box']}>
                <div className={styles['blog-img']}>
                    <img src={CardPost} alt="Imagem blog"/>
                </div>

                <div className={styles['blog-text']}>
                    <span>24 mar 2023 / Games</span>
                    <a href="#" className={styles['blog-title']}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eaque animi consequatur!</a>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatum, suscipit recusandae debitis id sed voluptates.</p>
                    <NavLink to="/Post" className={styles.content}>
                        Leia mais
                    </NavLink>
                </div>
            </div>

            <div className={styles['blog-box']}>
                <div className={styles['blog-img']}>
                    <img src={CardPost} alt="Imagem blog"/>
                </div>

                <div className={styles['blog-text']}>
                    <span>24 mar 2023 / FullStack Eginner</span>
                    <a href="#" className={styles['blog-title']}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eaque animi consequatur!</a>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatum, suscipit recusandae debitis id sed voluptates.</p>
                    <NavLink to="/Post" className={styles.content}>
                        Leia mais
                    </NavLink>
                </div>
            </div>

            <div className={styles['blog-box']}>
                <div className={styles['blog-img']}>
                    <img src={CardPost} alt="Imagem blog"/>
                </div>

                <div className={styles['blog-text']}>
                    <span>24 mar 2023 / Software Developer</span>
                    <a href="#" className={styles['blog-title']}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eaque animi consequatur!</a>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatum, suscipit recusandae debitis id sed voluptates.</p>
                    <NavLink to="/Post" className={styles.content}>
                        Leia mais
                    </NavLink>
                </div>
            </div>

            <div className={styles['blog-box']}>
                <div className={styles['blog-img']}>
                    <img src={CardPost} alt="Imagem blog"/>
                </div>

                <div className={styles['blog-text']}>
                    <span>24 mar 2023 / Back-End Developer</span>
                    <a href="#" className={styles['blog-title']}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eaque animi consequatur!</a>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatum, suscipit recusandae debitis id sed voluptates.</p>
                    <NavLink to="/Post" className={styles.content}>
                        Leia mais
                    </NavLink>
                </div>
            </div>

            <div className={styles['blog-box']}>
                <div className={styles['blog-img']}>
                    <img src={CardPost} alt="Imagem blog"/>
                </div>

                <div className={styles['blog-text']}>
                    <span>24 mar 2023 / Software Developer</span>
                    <a href="#" className={styles['blog-title']}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eaque animi consequatur!</a>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatum, suscipit recusandae debitis id sed voluptates.</p>
                    <NavLink to="/Post" className={styles.content}>
                        Leia mais
                    </NavLink>
                </div>
            </div>
        </div>
        <Footer />
    </section>
    )
}