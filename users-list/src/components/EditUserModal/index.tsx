import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { FiX } from 'react-icons/fi'

import { User } from '../../store/modules/users/types'
import { api } from '../../services/api'
import { useDispatch } from 'react-redux'
import {
  createNewUser,
  CurrentUserSelected
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
  const [newName, setName] = useState('')
  const [newEmail, setEmail] = useState('')
  const [newPhone, setPhone] = useState('')
  const [newWebsite, setWebSite] = useState('')

  const name = newName ? newName : user.name
  const email = newEmail ? newEmail : user.email
  const phone = newPhone ? newPhone : user.phone
  const website = newWebsite ? newName : user.website

  async function handleEditUser(event: FormEvent) {
    event.preventDefault()
    const data = {
      id: user.id,
      name,
      email,
      phone,
      website
    }

    console.log(data)

    // if (data.name === '') {
    //   alert('Por favor preencha o campo Nome')
    //   return
    // }

    // if (data.email === '') {
    //   alert('Por favor preencha o campo E-mail')
    //   return
    // }

    // if (data.phone === '') {
    //   alert('Por favor preencha o campo Telefone')
    //   return
    // }

    // if (data.website === '') {
    //   alert('Por favor preencha o campo Site')
    //   return
    // }

    // const response = await api.post('users', data)

    // const newUser = {
    //   id: response.data.id,
    //   ...data
    // }

    // if (response.status === 201) {
    //   dispatch(createNewUser(newUser))
    //   dispatch(CurrentUserSelected(response.data.id))
    // }

    // setName('')
    // setEmail('')
    // setPhone('')
    // setWebSite('')
    // onRequestClose()
  }

  function handleCancel() {
    setName('')
    setEmail('')
    setPhone('')
    setWebSite('')
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
                onChange={e => setName(e.target.value)}
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
                onChange={e => setEmail(e.target.value)}
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
                onChange={e => setPhone(e.target.value)}
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
                onChange={e => setWebSite(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.buttonsForm}>
            <button type="submit" className={styles.submitButton}>
              Gravar
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
