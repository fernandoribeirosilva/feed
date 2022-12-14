import { Comment } from '../Comment';
import styles from './Post.module.css';
import { Avatar } from '../Avatar/Avatar';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/fernandoribeirosilva.png" />
          <div className={styles.authorInfo}>
            <strong>Fernando</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='22 de Setembro ás 10:23h' dateTime='2022-09-22 10:23:02' >
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir  mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 <a href=''>jane.design/doctorcare</a></p>
        <p>
          <a href=''>#novoprojeto</a>
          <a href=''>#nlw</a>
          <a href=''>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}