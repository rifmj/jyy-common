import { type Tagged } from "type-fest"

import { type Address, type Location } from "../address/location"
import { type CityId } from "../common"
import { type CarWashAvailabilityStatus } from "./availability"

export type CarWashId = Tagged<string, "CarWashId">

export type CarWash = {
  address: Address
  carWashId: CarWashId
  location: Location
  name: string
  availability: CarWashAvailabilityStatus
}

export type GetCarWashListMethodParams = {
  cityId: CityId
}
