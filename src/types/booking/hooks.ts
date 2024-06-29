import { type SWRResponse } from "swr"
import { type SWRMutationResponse } from "swr/mutation"

import { type CarWashId } from "../carWash/carWash"
import { type LimitOffsetPaginationResponse } from "../common"
import {
  type BookCarWashMethod,
  type BookCarWashMethodParams,
  type Booking,
  type CarWashBookingStatusMethodResponse,
} from "./booking"
import { type Keys } from "./keys"

export type UseSendBookingRequest = () => SWRMutationResponse<
  BookCarWashMethod,
  any,
  Keys,
  BookCarWashMethodParams
>

export type UseBookingStatusRequest = (
  bookingId: string
) => SWRResponse<CarWashBookingStatusMethodResponse>

export type UseUserBookingList = (
  washId?: CarWashId
) => SWRResponse<LimitOffsetPaginationResponse<Booking>>
