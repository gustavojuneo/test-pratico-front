import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../../services/api'
import { ApplicationState } from '../../store'
import { getAllUsersToList } from '../../store/modules/users/actions'
import { User } from '../../store/modules/users/types'
import { AddNewUserModal } from '../AddNewUserModal'
import { Details } from '../Details'
import { Table } from '../Table'

import styles from './styles.module.scss'

export function List() {
  const dispatch = useDispatch()
  const users = useSelector<ApplicationState, User[]>(state => state.users.data)
  const selectedUser = useSelector<ApplicationState, User | undefined>(
    state => state.users.selectedUser
  )
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false)

  useEffect(() => {
    getUserList()
  }, [])

  async function getUserList() {
    const response = await api.get('users')

    dispatch(getAllUsersToList(response.data))
  }

  function handleOpenNewUserModal() {
    setIsNewUserModalOpen(true)
  }

  function handleCloseNewUserModal() {
    setIsNewUserModalOpen(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.usersList}>
        <Table users={users} />

        {selectedUser && <Details user={selectedUser} />}
      </div>

      <button onClick={handleOpenNewUserModal} className={styles.newUserButton}>
        Adicionar novo
      </button>

      <AddNewUserModal
        isOpen={isNewUserModalOpen}
        onRequestClose={handleCloseNewUserModal}
      />
    </div>
  )
}
