import { type CarId } from "../car/car"
import { type CarWashAvailabilitySlotId } from "../carWash/availability"
import { type CarWashId } from "../carWash/carWash"
import { type CarWashServiceId } from "../carWash/details"
import { type BookingId, type LimitOffsetPaginationResponse } from "../common"

/**
 * Статусы бронирования.
 */
export enum BookingStatus {
  /**
   * Создано
   */
  Created,
  /**
   * В процессе
   */
  InProgress,
  /**
   * Отменено
   */
  Cancelled,
  /**
   * Завершено
   */
  Finished,
}

/**
 * Параметры метода бронирования мойки автомобиля.
 */
export type BookCarWashMethodParams = {
  /**
   * Идентификатор автомобиля.
   */
  carId: CarId

  /**
   * Идентификатор мойки автомобиля.
   */
  carWashId: CarWashId

  /**
   * Идентификатор временного слота для мойки автомобиля.
   */
  slotId: CarWashAvailabilitySlotId

  /**
   * Список идентификаторов услуг мойки автомобиля.
   */
  services: CarWashServiceId[]
}

/**
 * Метод бронирования мойки автомобиля.
 */
export type BookCarWashMethod = {
  /**
   * Идентификатор бронирования.
   */
  bookingId: BookingId
}

/**
 * Ответ метода получения статуса бронирования мойки автомобиля.
 */
export type CarWashBookingStatusMethodResponse = {
  /**
   * Статус бронирования.
   */
  status: BookingStatus
}

/**
 * Интерфейс, представляющий бронирование мойки автомобиля.
 */
export interface Booking {
  /**
   * Идентификатор бронирования.
   */
  bookingId: BookingId

  /**
   * Идентификатор автомобиля.
   */
  carId: CarId

  /**
   * Идентификатор мойки автомобиля.
   */
  carWashId: CarWashId

  /**
   * Дата и время создания бронирования.
   */
  createdAt: Date

  /**
   * Стоимость бронирования
   */
  price: number

  /**
   * Список идентификаторов услуг мойки автомобиля.
   */
  services: CarWashServiceId[]

  /**
   * Идентификатор временного слота для мойки автомобиля.
   */
  slotId: CarWashAvailabilitySlotId

  /**
   * Текущий статус бронирования.
   */
  status: BookingStatus

  /**
   * Дата и время последнего обновления бронирования.
   */
  updatedAt: Date
}

/**
 * Метод получения списка бронирований пользователя с поддержкой пагинации.
 */
export type GetUserBookingListMethod = LimitOffsetPaginationResponse<Booking>
