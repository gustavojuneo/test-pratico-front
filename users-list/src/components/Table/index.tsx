import styles from './styles.module.scss'

type User = {
  id: number
  name: string
  email: string
  phone: string
  site: string
}

interface TableProps {
  users: User[]
  onDelete: (id: number) => void
}

export function Table({ users, onDelete }: TableProps) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.usersTable}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => onDelete(user.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
