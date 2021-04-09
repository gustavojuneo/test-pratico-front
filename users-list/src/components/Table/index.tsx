import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../../services/api'
import { ApplicationState } from '../../store'
import {
  CurrentUserSelected,
  deleteUserFromList
} from '../../store/modules/users/actions'
import { User } from '../../store/modules/users/types'

import { EditUserModal } from '../EditUserModal'

import styles from './styles.module.scss'

interface TableProps {
  users: User[]
}

export function Table({ users }: TableProps) {
  const dispatch = useDispatch()
  const selectedUser = useSelector<ApplicationState, User | undefined>(
    state => state.users.selectedUser
  )
  const [currentEditUser, setCurrentEditUser] = useState<User>({} as User)

  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false)

  const handleDeleteUser = useCallback(
    async (userId: number) => {
      const response = await api.delete(`users/${userId}`)

      if (response.status === 200) {
        dispatch(deleteUserFromList(userId))
      }
    },
    [dispatch]
  )

  function handleEditUser(user: User) {
    setCurrentEditUser(user)
    handleOpenNewUserModal()
  }

  function handleSelectUserDetails(userId: number) {
    dispatch(CurrentUserSelected(userId))
  }

  function handleOpenNewUserModal() {
    setIsEditUserModalOpen(true)
  }

  function handleCloseNewUserModal() {
    setIsEditUserModalOpen(false)
  }

  return (
    <div className={styles.container}>
      <h2>Usuários</h2>

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
              <tr
                key={user.id}
                className={selectedUser?.id === user.id ? styles.selected : ''}
              >
                <td onClick={() => handleSelectUserDetails(user.id)}>
                  {user.name}
                </td>
                <td onClick={() => handleSelectUserDetails(user.id)}>
                  {user.email}
                </td>
                <td>
                  <button
                    onClick={() => handleEditUser(user)}
                    className={styles.editButton}
                  >
                    Editar
                  </button>
                  <button onClick={() => handleDeleteUser(user.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <EditUserModal
          user={currentEditUser}
          isOpen={isEditUserModalOpen}
          onRequestClose={handleCloseNewUserModal}
        />
      </div>
    </div>
  )
}
