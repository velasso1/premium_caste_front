export interface IUserData {
  access_token: string;
  refresh_token: string;
  user_id: string;
}

export interface IUserSliceState {
  userIsAuth: boolean;
  userId: string;
  // userData: IUserData;
}
