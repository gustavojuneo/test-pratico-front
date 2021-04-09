import { Reducer } from 'redux'
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
    case ActionTypes.deleteUserFromList: {
      const { userId } = action.payload

      const data = state.data.filter(user => user.id !== userId)

      if (state.selectedUser?.id === userId) {
        return { ...state, data, selectedUser: undefined }
      }

      return { ...state, data }
    }
    case ActionTypes.createNewUser: {
      const { data } = state
      const { user } = action.payload

      const newData = [user, ...data]

      return {
        ...state,
        data: newData
      }
    }
    case ActionTypes.currentUserSelected: {
      const { userId } = action.payload

      const selectedUser = state.data.find(user => user.id === userId)

      return {
        ...state,
        selectedUser
      }
    }
    default: {
      return state
    }
  }
}

export default users
