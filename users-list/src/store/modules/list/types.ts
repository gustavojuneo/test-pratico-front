export enum ActionTypes {
  getAllUsers = 'GET_ALL_USERS',
  createNewUser = 'CREATE_NEW_USER',
  deleteUserFromList = 'DELETE_USER_FROM_LIST'
}

export interface User {
  id: number
  name: string
  email: string
  phone: string
  site: string
}

export interface UsersState {
  list: User[]
}
