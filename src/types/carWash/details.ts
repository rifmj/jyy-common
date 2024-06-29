import { type Tagged } from "type-fest"

import {
  type Price,
  type TimeIntervalEnd,
  type TimeIntervalStart,
  type Url,
} from "../common"
import { type CarWash } from "./carWash"

export type CarWashServiceId = Tagged<string, "CarWashServiceId">

export type CarWashDetails = {
  logo?: Url
  backgroundImage?: Url
  description?: string
  workingHours: {
    day: number
    start: TimeIntervalStart
    end: TimeIntervalEnd
  }[]
  services: CarWashService[]
} & CarWash

export type CarWashService = {
  serviceId: CarWashServiceId
  name: string
  emoji: string
  price: Price
  duration: number
}
