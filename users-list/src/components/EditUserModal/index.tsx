import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { FiX } from 'react-icons/fi'

import { User } from '../../store/modules/users/types'
import { api } from '../../services/api'
import { useDispatch } from 'react-redux'
import {
  CurrentUserSelected,
  editUser
} from '../../store/modules/users/actions'

import styles from './styles.module.scss'

interface EditUserModalProps {
  isOpen: boolean
  onRequestClose: () => void
  user: User
}

export function EditUserModal({
  isOpen,
  onRequestClose,
  user
}: EditUserModalProps) {
  const dispatch = useDispatch()
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newWebsite, setNewWebSite] = useState('')

  const name = newName ? newName : user.name
  const email = newEmail ? newEmail : user.email
  const phone = newPhone ? newPhone : user.phone
  const website = newWebsite ? newWebsite : user.website

  async function handleEditUser(event: FormEvent) {
    event.preventDefault()
    const data = {
      id: user.id,
      name,
      email,
      phone,
      website
    }

    if (data.name === '') {
      alert('Por favor preencha o campo Nome')
      return
    }

    if (data.email === '') {
      alert('Por favor preencha o campo E-mail')
      return
    }

    if (data.phone === '') {
      alert('Por favor preencha o campo Telefone')
      return
    }

    if (data.website === '') {
      alert('Por favor preencha o campo Site')
      return
    }

    if (data.id > 10) {
      dispatch(editUser(data))
      dispatch(CurrentUserSelected(data.id))
    } else {
      const response = await api.put(`users/${user.id}`, data)
      if (response.status === 200) {
        dispatch(editUser(response.data))
        dispatch(CurrentUserSelected(response.data.id))
      }
    }

    setNewName('')
    setNewEmail('')
    setNewPhone('')
    setNewWebSite('')
    onRequestClose()
  }

  function handleCancel() {
    setNewName('')
    setNewEmail('')
    setNewPhone('')
    setNewWebSite('')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={onRequestClose} className={styles.closeButton}>
        <FiX />
      </button>
      <div className={styles.modalContent}>
        <h1>Inclusão de novo usuário</h1>

        <form onSubmit={handleEditUser} className={styles.formContent}>
          <div className={styles.groupInput}>
            <div className={styles.inputBox}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={user.name}
                onChange={e => setNewName(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                id="email"
                defaultValue={user.email}
                onChange={e => setNewEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.groupInput}>
            <div className={styles.inputBox}>
              <label htmlFor="phone">Telefone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                defaultValue={user.phone}
                onChange={e => setNewPhone(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="site">Site</label>
              <input
                type="text"
                name="site"
                id="site"
                defaultValue={user.website}
                onChange={e => setNewWebSite(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.buttonsForm}>
            <button type="submit" className={styles.submitButton}>
              Editar
            </button>
            <button type="button" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
