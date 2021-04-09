import { Reducer } from 'redux'
import produce from 'immer'
import { ActionTypes, UsersState } from './types'

const INITIAL_STATE: UsersState = {
  data: []
}

const users: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.getAllUsers: {
      const { data } = action.payload

      return { ...state, data }
    }
    default: {
      return state
    }
  }
}

export default users
