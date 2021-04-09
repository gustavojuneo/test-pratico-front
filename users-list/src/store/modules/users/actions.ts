import { ActionTypes, User } from './types'

export function getAllUsersToList(data: User[]) {
  return {
    type: ActionTypes.getAllUsers,
    payload: {
      data
    }
  }
}

export function createNewUser(user: User) {
  return {
    type: ActionTypes.createNewUser,
    payload: {
      user
    }
  }
}

export function editUser(user: User) {
  return {
    type: ActionTypes.editUser,
    payload: {
      user
    }
  }
}

export function deleteUserFromList(userId: number) {
  return {
    type: ActionTypes.deleteUserFromList,
    payload: {
      userId
    }
  }
}

export function CurrentUserSelected(userId: number) {
  return {
    type: ActionTypes.currentUserSelected,
    payload: {
      userId
    }
  }
}
