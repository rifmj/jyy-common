import { type Tagged } from "type-fest"

import { type City } from "../../types/address/city"

export type UserId = Tagged<string, "UserId">

export type UserPhone = Tagged<string, "UserPhone">

export type UserName = Tagged<string, "UserName">

export type User = {
  userId: UserId
  city: City
  name: UserName
  phone: UserPhone
}

export type UpdateUser = {
  city: City
  name: UserName
}
