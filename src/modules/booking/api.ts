import { makeGetRequest, makePostRequest } from "../../api-client"
import {
  type BookCarWashMethod,
  type BookCarWashMethodParams,
  type CarWashBookingStatusMethodResponse,
  type GetUserBookingListMethod,
} from "../../types/booking"
import {
  type PaginationLimit,
  type PaginationOffset,
  type PaginationTotalCount,
} from "../../types/common"
import { bookingHistory } from "./mocks"

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
  washId?: string
): Promise<GetUserBookingListMethod> => {
  if (process.env.NODE_ENV === "development")
    return {
      totalCount: bookingHistory.length as PaginationTotalCount,
      limit: 20 as PaginationLimit,
      offset: 0 as PaginationOffset,
      items: bookingHistory,
    }
  const url = washId ? `/bookings?carWashId=${washId}` : "/bookings"
  return makeGetRequest<GetUserBookingListMethod>(url)
}
