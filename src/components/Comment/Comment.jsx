import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state => {
            return state + 1
        }));
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/MarceloHenriqueDoriaFigueiredo.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.auhtorAndTime}>
                            <strong>Marcelo Figueiredo</strong>
                            <time title="16 de fevereiro às 09:37h" dateTime="2023-02-16 09:36:21">Cerca de 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentario'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={21} />
                        Curtir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}