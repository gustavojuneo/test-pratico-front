import { createStore } from 'redux'
import { UsersState } from './modules/list/types'
import rootReducer from './modules/rootReducer'

export interface IState {
  users: UsersState
}

export const store = createStore(rootReducer)
