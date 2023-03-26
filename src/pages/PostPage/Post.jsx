import styles from './Post.module.css'
import CardPost from '../../assets/img/post-blog.jpg'
import { Share } from '../../components/Share/Share'
import { useEffect } from 'react'
import { Post } from '../../components/PostComment/Post'
import { Footer } from '../../components/Footer/Footer'

const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/MarceloHenriqueDoriaFigueiredo.png",
        name: "Marcelo Figueiredo",
        role: "@marcelo10"
      },
  
      content: [
        {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur',},
        {type: 'paragraph', content: 'amet adipisci necessitatibus suscipit corrupti minus magni animi, non '},
        {type: 'link', content: '#Magnam #ratione'},
      ],
      publishAt: new Date('2023-02-20 08:36:16')
    },
  ];

export function PostPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
      return(
        <>
            <section className={styles['post-header']}>
                <div id={styles['header-content']}  className={styles['post-container']}>
                    <h1 className={styles['header-title']}>
                        Lorem ipsum, dolor sit
                    </h1>
                    <img src={CardPost} alt="" className={styles['header-img']}/>
                </div>
            </section>

            <section id={styles['post-content']} className={styles['post-container']}>
                <h2 className={styles['sub-heading']}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </h2>
                <p className={styles['post-text']}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit voluptates perferendis, quis assumenda vel odio recusandae? Error voluptas unde impedit, voluptatibus quia praesentium rem minima earum nostrum nihil eaque, maiores non in laudantium expedita deleniti harum cupiditate ipsam. Veniam aliquam nihil voluptatibus. Tempore, suscipit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut excepturi maxime necessitatibus debitis vitae odio ex repellendus. Tempora, dicta officiis. Ex nihil eius temporibus at? Placeat iste dignissimos pariatur enim velit blanditiis id debitis repudiandae non magnam aliquam, quaerat doloremque? Deserunt libero vitae autem esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quibusdam molestias sequi cum ut aliquid in perferendis ex repudiandae molestiae sapiente, omnis officia, corrupti totam minima pariatur? Deleniti dicta neque, fugiat error unde quas veniam voluptatibus autem eos corrupti, qui perspiciatis ex, molestiae sit nisi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis voluptatem quae inventore expedita, fuga magnam illo excepturi fugit nam laborum a autem perferendis, itaque ut alias minima. Alias voluptates laboriosam ea enim rerum perferendis fuga, dolore a vero quis magni maxime animi repudiandae veniam? Officiis ut ea, nostrum earum recusandae facilis dicta explicabo et voluptas fugiat obcaecati, iste libero aspernatur eligendi laborum! Nobis voluptas tempore dolore dolor sint tempora perspiciatis nisi accusantium aspernatur aliquid deleniti placeat saepe id est ipsum illum alias sequi numquam nemo, eum provident mollitia repudiandae doloremque! Autem facere rerum provident quas, voluptate tenetur error voluptatibus eveniet?
                </p>

                <h2 className={styles['sub-heading']}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </h2>
                <p className={styles['post-text']}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit voluptates perferendis, quis assumenda vel odio recusandae? Error voluptas unde impedit, voluptatibus quia praesentium rem minima earum nostrum nihil eaque, maiores non in laudantium expedita deleniti harum cupiditate ipsam. Veniam aliquam nihil voluptatibus. Tempore, suscipit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut excepturi maxime necessitatibus debitis vitae odio ex repellendus. Tempora, dicta officiis. Ex nihil eius temporibus at? Placeat iste dignissimos pariatur enim velit blanditiis id debitis repudiandae non magnam aliquam, quaerat doloremque? Deserunt libero vitae autem esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quibusdam molestias sequi cum ut aliquid in perferendis ex repudiandae molestiae sapiente, omnis officia, corrupti totam minima pariatur? Deleniti dicta neque, fugiat error unde quas veniam voluptatibus autem eos corrupti, qui perspiciatis ex, molestiae sit nisi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis voluptatem quae inventore expedita, fuga magnam illo excepturi fugit nam laborum a autem perferendis, itaque ut alias minima. Alias voluptates laboriosam ea enim rerum perferendis fuga, dolore a vero quis magni maxime animi repudiandae veniam? Officiis ut ea, nostrum earum recusandae facilis dicta explicabo et voluptas fugiat obcaecati, iste libero aspernatur eligendi laborum! Nobis voluptas tempore dolore dolor sint tempora perspiciatis nisi accusantium aspernatur aliquid deleniti placeat saepe id est ipsum illum alias sequi numquam nemo, eum provident mollitia repudiandae doloremque! Autem facere rerum provident quas, voluptate tenetur error voluptatibus eveniet?
                </p>

                <Share />
            </section>

            <div className={styles.wrapper}>
                <main>
                    {posts.map(post =>{
                        return(
                            <Post
                                key={post.id} 
                                author = {post.author}
                                content = {post.content}
                                 publishAt = {post.publishAt}
                            />
                        )         
                     })
                     }
                 </main>
            </div>

            <Footer />
        </>
    )
}