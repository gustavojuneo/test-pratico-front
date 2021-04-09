import { ActionTypes, User } from './types'

export function getAllUsersToList(users: User[]) {
  return {
    type: ActionTypes.getAllUsers,
    payload: {
      users
    }
  }
}
