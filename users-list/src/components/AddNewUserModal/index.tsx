import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'
import { api } from '../../services/api'
import { useDispatch } from 'react-redux'
import {
  createNewUser,
  CurrentUserSelected
} from '../../store/modules/users/actions'

interface AddNewUserModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function AddNewUserModal({
  isOpen,
  onRequestClose
}: AddNewUserModalProps) {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [site, setSite] = useState('')

  async function handleCreateNewUser(event: FormEvent) {
    event.preventDefault()
    const data = {
      name,
      email,
      phone,
      site
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

    if (data.site === '') {
      alert('Por favor preencha o campo Site')
      return
    }

    const response = await api.post('users', data)

    const newUser = {
      id: response.data.id,
      ...data
    }

    if (response.status === 201) {
      dispatch(createNewUser(newUser))
      dispatch(CurrentUserSelected(response.data.id))
    }

    setName('')
    setEmail('')
    setPhone('')
    setSite('')
    onRequestClose()
  }

  function handleCancel() {
    setName('')
    setEmail('')
    setPhone('')
    setSite('')
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

        <form onSubmit={handleCreateNewUser} className={styles.formContent}>
          <div className={styles.groupInput}>
            <div className={styles.inputBox}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
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
                value={email}
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
                value={phone}
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
                value={site}
                onChange={e => setSite(e.target.value)}
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
