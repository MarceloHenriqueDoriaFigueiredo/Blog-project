import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'

import styles from './Post.module.css'

export function Post({ author, publishAt, content }){
    const [comments, setComments] = useState([
        'Post muito legal hein?!',
        'Hello word',
        'Parabéns!'
    ])

    const [newCommentText, setNewCommentText] = useState('')
    
    const publishedDateFormatted = format(publishAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(){
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity("Esse campo e obrigatorio");
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeleteOne = comments.filter(comment =>{
            return comment != commentToDelete
        })
        setComments(commentsWithoutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return(
        <article className={styles.post}>
            <h2 className={styles.comentarios}>Comentarios:</h2>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line =>{
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    value={newCommentText} 
                    placeholder="Deixe um comentario"
                    onChange={handleNewCommentChange}
                    required
                    onInvalid={handleNewCommentInvalid}
                >

                </textarea>

                <footer>
                    <button type='submit'disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
               {comments.map(comment =>{
                return (
                    <Comment key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment} 
                    />
                )
               })}
            </div>
        </article>
    )
}