import { type SWRResponse } from "swr"

import { type LimitOffsetPaginationResponse } from "../common"
import {
  type GetCarWashAvailabilitySlotListMethod,
  type GetCarWashAvailabilitySlotListMethodParams,
} from "./availability"
import {
  type CarWash,
  type CarWashId,
  type GetCarWashListMethodParams,
} from "./carWash"
import { type CarWashDetails } from "./details"

export type UseCarWashAvailabilitySlotList = (
  params: GetCarWashAvailabilitySlotListMethodParams
) => SWRResponse<GetCarWashAvailabilitySlotListMethod>

export type UseCarWashList = (
  params: GetCarWashListMethodParams
) => SWRResponse<LimitOffsetPaginationResponse<CarWash>>

/**
 * Получить детали и список сервисов
 */
export type UseCarWash = (carWashId: CarWashId) => SWRResponse<CarWashDetails>
