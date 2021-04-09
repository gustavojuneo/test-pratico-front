import { Provider } from 'react-redux'
import Modal from 'react-modal'

import { Users } from './pages/Users'
import { store } from './store'

import './styles/global.scss'

Modal.setAppElement('#root')

function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  )
}

export default App
