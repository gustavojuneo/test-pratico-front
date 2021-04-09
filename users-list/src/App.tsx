import { Provider } from 'react-redux'
import { Users } from './pages/Users'
import { store } from './store'
import './styles/global.scss'

function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  )
}

export default App
