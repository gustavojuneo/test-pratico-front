import { ActionTypes, User } from './types'

export function getAllUsersToList(data: User[]) {
  return {
    type: ActionTypes.getAllUsers,
    payload: {
      data
    }
  }
}
