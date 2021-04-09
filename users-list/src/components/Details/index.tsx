import { User } from '../../store/modules/users/types'
import styles from './styles.module.scss'

interface DetailsProps {
  user?: User
}

export function Details({ user }: DetailsProps) {
  return (
    <div className={styles.container}>
      <h2>Detalhes</h2>
      <section className={styles.detailsContent}>
        <div className={styles.infoBlock}>
          <strong>Nome:</strong>
          <span>{user?.name}</span>
        </div>

        <div className={styles.infoBlock}>
          <strong>Email:</strong>
          <span>{user?.email}</span>
        </div>

        <div className={styles.infoBlock}>
          <strong>Telefone:</strong>
          <span>{user?.phone}</span>
        </div>

        <div className={styles.infoBlock}>
          <strong>Site:</strong>
          <span>{user?.site}</span>
        </div>
      </section>
    </div>
  )
}
