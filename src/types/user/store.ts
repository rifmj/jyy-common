import { type Tagged } from "type-fest"

import { type City } from "../address/city"
import { type Location } from "../address/location"
import { type UserAuth } from "./auth"
import { type User } from "./user"

export type PushToken = Tagged<string, "PushToken">

export interface UserPushStore {
  setToken(token: PushToken): void
  token: PushToken
}

export interface UserStore {
  askPushPermissions(): Promise<boolean>

  auth: UserAuth
  city: City
  currentLocation: Location
  data: User

  detectLocation(): Promise<void>

  pushToken: UserPushStore

  setCurrentLocation(location: Location): void
}
