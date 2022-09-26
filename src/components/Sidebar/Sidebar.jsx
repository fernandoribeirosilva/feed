import { PencilLine } from "phosphor-react"

import styles from './Sidebar.module.css';
import { Avatar } from '../Avatar/Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=50"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar hasBorder className={styles.avatar} src="https://github.com/fernandoribeirosilva.png" />
        <strong>Fernando</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}