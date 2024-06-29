// @ts-nocheck

import { type Booking, BookingStatus } from "../../types/booking"

export const bookingHistory: Booking[] = [
  {
    bookingId: "1a2b3c4d5e6f7g8h9i0j",
    carId: "car123",
    carWashId: "carWash1",
    createdAt: new Date("2023-01-01T10:00:00Z"),
    services: ["service1", "service2"],
    slotId: "slot123",
    // status: BookingStatus.Created,
    status: BookingStatus.Finished,
    updatedAt: new Date("2023-01-01T12:00:00Z"),
    price: 5750,
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
