import { makeGetRequest, makePostRequest } from "../../api-client"
import {
  type PaginationLimit,
  type PaginationOffset,
  type PaginationTotalCount,
} from "../../types"
import {
  type BookCarWashMethod,
  type BookCarWashMethodParams,
  type CarWashBookingStatusMethodResponse,
  type GetUserBookingListMethod,
} from "../../types/booking"
import { type CarWashId } from "../../types/carWash"
import { convertDataToBookings } from "./utils"

export const sendBookingRequest = async (
  params: BookCarWashMethodParams
): Promise<BookCarWashMethod> => {
  return makePostRequest<BookCarWashMethod>("/booking", params)
}

export const fetchBookingStatus = async (
  bookingId: string
): Promise<CarWashBookingStatusMethodResponse> => {
  return makeGetRequest<CarWashBookingStatusMethodResponse>(
    `/booking/${bookingId}/status`
  )
}

export const fetchUserBookingList = async (
  washId?: CarWashId
): Promise<GetUserBookingListMethod> => {
  const request = await makeGetRequest<any>(
    `/api/station/control/my_wash_order_history/?limit=100&offset=0`
  )

  return {
    totalCount: request.length as PaginationTotalCount,
    limit: 20 as PaginationLimit,
    offset: 0 as PaginationOffset,
    items: convertDataToBookings(request),
  }
}
