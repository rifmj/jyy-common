import useSWR from "swr"

import {
  type UseCarWash,
  type UseCarWashAvailabilitySlotList,
  type UseCarWashList,
} from "../../types/carWash/hooks"
import { Keys } from "../../types/carWash/keys"
import {
  carWashAvailabilitySlotListFetcher,
  carWashDetailsFetcher,
  washListFetcher,
} from "./api"

export const useCarWashList: UseCarWashList = () => {
  return useSWR(Keys.CarWashList, washListFetcher)
}

export const useCarWash: UseCarWash = carWashId => {
  return useSWR([Keys.CarWashDetails, carWashId], () =>
    carWashDetailsFetcher(carWashId)
  )
}

export const useCarWashAvailabilitySlotList: UseCarWashAvailabilitySlotList =
  params => {
    return useSWR([Keys.CarWashAvailabilitySlotList, params], () =>
      carWashAvailabilitySlotListFetcher(params)
    )
  }
