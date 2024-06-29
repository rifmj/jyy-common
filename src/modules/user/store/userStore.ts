import { type City, type Location } from "../../../types"
import { type User } from "../../../types/user"
import { type UserAuth } from "../../../types/user/auth"
import { type UserStore as IUserStore } from "../../../types/user/store"
import { type UserPushStore } from "./userPushStore"

export class UserStore implements IUserStore {
  auth: UserAuth
  city: City
  currentLocation: Location
  data: User
  pushToken: UserPushStore

  askPushPermissions(): Promise<boolean> {
    return Promise.resolve(false)
  }

  detectLocation(): Promise<void> {
    return Promise.resolve(undefined)
  }

  setCurrentLocation(location: Location): void {
    this.currentLocation = location
  }
}
