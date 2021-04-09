export enum ActionTypes {
  getAllUsers = 'GET_ALL_USERS',
  createNewUser = 'CREATE_NEW_USER',
  editUser = 'EDIT_USER',
  deleteUserFromList = 'DELETE_USER_FROM_LIST',
  currentUserSelected = 'CURRENT_USER_SELECTED'
}

export interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

export interface UsersState {
  readonly data: User[]
  readonly selectedUser?: User
}
