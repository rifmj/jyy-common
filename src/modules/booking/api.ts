import { makeGetRequest, makePostRequest } from "../../api-client"
import {
  type BookCarWashMethod,
  type BookCarWashMethodParams,
  type Booking,
  BookingStatus,
  type CarWashBookingStatusMethodResponse,
  type GetUserBookingListMethod,
} from "../../types/booking"
import {
  type PaginationLimit,
  type PaginationOffset,
  type PaginationTotalCount,
} from "../../types/common"

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

export const bookingHistory: Booking[] = [
  {
    bookingId: "1a2b3c4d5e6f7g8h9i0j",
    carId: "car123",
    carWashId: "carWash1",
    createdAt: new Date("2023-01-01T10:00:00Z"),
    services: ["service1", "service2"],
    slotId: "slot123",
    status: BookingStatus.Created,
    updatedAt: new Date("2023-01-01T12:00:00Z"),
  },
  {
    bookingId: "2b3c4d5e6f7g8h9i0j1a",
    carId: "car456",
    carWashId: "carWash2",
    createdAt: new Date("2023-02-01T11:00:00Z"),
    services: ["service3", "service4"],
    slotId: "slot456",
    status: BookingStatus.InProgress,
    updatedAt: new Date("2023-02-01T13:00:00Z"),
  },
  {
    bookingId: "3c4d5e6f7g8h9i0j1a2b",
    carId: "car789",
    carWashId: "carWash3",
    createdAt: new Date("2023-03-01T12:00:00Z"),
    services: ["service5", "service6"],
    slotId: "slot789",
    status: BookingStatus.Finished,
    updatedAt: new Date("2023-03-01T14:00:00Z"),
  },
  {
    bookingId: "4d5e6f7g8h9i0j1a2b3c",
    carId: "car101",
    carWashId: "carWash4",
    createdAt: new Date("2023-04-01T13:00:00Z"),
    services: ["service7", "service8"],
    slotId: "slot101",
    status: BookingStatus.Cancelled,
    updatedAt: new Date("2023-04-01T15:00:00Z"),
  },
]

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
