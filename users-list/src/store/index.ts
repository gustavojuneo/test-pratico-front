import { createStore, Store } from 'redux'
import { UsersState } from './modules/users/types'
import rootReducer from './modules/rootReducer'

export interface ApplicationState {
  users: UsersState
}

export const store: Store<ApplicationState> = createStore(rootReducer)
