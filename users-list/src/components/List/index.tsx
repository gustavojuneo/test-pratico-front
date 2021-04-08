import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { AddNewUserModal } from '../AddNewUserModal'
import { Details } from '../Details'
import { Table } from '../Table'

import styles from './styles.module.scss'

type User = {
  id: number
  name: string
  email: string
  phone: string
  site: string
}

type UserRequest = {
  name: string
  email: string
  phone: string
  site: string
}

export function List() {
  const [users, setUsers] = useState<User[]>([])
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false)

  useEffect(() => {
    async function getUserList() {
      const response = await api.get('users')

      setUsers(response.data)
    }

    getUserList()
  }, [])

  async function handleDelete(userId: number) {
    const response = await api.delete(`users/${userId}`)

    if (response.status === 200) {
      const newUsers = users.filter(user => user.id !== userId)

      setUsers(newUsers)
    }
  }

  async function handleCreateUser(user: UserRequest) {
    const response = await api.post('users', user)

    if (response.status === 201) {
      setUsers([response.data, ...users])
    }
  }

  function handleOpenNewUserModal() {
    setIsNewUserModalOpen(true)
  }

  function handleCloseNewUserModal() {
    setIsNewUserModalOpen(false)
  }

  return (
    <div className={styles.container}>
      <Table users={users} onDelete={handleDelete} />

      <Details />

      <button onClick={handleOpenNewUserModal} className={styles.newUserButton}>
        Adicionar novo
      </button>

      <AddNewUserModal
        isOpen={isNewUserModalOpen}
        onRequestClose={handleCloseNewUserModal}
        onCreate={handleCreateUser}
      />
    </div>
  )
}
