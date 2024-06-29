import { singleton } from "tsyringe"

import { type Booking } from "../../../types/booking"
import { bookingHistory } from "../mocks"

@singleton()
export class BookingStore {
  currentBooking?: Booking = bookingHistory[0]

  history: Booking[]

  resetBookingHistory() {
    this.history = []
  }

  resetCurrentBooking() {
    this.currentBooking = undefined
  }

  setCurrentBooking(booking: Booking) {
    this.currentBooking = booking
  }

  setHistory(bookings: Booking[]) {
    this.history = bookings
  }
}
