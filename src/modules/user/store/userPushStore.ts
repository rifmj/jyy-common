import {
  type UserPushStore as IUserPushStore,
  type PushToken,
} from "../../../types/user/store"

export class UserPushStore implements IUserPushStore {
  token: PushToken

  setToken(token: PushToken): void {
    this.token = token
  }
}
