import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

type User = {
  name: string
  email: string
  phone: string
  site: string
}

interface AddNewUserModalProps {
  onCreate: (user: User) => void
  isOpen: boolean
  onRequestClose: () => void
}

export function AddNewUserModal({
  onCreate,
  isOpen,
  onRequestClose
}: AddNewUserModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [site, setSite] = useState('')

  async function handleCreateNewUser(event: FormEvent) {
    event.preventDefault()
    const newUser = {
      name,
      email,
      phone,
      site
    }

    await onCreate(newUser)
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
              />
            </div>
          </div>

          <div className={styles.buttonsForm}>
            <button type="submit" className={styles.submitButton}>
              Gravar
            </button>
            <button onClick={() => {}}>Cancelar</button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
