import { List } from '../../components/List'
import styles from './styles.module.scss'

export function Users() {
  return (
    <div className={styles.container}>
      <main className={styles.mainContainer}>
        <h1>TESTE PRÁTICO - Listagem de Usuários</h1>

        <List />
      </main>
    </div>
  )
}
