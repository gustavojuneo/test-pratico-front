import { Reducer } from 'redux'
import produce from 'immer'
import { ActionTypes, UsersState } from './types'

const INITIAL_STATE: UsersState = {
  list: []
}

const list: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.getAllUsers: {
        const { users } = action.payload

        if (users) {
          draft.list.push(users)
          console.log(users)
        }

        break
      }
      default: {
        return state
      }
    }
  })
}

export default list
