import { useEffect, useState } from 'react'
import { api } from '../../services/api'
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

export function List() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function getUserList() {
      const response = await api.get('users')

      setUsers(response.data)
    }

    getUserList()
  }, [])

  async function handleDelete(userId: number) {
    const response = await api.delete(`users/${userId}`)

    console.log(response)
  }

  return (
    <div className={styles.container}>
      <Table users={users} onDelete={handleDelete} />
      <Details />
    </div>
  )
}
