import useSWR from "swr"
import useSWRMutation from "swr/mutation"

import {
  type UseBookingStatusRequest,
  type UseSendBookingRequest,
  type UseUserBookingList,
} from "../../types/booking/hooks"
import { Keys } from "../../types/booking/keys"
import {
  fetchBookingStatus,
  fetchUserBookingList,
  sendBookingRequest,
} from "./api"

export const useSendBookingRequest: UseSendBookingRequest = () => {
  return useSWRMutation(Keys.SendBookingRequest, (key, arg) =>
    sendBookingRequest(arg.arg)
  )
}

export const useBookingStatusRequest: UseBookingStatusRequest = bookingId => {
  return useSWR([Keys.BookingStatusRequest, { bookingId }], () =>
    fetchBookingStatus(bookingId)
  )
}

export const useUserBookingList: UseUserBookingList = washId => {
  return useSWR([Keys.UserBookingList, { washId }], () =>
    fetchUserBookingList(washId)
  )
}
