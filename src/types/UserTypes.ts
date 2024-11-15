

export interface IRegisterData {
  name: string,
  email: string,
  password: string,
  is_owner: boolean,
  user_creator_id: number
}

export interface ITokenPair {
  accessToken: string,
  refreshToken: string
}