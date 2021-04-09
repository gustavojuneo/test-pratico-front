import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { api } from '../../services/api'
import {
  CurrentUserSelected,
  deleteUserFromList
} from '../../store/modules/users/actions'
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
}

export function Table({ users }: TableProps) {
  const dispatch = useDispatch()

  const handleDeleteUser = useCallback(
    async (userId: number) => {
      const response = await api.delete(`users/${userId}`)

      if (response.status === 200) {
        dispatch(deleteUserFromList(userId))
      }
    },
    [dispatch]
  )

  function handleSelectUserDetails(userId: number) {
    dispatch(CurrentUserSelected(userId))
  }

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
              <td onClick={() => handleSelectUserDetails(user.id)}>
                {user.name}
              </td>
              <td onClick={() => handleSelectUserDetails(user.id)}>
                {user.email}
              </td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
