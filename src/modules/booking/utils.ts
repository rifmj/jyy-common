import { type BookingId, type LimitOffsetPaginationResponse } from "../../types"
import { type Booking, BookingStatus } from "../../types/booking"
import { type CarId } from "../../types/car"
import {
  type CarWashAvailabilitySlotId,
  type CarWashId,
  type CarWashServiceId,
} from "../../types/carWash"

interface Service {
  cost: number
  id: number
  name: string
}

interface Order {
  box: number
  canceled_date: null | string
  car: number
  completed_date: null | string
  created_date: string
  customer: number
  discount_amount: null | number
  discount_percent: null | number
  finish_date: null | string
  id: number
  services: Service[]
  staff: null | number
  start_date: null | string
  station: number
  status: string
  total_price: null | number
}

/**
 * Метод получения списка бронирований пользователя с поддержкой пагинации.
 */
export type GetUserBookingListMethod = LimitOffsetPaginationResponse<Booking>

export function convertDataToBookings(data: any[]): Booking[] {
  return data.map(item => ({
    bookingId: item.id as BookingId,
    carId: item.car as CarId,
    carWashId: item.station as CarWashId,
    createdAt: new Date(item.created_date),
    price: item.total_price || 0,
    services: item.services.map(service => ({
      id: service.id,
      name: service.name,
      cost: service.cost,
    })),
    slotId: item.box as CarWashAvailabilitySlotId,
    status: convertStatus(item.status),
    updatedAt: new Date(
      item.completed_date || item.canceled_date || item.created_date
    ),
  }))
}

export function convertStatus(status: string): BookingStatus {
  switch (status) {
    case "СОЗДАН":
    case "CREATED":
      return BookingStatus.Created
    case "В ПРОЦЕССЕ":
    case "IN_PROGRESS":
      return BookingStatus.InProgress
    case "ОТМЕНЕН":
    case "CANCELLED":
      return BookingStatus.Cancelled
    case "ЗАВЕРШЕН":
    case "FINISHED":
      return BookingStatus.Finished
    default:
      throw new Error(`Unknown status: ${status}`)
  }
}
